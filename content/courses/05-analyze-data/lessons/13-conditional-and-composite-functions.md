---
id: 05-analyze-data/13-conditional-and-composite-functions
courseId: 05-analyze-data
title: Conditional and Composite Functions
status: authored
summary: How to count and sum on one or more conditions with COUNTIF/SUMIF and COUNTIFS/SUMIFS, and how SUMPRODUCT and arrays combine to replace many separate steps.
format: cheatsheet
terms:
  - array
  - sumproduct-function
  - sumif-function
revisits:
  - termId: countif-function
    note: Course 2 defined COUNTIF as counting cells that meet a single condition. This lesson pairs it with SUMIF and extends both to multiple conditions via COUNTIFS/SUMIFS.
  - termId: function
    note: Course 1 defined a function as a preset command the application ships. This lesson treats IF, SUMIF, SUMIFS, and SUMPRODUCT as conditional and composite members of that same family.
  - termId: range
    note: Course 2 defined a range as a collection of cells such as B3:B50. Here ranges are the first argument that conditional functions evaluate against a criterion.
  - termId: conditional-formatting
    note: Course 4 introduced conditional formatting as changing a cell's appearance when a condition is met. The conditional functions here apply the same if-it-meets-criteria logic to calculations instead of visuals.
topics:
  - spreadsheets
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-4-perform-data-calculations
---

Conditional functions let a spreadsheet decide whether a value counts before it is counted, summed, or multiplied, and the kitchen-supplies retailer case shows the pattern on a [range](/glossary#range) of transaction quantities (B3:B50) and revenues (C3:C50) organized into a summary table. A single-condition test uses one criterion; a multi-condition test extends the same syntax; a composite function then multiplies whole collections at once.

## Single-condition counts and sums

| Function | Syntax pattern | What it does |
|---|---|---|
| [COUNTIF](/glossary#countif-function) | `=COUNTIF(range, criterion)` | Returns the number of cells in range that match one criterion, e.g. `=COUNTIF(B3:B50, "=1")` counts transactions with exactly one item (25 in the demo). |
| **[SUMIF](/glossary#sumif-function)** | `=SUMIF(range, criterion, [sum_range])` | Adds values based on one condition: the first [range](/glossary#range) is evaluated, the criterion (e.g. `"=1"` or `">1"` inside quotes) selects rows, and `sum_range` (C3:C50) supplies the numbers to add — `=SUMIF(B3:B50, "=1", C3:C50)` totals revenue for single-item transactions ($1,555.00, formatted as currency). |

The [function](/glossary#function) name, open parenthesis, evaluated [range](/glossary#range), comma, quoted criterion, optional comma and sum_range, close parenthesis — that order is fixed, and changing only the quoted criterion from `"=1"` to `">1"` produces the companion totals for multi-item transactions ($4,735.00) whose average per transaction is then `total / count` ( $62.20 versus $205.87), a division the sources note uses `/` as the operator.

## Multiple conditions with SUMIFS and COUNTIFS

When two or more conditions must be true, the `S` variants apply the same logic with repeating pairs: `=SUMIFS(sum_range, criteria_range1, criterion1, [criteria_range2, criterion2, ...])` and `=COUNTIFS(criteria_range1, criterion1, [criteria_range2, criterion2, ...])`, each accepting up to 127 pairs. The reading uses a product/region/quarter table to illustrate `=SUMIFS(D2:D8, A2:A8, "ProductA", B2:B8, "East", C2:C8, "Q1")` for sales of ProductA in the East in Q1, and `=COUNTIFS(A2:A8, "ProductA", B2:B8, "East", C2:C8, "Q2")` for the count of those rows; the order is `sum_range` first for SUMIFS but criteria first for COUNTIFS, and the bracketed pairs are optional repetitions of the same `[range, criterion]` pattern.

## Composite functions, SUMPRODUCT, and arrays

An **[Array](/glossary#array)** is a collection of values in cells, not the cells themselves — think B3:B7 as values — and **[SUMPRODUCT](/glossary#sumproduct-function)** is the [function](/glossary#function) that multiplies arrays and returns the sum of those products: `=SUMPRODUCT(array1, [array2], ...)` with commas separating each array. The kitchen-supplies order stores quantity (B3:B7) and unit price (C3:C7) in two arrays; `=SUMPRODUCT(B3:B7, C3:C7)` does B3*C3 + B4*C4 + ... in one step and returns total revenue ($655), replacing a column of individual `quantity*price` formulas plus a SUM. Adding a third array extends the same call to profit — `=SUMPRODUCT(B3:B7, C3:C7, D3:D7)` where D holds profit-margin percentages — so each revenue is weighted by its margin before summing, which the source calls a shortcut worth remembering because it eliminates both extra columns and copy-paste errors; [conditional formatting](/glossary#conditional-formatting) on the summary table then highlights which quantity group actually drives the total.
