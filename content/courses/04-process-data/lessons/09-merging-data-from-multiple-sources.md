---
id: 04-process-data/09-merging-data-from-multiple-sources
courseId: 04-process-data
title: Merging Data from Multiple Sources
status: authored
summary: What breaks when two datasets are combined into one — mismatched columns, incompatible ID schemes, different category vocabularies — and the questions to ask before merging.
format: refresher
terms:
  - data-merging
  - compatibility
  - merger
  - data-mapping
revisits:
  - termId: csv-file
    note: Course 3 defined the CSV file as a plain-text, comma-separated table format. It's still the most common way datasets from different sources arrive before a merge.
topics:
  - data-quality
sourceModules:
  - coursera:process-data-dirty-to-clean#module-2-first-steps-toward-clean-data
---

**[Data merging](/glossary#data-merging)** — combining two or more datasets into one — is routine for a data analyst, and a business **[merger](/glossary#merger)**, an agreement uniting two organizations into a new one, is one of the situations that forces it. When two logistics associations merge to handle e-commerce growth, so does their membership data, and combining genuinely different datasets almost guarantees the result starts out inconsistent and misaligned.

## What typically breaks

- **Column structure**: one association keeps a suite/unit number in its own column; the other folds it into the street address. The number of address columns has to be reconciled before anything else lines up.
- **ID schemes**: one association keys members by email address, the other by a numeric ID. People who belong to both associations now appear as different records under different keys — exactly the setup that produces hidden duplicates.
- **Category vocabulary**: one association has more membership tiers than the other, and uses "Young Professional" where the other says "Student Associate" for the same group. Merging the data means merging the vocabulary too.

## Questions to ask before merging

- Do I have all the data the objective needs?
- Does that data actually exist within these datasets?
- Do the datasets need cleaning, or are they ready to use?
- Are the datasets cleaned to the same standard — how are missing values handled, how recently was each one updated?

**[Compatibility](/glossary#compatibility)** — how well two or more datasets are able to work together — is what these questions are really checking. **[Data mapping](/glossary#data-mapping)**, matching fields from one source to the other, is the mechanical step that follows once compatibility issues are identified: deciding that "Young Professional" and "Student Associate" are the same field value, or that one dataset's combined address column maps to two columns in the other. Spreadsheet tools or SQL queries can both do the actual cleanup and merging — which one makes sense depends on the size and structure of what's being combined.
