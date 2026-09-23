---
id: 04-process-data/08-cleaning-data-in-spreadsheets
courseId: 04-process-data
title: Cleaning Data in Spreadsheets
status: authored
summary: The spreadsheet tools and string functions that fix dirty data — removing duplicates, conditional formatting, data validation, and the LEFT/RIGHT/MID/CONCATENATE/TRIM/SPLIT family.
format: cheatsheet
terms:
  - conditional-formatting
  - remove-duplicates
  - data-validation
  - field-length
  - length-function
  - left-function
  - right-function
  - mid-function
  - concatenate-function
  - trim-function
  - split-function
revisits: []
topics:
  - spreadsheets
  - data-quality
sourceModules:
  - coursera:process-data-dirty-to-clean#module-2-first-steps-toward-clean-data
  - coursera:process-data-dirty-to-clean#module-2-continue-cleaning-data-in-spreadsheets
---

Before removing anything, make a copy of the dataset — a cleaning pass that turns out to be wrong should be recoverable. From there, spreadsheets offer a standard toolkit for the most common dirty-data problems.

## Cleanup tools

| Tool | Does |
|---|---|
| **[Remove duplicates](/glossary#remove-duplicates)** | Automatically searches for and eliminates duplicate entries |
| **[Conditional formatting](/glossary#conditional-formatting)** | Changes how a cell appears when its value meets a condition — highlighting every blank cell in a range, for example |
| **[Data validation](/glossary#data-validation)** | Checks the accuracy and quality of data before it's added or imported |
| **[Field length](/glossary#field-length)** | Caps how many characters can be keyed into a field, catching entries that are obviously too short or too long |

Spreadsheet applications also ship with spell-check, autocorrect, and a "clear formats" option for stripping inconsistent formatting pulled in from other sources.

## String functions

| Function | Does |
|---|---|
| **[LEN / LENGTH](/glossary#length-function)** | Counts the characters in a text string — `=LEN(A2)` on a two-letter country code should always return 2 |
| **[LEFT](/glossary#left-function)** | Returns a set number of characters from the left of a string — `=LEFT(A2, 5)` |
| **[RIGHT](/glossary#right-function)** | Returns a set number of characters from the right of a string |
| **[MID](/glossary#mid-function)** | Returns a segment from the middle of a string — `=MID(D2, 4, 2)` pulls two characters starting at position 4 |
| **[CONCATENATE](/glossary#concatenate-function)** | Joins two or more text strings together — `=CONCATENATE(D2, " ", E2)` merges a street address and a suite number with a space between them |
| **[TRIM](/glossary#trim-function)** | Removes leading, trailing, and repeated spaces |
| **[SPLIT](/glossary#split-function)** | Divides text around a specified character, putting each piece into its own cell |

`LEN` is the diagnostic: run it across a column that should hold consistent-length values, and any row with an unexpected length flags a likely error — a country code stored as `USA` instead of `US`, or a state entry with an invisible trailing space. `TRIM` and `SPLIT` are the fixes for the two most common causes of that kind of length mismatch. `MID` and `SPLIT` both pull data out of a single crowded field, but where `MID` extracts one known segment, `SPLIT` breaks the whole cell apart wherever a delimiter — a comma, say — appears.
