# External sourcing references

When authoring/updating course content and live Coursera access isn't available (no login, or
browser automation is restricted this session), these public repos mirror official Coursera
reading text verbatim and can fill gaps. Only used so far for course 2
(`content/courses/02-ask-questions/`) — course 1 was authored without them.

- `joshua329/Study-Environment` (public, last pushed 2024-09-04) — course 2 module 3
  (spreadsheet) readings: "Learn more about spreadsheet basics", "Quick Reference: Formulas in
  spreadsheets", "More about spreadsheet errors and fixes".
- `nguyenthanhjt/google-data-analytics-professional-certificate-course` (public, last pushed
  2024-08-21) — course 2 module 4 readings: "Working with stakeholders", "Use multiple
  communication strategies to reach your audience", "Limitations of data", "Lead great
  meetings"; also mirrors module 3's "The importance of context" reading.

For course 3 (`content/courses/03-prepare-data/`), both repos were used far more extensively —
cross-referenced against each other for nearly every lesson, not just gap-fills — and both are
now cloned locally as siblings instead of fetched file-by-file via `gh api`:
- `~/projects/google-data-analytics-certificate-resources/google-data-analytics-professional-certificate-course/3_Prepare-Data-for-Exploration/`
  (`nguyenthanhjt` clone) — modules 1-5 (`1_Module-1_Data-types-and-structures` through
  `5_Module-5-Engaging-in-data-community`; module 6 is the course challenge, skipped).
- `~/projects/google-data-analytics-certificate-resources/Study-Environment/Data Analytics/[2024
  Google Analytics]/3. Prepare Data for Exploration/` (`joshua329` clone) — same 5 modules,
  reorganized by topic, each with its own `Glossary terms from module N.md`.
- Not live-verified against Coursera this session — the two clones agreed on every substantive
  point checked, so no live-page spot-check was needed. If they'd disagreed, module 5 (career/
  networking, no course-2-style official glossary file counterpart) would have been the first
  place to check live.

Both snapshots are 1-2 years old. Before shipping repo text verbatim, re-check it against the
live Coursera page — Coursera does revise reading wording over time. Verified 2026-09-08 against
the live `foundations-data` and `ask-questions-make-decisions` courses:

- Module/reading/video structure for both courses is unchanged from these snapshots — no
  renamed, removed, or reordered items found.
- "More about spreadsheet errors and fixes" (shipped in `lessons/10-spreadsheet-errors-and-fixes.md`)
  is word-for-word identical to the live version.
- "The importance of context" had its opening two sentences reworded (the definition of
  "context" was tightened) — substance unchanged. The old repo wording was already superseded
  with the live text when this reading got incorporated into
  `lessons/11-scope-of-work-and-structured-thinking.md`.

This is a spot-check sample, not a full re-verification: 6 readings checked word-for-word (2 from
course 1 — "Origins of the data analysis process", "Use the five whys for root cause analysis";
4 from course 2 — "More about spreadsheet errors and fixes", "The importance of context", "Six
common problem types", "Design compelling dashboards"), out of ~20 readings sourced from these
repos/direct fetches, with no video transcripts re-checked. All 6 matched the live course except
the one reword noted above.

For course 4 (`content/courses/04-process-data/`), the same two local clones were used, again
cross-referenced against each other for every lesson:
- `~/projects/google-data-analytics-certificate-resources/google-data-analytics-professional-certificate-course/4_Process-Data-from-Dirty-to-Clean/`
  (`nguyenthanhjt` clone) — modules 1-4 (`m1_the-important-of-integrity` through
  `m4_verify-n-report-on-cleaning-results`; modules 5-6 are the optional resume unit and course
  wrap-up, skipped). Folder names carry typos ("important", "accurte") not reflected in lesson text.
- `~/projects/google-data-analytics-certificate-resources/Study-Environment/Data Analytics/[2024
  Google Analytics]/4. Process Data from Dirty to Clean/` (`joshua329` clone) — same 4 modules,
  reorganized by topic, each with its own `Glossary terms from module N.md`.
- Not live-verified against Coursera this session — the two clones' module glossaries matched
  each other exactly on every term, so no live-page spot-check was needed.

For course 5 (`content/courses/05-analyze-data/`), the `nguyenthanhjt` clone was primary; the
`joshua329` clone only mirrors modules 1-3 (`Module 1`-`3`, sparse, module 1's glossary file is
empty there) and agreed with it where present. Consequences:

- Module 4 (lessons 12-17) is SINGLE-SOURCED — no second clone to cross-check. Content was kept
  conservative (readings/transcripts + the official module glossary only, no embellishment);
  this is the first place to re-verify against the live course.
- The official per-module glossaries are thin (module 1: only ORDER BY; module 2: only ROUND) and
  two of their terms already existed from course 4, so `glossary.json` (29 terms) leans on the
  cumulative "Course 5 glossary" reading
  (`m4_perform-data-calculations/p7_course_wrap-up/s1_r_course-5-glossary.md`, most of which is
  carryover from courses 1-4 — use it only to catch terms the 2024 course treats as course-5) plus
  concepts genuinely defined in the module prose (e.g. the SUMIF/SUMPRODUCT/array conditional-
  function family).

For course 6 (`content/courses/06-share-data/`), only the `nguyenthanhjt` clone has it —
`~/projects/google-data-analytics-certificate-resources/google-data-analytics-professional-certificate-course/6_Share-Data-Through-the-Art-of-Visualization/`
(modules 1-4; the `joshua329` clone stops at course 5) — so the whole course is single-sourced and
was kept conservative (source prose only, no embellishment). Two extra caveats: its per-module
"glossaries" are heavily polluted with cumulative carryover from earlier courses (HAVING, AVERAGEIF,
ordinal data... appear in the lists but are never taught in course 6 prose) — only terms with actual
teaching prose got defined. Editorial merges/decisions made: `distribution graph` folded into
`histogram` as an alias; `mark`/`channel` defined in lesson 05 (the m1 effective-visualizations
reading teaches them); `bubble/donut/gauge chart` and `misleading visualizations` left undefined
(name-drops only); the official "Spotlightling" typo is kept as an alias of `Spotlighting`;
`story` uses the module-1 glossary line (module 3's has none); `Sort sheet`/`Sort range` are listed
in course 6's official glossary but were defined back in course 5's spreadsheet-sorting lesson,
where the teaching actually happens.

For course 8 (`content/courses/08-capstone/`), the only source is the `nguyenthanhjt` clone
(`8_Google-Data-Analytics-Capstone_Complete-a-Case-Study/`) — the `joshua329` clone stops at
course 5 — and the course publishes **no official per-module glossary**, so all 12 glossary
definitions were derived from the prose itself (verified against the readings during authoring).
Worked-example artifacts live in `module-2.../case-study-1/capstone_case-study-1.md` (full
Cyclistic analysis, done in R) and `Case-Study-Documentation.md` at the clone root; the Bellabeat
packet is a 5-line stub whose real content sits in a PDF, and the COVID Track-B example is an
unfinished forum sketch — lessons 04/05 describe their shape accordingly.

For courses 7 and 9 (`07-python`, `09-job-search`): **no verbatim source exists anywhere** — the
2025 certificate replaced course 7's R course with "Introduction to Data Analysis Using Python"
and course 9 ("Accelerate Your Job Search with AI") is a newer add-on; both post-date every local
mirror (the clone's `7_...R-Programming` folder is the *old* course 7 and was not used). These
two courses are authored as UNVERIFIED DRAFTS from the personal notes in
`~/projects/google-data-analytics-certificate/` (which self-flag "written from lesson titles,
likely wrong") plus public syllabus pages: every lesson carries `status: draft`, an in-body
"Unverified draft" banner, `unverified-notes:` sourceModules instead of `coursera:`, courses sit
at `status: in-progress`, and glossary definitions are restricted to objectively-true
language/career facts. To upgrade: fetch the logged-in Coursera readings/transcripts, correct
each lesson, re-add the official glossaries, then flip statuses and `coursera:` provenance.
