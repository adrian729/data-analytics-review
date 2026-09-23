---
id: 04-process-data/12-cleaning-string-variables-in-sql
courseId: 04-process-data
title: Cleaning String Variables in SQL
status: authored
summary: Using LENGTH, SUBSTRING, and TRIM together in SQL to find and fix inconsistent string data at scale.
format: cheatsheet
terms:
  - substring-function
revisits:
  - termId: length-function
    note: Introduced in the spreadsheets lesson as LEN. In SQL it's usually spelled LENGTH, but it does the same thing — flags any row whose string is a different length than expected.
  - termId: trim-function
    note: Introduced in the spreadsheets lesson. TRIM works the same way in SQL — removing the extra space that a LENGTH check just flagged.
  - termId: distinct-keyword
    note: Covered in the previous lesson. Running SELECT DISTINCT on a string column is usually the first move for spotting inconsistent values before deciding how to fix them.
topics:
  - sql
sourceModules:
  - coursera:process-data-dirty-to-clean#module-3-learn-basic-sql-queries
---

Three functions cover most string-cleaning work in SQL, and they're typically used together: find the problem with [LENGTH](/glossary#length-function), isolate it with [SUBSTRING](/glossary#substring-function), and fix it with [TRIM](/glossary#trim-function).

## Finding the problem

`SELECT LENGTH(country) AS letters_in_country FROM customer_data.customer_address` returns the character count for every row in a column that should hold two-letter country codes. Filtering with `WHERE LENGTH(country) > 2` surfaces just the rows that fail the check — country stored as `USA` instead of `US`, for instance.

## Isolating the fix with SUBSTRING

**[SUBSTRING](/glossary#substring-function)** extracts a portion of a string, starting at a position for a specified length. Pulling the first two letters of every country value — `SUBSTRING(country, 1, 2) = 'US'` — puts both the correctly stored `US` rows and the incorrectly stored `USA` rows into the same result, without having to fix the underlying table first. Pairing this with [DISTINCT](/glossary#distinct-keyword) — `SELECT DISTINCT customer_id` — keeps a query like this from double-counting a customer if their record happens to be duplicated too.

## Fixing extra spaces with TRIM

The same `LENGTH` check on a state column can surface a length that doesn't make sense — a two-letter state code like `OH` measuring as three characters means there's a trailing space, not a third letter. `WHERE TRIM(state) = 'OH'` filters correctly regardless of whether the stored value has that extra space or not, the SQL equivalent of the spreadsheet TRIM function cleaning up the same problem.
