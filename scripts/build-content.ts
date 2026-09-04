// One pass over content/: reads course JSON, glossary JSON and lesson
// frontmatter, computes slug/readingTime/headings, and emits the typed index at
// src/content/generated/index.ts. Throws on any broken reference, so a mistyped
// id fails the build instead of rendering a dead link months later.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs'
import { join, basename } from 'node:path'
import matter from 'gray-matter'
import { parseMarkdown } from '@tanstack/markdown/parser'
import { TOPICS } from '../src/content/types.ts'
import type {
  ContentIndex,
  Course,
  GlossaryTerm,
  Heading,
  Lesson,
  LessonFrontmatter,
  Topic,
} from '../src/content/types.ts'

const ROOT = join(import.meta.dirname, '..')
const COURSES_DIR = join(ROOT, 'content/courses')
const OUT_DIR = join(ROOT, 'src/content/generated')

const errors: string[] = []
const fail = (msg: string) => errors.push(msg)

const WORDS_PER_MINUTE = 200
const TOPIC_SET = new Set<string>(TOPICS)

/** Pull every `/glossary#<id>` href out of a parsed body — the term-link convention. */
function collectTermLinks(node: unknown, found: Set<string> = new Set()): Set<string> {
  if (!node || typeof node !== 'object') return found
  const n = node as Record<string, unknown>
  if (n.type === 'link' && typeof n.href === 'string') {
    const match = /^\/glossary#(.+)$/.exec(n.href)
    if (match?.[1]) found.add(match[1])
  }
  for (const value of Object.values(n)) {
    if (Array.isArray(value)) value.forEach((v) => collectTermLinks(v, found))
    else if (value && typeof value === 'object') collectTermLinks(value, found)
  }
  return found
}

function collectHeadings(node: unknown): Heading[] {
  const doc = node as { children?: Array<Record<string, unknown>> }
  const out: Heading[] = []
  for (const child of doc.children ?? []) {
    if (child.type !== 'heading') continue
    const depth = child.depth as number
    if (depth !== 2 && depth !== 3) continue
    out.push({
      depth,
      text: textOf(child),
      id: typeof child.id === 'string' ? child.id : '',
    })
  }
  return out
}

function textOf(node: unknown): string {
  if (!node || typeof node !== 'object') return ''
  const n = node as Record<string, unknown>
  if (n.type === 'text' && typeof n.value === 'string') return n.value
  if (Array.isArray(n.children)) return n.children.map(textOf).join('')
  return ''
}

function checkTopics(topics: unknown, where: string): Topic[] {
  if (!Array.isArray(topics)) {
    fail(`${where}: "topics" must be an array`)
    return []
  }
  for (const t of topics) {
    if (!TOPIC_SET.has(t)) fail(`${where}: unknown topic "${t}" (add it to TOPICS in src/content/types.ts)`)
  }
  return topics as Topic[]
}

// ---------------------------------------------------------------- read courses

const courseDirs = readdirSync(COURSES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort()

const courses: Course[] = []
const lessons: Record<string, Lesson> = {}
const terms: Record<string, GlossaryTerm> = {}
/** termId -> lesson ids that claim it in frontmatter `terms`. */
const claims: Record<string, string[]> = {}

for (const dir of courseDirs) {
  const courseDir = join(COURSES_DIR, dir)
  const course = JSON.parse(readFileSync(join(courseDir, 'course.json'), 'utf8')) as Course

  if (course.id !== dir) fail(`${dir}/course.json: id "${course.id}" does not match its directory name`)
  checkTopics(course.topics, `${dir}/course.json`)
  courses.push(course)

  // ------------------------------------------------------------------ lessons
  const lessonsDir = join(courseDir, 'lessons')
  const lessonFiles = existsSync(lessonsDir)
    ? readdirSync(lessonsDir).filter((f) => f.endsWith('.md')).sort()
    : []

  for (const file of lessonFiles) {
    const slug = basename(file, '.md')
    const raw = readFileSync(join(lessonsDir, file), 'utf8')
    const { data, content } = matter(raw)
    const fm = data as LessonFrontmatter
    const where = `${dir}/lessons/${file}`

    const expectedId = `${course.id}/${slug}`
    if (fm.id !== expectedId) fail(`${where}: frontmatter id "${fm.id}" should be "${expectedId}"`)
    if (fm.courseId !== course.id) fail(`${where}: courseId "${fm.courseId}" should be "${course.id}"`)
    checkTopics(fm.topics, where)

    const ast = parseMarkdown(content, { headingIds: true })

    // Every inline glossary reference must resolve. Validated with the same
    // parser the app renders with, so the check cannot drift from reality.
    for (const termId of collectTermLinks(ast)) {
      ;(claims[`link:${termId}`] ??= []).push(where)
    }

    for (const termId of fm.terms ?? []) (claims[termId] ??= []).push(fm.id)

    lessons[fm.id] = {
      ...fm,
      slug,
      readingTimeMin: Math.max(1, Math.round(content.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE)),
      headings: collectHeadings(ast),
    }
  }

  // lessonOrder must exactly match the lesson files on disk.
  const onDisk = lessonFiles.map((f) => `${course.id}/${basename(f, '.md')}`)
  for (const id of course.lessonOrder) {
    if (!onDisk.includes(id)) fail(`${dir}/course.json: lessonOrder lists "${id}", which has no file`)
  }
  for (const id of onDisk) {
    if (!course.lessonOrder.includes(id)) fail(`${dir}/course.json: lesson "${id}" exists but is missing from lessonOrder`)
  }

  // ----------------------------------------------------------------- glossary
  const glossaryPath = join(courseDir, 'glossary.json')
  if (!existsSync(glossaryPath)) continue
  const parsed = JSON.parse(readFileSync(glossaryPath, 'utf8')) as GlossaryTerm[]
  for (const term of parsed) {
    if (terms[term.id]) fail(`${dir}/glossary.json: duplicate term id "${term.id}" (ids are global, not per-course)`)
    checkTopics(term.topics, `${dir}/glossary.json#${term.id}`)
    terms[term.id] = term
  }
}

// ------------------------------------------------------------------ integrity

const courseIds = new Set(courses.map((c) => c.id))
const lessonIds = new Set(Object.keys(lessons))

for (const term of Object.values(terms)) {
  if (!courseIds.has(term.courseId)) fail(`term "${term.id}": courseId "${term.courseId}" does not exist`)
  if (!lessonIds.has(term.lessonId)) fail(`term "${term.id}": lessonId "${term.lessonId}" does not exist`)
  for (const other of term.confusableWith) {
    if (!terms[other]) fail(`term "${term.id}": confusableWith references unknown term "${other}"`)
  }
}

for (const lesson of Object.values(lessons)) {
  for (const termId of lesson.terms) {
    if (!terms[termId]) fail(`lesson "${lesson.id}": terms lists unknown glossary term "${termId}"`)
  }
  for (const revisit of lesson.revisits ?? []) {
    const term = terms[revisit.termId]
    if (!term) {
      fail(`lesson "${lesson.id}": revisits an unknown term "${revisit.termId}"`)
    } else if (term.lessonId === lesson.id) {
      fail(`lesson "${lesson.id}": revisits "${revisit.termId}", but this lesson is where it is defined`)
    }
  }
}

// "Defined once" made real: exactly one lesson claims each term, and it is the
// same lesson the term itself points back to.
for (const [key, claimedBy] of Object.entries(claims)) {
  if (key.startsWith('link:')) {
    const termId = key.slice(5)
    if (!terms[termId]) {
      fail(`unresolved inline link [..](/glossary#${termId}) in: ${[...new Set(claimedBy)].join(', ')}`)
    }
    continue
  }
  if (claimedBy.length > 1) {
    fail(`term "${key}" is claimed by more than one lesson: ${claimedBy.join(', ')}`)
  }
  const term = terms[key]
  if (term && claimedBy[0] !== term.lessonId) {
    fail(`term "${key}": claimed by "${claimedBy[0]}" but its own lessonId is "${term.lessonId}"`)
  }
}

for (const term of Object.values(terms)) {
  if (!claims[term.id]) {
    fail(`term "${term.id}": no lesson claims it — add it to the "terms" list in ${term.lessonId}`)
  }
}

// ---------------------------------------------------------------------- emit

if (errors.length) {
  console.error(`\n✖ Content validation failed — ${errors.length} problem(s):\n`)
  for (const e of errors) console.error(`  · ${e}`)
  console.error('')
  process.exit(1)
}

courses.sort((a, b) => a.number - b.number)
const index: ContentIndex = { courses, lessons, terms }

mkdirSync(OUT_DIR, { recursive: true })
writeFileSync(
  join(OUT_DIR, 'index.ts'),
  `// GENERATED by scripts/build-content.ts — do not edit.\n` +
    `import type { ContentIndex } from '../types'\n\n` +
    `export const contentIndex: ContentIndex = ${JSON.stringify(index, null, 2)}\n`,
)

const authored = Object.values(lessons).filter((l) => l.status === 'authored').length
console.log(
  `✔ content: ${courses.length} courses · ${Object.keys(lessons).length} lessons (${authored} authored) · ${Object.keys(terms).length} terms`,
)
