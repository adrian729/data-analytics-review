import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { courses, lessonsOf } from '@/content/loader'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Courses</h1>
      <p className="text-muted-foreground mt-1.5 text-sm">
        Google Data Analytics Certificate — condensed for review.
      </p>

      <ul className="mt-8 divide-y">
        {courses.map((course) => {
          const planned = course.status === 'planned'
          const count = lessonsOf(course).length

          const inner = (
            <>
              <span className="text-muted-foreground w-6 shrink-0 pt-0.5 text-sm tabular-nums">
                {course.number}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline gap-2">
                  <span className="font-medium">{course.title}</span>
                  {planned && (
                    <span className="text-muted-foreground border-border shrink-0 rounded-full border px-2 py-0.5 text-[11px]">
                      soon
                    </span>
                  )}
                </span>
                <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
                  {course.summary}
                </span>
                <span className="text-muted-foreground mt-1.5 block text-xs">
                  {planned ? 'Not yet written' : `${count} ${count === 1 ? 'lesson' : 'lessons'}`}
                </span>
              </span>
              {!planned && (
                <ArrowRight className="text-muted-foreground group-hover:text-foreground mt-0.5 size-4 shrink-0 transition-colors" />
              )}
            </>
          )

          return (
            <li key={course.id}>
              {planned ? (
                <div className="flex gap-4 py-5 opacity-50">{inner}</div>
              ) : (
                <Link
                  to="/courses/$courseSlug"
                  params={{ courseSlug: course.id }}
                  className="group hover:bg-accent -mx-3 flex gap-4 rounded-lg px-3 py-5 transition-colors"
                >
                  {inner}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
