// Flashcards are generated from glossary terms, never authored — fix a
// definition and every card built from it is fixed too.

import { TOPICS, type CourseId, type GlossaryTerm, type LessonId, type TermId, type Topic } from '@/content/types'
import { allTerms } from '@/content/loader'

export type CardVariant = 'recall' | 'recognise' | 'sequence' | 'contrast'

export type Card = {
  id: string // `${termId}:${variant}` — React key
  termId: TermId
  variant: CardVariant
  front: string
  back: string
  /** Both definitions, for contrast cards. */
  detail?: Array<{ term: string; definition: string }>
  courseId: CourseId
  lessonId: LessonId
  topics: Topic[]
}

export type DeckFilters = {
  course?: CourseId
  lesson?: LessonId
  topic?: Topic
}

/** Shared by /practice and /practice/session so a deck is one bookmarkable URL. */
export const validateDeckSearch = (search: Record<string, unknown>): DeckFilters => ({
  course: typeof search.course === 'string' ? search.course : undefined,
  lesson: typeof search.lesson === 'string' ? search.lesson : undefined,
  topic: TOPICS.includes(search.topic as Topic) ? (search.topic as Topic) : undefined,
})

const from = (term: GlossaryTerm, variant: CardVariant, front: string, back: string): Card => ({
  id: `${term.id}:${variant}`,
  termId: term.id,
  variant,
  front,
  back,
  courseId: term.courseId,
  lessonId: term.lessonId,
  topics: term.topics,
})

/**
 * One card per term, plus at most one contrast per term.
 *
 * Emitting both `recall` and `recognise` meant every term appeared twice
 * carrying *identical* information, just flipped — two thirds of an 8-term deck
 * was redundant. The direction is now chosen per term per session instead, so
 * a session never repeats itself and both directions still come up over time.
 *
 * Contrast pairs are likewise capped at one per term, so a densely cross-linked
 * term (`data-science` sits in three clusters) cannot dominate a small deck.
 */
export function cardsForTerms(source: GlossaryTerm[]): Card[] {
  const pool = new Map(source.map((t) => [t.id, t]))
  const cards: Card[] = []
  const seenPairs = new Set<string>()
  const contrasted = new Set<TermId>()

  for (const term of source) {
    cards.push(
      Math.random() < 0.5
        ? from(term, 'recall', term.term, term.definition)
        : from(term, 'recognise', term.definition, term.term),
    )

    if (term.sequence?.length) {
      cards.push(
        from(
          term,
          'sequence',
          `${term.term} — what are the steps, in order?`,
          term.sequence.map((step, i) => `${i + 1}. ${step}`).join('\n'),
        ),
      )
    }

    for (const otherId of term.confusableWith) {
      const other = pool.get(otherId)
      // Only pair terms both present in the filtered deck, once per pair, and
      // at most once per term on either side.
      if (!other) continue
      if (contrasted.has(term.id) || contrasted.has(otherId)) continue
      const key = [term.id, otherId].sort().join('|')
      if (seenPairs.has(key)) continue
      seenPairs.add(key)
      contrasted.add(term.id)
      contrasted.add(otherId)
      cards.push({
        ...from(
          term,
          'contrast',
          `${term.term} vs. ${other.term} — what is the difference?`,
          `${term.term}: ${term.definition}\n\n${other.term}: ${other.definition}`,
        ),
        id: `${key}:contrast`,
        detail: [
          { term: term.term, definition: term.definition },
          { term: other.term, definition: other.definition },
        ],
      })
    }
  }
  return cards
}

export function filterTerms(filters: DeckFilters): GlossaryTerm[] {
  return allTerms.filter((t) => {
    if (filters.course && t.courseId !== filters.course) return false
    if (filters.lesson && t.lessonId !== filters.lesson) return false
    if (filters.topic && !t.topics.includes(filters.topic)) return false
    return true
  })
}

export const buildDeck = (filters: DeckFilters): Card[] => cardsForTerms(filterTerms(filters))

export function shuffle<T>(items: T[]): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j]!, out[i]!]
  }
  return out
}
