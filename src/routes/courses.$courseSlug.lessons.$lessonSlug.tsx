import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react'
import { MarkdownBody } from '@/components/markdown-body'
import { RevisitCallout } from '@/components/revisit-callout'
import {
  getLesson,
  lessonPosition,
  loadLessonBody,
  resolveRevisits,
  termsOf,
} from '@/content/loader'
import { cardsForTerms } from '@/lib/cards'

export const Route = createFileRoute('/courses/$courseSlug/lessons/$lessonSlug')({
  loader: async ({ params }) => {
    const lesson = getLesson(`${params.courseSlug}/${params.lessonSlug}`)
    if (!lesson) throw notFound()
    return { lesson, body: await loadLessonBody(lesson) }
  },
  component: LessonPage,
})

function LessonPage() {
  const { lesson, body } = Route.useLoaderData()
  const { index, total, prev, next, course } = lessonPosition(lesson)
  const revisits = resolveRevisits(lesson)
  const ownTerms = termsOf(lesson.id)
  const cardCount = cardsForTerms(ownTerms).length
  const cheatsheet = lesson.format === 'cheatsheet'

  return (
    <div className="flex justify-center gap-8 px-6 py-10">
      <article className={cheatsheet ? 'w-full max-w-4xl' : 'w-full max-w-2xl'}>
        <p className="text-muted-foreground text-sm">
          {course && (
            <Link to="/courses/$courseSlug" params={{ courseSlug: course.id }} className="hover:underline">
              Course {course.number}
            </Link>
          )}
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">{lesson.title}</h1>
        <p className="text-muted-foreground mt-1.5 text-sm">
          Lesson {index + 1} of {total} · <span className="capitalize">{lesson.format}</span> ·{' '}
          {lesson.readingTimeMin} min
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">{lesson.summary}</p>

        <hr className="border-border my-7" />

        {revisits.map((r) => (
          <RevisitCallout key={r.termId} revisit={r} />
        ))}

        <MarkdownBody source={body} />

        <div className="mt-12 border-t pt-6">
          {cardCount > 0 && (
            <Link
              to="/practice"
              search={{ course: lesson.courseId, lesson: lesson.id }}
              className="group hover:bg-muted/40 mb-4 flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors"
            >
              <Layers className="text-muted-foreground size-4" />
              <span className="flex-1">
                Practice this lesson
                <span className="text-muted-foreground ml-2 text-xs">{cardCount} cards</span>
              </span>
              <ArrowRight className="text-muted-foreground group-hover:text-foreground size-4 transition-colors" />
            </Link>
          )}

          <nav className="flex items-stretch justify-between gap-3 text-sm">
            {prev ? (
              <Link
                to="/courses/$courseSlug/lessons/$lessonSlug"
                params={{ courseSlug: prev.courseId, lessonSlug: prev.slug }}
                className="text-muted-foreground hover:text-foreground group flex max-w-[48%] items-center gap-2 transition-colors"
              >
                <ArrowLeft className="size-3.5 shrink-0" />
                <span className="truncate">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to="/courses/$courseSlug/lessons/$lessonSlug"
                params={{ courseSlug: next.courseId, lessonSlug: next.slug }}
                className="text-muted-foreground hover:text-foreground group ml-auto flex max-w-[48%] items-center gap-2 text-right transition-colors"
              >
                <span className="truncate">{next.title}</span>
                <ArrowRight className="size-3.5 shrink-0" />
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>

      {lesson.headings.length > 1 && (
        <aside className="sticky top-20 hidden h-fit w-52 shrink-0 xl:block">
          <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
            On this page
          </p>
          <ul className="border-border space-y-1.5 border-l text-sm">
            {lesson.headings.map((h) => (
              <li key={h.id} style={{ paddingLeft: h.depth === 3 ? '1.5rem' : '0.75rem' }}>
                <a
                  href={`#${h.id}`}
                  className="text-muted-foreground hover:text-foreground block leading-snug transition-colors"
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  )
}
