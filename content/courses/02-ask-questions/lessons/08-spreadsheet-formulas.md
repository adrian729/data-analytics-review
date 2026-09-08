---
id: 02-ask-questions/08-spreadsheet-formulas
courseId: 02-ask-questions
title: Spreadsheet Formulas
status: authored
summary: The structural vocabulary of a spreadsheet formula — cell references, ranges, operators, order of operations — and the reference-locking behavior (relative/absolute/mixed) that trips people up when copying formulas.
format: cheatsheet
terms:
  - cell-reference
  - range
  - math-expression
  - operator
  - order-of-operations
  - header
  - borders
  - fill-handle
revisits:
  - termId: formula
    note: Course 1 covered the basic `=` syntax. This lesson is reference behavior and the surrounding spreadsheet vocabulary — what changes and what doesn't when a formula gets copied elsewhere.
topics:
  - spreadsheets
sourceModules:
  - coursera:ask-questions-make-decisions#module-3-formulas-in-spreadsheets
---

A [formula](/glossary#formula) always starts with `=`. It operates on a [cell reference](/glossary#cell-reference) — a cell or [range](/glossary#range) of cells — using [operators](/glossary#operator): `+` addition, `-` subtraction, `/` division, `*` multiplication. Parentheses set the [order of operations](/glossary#order-of-operations), the same way they do in a [math expression](/glossary#math-expression).

## Reference types

| Type | Notation | Behavior when copied to another cell |
|---|---|---|
| **Relative** | `A10` | Changes — stays relative to the formula's own position. |
| **Absolute** | `$A$10` | Never changes — always points at the same cell. |
| **Mixed** | `$A10` or `A$10` | Only the row *or* only the column stays fixed. |

Press **F4** with a reference highlighted in the formula bar to cycle between relative, absolute, and mixed. Press **F2** (or **Enter**) with a formula cell selected to highlight, directly in the sheet, the exact range that formula reads from.

## Auto-filling

The [fill handle](/glossary#fill-handle) — the small square (Excel) or circle (Sheets) in a cell's lower-right corner — extends a formula or a numbered sequence down a column or across a row when dragged. To fill 1–100 down column A: put `1` in A1 and `2` in A2, select both, then drag the fill handle down to A100.

## Reading a spreadsheet

The [header](/glossary#header) row labels each column's data type. [Borders](/glossary#borders) — lines added around cells — and consistent formatting keep a sheet readable at a glance, which matters as much as the formulas themselves once a sheet gets shared.

## Combining with a function

`COUNTIF()` is a formula wrapped around a function: the function (`COUNT`) runs only if the condition you set is true. `=COUNTIF(A1:A16, "7")` counts only the cells containing `7`.
