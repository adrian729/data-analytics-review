# Data Analytics — Review

A small, personal, client-only SPA for revisiting the Google Data Analytics Certificate: concise lessons, a glossary, and generated flashcards.

It is a **review tool, not a course**. The material has already been studied once, so nothing tracks completion and nothing is remembered between visits — the only thing in `localStorage` is the theme.

## Running it

```bash
pnpm install
pnpm dev
```

| Script | What it does |
|---|---|
| `pnpm dev` | Builds the content index, then starts Vite |
| `pnpm build` | Content index → typecheck → production build |
| `pnpm content` | Rebuilds the content index on its own |

## How the content works

Everything authored lives in `content/courses/<course>/`:

```
course.json      metadata + the single source of lesson ordering
index.md         a two-or-three sentence course intro
glossary.json    terms whose canonical home is this course
lessons/*.md     one lesson per file, YAML frontmatter + prose
```

`scripts/build-content.ts` walks that tree, computes what can be derived (slug, reading time, headings) and **fails the build** on a broken reference. It enforces three things:

1. Every course, lesson and term id referenced actually resolves.
2. Each term is claimed by exactly one lesson, and that lesson matches the term's own `lessonId` — this is what makes "defined once" real.
3. Every inline `[term](/glossary#term-id)` link resolves, checked with the same Markdown parser the app renders with.

Glossary references are authored as ordinary relative links. They render as a hover-card, work without JavaScript, and deep-link to the anchored glossary row.

## Practice

Flashcards are **generated from the glossary** and never authored, so a definition and its card cannot drift apart. Each term contributes one card per session — recall or recognise, chosen at random — plus a sequence card where the term carries ordered steps, and at most one contrast card pairing it with something it gets confused with.

Sessions are keyboard-first: **Space** or **Enter** to reveal and advance, **A** to re-queue a card later in the same run. Nothing survives the session.

Press **/** anywhere to search.

## Status

Course 1 is authored in full (9 lessons, 39 terms). Courses 2–9 are scaffolded with metadata only — their upstream source notes are still marked unverified, so seeding terms from them would launder guesses into the app as fact.
