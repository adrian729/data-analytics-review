import { Link, useMatchRoute } from '@tanstack/react-router'
import { ChevronRight, Layers, Library } from 'lucide-react'
import { cn } from '@/lib/utils'
import { courses, lessonsOf } from '@/content/loader'

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const matchRoute = useMatchRoute()
  const courseMatch = matchRoute({ to: '/courses/$courseSlug', fuzzy: true }) as
    | { courseSlug: string }
    | false
  const lessonMatch = matchRoute({
    to: '/courses/$courseSlug/lessons/$lessonSlug',
    fuzzy: false,
  }) as { courseSlug: string; lessonSlug: string } | false

  const openCourseId = courseMatch ? courseMatch.courseSlug : undefined

  return (
    <nav className="flex flex-col gap-1 p-3 text-sm">
      {courses.map((course) => {
        const isOpen = course.id === openCourseId
        const planned = course.status === 'planned'
        return (
          <div key={course.id}>
            {planned ? (
              <span
                className="text-muted-foreground/60 flex cursor-not-allowed items-center gap-1.5 rounded-md px-2 py-1.5"
                title="Not yet written"
              >
                <ChevronRight className="size-3.5 shrink-0 opacity-40" />
                <span className="tabular-nums">{course.number}</span>
                <span className="truncate">{course.shortTitle}</span>
              </span>
            ) : (
              <Link
                to="/courses/$courseSlug"
                params={{ courseSlug: course.id }}
                onClick={onNavigate}
                className={cn(
                  'hover:bg-muted flex items-center gap-1.5 rounded-md px-2 py-1.5 transition-colors',
                  isOpen && 'font-medium',
                )}
              >
                <ChevronRight
                  className={cn('size-3.5 shrink-0 transition-transform', isOpen && 'rotate-90')}
                />
                <span className="tabular-nums">{course.number}</span>
                <span className="truncate">{course.shortTitle}</span>
              </Link>
            )}

            {isOpen && (
              <ul className="border-border/60 mt-0.5 mb-1 ml-[1.05rem] flex flex-col border-l">
                {lessonsOf(course).map((lesson) => {
                  const current = lessonMatch && lessonMatch.lessonSlug === lesson.slug
                  return (
                    <li key={lesson.id}>
                      <Link
                        to="/courses/$courseSlug/lessons/$lessonSlug"
                        params={{ courseSlug: course.id, lessonSlug: lesson.slug }}
                        onClick={onNavigate}
                        className={cn(
                          'hover:text-foreground -ml-px flex items-center gap-2 border-l py-1 pl-3 transition-colors',
                          current
                            ? 'border-primary text-foreground font-medium'
                            : 'text-muted-foreground border-transparent',
                        )}
                      >
                        {/* Position, not progress — nothing here tracks completion. */}
                        <span
                          className={cn(
                            'size-1.5 shrink-0 rounded-full',
                            current ? 'bg-primary' : 'bg-transparent',
                          )}
                        />
                        <span className="truncate">{lesson.title}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )
      })}

      <div className="bg-border my-2 h-px" />

      <Link
        to="/glossary"
        onClick={onNavigate}
        className="hover:bg-muted [&.active]:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5 [&.active]:font-medium"
      >
        <Library className="size-3.5" /> Glossary
      </Link>
      <Link
        to="/practice"
        onClick={onNavigate}
        className="hover:bg-muted [&.active]:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5 [&.active]:font-medium"
      >
        <Layers className="size-3.5" /> Practice
      </Link>
    </nav>
  )
}
