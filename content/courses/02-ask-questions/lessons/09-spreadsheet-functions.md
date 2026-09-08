---
id: 02-ask-questions/09-spreadsheet-functions
courseId: 02-ask-questions
title: Spreadsheet Functions
status: authored
summary: The five basic math functions every analyst reaches for first — AVERAGE, COUNT, MAX, MIN, SUM — plus COUNTIF for conditional counting.
format: cheatsheet
terms:
  - math-function
  - average-function
  - count-function
  - countif-function
  - max-function
  - min-function
  - sum-function
revisits:
  - termId: function
    note: Course 1 drew the line between a formula (you write it) and a function (the application ships it). This lesson is the specific functions worth knowing first.
topics:
  - spreadsheets
sourceModules:
  - coursera:ask-questions-make-decisions#module-3-functions-in-spreadsheets
---

A [function](/glossary#function) is a preset command that performs a specific task on spreadsheet data — a [math function](/glossary#math-function) is one used as part of a mathematical formula. Like formulas, functions always start with `=`, and most spreadsheet applications autocomplete valid function names as you type to help avoid syntax errors.

| Function | What it returns |
|---|---|
| **[AVERAGE](/glossary#average-function)** | The average of the values in a selected range. |
| **[COUNT](/glossary#count-function)** | The number of cells in a range that meet a specific criteria. |
| **[MAX](/glossary#max-function)** | The largest numeric value in a range. |
| **[MIN](/glossary#min-function)** | The smallest numeric value in a range. |
| **[SUM](/glossary#sum-function)** | The sum of the values in a selected range. |

## Conditional counting

[COUNTIF](/glossary#countif-function) is `COUNT`, but only for cells matching a condition — e.g. in an expense sheet, `=COUNTIF(range, "airfare")` counts only the reimbursement rows tagged "airfare". It's the pattern to reach for whenever the question is "how many, but only where...".

Clicking into a cell that holds a function highlights the cells it reads from in matching colors in the formula bar — useful for untangling a complex function at a glance. Press **F2** to jump to and highlight that range directly on the sheet.
