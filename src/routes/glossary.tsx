import { useEffect, useMemo, useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { ChipRow } from '@/components/filter-chips'
import { GlossaryRow } from '@/components/glossary-row'
import { allTerms, courses } from '@/content/loader'
import { TOPICS, type Topic } from '@/content/types'

type GlossarySearch = { course?: string; topic?: Topic }

export const Route = createFileRoute('/glossary')({
  validateSearch: (search: Record<string, unknown>): GlossarySearch => ({
    course: typeof search.course === 'string' ? search.course : undefined,
    topic: TOPICS.includes(search.topic as Topic) ? (search.topic as Topic) : undefined,
  }),
  component: GlossaryPage,
})

function GlossaryPage() {
  const { course, topic } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allTerms
      .filter((t) => {
        if (course && t.courseId !== course) return false
        if (topic && !t.topics.includes(topic)) return false
        if (
          q &&
          !t.term.toLowerCase().includes(q) &&
          !t.definition.toLowerCase().includes(q) &&
          !t.aliases.some((a) => a.toLowerCase().includes(q))
        )
          return false
        return true
      })
      .sort((a, b) => a.term.localeCompare(b.term))
  }, [course, topic, query])

  // Group A–Z on the first letter of the term.
  const groups = useMemo(() => {
    const out = new Map<string, typeof filtered>()
    for (const term of filtered) {
      const letter = term.term[0]!.toUpperCase()
      out.set(letter, [...(out.get(letter) ?? []), term])
    }
    return [...out.entries()]
  }, [filtered])

  // Deep links like /glossary#data-analytics must still land on the row after
  // the list renders; the browser's own jump fires before that.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    document.getElementById(decodeURIComponent(id))?.scrollIntoView({ block: 'center' })
  }, [])

  const usedTopics = TOPICS.filter((t) => allTerms.some((term) => term.topics.includes(t)))

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Glossary</h1>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter terms…"
        className="border-input bg-background focus-visible:ring-ring/50 mt-5 w-full rounded-lg border px-3 py-2 text-sm outline-none focus-visible:ring-2"
      />

      <div className="mt-5 space-y-2">
        <ChipRow
          label="Course"
          selected={course}
          onSelect={(value) => navigate({ search: (prev) => ({ ...prev, course: value }) })}
          options={[
            { value: undefined, label: 'All' },
            ...courses
              .filter((c) => allTerms.some((t) => t.courseId === c.id))
              .map((c) => ({ value: c.id, label: `${c.number} ${c.shortTitle}` })),
          ]}
        />
        <ChipRow
          label="Topic"
          selected={topic}
          onSelect={(value) =>
            navigate({ search: (prev) => ({ ...prev, topic: value as Topic | undefined }) })
          }
          options={[
            { value: undefined, label: 'All' },
            ...usedTopics.map((t) => ({ value: t, label: t })),
          ]}
        />
      </div>

      <p className="text-muted-foreground mt-6 border-t pt-4 text-sm">
        {filtered.length} {filtered.length === 1 ? 'term' : 'terms'}
      </p>

      {groups.map(([letter, items]) => (
        <section key={letter} className="mt-6">
          <h2 className="text-muted-foreground mb-1 text-xs font-semibold tracking-widest">
            {letter}
          </h2>
          <div className="divide-y border-t">
            {items.map((term) => (
              <GlossaryRow key={term.id} term={term} />
            ))}
          </div>
        </section>
      ))}

      {filtered.length === 0 && (
        <p className="text-muted-foreground mt-8 text-sm">No terms match those filters.</p>
      )}
    </div>
  )
}
