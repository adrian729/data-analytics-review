// Lowercase substring match across terms, aliases, lesson titles and summaries.
// Feeds the search palette; title/term matches rank above summary matches.

import { allLessons, allTerms, courses, getCourse } from '@/content/loader'
import type { Course, GlossaryTerm, Lesson } from '@/content/types'

export type SearchResult =
  | { kind: 'term'; item: GlossaryTerm; label: string; hint: string; to: string }
  | { kind: 'lesson'; item: Lesson; label: string; hint: string; to: string }
  | { kind: 'course'; item: Course; label: string; hint: string; to: string }

const courseLabel = (courseId: string, lessonId?: string): string => {
  const course = getCourse(courseId)
  if (!course) return ''
  const n = lessonId ? course.lessonOrder.indexOf(lessonId) : -1
  return n >= 0 ? `Course ${course.number} · Lesson ${n + 1}` : `Course ${course.number}`
}

export function search(query: string): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const scored: Array<{ score: number; result: SearchResult }> = []

  for (const term of allTerms) {
    const name = term.term.toLowerCase()
    const alias = term.aliases.some((a) => a.toLowerCase().includes(q))
    const inName = name.includes(q)
    if (!inName && !alias && !term.definition.toLowerCase().includes(q)) continue
    scored.push({
      score: name.startsWith(q) ? 0 : inName ? 1 : alias ? 2 : 5,
      result: {
        kind: 'term',
        item: term,
        label: term.term,
        hint: courseLabel(term.courseId, term.lessonId),
        to: `/glossary#${term.id}`,
      },
    })
  }

  for (const lesson of allLessons) {
    const title = lesson.title.toLowerCase()
    const inTitle = title.includes(q)
    if (!inTitle && !lesson.summary.toLowerCase().includes(q)) continue
    scored.push({
      score: title.startsWith(q) ? 3 : inTitle ? 4 : 6,
      result: {
        kind: 'lesson',
        item: lesson,
        label: lesson.title,
        hint: courseLabel(lesson.courseId, lesson.id),
        to: `/courses/${lesson.courseId}/lessons/${lesson.slug}`,
      },
    })
  }

  for (const course of courses) {
    if (!course.title.toLowerCase().includes(q)) continue
    scored.push({
      score: 7,
      result: {
        kind: 'course',
        item: course,
        label: course.title,
        hint: `Course ${course.number}`,
        to: `/courses/${course.id}`,
      },
    })
  }

  return scored.sort((a, b) => a.score - b.score).slice(0, 20).map((s) => s.result)
}
