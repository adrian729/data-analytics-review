import { useState } from 'react'
import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { ChipRow } from '@/components/filter-chips'
import { GlossaryRow } from '@/components/glossary-row'
import { Button } from '@/components/ui/button'
import { courses, getCourse, lessonsOf } from '@/content/loader'
import { buildDeck, filterTerms, validateDeckSearch } from '@/lib/cards'
import { TOPICS, type Topic } from '@/content/types'

export const Route = createFileRoute('/practice/')({
  validateSearch: validateDeckSearch,
  component: DeckBuilder,
})

function DeckBuilder() {
  const search = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const [showTerms, setShowTerms] = useState(false)
  const { course, lesson, topic } = search

  const terms = filterTerms({ course, lesson, topic })
  const cards = buildDeck({ course, lesson, topic })

  const selectedCourse = course ? getCourse(course) : undefined
  const courseLessons = selectedCourse ? lessonsOf(selectedCourse) : []

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Practice</h1>
      <p className="text-muted-foreground mt-1.5 text-sm">
        Flashcards generated from the glossary. Pick a scope, or drill everything.
      </p>

      <div className="mt-7 space-y-2.5">
        <ChipRow
          label="Course"
          selected={course}
          onSelect={(value) =>
            // Changing course invalidates any lesson filter under the old one.
            navigate({ search: { ...search, course: value, lesson: undefined } })
          }
          options={[
            { value: undefined, label: 'All' },
            ...courses
              .filter((c) => filterTerms({ course: c.id }).length > 0)
              .map((c) => ({ value: c.id, label: `${c.number} ${c.shortTitle}` })),
          ]}
        />

        {courseLessons.length > 0 && (
          <ChipRow
            label="Lesson"
            selected={lesson}
            onSelect={(value) => navigate({ search: { ...search, lesson: value } })}
            options={[
              { value: undefined, label: 'All' },
              ...courseLessons.map((l, i) => ({
                value: l.id,
                label: String(i + 1),
                disabled: filterTerms({ lesson: l.id }).length === 0,
              })),
            ]}
          />
        )}

        <ChipRow
          label="Topic"
          selected={topic}
          onSelect={(value) => navigate({ search: { ...search, topic: value as Topic | undefined } })}
          options={[
            { value: undefined, label: 'All' },
            ...TOPICS.filter((t) => filterTerms({ course, lesson, topic: t }).length > 0).map(
              (t) => ({ value: t, label: t }),
            ),
          ]}
        />
      </div>

      <div className="mt-7 border-t pt-6">
        <p className="text-sm">
          <span className="font-medium">
            {cards.length} {cards.length === 1 ? 'card' : 'cards'}
          </span>
          <span className="text-muted-foreground">
            {' '}
            from {terms.length} {terms.length === 1 ? 'term' : 'terms'}
          </span>
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button asChild disabled={cards.length === 0}>
            <Link to="/practice/session" search={search}>
              Start session
            </Link>
          </Button>

          {terms.length > 0 && (
            <Button variant="outline" onClick={() => setShowTerms((v) => !v)}>
              {showTerms ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
              {showTerms ? 'Hide terms' : `Show all ${terms.length} terms`}
            </Button>
          )}
        </div>

        {cards.length === 0 && (
          <p className="text-muted-foreground mt-3 text-sm">
            Nothing matches those filters — widen one to build a deck.
          </p>
        )}

        {/* Read the whole scope straight through, without drilling it. */}
        {showTerms && terms.length > 0 && (
          <div className="mt-6 divide-y border-t">
            {[...terms]
              .sort((a, b) => a.term.localeCompare(b.term))
              .map((term) => (
                <GlossaryRow key={term.id} term={term} />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
