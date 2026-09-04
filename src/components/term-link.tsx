// Glossary references are authored as ordinary links — [data](/glossary#data).
//
// This is a deliberate change from a custom `term:` protocol: @tanstack/markdown
// silently DROPS links whose scheme it does not recognise, so `term:` references
// would have rendered as bare text with no warning. A relative URL survives the
// parser, is a working link with no JS, and still lets the build script verify
// that every reference resolves.

import { Link } from '@tanstack/react-router'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { getCourse, getTerm } from '@/content/loader'
import type { MarkdownComponentProps } from '@/components/markdown-body'

const TERM_HREF = /^\/glossary#(.+)$/

export function TermAwareAnchor({ href, children, ...props }: MarkdownComponentProps<'a'>) {
  const termId = typeof href === 'string' ? TERM_HREF.exec(href)?.[1] : undefined
  const term = termId ? getTerm(termId) : undefined

  if (!term) {
    const external = typeof href === 'string' && /^https?:/.test(href)
    return (
      <a
        href={href}
        className="decoration-primary/50 underline underline-offset-2"
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    )
  }

  const course = getCourse(term.courseId)

  return (
    <HoverCard openDelay={300} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Link
          to="/glossary"
          hash={term.id}
          className="decoration-primary/60 hover:decoration-primary underline decoration-dotted underline-offset-4"
        >
          {children}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 text-sm" side="top" align="start">
        <div className="mb-1 flex items-baseline justify-between gap-3">
          <span className="font-semibold">{term.term}</span>
          {course && (
            <span className="text-muted-foreground shrink-0 text-xs">Course {course.number}</span>
          )}
        </div>
        <p className="text-muted-foreground leading-relaxed">{term.definition}</p>
        <Link
          to="/glossary"
          hash={term.id}
          className="text-primary mt-2 inline-block text-xs hover:underline"
        >
          See in glossary →
        </Link>
      </HoverCardContent>
    </HoverCard>
  )
}
