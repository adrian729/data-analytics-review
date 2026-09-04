// Rendered by the lesson route from frontmatter, never from the body, so the
// prose and the metadata cannot disagree. Direction is computed from course
// ordering — the author only writes the note.

import { Link } from '@tanstack/react-router'
import { CornerDownLeft, MoveRight } from 'lucide-react'
import type { Revisit } from '@/content/types'

export function RevisitCallout({ revisit }: { revisit: Revisit }) {
  const { direction, note, targetLesson, targetCourse, linkable } = revisit
  const back = direction === 'back'
  const Icon = back ? CornerDownLeft : MoveRight

  const lessonNumber = targetCourse.lessonOrder.indexOf(targetLesson.id) + 1
  const heading = back
    ? `Covered in Course ${targetCourse.number} · ${targetLesson.title}`
    : `Comes later · Course ${targetCourse.number}${lessonNumber > 0 ? ` · ${targetLesson.title}` : ''}`

  return (
    <aside className="border-border bg-muted/40 my-6 rounded-lg border px-4 py-3 text-sm">
      <div className="mb-1 flex items-center gap-2">
        <Icon className="text-muted-foreground size-3.5 shrink-0" />
        {linkable ? (
          <Link
            to="/courses/$courseSlug/lessons/$lessonSlug"
            params={{ courseSlug: targetCourse.id, lessonSlug: targetLesson.slug }}
            className="font-medium hover:underline"
          >
            {heading} →
          </Link>
        ) : (
          <span className="font-medium">
            {heading}
            <span className="text-muted-foreground ml-2 text-xs font-normal">not yet written</span>
          </span>
        )}
      </div>
      <p className="text-muted-foreground leading-relaxed">{note}</p>
    </aside>
  )
}
