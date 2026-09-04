# Data Analytics Preparation — Build Plan

## Context

The goal is a small, personal, client-only web app for revisiting knowledge from the Google Data Analytics Certificate: concise lessons, a glossary, and practice drills, organised so the material can be re-read to refresh it rather than consumed once.

Two findings from surveying the ground reshaped the draft in `tmp/general_plan.md`.

**1. The target directory is greenfield.** `/home/ranx729/projects/data-analytics-preparation` contains only `tmp/general_plan.md` — no `package.json`, no git repo, no scaffold. Node 26.7.0, npm 11.19.0 and pnpm 12.3.2 are available; bun and yarn are not.

**2. The source repo is a syllabus skeleton, not content.** `/home/ranx729/projects/google-data-analytics-certificate/` is 40 markdown files totalling ~35 KB / 1023 lines across all 9 courses, with zero term definitions, zero code blocks, zero tables and no glossary. Courses 5, 6 and 9 average ~17 lines per module. A complete typical module file is three bullets of the form *"Core VLOOKUP concepts in spreadsheets, putting it into action, and diagnosing/fixing common VLOOKUP errors."*

This inverts the draft's premise. The draft assumed the job was *condensing* verbose course material; there is nothing to condense. The corpus is a good **scope specification** — it authoritatively says which topics belong to which course and in what order — but every explanation and every definition has to be authored fresh.

**Deepening the source repo is a separate, parallel workstream, owned outside this plan.** Nothing here waits on it and nothing here is invalidated by it — the architecture is indifferent to how thick the source notes are. When the enriched notes land, the later content pass derives lessons and definitions from *them* rather than from domain knowledge, and each lesson's `sourceModules` field records which module it came from.

**Scope of this pass: a pilot.** Effort goes into technical design, data model and structure, not content. Courses 1 and 2 get scaffolded (two, so multi-course navigation is exercised for real), three lessons authored in full, a 22-term glossary seeded, and practice working end to end. The decision about how to treat courses 8 and 9 is deferred.

**The pilot content is a structural fixture, not a first draft.** Its only job is to exercise every mechanism in the data model at least once so the code can be built and tested against something real. Expect it to be discarded and rewritten by the content pass — so it should be written quickly and not polished. What must be right *now* is the shape it fits into.

Lesson depth is a mix: mostly **refresher** prose (~200–400 words, assumes the course was already sat), with a **cheatsheet** format where a dense reference table is genuinely enough.

---

## Tech stack

Verified current as of September 2026.

### Runtime dependencies

| Concern | Choice | Version | Note |
|---|---|---|---|
| Framework | React + React DOM | 19.x | — |
| Routing | `@tanstack/react-router` | 1.170.x | File-based routes; typed search params carry practice-session config. TanStack Start is not needed — Router alone covers a pure SPA. |
| Markdown | `@tanstack/markdown` | 0.0.13 | Zero-dependency, ~11.6 KB, synchronous parser + renderer. See below. |
| UI primitives | `@radix-ui/*` | — | One per shadcn component used. |

### Build and dev dependencies

| Concern | Choice | Version | Note |
|---|---|---|---|
| Build | Vite + `@vitejs/plugin-react` + TypeScript | — | Client-only, no SSR |
| Routing plugin | `@tanstack/router-plugin` | 1.170.x | Generates the route tree; must precede `@vitejs/plugin-react` in the Vite config |
| Styling | Tailwind CSS | 4.3.x | CSS-first `@theme`, no `tailwind.config.ts` |
| Frontmatter | `gray-matter` | latest | Build script only |

### UI: shadcn/ui + Tailwind

Setup: `pnpm dlx shadcn@latest init`, `components.json` in Tailwind v4 mode (blank `tailwind.config`, CSS-first `@theme`). The CLI is never installed; each component is copied into the repo as source you own and edit, adding one `@radix-ui/*` package per component used.

**The theme is already written: `src/styles/theme.css`.** It is complete and needs no further work — import it as the app's stylesheet and let `shadcn init` write its config around it. Do not let the CLI overwrite it; if init generates its own `globals.css`, discard that file and keep this one. Details in the Theme section below.

Components this plan uses: **`sidebar`** (course/lesson nav shell), **`command`** (`/` search palette), **`hover-card`** (glossary definitions), **`card`**, **`badge`**, **`button`**, **`toggle-group`** (deck filters), **`table`** (cheatsheet rows). Add others as screens need them.

### Markdown: `@tanstack/markdown`

Zero-dependency, synchronous parser + renderer — ~4.9 KB parser, ~6.7 KB renderer, gzipped. Parses to a plain serialisable AST and renders through `@tanstack/markdown/react`. TanStack's own docs site runs on it alongside `gray-matter`, which is exactly this pipeline.

Parse at build time in `build-content.ts` where the AST is serialisable, so only the renderer ships. If the subpath split does not cleanly allow that, parsing at route load is a non-issue at this size.

**It does not evaluate JSX** — a stated non-goal. So inline custom components are unavailable, and the three components this plan needs are reached differently:

- **Glossary references are a link convention.** Author `[data analytics](/glossary#data-analytics)`; pass `components={{ a: TermAwareAnchor }}` so an href matching `/glossary#<id>` renders the hover-card instead of a plain link. Shorter to author than a JSX tag, valid Markdown everywhere else, and it lets the build script check that every inline glossary reference resolves.

  **Why a relative URL and not a custom `term:` protocol** (which an earlier draft specified): the spike found that `@tanstack/markdown` **silently drops links whose scheme it does not recognise** — `[a](term:x)` parses to bare text with no `link` node and no warning. Every glossary reference would have vanished invisibly. A relative URL survives the parser, works as a real link with no JS, and deep-links to the anchored glossary row anyway.
- **Revisit callouts render from frontmatter**, not from the body — `revisits: [{ termId, note }]` is already there, and the lesson route draws the callout from it.

**Live risk:** the library is alpha (0.0.13, "the contract can still move") and young at 132 stars. Exposure is one renderer component over a markdown-in/elements-out contract; if the API moves it is a single-file migration, and `react-markdown` is a drop-in with the same `components` prop.

**Spike results — done, all four questions answered:**

| Question | Result |
|---|---|
| GFM tables | **Supported.** `table`/`tableCell` nodes, correct `thead`/`tbody`. Decisive, since Course 1 is table-heavy. |
| Custom anchors via `components` | Works — `{{ a: TermAwareAnchor }}` substitutes cleanly. |
| Custom `term:` protocol | **Fails silently** — unknown URL schemes are dropped, leaving bare text and no `link` node. Convention changed to `/glossary#<id>` (see above). |
| Build-time parsing | The AST round-trips through JSON, and `parseMarkdown` extracts frontmatter itself. Bodies are still parsed at route load — the parser is ~4.9 KB and the source markdown ships smaller than its own AST would. |

Heading ids are generated by the parser (`headingIds: true`), so `build-content.ts` reads them rather than slugifying its own.

When code blocks eventually arrive (SQL and Python, courses 4–7), start with **TanStack Highlight**, the companion project shipped alongside it.

### Written by hand rather than installed

Three small modules, ~130 lines total. Each is a build task, listed here so the estimates are visible up front.

| Module | Size | What it does |
|---|---|---|
| `scripts/build-content.ts` | ~100 lines | One pass over `content/`. Reads the JSON files and each lesson's YAML frontmatter, computes `slug`/`readingTimeMin`/`headings`, emits the typed index — and throws on a broken reference. Runs in `pnpm dev` and `pnpm build`. |
| `src/lib/cards.ts` | ~20 lines | Turns glossary terms into cards (four generators), filters by the deck params, shuffles. Pure function of the index plus the filters. |
| `src/lib/search.ts` | ~10 lines | Lowercase substring match across title, term, aliases and summary; title matches ranked first. Feeds the `/` search palette. |

Plus `src/lib/theme.ts`, the only thing that touches localStorage.

**Why a build script exists at all:** lesson metadata lives in YAML frontmatter inside `.md` files. Vite can glob the JSON directly, but extracting frontmatter at runtime would mean shipping a YAML parser and parsing every lesson at startup. So one pass does it at build time — and since it is already walking the tree and building the id maps, it does the reference checking in the same pass rather than in a second script.

**No test suite.** The UI is verified by looking at it, and the build script is the real safety net, catching the one silent failure mode: a mistyped `lessonId` in hand-authored frontmatter that renders a dead link months later. There is no algorithmic logic left to unit-test — card generation is a `map` and filtering is a `filter`.

---

## Content architecture

### Lessons are not modules

The 39 source modules are a syllabus scaffold, not a lesson list — 19 of the 144 `##` sections are `## Module notes` or `## Module N challenge`, pure course admin. Mapping 1:1 would import that noise and hard-code the duplication into the URL structure. **Lessons are authored units of knowledge; modules survive only as provenance** (`sourceModules: string[]`).

### Directory tree

```
data-analytics-preparation/
├─ content/                          # authored source of truth
│  └─ courses/
│     ├─ 01-foundations/
│     │  ├─ course.json              # metadata + explicit lesson ordering
│     │  ├─ index.md                 # course intro (TOC is generated, not authored)
│     │  ├─ glossary.json            # terms whose CANONICAL home is this course
│     │  └─ lessons/
│     │     ├─ 01-what-analysts-do.md
│     │     ├─ 02-the-data-analysis-process.md
│     │     ├─ 03-data-types-and-structures.md
│     │     ├─ 04-the-analyst-toolbox.md
│     │     └─ 05-fair-and-impactful-data-work.md
│     └─ 02-ask-questions/…
├─ scripts/
│  └─ build-content.ts               # ~100 lines — emits the index, throws on broken refs
└─ src/
   ├─ content/
   │  ├─ generated/index.ts          # gitignored — all metadata, eager
   │  ├─ loader.ts                   # import.meta.glob — metadata eager, lesson bodies LAZY
   │  └─ types.ts                    # the shared type definitions (single source of truth)
   ├─ lib/
   │  ├─ cards.ts                    # glossary → cards, filter, shuffle
   │  ├─ search.ts                   # ~10 lines of substring match + ranking
   │  └─ theme.ts                    # ~15 lines of dark mode
   ├─ components/
   └─ routes/
```

Four JSON files per course and one markdown file per lesson. Nothing else.

**Naming.** Course dirs `NN-kebab-slug`. Lesson files `NN-kebab-slug.md` where `NN` is authoring sequence only, *not* display order — display order lives in `course.json`. Canonical `LessonId` is path-shaped: `"01-foundations/02-the-data-analysis-process"`.

**The syllabus repo is not vendored in.** It is authoring reference material, never imported and never part of the build, so copying it into the project buys nothing that a path string does not. Each lesson records `sourceModules: ["01-foundations-data-everywhere/01_introducing_data_analytics.md"]` and the actual file is one directory over when you want it. No sync script, no hash manifest, no vendored subtree.

**Types live in `src/content/types.ts`**, shared by the app and the scripts. The TypeScript types are the definition; `build-content.ts` checks authored JSON and frontmatter against them.

---

## Data model

There are **three authored entities**: `Course`, `Lesson` and `GlossaryTerm`. Flashcards are generated from glossary terms and never authored, so they are not a fourth. That is the whole model.

### IDs and topics

```ts
// src/content/types.ts
export type CourseId   = string;   // "01-foundations"
export type LessonId   = string;   // "01-foundations/02-the-data-analysis-process"
export type TermId     = string;   // "data-analysis-process"
export type CardId     = string;   // `${termId}:${variant}` — React key only

/** Closed vocabulary — adding a topic is a deliberate one-line commit, not a typo. */
export const TOPICS = [
  "analytics-role", "process", "data-types", "data-quality", "spreadsheets",
  "sql", "databases", "visualization", "statistics", "python",
  "bias-ethics", "stakeholders", "career", "tooling",
] as const;
export type Topic = (typeof TOPICS)[number];
```

Plain aliases, not branded types — they make signatures readable without forcing a cast at every JSON boundary, which at this size is friction with no payoff.

**Relations are typed ids; `topics` is a closed union.** Navigation, dedup callouts and practice backlinks all depend on relations resolving, so those are ids the validator checks. `topics` is only for search facets and filtering, and being a closed union it cannot drift into four spellings of "spreadsheets".

**`"glossary"` is not a tag** — that would conflate entity kind with subject matter. A glossary term is its own entity, not a tagged lesson.

### Course

```ts
export type Course = {
  id: CourseId;                              // "01-foundations"
  number: number;
  title: string;
  shortTitle: string;                        // nav + breadcrumbs
  summary: string;
  status: "planned" | "in-progress" | "authored";
  /** Single source of display order — reordering is a one-file diff, and
   *  duplicate or missing order numbers are structurally impossible. */
  lessonOrder: LessonId[];
  topics: Topic[];
};
```

There is deliberately no `order` field on `Lesson`; ordering is a course-level concern living in exactly one place. The course intro's table of contents is **generated** from `lessonOrder`, not authored — the draft's idea of hand-writing a TOC into the intro file guarantees it goes stale.

### Lesson

```ts
export type LessonFrontmatter = {
  id: LessonId;
  courseId: CourseId;
  title: string;
  status: "planned" | "draft" | "authored";
  summary: string;                    // lead paragraph + primary search document
  format: "refresher" | "cheatsheet"; // prose column vs full-width dense layout
  terms: TermId[];                    // glossary terms canonically defined here
  /** Terms defined in an EARLIER lesson that this one revisits — renders as a callout. */
  revisits: Array<{ termId: TermId; note: string }>;
  topics: Topic[];
  sourceModules: string[];            // paths into the syllabus repo, provenance only
};

/** Build-computed fields, added by build-content.ts. Never authored. */
export type Lesson = LessonFrontmatter & {
  slug: string;
  readingTimeMin: number;
  headings: Array<{ depth: 2 | 3; text: string; id: string }>;
};
```

`format` is a plain string, not a discriminated union — it only picks a layout, so there are no format-specific fields to discriminate.

### Glossary

The glossary term doubles as the concept registry: a named idea with exactly one canonical home lesson is the same entity whether you call it a term or a concept, so it is modelled once.

```ts
export type GlossaryTerm = {
  id: TermId;                         // glossary anchor, card ids, `revisits` references
  term: string;
  aliases: string[];                  // search only — "DDDM", "data-driven decision-making"
  definition: string;                 // glossary row, hover-card, and both card faces
  courseId: CourseId;                 // filter chip + the "Course 1 · Lesson 2" label
  lessonId: LessonId;                 // filter chip, label, "practice this lesson"
  /** Terms this one gets mixed up with — generates contrast cards. */
  confusableWith: TermId[];
  /** Ordered steps, when the term IS a process — generates a sequence card. */
  sequence?: string[];
  topics: Topic[];                    // filter chips
};

// On disk: glossary.json is an ARRAY of GlossaryTerm per course.
```

**Array on disk, `Record<TermId, GlossaryTerm>` in memory.** A keyed record either duplicates the id inside the value or omits it, and produces noisy diffs whenever a block is regenerated. An array validates uniformly and the build indexes it into a record in three lines. Sharding by canonical course gives authoring locality while the namespace stays global — right, since "SQL" must be one term, not five.

Two fields do disproportionate work, and both feed practice. **`confusableWith`** names the terms this one gets mixed up with, which generates contrast cards — the pairs this certificate actually tests. **`sequence`** lets a term like `data-analysis-process` carry its six phases as data rather than only as prose.

**Every field above has at least one consumer**, listed in the comments. There is no `example` field and no computed `alsoUsedIn`: both existed only to fill rows on a term detail page, and that page is not being built — the glossary list shows the definition inline, so a route per term would have added four rows of metadata and nothing else. For the same reason the build script does not invert the `revisits` graph; the forward direction is all the lesson callout needs.

### Practice

**Flashcards, and only flashcards.** They are the one format that is objective: a term and its definition, with nothing to interpret and no answer key that can be subtly wrong. Every card is generated from a glossary term, so there is no practice file to author and no way for cards to drift from the glossary — fix a definition and the card is fixed.

```ts
export type Card = {
  id: string;              // derived: `${termId}:${variant}`
  termId: TermId;
  variant: "recall" | "recognise" | "sequence" | "contrast";
  front: string;
  back: string;
  // for filtering — copied from the source term
  courseId: CourseId;
  lessonId: LessonId;
  topics: Topic[];
};
```

Four variants, all generated in memory from the glossary when a session is built:

| Variant | Front | Back | Generated for |
|---|---|---|---|
| `recall` | the term | its definition | *one of these two per term, chosen per session* |
| `recognise` | the definition | the term | ↑ |
| `sequence` | "…in order?" | the ordered steps | terms with a `sequence` |
| `contrast` | "X vs Y — what is the difference?" | both definitions, side by side | one pair per term, max |

**A session never repeats itself.** Emitting *both* `recall` and `recognise` meant every term appeared twice carrying identical information flipped around — an 8-term lesson produced 21 cards, two thirds of them redundant, and `data-science` (which sits in three `confusableWith` clusters) showed up five times. The direction is now picked per term per session, and each term joins at most one contrast pair, so the same lesson yields 11 cards with no term appearing more than twice. Both directions still come up across sessions.

**Filtering** is by `courseId`, `lessonId` or `topics`, all already on the term — never by variant, which stays an internal generator name rather than something the interface exposes. A session is a filtered, shuffled list, and the deck config lives in the route's search params, so any deck is a bookmarkable URL.

**A session is a shuffled list, and nothing survives it.** Pick filters, get a deck, flip through it, leave. Cards you want to see again are re-queued to the end of the *current* session in React state — useful while drilling, gone on reload. There is no scheduler, no ratings, no due dates and no history.

**No extensibility scaffolding.** A second format would need its own renderer regardless, so a one-member discriminated union and a one-case switch built now is the same work done early. TypeScript makes the later change safe — widen `Card`, and the compiler lists every site.

---

## Dedup: how it works

A term is **defined once**, in the earliest lesson that needs it — that lesson lists it in `terms`, and the term's own `lessonId` points back. Any later lesson that revisits it declares a `revisits` entry with a note saying what is different, and never restates the definition.

That is the whole mechanism, and the author never classifies the relationship — **direction is computed.** The build knows every lesson's position from `course.json` ordering, so it renders "Covered in Course 1 →" when the canonical lesson is earlier and "Comes later, in Course 6" when it is not, leaving the link out when the target lesson is still `planned`.

`scripts/build-content.ts` fails the build unless:

1. Every `TermId`, `LessonId` and `CourseId` reference resolves.
2. Each term is claimed by exactly one lesson's `terms`, and that lesson matches the term's own `lessonId` — this is what makes "defined once" real rather than aspirational.
3. Every `[…](/glossary#<id>)` link in a lesson body resolves to a real glossary term. A bonus from the link convention: because glossary references are ordinary Markdown, the validator parses bodies with the same parser the app uses.

Three checks, ~60 lines. Everything the earlier seven-invariant version caught that mattered, minus the bookkeeping the merge made unnecessary.

**Worked example — the six-phase process across courses 1 and 2.** `data-analysis-process` is defined once in `01-foundations/02-the-data-analysis-process`, carrying `sequence: ["Ask","Prepare","Process","Analyze","Share","Act"]`. Course 2's decision-making lesson does *not* restate the phases; its frontmatter says:

```yaml
revisits:
  - termId: data-analysis-process
    note: "This entire course lives inside the Ask phase — everything here is upstream of touching any data."
  - termId: data-visualization
    note: "Dashboards appear here only as a decision-support artifact; the design principles come in Course 6."
```

The first renders as a backward link, the second as an unlinked forward note, with no author input beyond the prose. Inverting this graph at build time also gives a free "everywhere this term appears" list on the glossary entry page.

---

## Metadata: frontmatter vs sidecar

**Per-lesson metadata → YAML frontmatter in the `.md`. Everything cross-cutting → JSON** (`course.json`, `glossary.json`).

The authoring unit is one file: writing a lesson emits one artifact, and a reviewer sees the claimed terms and the prose backing them *in the same diff hunk*. A separate metadata file drifts the first time a lesson is split or retitled, invisibly. Validation never touches the markdown body — `gray-matter` reads the frontmatter block and the validator checks it. Cross-cutting collections go the other way because their invariants are whole-collection ones (unique term ids, ordering completeness); scattering those across frontmatter would mean parsing every lesson to answer them.

**Anything derivable is derived.** `readingTimeMin`, `slug` and `headings` are computed at build, never authored — an LLM asked to estimate reading time produces a plausible-looking wrong number that no reviewer will check.

**Cheatsheet tables are just markdown tables.** Nothing in the pilot consumes table rows as data, so they stay in the prose where they are easiest to write and read. If a later practice type genuinely needs them structured, extract them then. This does make GFM table support a real requirement, which is why it is on the spike list.

---

## Application structure

### Routes

File-based under `src/routes/`. TanStack Router's typed search params carry practice-session configuration, making sessions deep-linkable.

```
/                                          Course list
/courses/$courseSlug                       Course intro (index.md) + lesson list
/courses/$courseSlug/lessons/$lessonSlug   Lesson
/glossary                                  A–Z, filtered by search params; rows are anchored by term id
/practice                                  Deck builder, filtered by search params
/practice/session                          Active session
```

**Glossary and practice are single pages, scoped by search params.** A course page links to `/glossary?course=01-foundations` and `/practice?course=01-foundations`; a lesson links to `/practice?course=01-foundations&lesson=02-the-data-analysis-process`. Same page, same code, filter pre-selected and visible in the UI so it can be widened in one click. This is why there is no `/courses/$id/glossary` route — it would be the same component with a hardcoded filter.

Search is a `/` command palette (shadcn `command` over `src/lib/search.ts`) rather than a `/search` route — the right shape for "I half-remember a term, take me to it".

### Loading strategy

**Metadata eager, lesson bodies lazy.** `import.meta.glob` eager over the generated metadata index is correct (small, needed for nav, search and practice). Eager-globbing every lesson body would put all prose in the entry chunk. This decides whether `loader.ts` returns content or promises, and retrofitting it touches every lesson route — so it is settled now even though the pilot is small enough not to notice.

### Components worth building

- **`TermAwareAnchor`** — the `components={{ a: … }}` substitution passed to the markdown renderer. An href matching `/glossary#<id>` renders a glossary hover-card; anything else renders normally. Definitions surface where they are used instead of requiring a trip to another page, and the card reads the same `glossary.json` record the glossary page renders — one definition, two surfaces.
- **`<RevisitCallout>`** — rendered by the lesson route from frontmatter `revisits`, not from the body, so prose and metadata cannot disagree. Backward references link; forward ones render unlinked.
- **`<CardReviewer>`** — keyboard-first: **Space/Enter** to reveal and then advance, **A** to re-queue a card later in this session. The bindings are printed under the buttons rather than left to be discovered. Anything else does not get used twice.

### Persistence

**The app is stateless.** Nothing is tracked, scheduled or remembered between visits: no read/unread, no completion, no spaced-repetition history, no due counts, no resume. You open a lesson when you want to read it and open practice when you want to drill.

The single exception is the theme, because a toggle that resets on reload is worse than no toggle:

| Key | Contents |
|---|---|
| `theme` | `"light" \| "dark" \| "system"` |

That is the entire persistence layer — one string, read and written in `src/lib/theme.ts`. There is no `storage.ts`, no versioning scheme and no migration path, because there is nothing to migrate.

Everything else that looks like state is derived at render time or held in React state for the life of a session and thrown away.

---

## UI

Three principles, and everything below follows from them.

**This is a review tool, not a course.** The material has already been studied once, so nothing tracks completion — no ticks, no percentages, no "2 of 5 done". Position within a course is still shown, because knowing where you are is navigation, not progress.

**Keyboard-first.** `/` opens search from anywhere, as in vim; space flips a card; `1`–`4` rate it; `j`/`k` move between lessons. A study tool that needs the mouse gets used twice.

**One definition, many surfaces.** A glossary definition is authored once and appears in the hover-card, the glossary list, the term page and the flashcard. Nothing is retyped.

### Shell

Collapsible left sidebar (shadcn `sidebar`), content column, and on lesson pages a right-hand "on this page" rail at ≥1280px. Below `md` the sidebar becomes a sheet behind a hamburger and the right rail disappears. Dark mode defaults to system.

`/` is the course list — there is no dashboard, because with nothing tracked there would be nothing on it.

```
┌────────────────────┬──────────────────────────────────────────────────────────────┐
│ Data Analytics  /  │  Courses                                           ☾         │
│                    │                                                              │
│ ▸ 1 Foundations    │   1   Foundations: Data, Data, Everywhere              →     │
│ ▸ 2 Ask Questions  │       5 lessons                                              │
│                    │                                                              │
│   Glossary         │   2   Ask Questions to Make Data-Driven Decisions      →     │
│   Practice         │       4 lessons                                              │
│                    │                                                              │
│                    │   3   Prepare Data for Exploration                  soon     │
│                    │       not yet written                                        │
│                    │                                                              │
└────────────────────┴──────────────────────────────────────────────────────────────┘
```

A list rather than a card grid: nine courses as cards is a lot of visual weight for what is really a nine-item table of contents. Courses with `status: "planned"` render greyed and unclickable, so the shape of the whole thing is visible from day one without pretending the content exists.

### Lesson

`●` marks the current lesson — position, not progress. Term links get a dotted underline: visible enough to invite a hover, quiet enough not to shred the prose. Prev/next at the foot, so a course reads straight through.

```
┌───────────────────┬──────────────────────────────────────────┬───────────────────┐
│ Data Analytics  / │ Course 1 › The Data Analysis Process   ☾ │ ON THIS PAGE      │
│                   │                                          │ ─────────────     │
│ ▾ 1 Foundations   │ The Data Analysis Process                │ The six phases    │
│     What Analysts │ Lesson 2 of 5 · Refresher · 3 min        │ Where it bends    │
│   ● The Data Ana… │ ────────────────────────────────────     │ Common traps      │
│     Data Types    │                                          │                   │
│     The Toolbox   │ Six phases carry a question from         │                   │
│     Fair & Impact │ "someone asked" to "something changed".  │                   │
│                   │                                          │                   │
│ ▸ 2 Ask Questions │ ## The six phases                        │                   │
│                   │                                          │                   │
│   Glossary        │ Ask → Prepare → Process → Analyze →      │                   │
│   Practice        │ Share → Act. The first is where most     │                   │
│                   │ data analytics projects quietly fail.    │                   │
│                   │ └── dotted underline = term link         │                   │
│                   │                                          │                   │
│                   │ ──────────────────────────────────────   │                   │
│                   │      Practice this lesson · 6 cards →    │                   │
│                   │ ← What Analysts Do      Data Types →     │                   │
└───────────────────┴──────────────────────────────────────────┴───────────────────┘
```

**The footer practice link** is `/practice?course=01-foundations&lesson=02-the-data-analysis-process` — both segments come straight off the route params, since `LessonId` is already path-shaped. It builds a deck from the terms this lesson *defines* (those whose canonical `lessonId` matches), not terms it merely revisits: practice what a lesson taught you, and let the revisit callout send you back to the lesson that owns the rest. The count is shown so the size is known before clicking.

**Term links trigger on hover after ~300 ms**, so brushing past a word does nothing. They also open on keyboard focus and on tap, which is what makes them usable at all on touch. Every occurrence is linked rather than first-mention-only — simpler to author, and consistent for a reader who lands mid-page.

### Course

The sidebar expands to this course's lessons on arrival. The two links at the foot are the whole scoping mechanism — they open the global pages with a filter applied.

```
┌────────────────────┬──────────────────────────────────────────────────────────────┐
│ Data Analytics  /  │  Courses › Foundations                             ☾         │
│                    │                                                              │
│ ▾ 1 Foundations    │  Course 1                                                    │
│     What Analysts  │  Foundations: Data, Data, Everywhere                         │
│     The Data Ana…  │  ──────────────────────────────────────────────────────      │
│     Data Types     │                                                              │
│     The Toolbox    │  What to expect from this course, and how the lessons        │
│     Fair & Impact  │  fit together.  (index.md prose — 2 or 3 sentences)          │
│                    │                                                              │
│ ▸ 2 Ask Questions  │  Lessons                                                     │
│                    │   1  What Data Analysts Actually Do   Refresher · 3 min  →   │
│   Glossary         │   2  The Data Analysis Process        Refresher · 3 min  →   │
│   Practice         │   3  Data Types and Structures        Cheatsheet         →   │
│                    │   4  The Analyst's Toolbox            Cheatsheet         →   │
│                    │   5  Fair and Impactful Data Work     Refresher · 4 min  →   │
│                    │                                                              │
│                    │  ──────────────────────────────────────────────────────      │
│                    │  Glossary · 14 terms   →        Practice · 30 cards   →      │
└────────────────────┴──────────────────────────────────────────────────────────────┘
```

Those two foot links resolve to `/glossary?course=01-foundations` and `/practice?course=01-foundations`. The counts are worth keeping here — unlike on the course list, they tell you the size of the thing you are about to open.

**The intro (`index.md`) is deliberately tiny — two or three sentences.** It says what the course covers and how its lessons hang together, nothing more. It is not a summary of the material and it is not a table of contents, because the lesson list directly below already is one.

Hover (or focus, or tap) a term link:

```
      data analytics
      ╭──────────────────────────────────────────────╮
      │ data analytics                    Course 1   │
      │ The collection, transformation and           │
      │ organisation of data to draw conclusions,    │
      │ make predictions and drive decisions.        │
      │                       See in glossary →      │
      ╰──────────────────────────────────────────────╯
```

"See in glossary" goes to `/glossary#data-analytics` — the row is anchored by term id, so it scrolls straight to it. There is no per-term route.

Revisit callouts, rendered from frontmatter. Direction is computed, and it decides the treatment:

```
 ╭───────────────────────────────────────────────────────────────╮
 │ ↩  Covered in Course 1 · The Data Analysis Process        →   │
 │    This whole course lives inside the Ask phase — everything  │
 │    here is upstream of touching any data.                     │
 ╰───────────────────────────────────────────────────────────────╯

 ╭───────────────────────────────────────────────────────────────╮
 │ →  Comes later · Course 6                          not yet    │
 │    Dashboards appear here only as decision support; the       │
 │    design principles come in Course 6.                        │
 ╰───────────────────────────────────────────────────────────────╯
```

### Flashcard session

Full-bleed, sidebar hidden — the one screen that gets the whole viewport.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ ← Exit                   Course 1 · Lesson 2                     3 / 6      │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                      data-driven decision-making                             │
│                                                                              │
│                       ── press space to reveal ──                            │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

              ↓ space

┌──────────────────────────────────────────────────────────────────────────────┐
│ ← Exit                   Course 1 · Lesson 2                     3 / 6      │
├──────────────────────────────────────────────────────────────────────────────┤
│                      data-driven decision-making                             │
│                    ────────────────────────────                              │
│           Using facts and data to guide a business decision                  │
│           rather than intuition alone.                                       │
│                                                                              │
│                        Course 1 · Lesson 2  →                                │
├──────────────────────────────────────────────────────────────────────────────┤
│              [ Again later ⟨r⟩ ]            [ Next ⟨→⟩ ]                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

The link to the source lesson matters: a card you cannot answer should be one click from the prose that explains it.

### End of session

The deck ends on a consolidated glossary of exactly what was just drilled — the terms behind the cards, deduplicated, with their definitions. Having seen them one at a time under recall pressure, this is the pass where they sit together and the relationships show.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ ← Exit                      Session complete                                 │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  6 cards · 3 terms · Course 1 · Lesson 2                                     │
│  ──────────────────────────────────────────────────────────────────────      │
│                                                                              │
│  data analysis process                          Course 1 · Lesson 2  →       │
│  The six phases that carry a business question from "someone asked"          │
│  to "something changed".                                                     │
│                                                                              │
│  data lifecycle                                 Course 1 · Lesson 2  →       │
│  The stages data moves through from creation to destruction.                 │
│                                                                              │
│  data-driven decision-making                    Course 1 · Lesson 2  →       │
│  Using facts and data to guide a business decision rather than               │
│  intuition alone.                                                            │
│                                                                              │
│  ──────────────────────────────────────────────────────────────────────      │
│      [  Practice again  ]          [  Change deck  ]                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Practice again** reshuffles the same deck; **Change deck** returns to the builder with the current filters intact. The rows are the same component the glossary page uses, so this screen costs almost nothing to build.

### Deck builder

One page. Arriving from a course or lesson link pre-selects a filter rather than opening a different screen — the selection stays visible, so widening it back to everything is one click.

```
┌────────────────────┬──────────────────────────────────────────────────────────────┐
│ Data Analytics  /  │  Practice                                          ☾         │
│                    │                                                              │
│ ▸ 1 Foundations    │  Course   ( All )  (• 1 Foundations )  ( 2 Ask Questions )   │
│ ▸ 2 Ask Questions  │  Lesson   ( All )  ( 1 )  (• 2 )  ( 3 )  ( 4 )  ( 5 )        │
│                    │  Topic    ( All )  ( process )  ( data-types )  ( bias… )    │
│   Glossary         │  ──────────────────────────────────────────────────────      │
│   Practice         │  6 cards from 3 terms                                        │
│                    │                                                              │
│                    │            [       Start session       ]                     │
└────────────────────┴──────────────────────────────────────────────────────────────┘
```

**There is no card-type filter.** All four variants always mix, shuffled. Two of the names are jargon and the other two apply to only a handful of terms, so the control would have been four checkboxes nobody meaningfully uses. Variants stay in the data as generators; they are simply not vocabulary the interface exposes — which is also why the session header no longer names one.

The count reads **"6 cards from 3 terms"** because one term yields several cards, keeping the relationship between deck size and glossary size obvious. Every control writes to a search param, so any deck is a bookmarkable URL and the lesson footer link is just that URL with two params set.

### Glossary

One page, filters in the URL. Arriving from a course pre-selects that course's chip; clicking `( All )` widens it.

```
┌────────────────────┬──────────────────────────────────────────────────────────────┐
│ Data Analytics  /  │  Glossary                                          ☾         │
│                    │                                                              │
│ ▸ 1 Foundations    │  [ filter terms…                                    ]        │
│ ▸ 2 Ask Questions  │                                                              │
│                    │  Course   ( All )  (• 1 Foundations )  ( 2 Ask Questions )   │
│   Glossary         │  Topic    ( All )  ( process )  ( data-types )  ( bias… )    │
│   Practice         │  ──────────────────────────────────────────────────────      │
│                    │  14 terms                                                    │
│                    │                                                              │
│                    │  A                                                           │
│                    │    analytical thinking            Course 1 · Lesson 1        │
│                    │    Identifying and defining a problem, then solving it       │
│                    │    with data.                                                │
│                    │    ──────────────────────────────────────────────────        │
│                    │  D                                                           │
│                    │    data analysis process          Course 1 · Lesson 2        │
│                    │    The six phases that carry a business question from        │
│                    │    "someone asked" to "something changed".                   │
│                    │                                                              │
│                    │    data analytics                 Course 1 · Lesson 1        │
│                    │    The collection, transformation and organisation of        │
│                    │    data to draw conclusions and make predictions.            │
└────────────────────┴──────────────────────────────────────────────────────────────┘
```

**Definitions render inline**, so the list is the reference — no click required, and no per-term route. Each row is anchored by term id (`/glossary#data-analytics`) so the hover-card and the search palette can deep-link into it. The `Course · Lesson` label links to the lesson that defines the term.

### `/` search palette

Opened with no query, it is a jump menu rather than an empty box. There is no recent-searches list, because nothing is remembered.

```
       ╭──────────────────────────────────────────────────────────╮
       │  🔍  Search terms, lessons and courses…                  │
       ├──────────────────────────────────────────────────────────┤
       │  JUMP TO                                                 │
       │  › Glossary                                              │
       │    Practice                                              │
       │    All courses                                           │
       ├──────────────────────────────────────────────────────────┤
       │  Enter open   ↑↓ navigate   Esc close        /  anywhere   │
       ╰──────────────────────────────────────────────────────────╯
```

Typing searches terms, aliases, lesson titles and lesson summaries — grouped by kind, term matches first, since "I half-remember a word" is the case this exists for.

```
       ╭──────────────────────────────────────────────────────────╮
       │  🔍  data int▏                                           │
       ├──────────────────────────────────────────────────────────┤
       │  TERMS                                                   │
       │  › data integrity                   Course 4 · Lesson 1  │
       │    data ethics                      Course 3 · Lesson 2  │
       │                                                          │
       │  LESSONS                                                 │
       │    Data Types and Structures        Course 1 · Lesson 3  │
       │                                                          │
       │  COURSES                                                 │
       │    Process Data from Dirty to Clean          Course 4    │
       ├──────────────────────────────────────────────────────────┤
       │  Enter open   ↑↓ navigate   Esc close        /  anywhere   │
       ╰──────────────────────────────────────────────────────────╯
```

A term result opens `/glossary#data-integrity`; a lesson or course opens its route. There is no "practice this term" shortcut — deck filters are course, lesson and topic, so a single term is not a deck, and adding a fourth filter to serve one keyboard shortcut is not worth it.

---

## Content inventory — built

Course 1's source notes were rewritten upstream into genuine content (403 lines across 4 modules, with authoritative glossary tables), so Course 1 is **authored in full from that source** rather than stubbed. Courses 2–9 are scaffolded as `planned` metadata only: their source files still carry an explicit *"written from lesson titles, treat as unverified and likely wrong"* warning, so seeding glossary terms from them would launder guesses into the app as fact.

### Course 1 — Foundations: Data, Data, Everywhere (`01-foundations`) — 9 lessons, all authored

| # | Lesson | Format | Canonical terms |
|---|---|---|---|
| 1 | What Data Analytics Is | refresher | `data`, `dataset`, `data-analysis`, `data-analyst`, `data-analytics`, `data-science`, `data-ecosystem`, `cloud` |
| 2 | The Data Analysis Process | refresher | `data-analysis-process` (sequence), `stakeholders`, `people-analytics` |
| 3 | The Data Life Cycle | cheatsheet | `data-life-cycle` (sequence) |
| 4 | Analytical Thinking | refresher | `analytical-skills`, `analytical-thinking`, `context`, `technical-mindset`, `data-design`, `data-strategy`, `correlation`, `root-cause`, `five-whys`, `gap-analysis` |
| 5 | Data-Driven Decision-Making | refresher | `data-driven-decision-making`, `gut-instinct`, `business-task` |
| 6 | The Analyst's Toolbox | cheatsheet | `spreadsheet`, `database`, `query-language`, `sql`, `data-visualization` |
| 7 | Spreadsheets and SQL Basics | cheatsheet | `attribute`, `observation`, `formula`, `function`, `query` |
| 8 | Fair and Impactful Data Work | refresher | `fairness`, `data-ethics`, `oversampling`, `self-reporting` |
| 9 | The Analyst Career Landscape | cheatsheet | *(none — revisits only)* |

**Lessons are authored units, not modules.** The 4 source modules decompose into 9 lessons: module 1 alone carries the vocabulary, the process, analytical thinking and decision-making, which are four separate things to revisit.

**Every mechanism is exercised by real content:** 4 refreshers and 5 cheatsheets; a backward revisit (lesson 3 → lesson 2) and a forward one (lesson 2 → lesson 6), both with direction *computed*, not authored; two terms carrying a `sequence`; and lesson 9 with an empty `terms` array, proving a lesson need not define anything.

**Glossary — 39 terms.** 31 come verbatim from the course's own glossary tables. The other 8 are defined inline in the source prose and earned an entry: `data-analysis-process`, `data-life-cycle`, `cloud`, `people-analytics`, `correlation`, `five-whys`, `gut-instinct`, `data-ethics`.

**Eleven `confusableWith` clusters**, each one a distinction the source explicitly draws: analysis↔analytics↔science, process↔life-cycle (the source flags this as the most-confused pair), skills↔thinking, design↔strategy, formula↔function, spreadsheet↔database, query↔query-language↔sql, attribute↔observation, driven↔gut-instinct, correlation↔root-cause, fairness↔ethics, oversampling↔self-reporting, data↔dataset.

**Generated deck: 56 cards, nothing hand-authored.** 39 primary (one direction per term) + 2 `sequence` + 15 `contrast`. Contrast cards only pair terms that are *both* inside the current filter, so a lesson-scoped deck drops cross-lesson pairs rather than showing half a comparison.

---

## Phasing

Each phase leaves a working, useful app.

1. ~~**Spike + scaffold**~~ — done. Vite 8 / React 19 / TS 7, TanStack Router file-based, Tailwind 4, shadcn components copied in.
2. ~~**Data model + tooling**~~ — done. `src/content/types.ts`, `scripts/build-content.ts` gating the build.
3. ~~**Lessons**~~ — done. Course and lesson routes, sidebar nav, prev/next, `TermAwareAnchor`, `<RevisitCallout>`, "on this page" rail.
4. ~~**Glossary**~~ — done. A–Z, URL-driven filters, 39 terms, hover-cards live.
5. ~~**Practice**~~ — done. Generated decks, keyboard-first reviewer, re-queue, end-of-session recap.
6. ~~**Polish**~~ — done. `/` search palette, theme toggle, static build verified.

**Remaining:** authoring courses 2–9, which is blocked on those source files being rewritten upstream — they are currently marked unverified. The decision on how to treat courses 8–9 is still open.

**Deployment: GitHub Pages, configured.** `.github/workflows/deploy.yml` builds on push to `main` and publishes `dist`. Two things make an SPA work there:

- `base` comes from `BASE_PATH` (set to `/<repo>/` by the workflow) and the router's `basepath` reads `import.meta.env.BASE_URL`, so both agree.
- Pages has no rewrite rules — it serves `404.html` for any unknown path. A build plugin copies `index.html` to `404.html`, which is what lets a deep link boot the app. The response carries a 404 status; the page itself works normally.

---

## Verification

- `pnpm dev` and walk every route: home → course → lesson → glossary → term → practice, in both themes and at mobile width.
- **Break the content deliberately** and confirm the build fails with a useful message: point a `revisits` entry at a non-existent term; write a `[x](/glossary#nope)` link; claim the same term in two lessons' `terms`; remove a lesson from `lessonOrder`.
- Check the forward/backward rendering actually works: the Course 2 lesson should link *back* to the Course 1 process lesson, and render the Course 6 visualisation reference as an unlinked note.
- Open the app in a fresh private window and confirm it behaves identically to a returning visit — the only thing localStorage holds is the theme.
- Run a practice session end to end and confirm re-queued cards come back within the session, then reload and confirm the session starts clean.
- Open `/practice?course=01-foundations&lesson=02-the-data-analysis-process` directly and confirm the filters render pre-selected, then widen to `All` and confirm the deck grows.
- `pnpm build && pnpm preview` — check a deep link like `/courses/01-foundations/lessons/02-the-data-analysis-process` loads directly (the classic SPA fallback trap), and inspect the bundle to confirm lesson bodies are in lazy chunks rather than the entry.

---

## Theme — done, in `src/styles/theme.css`

Catppuccin Latte (light) and Mocha (dark), rebuilt as Tailwind-shaped OKLCH scales. The file is finished and audited; implementation is an import, not a task.

**Built from** the official palette JSON (`catppuccin/palette` v1.8.0), which ships OKLCH natively — values were cross-checked against an independent sRGB→OKLab implementation and matched to four decimal places.

### How it is structured

**One palette, not two.** Latte and Mocha are two points on the same ramp rather than two separate themes, which is how Tailwind palettes are used in practice — `blue-600` in light, `blue-400` in dark. Each scale carries a single hue and passes through the authentic Mocha value at one step and the Latte value at another.

**Hue ties go to Mocha.** Five hues agree closely between flavours (rosewater, pink, green, blue, lavender — all within 4°) and are effectively one colour. Five diverge: sky 25°, yellow 19°, teal 18°, red 17°, sapphire 16°. Those scales follow Mocha, so their Latte anchor lands near but not exactly on the published Latte hex. That is the intended consequence of preferring Mocha.

**The neutral scale needed no interpolation at all.** Latte's light greys and Mocha's dark greys turn out to be one continuous ramp — L 0.958 → 0.183, hue 264° → 284°, chroma rising to ~0.034 mid-scale then falling, which is exactly the Tailwind chroma bell curve. So `neutral-50…950` is eleven verbatim Catppuccin values: Latte base through Latte subtext0, then Mocha surface2 through Mocha crust.

**Semantic tokens use verbatim Catppuccin, not scale steps.** `--primary` in light is the real Latte mauve at hue 297.02°, not `mauve-500` at 304.77°. The scales exist for ad-hoc utilities (`bg-mauve-300`); the semantic layer stays authentic.

### Contrast

Every foreground/background pair clears **WCAG 2.1 AA** — the audit table is in the file. Two Latte values are deliberately not the obvious Catppuccin pick, because the obvious pick failed:

- `--muted-foreground` uses **subtext1**, not subtext0 — subtext0 lands at 4.37:1 against the background.
- `--destructive` uses **red-600** from the generated scale, not Latte red — Latte red is 4.46:1 on card.

`--border` is exempt from the 3:1 rule: it draws decorative dividers, not component boundaries, so WCAG 1.4.11 does not apply. Anything conveying state uses `--input` or `--ring`, both of which clear 3:1. shadcn's own default border is ~1.2:1 on white for the same reason.

### Using it

Import as the app stylesheet; `@import "tailwindcss"` and `@custom-variant dark` are already inside. Dark mode is class-based — toggle `.dark` on `<html>` from `src/lib/theme.ts`.

Scales included: `neutral`, `mauve`, `blue`, `red`, `green`, `peach`, `yellow`, `teal`, `lavender`. To add another Catppuccin hue later, the recipe is in the file header — take the Mocha hue, anchor the Mocha and Latte values at their nearest lightness steps, interpolate L and C between them, and gamut-clamp chroma.
