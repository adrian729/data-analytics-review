// Metadata is eager (small, and needed for nav, search and practice on every
// screen). Lesson bodies are lazy, so prose stays out of the entry chunk.

import { contentIndex } from './generated/index'
import type { Course, CourseId, GlossaryTerm, Lesson, LessonId, Revisit, TermId } from './types'

const lessonBodies = import.meta.glob('../../content/courses/*/lessons/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

const courseIntros = import.meta.glob('../../content/courses/*/index.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

export const { courses, lessons, terms } = contentIndex

export const allTerms = Object.values(terms)
export const allLessons = Object.values(lessons)

export const getCourse = (id: CourseId): Course | undefined => courses.find((c) => c.id === id)
export const getLesson = (id: LessonId): Lesson | undefined => lessons[id]
export const getTerm = (id: TermId): GlossaryTerm | undefined => terms[id]

export const lessonsOf = (course: Course): Lesson[] =>
  course.lessonOrder.map((id) => lessons[id]).filter((l): l is Lesson => Boolean(l))

/** Terms whose canonical home is this lesson. */
export const termsOf = (lessonId: LessonId): GlossaryTerm[] =>
  allTerms.filter((t) => t.lessonId === lessonId)

export const termsOfCourse = (courseId: CourseId): GlossaryTerm[] =>
  allTerms.filter((t) => t.courseId === courseId)

export async function loadLessonBody(lesson: Lesson): Promise<string> {
  const path = `../../content/courses/${lesson.courseId}/lessons/${lesson.slug}.md`
  const load = lessonBodies[path]
  if (!load) throw new Error(`No markdown file for lesson "${lesson.id}" (looked for ${path})`)
  return load()
}

export async function loadCourseIntro(course: Course): Promise<string | null> {
  const load = courseIntros[`../../content/courses/${course.id}/index.md`]
  return load ? load() : null
}

/** Position of a lesson within its course, plus its neighbours. */
export function lessonPosition(lesson: Lesson) {
  const course = getCourse(lesson.courseId)
  if (!course) return { index: 0, total: 0, prev: undefined, next: undefined, course: undefined }
  const order = course.lessonOrder
  const index = order.indexOf(lesson.id)
  return {
    index,
    total: order.length,
    prev: index > 0 ? lessons[order[index - 1]!] : undefined,
    next: index < order.length - 1 ? lessons[order[index + 1]!] : undefined,
    course,
  }
}

/** Global reading order — course number first, then position within the course. */
function globalPosition(lessonId: LessonId): number {
  const lesson = lessons[lessonId]
  if (!lesson) return Number.MAX_SAFE_INTEGER
  const course = getCourse(lesson.courseId)
  if (!course) return Number.MAX_SAFE_INTEGER
  return course.number * 1000 + Math.max(0, course.lessonOrder.indexOf(lessonId))
}

/**
 * Resolve a lesson's `revisits` into rendered callouts. The author never says
 * whether a reference points back or forward — it is computed from ordering.
 */
export function resolveRevisits(lesson: Lesson): Revisit[] {
  const here = globalPosition(lesson.id)
  return (lesson.revisits ?? []).flatMap((r) => {
    const term = terms[r.termId]
    if (!term) return []
    const targetLesson = lessons[term.lessonId]
    const targetCourse = targetLesson ? getCourse(targetLesson.courseId) : undefined
    if (!targetLesson || !targetCourse) return []
    return [
      {
        termId: r.termId,
        note: r.note,
        direction: globalPosition(targetLesson.id) < here ? ('back' as const) : ('forward' as const),
        term,
        targetLesson,
        targetCourse,
        linkable: targetLesson.status !== 'planned',
      },
    ]
  })
}
