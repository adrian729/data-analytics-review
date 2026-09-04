// One glossary entry. Shared by the glossary page and the end-of-session recap,
// so the definition is authored once and rendered identically in both places.

import { Link } from '@tanstack/react-router'
import { getCourse, lessons } from '@/content/loader'
import type { GlossaryTerm } from '@/content/types'

export function GlossaryRow({ term }: { term: GlossaryTerm }) {
  const course = getCourse(term.courseId)
  const lesson = lessons[term.lessonId]
  const lessonNumber = course ? course.lessonOrder.indexOf(term.lessonId) + 1 : 0

  return (
    <div id={term.id} className="scroll-mt-20 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium">{term.term}</h3>
        {course && lesson && (
          <Link
            to="/courses/$courseSlug/lessons/$lessonSlug"
            params={{ courseSlug: course.id, lessonSlug: lesson.slug }}
            className="text-muted-foreground hover:text-foreground shrink-0 text-xs transition-colors"
          >
            Course {course.number}
            {lessonNumber > 0 && ` · Lesson ${lessonNumber}`} →
          </Link>
        )}
      </div>
      <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{term.definition}</p>
      {term.sequence && (
        <p className="text-muted-foreground mt-1.5 text-xs">{term.sequence.join(' → ')}</p>
      )}
    </div>
  )
}
