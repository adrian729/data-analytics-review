---
id: 05-analyze-data/06-combining-data-in-spreadsheets
courseId: 05-analyze-data
title: Combining Data in Spreadsheets
status: authored
summary: Importing and merging spreadsheet datasets without creating duplicates, and concatenating and splitting text strings with CONCATENATE, LEN, LEFT, RIGHT, and FIND to produce analysis-ready fields.
format: refresher
terms:
  - text-string
revisits:
  - termId: concatenate-function
    note: Course 4 defined CONCATENATE as the spreadsheet function that joins two or more text strings. This lesson revisits its spreadsheet syntax and the separator pattern for building full names and addresses.
  - termId: data-merging
    note: Course 4 defined data merging as combining two or more datasets into one. This lesson applies it to spreadsheets via IMPORTRANGE and to string-level merging via CONCATENATE.
  - termId: compatibility
    note: Course 4 defined compatibility as how well two datasets work together. Here the same check appears before any import — mismatched columns or keys mean the sheets are not yet compatible.
  - termId: length-function
    note: Course 4 introduced LEN/LENGTH as counting characters in a text string. Here LEN is the diagnostic that reveals whether datetime strings are the expected length before splitting them.
  - termId: left-function
    note: Course 4 defined LEFT as returning a set number of characters from the left side of a string. This lesson uses it to isolate the date portion of a datetime string in Sheets.
  - termId: right-function
    note: Course 4 defined RIGHT as returning characters from the right side of a string. This lesson uses it to isolate the time portion of the same strings.
  - termId: trim-function
    note: Course 4 defined TRIM as removing leading, trailing, and repeated spaces. This lesson notes it as the fix when LEN flags an unexpected length caused by stray spaces.
  - termId: split-function
    note: Course 4 defined SPLIT as dividing text around a delimiter into separate cells. This lesson notes it as the alternative fix when a datetime string needs to be broken apart.
topics:
  - spreadsheets
  - data-quality
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-2-format-and-adjust-data
---

Bringing data together in a spreadsheet is usually an import followed by a string operation, and both steps can silently degrade the table if the structure is not checked first. [Data merging](/glossary#data-merging) in Sheets most often uses `IMPORTRANGE(spreadsheet_url, range_string)` to pull a range — for example retirement-contribution rows into a year-end salaries sheet that already holds bonuses — so analysts can determine who contributed without retyping. The reading stresses that Sheets has no undo for a bad merge at scale: if two sources share keys or overlapping rows, the combined sheet can carry hidden duplicates, which is exactly the [compatibility](/glossary#compatibility) check Course 4 flagged before any merge — whether the columns line up, whether keys mean the same thing, and whether the result will need de-duplication after import.

## Merging text strings with CONCATENATE

Once datasets are in one place, joining fields is how new variables are built. A **[text string](/glossary#text-string)** is a group of characters within a cell, most often composed of letters, and joining two or more of them is called concatenation. In Sheets the tool is [CONCATENATE](/glossary#concatenate-function) — `=CONCATENATE(item 1, item 2)` with additional items separated by commas — and where a separator is needed, such as a first and last name for mailing labels, the pattern becomes `=CONCATENATE(item 1, " ", item 2)` so a space sits between the values; the same logic merges a street address and suite number or any vendor fields stored in separate columns. The same operation is noted more briefly as combining columns in the conversion reading, and the principle carries to SQL's `CONCAT` discussed in the next lesson.

## Working with text strings in Sheets

The Citi Bike trip data makes the string toolkit concrete: start-time and stop-time columns hold a single datetime string like `2018-03-31 23:11:01` that contains both date and time. [LEN](/glossary#length-function) — `=LEN(C2)` — returns 19, confirming the expected length; FIND — `=FIND(" ", C3)` — is case-sensitive and here returns 11, locating the space that separates date from time; [RIGHT](/glossary#right-function) — `=RIGHT(C2, 8)` — then returns the eight rightmost characters as the time, and [LEFT](/glossary#left-function) — `=LEFT(D2, 10)` — returns the ten leftmost characters as the date, each written into its own column with a header like Time or Date and filled down. The reading notes that FIND must match case exactly, and where an unexpected length appears, [TRIM](/glossary#trim-function) or [SPLIT](/glossary#split-function) are the usual fixes — the same diagnostic-and-repair pairing that Course 4's cleaning lesson introduced for county codes and extra spaces.
