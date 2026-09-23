---
id: 03-prepare-data/11-accessing-sorting-and-filtering-data
courseId: 03-prepare-data
title: Accessing, Sorting, and Filtering Data
status: authored
summary: Pulling data in from CSV files, other spreadsheets, and web tables, then narrowing it down with sorting and filtering once it's in front of you.
format: refresher
terms:
  - csv-file
revisits:
  - termId: sorting
    note: Course 2 defined sorting and filtering against a single spreadsheet. This lesson is the same two tools applied to data pulled in from an external source.
  - termId: filtering
    note: Course 2 defined filtering alongside sorting. Nothing changes about the operation itself once the data comes from a CSV, another spreadsheet, or a database table.
topics:
  - databases
  - spreadsheets
sourceModules:
  - coursera:prepare-data-for-exploration#module-3-accessing-different-data-sources
  - coursera:prepare-data-for-exploration#module-3-sorting-and-filtering
---

Before you can sort or filter anything, the data has to be in front of you. Spreadsheet tools can pull data in from another spreadsheet, from a web page's HTML tables, or — most commonly — from a **[CSV file](/glossary#csv-file)**: a plain-text file that separates values with commas, one of the most portable formats for moving structured data between systems. Importing one usually just means choosing where the incoming data lands (a new sheet, a new spreadsheet, a specific range) and confirming the separator character, since not every CSV actually uses a comma.

## Sorting

**[Sorting](/glossary#sorting)** arranges data into a meaningful order — ascending or descending, alphabetical or numerical — across an entire sheet or within a single column. It can also run on multiple criteria at once: sorting a sales dataset by state, then by city within each state, groups the data two levels deep in a single pass. Freezing the header row first keeps column labels visible while you work, and sorting a properly selected range keeps each row's details together as it moves.

## Filtering

**[Filtering](/glossary#filtering)** shows only the data meeting a specific condition, temporarily hiding the rest — the hidden rows are still there, just out of view until the filter comes off. Where sorting reorders everything, filtering narrows what's visible: showing only the sales reps who worked with one particular product line, for instance, without touching the reps or products you filtered out.

Sorting and filtering both work the same way whether the data sits in a spreadsheet or a database table — the tool changes, but the goal (get from a large, complex dataset down to only the rows relevant to the current question) doesn't.
