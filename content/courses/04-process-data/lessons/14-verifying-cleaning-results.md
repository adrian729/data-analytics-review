---
id: 04-process-data/14-verifying-cleaning-results
courseId: 04-process-data
title: Verifying Cleaning Results
status: authored
summary: Confirming a cleaning effort actually worked — comparing against the original dirty data, checking the checklist, and using CASE statements to fix what remains in SQL.
format: refresher
terms:
  - verification
  - case-statement
  - find-and-replace
  - counta-function
  - data-cleaning-verification-checklist
revisits:
  - termId: data-validation
    note: This course's data validation checks data before it enters a dataset. Verification is the equivalent check afterward — confirming that a cleaning pass actually worked.
  - termId: pivot-table
    note: Course 2 defined the pivot table as a data-summarization tool. Verification reaches for it again here — counting how many times each value in a column appears is a fast way to confirm an error occurred only once.
topics:
  - data-quality
sourceModules:
  - coursera:process-data-dirty-to-clean#module-4-manually-cleaning-data
---

**[Verification](/glossary#verification)** confirms that a data-cleaning effort was well executed and that the resulting data is accurate and reliable — a stamp of approval before analysis begins, not an optional extra step. Skipping it risks trusting a result built on a mistake as small as a single leftover semicolon.

Verification runs in three steps: go back to the original, unclean dataset and compare it against the cleaned data to spot common problems; manually clean up anything that remains; then step back and confirm the business problem, the project's goal, and that the data can actually solve it. That last step matters because projects drift — an e-commerce satisfaction survey can end up buried in comments about the website itself, pulling the analyst away from the product question it was meant to answer. It's also where a number that doesn't add up gets caught: a satisfaction survey sent to exactly 1,000 customers that comes back with more than 1,000 responses is a signal that either someone found a way to submit twice, or a field got duplicated during cleaning.

## Checking with the checklist

The **[data-cleaning verification checklist](/glossary#data-cleaning-verification-checklist)** is the reference list for the first step above: sources of errors, null data, misspelled words, mistyped numbers, extra spaces and characters, duplicates, mismatched data types, inconsistent strings, inconsistent date formats, truncated data, and whether the data still makes sense given the business logic. No single checklist fits every project — this is a starting point to adapt, not a fixed script.

## Confirming an error occurred only once

A [pivot table](/glossary#pivot-table) summarized with **[COUNTA](/glossary#counta-function)** — which counts every value in a range, not just numeric ones — answers the question a single fix can't: did this error happen once, or throughout the dataset? Counting supplier names and expecting exactly four distinct values, for example, immediately shows whether a misspelling like "Plos" for "Plus" is an isolated typo or a repeated pattern.

## Fixing what's found

- In a spreadsheet, **[Find and replace](/glossary#find-and-replace)** swaps every instance of a specified search term for something else — the direct fix once a pivot table confirms the scope of the problem.
- In SQL, a **[CASE](/glossary#case-statement)** statement steps through conditions and returns a value the moment one is met: `CASE WHEN first_name = 'Tnoy' THEN 'Tony' ELSE first_name END AS cleaned_name` corrects a misspelled name in a new column without touching the stored data, which is useful precisely because it's non-destructive — the original table stays intact if the fix needs revisiting.
