// A session is a shuffled list held in React state, and nothing survives it.
// Re-queued cards come back later in this run; reloading starts clean.

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { ArrowRight, RotateCcw, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlossaryRow } from '@/components/glossary-row'
import { getCourse, getTerm, lessons } from '@/content/loader'
import { buildDeck, shuffle, validateDeckSearch, type Card, type DeckFilters } from '@/lib/cards'
import type { Topic } from '@/content/types'

export const Route = createFileRoute('/practice/session')({
  validateSearch: validateDeckSearch,
  component: SessionPage,
})

function scopeLabel(courseId?: string, lessonId?: string, topic?: Topic): string {
  const parts: string[] = []
  const course = courseId ? getCourse(courseId) : undefined
  if (course) parts.push(`Course ${course.number}`)
  if (lessonId && course) {
    const n = course.lessonOrder.indexOf(lessonId) + 1
    if (n > 0) parts.push(`Lesson ${n}`)
  }
  if (topic) parts.push(topic)
  return parts.length ? parts.join(' · ') : 'Everything'
}

function SessionPage() {
  const search = Route.useSearch()
  const navigate = useNavigate()
  const { course, lesson, topic } = search

  const [round, setRound] = useState(0)
  const deck = useMemo(
    () => shuffle(buildDeck({ course, lesson, topic })),
    // `round` is the reshuffle trigger for "Practice again".
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [course, lesson, topic, round],
  )

  const [queue, setQueue] = useState<Card[]>(deck)
  const [position, setPosition] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [seen, setSeen] = useState(0)

  useEffect(() => {
    setQueue(deck)
    setPosition(0)
    setRevealed(false)
    setSeen(0)
  }, [deck])

  const card = queue[position]
  const done = !card

  const next = useCallback(() => {
    setPosition((p) => p + 1)
    setRevealed(false)
    setSeen((s) => s + 1)
  }, [])

  const requeue = useCallback(() => {
    if (!card) return
    setQueue((q) => [...q, card])
    next()
  }, [card, next])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // `e.repeat` guard: holding the key must not tear through the deck.
      if (done || e.repeat) return
      const key = e.key.toLowerCase()
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
        e.preventDefault()
        revealed ? next() : setRevealed(true)
      } else if (key === 'a' && revealed) {
        e.preventDefault()
        requeue()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [done, revealed, next, requeue])

  if (done) {
    return <SessionComplete deck={deck} seen={seen} onAgain={() => setRound((r) => r + 1)} search={search} />
  }

  const sourceLesson = lessons[card.lessonId]
  const sourceCourse = getCourse(card.courseId)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 shrink-0 items-center gap-3 border-b px-4 text-sm">
        <Button variant="ghost" size="sm" onClick={() => navigate({ to: '/practice', search })}>
          <X className="size-4" /> Exit
        </Button>
        <span className="text-muted-foreground flex-1 truncate text-center">
          {scopeLabel(course, lesson, topic)}
        </span>
        <span className="text-muted-foreground shrink-0 tabular-nums">
          {position + 1} / {queue.length}
        </span>
      </header>

      {/* A div, not a button: it contains a link, and nesting interactive
          elements is invalid. All keying is handled globally anyway. */}
      <div
        onClick={() => (revealed ? next() : setRevealed(true))}
        className="flex flex-1 cursor-pointer flex-col items-center justify-center px-6 py-10 text-center"
      >
        <p className="max-w-2xl text-xl leading-relaxed font-medium text-balance">{card.front}</p>

        {revealed ? (
          <div className="mt-6 w-full max-w-2xl border-t pt-6">
            {card.detail ? (
              <dl className="space-y-4 text-left">
                {card.detail.map((d) => (
                  <div key={d.term}>
                    <dt className="font-medium">{d.term}</dt>
                    <dd className="text-muted-foreground mt-0.5 leading-relaxed">{d.definition}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {card.back}
              </p>
            )}

            {sourceLesson && sourceCourse && (
              <Link
                to="/courses/$courseSlug/lessons/$lessonSlug"
                params={{ courseSlug: sourceCourse.id, lessonSlug: sourceLesson.slug }}
                className="text-muted-foreground hover:text-foreground mt-6 inline-block text-xs transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {sourceLesson.title} →
              </Link>
            )}
          </div>
        ) : (
          <p className="text-muted-foreground mt-8 flex items-center gap-1.5 text-xs">
            <SessionKey>Space</SessionKey> or <SessionKey>Enter</SessionKey> to reveal
          </p>
        )}
      </div>

      <footer className="flex shrink-0 flex-col items-center gap-3 border-t px-4 py-4">
        {revealed ? (
          <>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={requeue}>
                <RotateCcw className="size-4" />
                Again later
              </Button>
              <Button onClick={next}>
                Next
                <ArrowRight className="size-4" />
              </Button>
            </div>
            <p className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
              <span className="flex items-center gap-1.5">
                <SessionKey>Space</SessionKey>
                <SessionKey>Enter</SessionKey> next
              </span>
              <span className="flex items-center gap-1.5">
                <SessionKey>A</SessionKey> again later
              </span>
            </p>
          </>
        ) : (
          // Reserve the footer's height so revealing doesn't shift the card.
          <div className="h-[3.75rem]" aria-hidden />
        )}
      </footer>
    </div>
  )
}

function SessionKey({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="border-border bg-muted text-foreground rounded border px-1.5 py-0.5 font-mono text-[10px]">
      {children}
    </kbd>
  )
}

/** The deck ends on a consolidated glossary of exactly what was just drilled. */
function SessionComplete({
  deck,
  seen,
  onAgain,
  search,
}: {
  deck: Card[]
  seen: number
  onAgain: () => void
  search: DeckFilters
}) {
  const uniqueTerms = useMemo(() => {
    const ids = [...new Set(deck.map((c) => c.termId))]
    return ids
      .map((id) => getTerm(id))
      .filter((t): t is NonNullable<typeof t> => Boolean(t))
      .sort((a, b) => a.term.localeCompare(b.term))
  }, [deck])

  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl px-6 py-10">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/practice" search={search}>
            <X className="size-4" /> Exit
          </Link>
        </Button>
        <h1 className="flex-1 text-center font-medium">Session complete</h1>
        <span className="w-16" />
      </div>

      <p className="text-muted-foreground mt-8 border-b pb-4 text-sm">
        {seen} {seen === 1 ? 'card' : 'cards'} · {uniqueTerms.length}{' '}
        {uniqueTerms.length === 1 ? 'term' : 'terms'} · {scopeLabel(search.course, search.lesson, search.topic)}
      </p>

      <div className="divide-y">
        {uniqueTerms.map((term) => (
          <GlossaryRow key={term.id} term={term} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3 border-t pt-6">
        <Button onClick={onAgain}>
          <RotateCcw className="size-4" /> Practice again
        </Button>
        <Button variant="outline" asChild>
          <Link to="/practice" search={search}>
            Change deck
          </Link>
        </Button>
      </div>
    </div>
  )
}
