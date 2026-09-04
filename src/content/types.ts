// The shared content contract: what authored JSON and lesson frontmatter must
// look like, and what the build adds on top. Imported by both the app and
// scripts/build-content.ts, so the types are the single definition of the model.

export type CourseId = string // "01-foundations"
export type LessonId = string // "01-foundations/02-the-data-analysis-process"
export type TermId = string // "data-analysis-process"

/** Closed vocabulary — adding a topic is a deliberate one-line commit, not a typo. */
export const TOPICS = [
  'analytics-role',
  'process',
  'data-lifecycle',
  'analytical-thinking',
  'decision-making',
  'tooling',
  'spreadsheets',
  'sql',
  'databases',
  'visualization',
  'ethics-fairness',
  'career',
  'stakeholders',
  'data-types',
  'data-quality',
  'statistics',
  'python',
] as const
export type Topic = (typeof TOPICS)[number]

export type CourseStatus = 'planned' | 'in-progress' | 'authored'
export type LessonStatus = 'planned' | 'draft' | 'authored'

export type Course = {
  id: CourseId
  number: number
  title: string
  shortTitle: string // nav + breadcrumbs
  summary: string
  status: CourseStatus
  /** Single source of display order — reordering is a one-file diff, and
   *  duplicate or missing order numbers are structurally impossible. */
  lessonOrder: LessonId[]
  topics: Topic[]
}

export type LessonFrontmatter = {
  id: LessonId
  courseId: CourseId
  title: string
  status: LessonStatus
  summary: string // lead paragraph + primary search document
  format: 'refresher' | 'cheatsheet' // prose column vs full-width dense layout
  terms: TermId[] // glossary terms canonically defined here
  /** Terms defined in another lesson that this one touches — renders as a
   *  callout. Direction (back/forward) is computed from course ordering. */
  revisits: Array<{ termId: TermId; note: string }>
  topics: Topic[]
  sourceModules: string[] // paths into the syllabus repo, provenance only
}

export type Heading = { depth: 2 | 3; text: string; id: string }

/** Build-computed fields, added by scripts/build-content.ts. Never authored. */
export type Lesson = LessonFrontmatter & {
  slug: string
  readingTimeMin: number
  headings: Heading[]
}

export type GlossaryTerm = {
  id: TermId // anchor target, card ids, `revisits` references
  term: string
  aliases: string[] // search only — "DDDM", "data-driven decision-making"
  definition: string // glossary row, hover-card, and both card faces
  courseId: CourseId
  lessonId: LessonId
  /** Terms this one gets mixed up with — generates contrast cards. */
  confusableWith: TermId[]
  /** Ordered steps, when the term IS a process — generates a sequence card. */
  sequence?: string[]
  topics: Topic[]
}

/** What build-content.ts emits and the app consumes. */
export type ContentIndex = {
  courses: Course[]
  lessons: Record<LessonId, Lesson>
  terms: Record<TermId, GlossaryTerm>
}

/** Resolved revisit, with direction computed from course + lesson ordering. */
export type Revisit = {
  termId: TermId
  note: string
  direction: 'back' | 'forward'
  term: GlossaryTerm
  targetLesson: Lesson
  targetCourse: Course
  /** Planned lessons have nothing to link to yet. */
  linkable: boolean
}
