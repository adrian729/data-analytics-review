---
id: 02-ask-questions/10-spreadsheet-errors-and-fixes
courseId: 02-ask-questions
title: Spreadsheet Errors and Fixes
status: authored
summary: A reference table of the seven common spreadsheet error codes and what each one actually means, plus habits that prevent most of them in the first place.
format: cheatsheet
terms: []
revisits: []
topics:
  - spreadsheets
  - data-quality
sourceModules:
  - coursera:ask-questions-make-decisions#module-3-spreadsheet-errors-and-fixes
---

## Habits that prevent errors

1. [Filter](/glossary#filtering) data to keep a sheet less busy while you work.
2. Freeze headers so column labels stay visible while scrolling.
3. Multiply with an asterisk (`*`), not the letter X.
4. Start every formula and function with `=`.
5. Match every open parenthesis with a closing one.
6. Use a readable font.
7. Set border colors to white when you want a clean working view.
8. Keep a tab of raw data separate from a tab of the data you're actually using.

## Common error codes

| Error | What it means | Example |
|---|---|---|
| `#DIV/0!` | A formula divides by zero or an empty cell. | `=B2/B3` where B3 is `0`. |
| `#ERROR!` *(Sheets only)* | A parsing error — the input can't be interpreted as written. | `=COUNT(B1:D1 C1:C10)` — ranges missing a comma between them. |
| `#N/A` | The formula can't find the data. | The referenced cell can't be located. |
| `#NAME?` | A formula or function name isn't recognized. | The function name is misspelled. |
| `#NUM!` | A cell has an invalid numeric value for the calculation. | `=DATEDIF(A4, B4, "M")` when the date in A4 falls *after* B4. |
| `#REF!` | A formula references a cell that's no longer valid. | A cell used in a formula was in a column that got deleted. |
| `#VALUE!` | A general problem with the formula or a referenced cell. | Often stray spaces or text where a number was expected. |

## Spotting errors fast

Conditional formatting can highlight every error cell in a large sheet at once. In both Excel and Sheets, the underlying rule is the same: apply a formula-based conditional format using `=ISERROR(A1)` (adjusted to the top-left cell of the selection) across the whole sheet, and set the fill color to something that stands out — yellow works well.
