import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowRight, Layers, Library } from 'lucide-react'
import { MarkdownBody } from '@/components/markdown-body'
import { getCourse, lessonsOf, loadCourseIntro, termsOfCourse } from '@/content/loader'
import { cardsForTerms } from '@/lib/cards'

export const Route = createFileRoute('/courses/$courseSlug/')({
  loader: async ({ params }) => {
    const course = getCourse(params.courseSlug)
    if (!course) throw notFound()
    return { course, intro: await loadCourseIntro(course) }
  },
  component: CoursePage,
})

function CoursePage() {
  const { course, intro } = Route.useLoaderData()
  const lessons = lessonsOf(course)
  const terms = termsOfCourse(course.id)
  const cardCount = cardsForTerms(terms).length

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <p className="text-muted-foreground text-sm">Course {course.number}</p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight">{course.title}</h1>

      {intro && <MarkdownBody source={intro} className="text-muted-foreground mt-4" />}

      <h2 className="mt-10 mb-1 text-sm font-semibold tracking-tight">Lessons</h2>
      <ul className="divide-y">
        {lessons.map((lesson, i) => (
          <li key={lesson.id}>
            <Link
              to="/courses/$courseSlug/lessons/$lessonSlug"
              params={{ courseSlug: course.id, lessonSlug: lesson.slug }}
              className="group hover:bg-accent -mx-3 flex items-baseline gap-3 rounded-lg px-3 py-3.5 transition-colors"
            >
              <span className="text-muted-foreground w-5 shrink-0 text-sm tabular-nums">
                {i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium">{lesson.title}</span>
                <span className="text-muted-foreground mt-0.5 block text-sm leading-relaxed">
                  {lesson.summary}
                </span>
              </span>
              <span className="text-muted-foreground hidden shrink-0 text-xs sm:block">
                <span className="capitalize">{lesson.format}</span> · {lesson.readingTimeMin} min
              </span>
              <ArrowRight className="text-muted-foreground group-hover:text-foreground size-4 shrink-0 transition-colors" />
            </Link>
          </li>
        ))}
      </ul>

      {/* The whole scoping mechanism: the global pages, opened with a filter. */}
      <div className="mt-10 grid gap-3 border-t pt-6 sm:grid-cols-2">
        <Link
          to="/glossary"
          search={{ course: course.id }}
          className="group hover:bg-accent flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors"
        >
          <Library className="text-muted-foreground size-4" />
          <span className="flex-1">
            Glossary
            <span className="text-muted-foreground ml-2 text-xs">{terms.length} terms</span>
          </span>
          <ArrowRight className="text-muted-foreground group-hover:text-foreground size-4 transition-colors" />
        </Link>
        <Link
          to="/practice"
          search={{ course: course.id }}
          className="group hover:bg-accent flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors"
        >
          <Layers className="text-muted-foreground size-4" />
          <span className="flex-1">
            Practice
            <span className="text-muted-foreground ml-2 text-xs">{cardCount} cards</span>
          </span>
          <ArrowRight className="text-muted-foreground group-hover:text-foreground size-4 transition-colors" />
        </Link>
      </div>
    </div>
  )
}
