---
id: 05-analyze-data/09-aggregating-data-with-vlookup
courseId: 05-analyze-data
title: Aggregating Data with VLOOKUP
status: authored
summary: What aggregation is and why analysts use it, how to prepare a spreadsheet for VLOOKUP, the function's four-part syntax, and the common errors that follow it.
format: refresher
terms:
  - aggregation
  - data-aggregation
  - vlookup
  - value-function
  - match-function
  - absolute-reference
revisits:
  - termId: data-type
    note: Course 3 defined data type as a value's classification. Preparing data for VLOOKUP is mostly about aligning data types — a number stored as text is the classic mismatch, and VALUE exists to fix it before the lookup runs.
  - termId: trim-function
    note: Course 4 introduced TRIM for stripping extra spaces from values. Leading or trailing spaces that tag along with copied data break VLOOKUP's exact-match search, so trimming is part of pre-lookup cleaning.
  - termId: remove-duplicates
    note: Course 4 covered Remove duplicates as a spreadsheet cleaning tool. Because VLOOKUP returns only the first match it finds, duplicate entries have to be eliminated before the lookup runs.
topics:
  - spreadsheets
  - data-types
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-3-aggregate-data-for-analysis
---

**[Aggregation](/glossary#aggregation)** is collecting many separate pieces into a whole, and **[data aggregation](/glossary#data-aggregation)** is the analytics version: gathering data from multiple sources into one collection — like puzzle pieces sorted back into their boxes.

Individual graduation records aggregate into one class rate, which can aggregate again into district and state summaries; ten years of neighborhood home sales become an average price and its movement.

Aggregating over a period yields averages, minimums, maximums, and sums that surface trends no element shows alone.

## Preparing the data

**[VLOOKUP](/glossary#vlookup)** — vertical lookup — searches a column for a value and returns a corresponding piece of information, the way a product code finds its name in another sheet.

It only works on data it recognizes, so preparation decides whether it answers or errors.

- **Data types.** When a value's [data type](/glossary#data-type) is wrong — dates as numbers or numbers as text — VLOOKUP errors. **[VALUE](/glossary#value-function)** converts a text string that represents a number into a numeric value, so a `SUM` over text in A2:A4 that returns 0 comes back as 1,368 after conversion.
- **Extra spaces.** Leading or trailing spaces from copying break exact matches; [TRIM](/glossary#trim-function) deletes them during preparation.
- **Duplicates.** VLOOKUP returns only the first match, so duplicates can return the wrong record and [Remove duplicates](/glossary#remove-duplicates) is run first.

## The four parts of VLOOKUP syntax

`VLOOKUP(search_key, range, index, is_sorted)` has four parts.

`search_key` is the value to find — a number, text string, or cell reference such as `A2`.

`range` is the cells searched; the key is looked up in its first column and the return must sit to its right because VLOOKUP cannot look left.

`index` is the column number from 1 holding the data to return.

`is_sorted` set to `FALSE` demands an exact match (recommended); `TRUE` returns the nearest approximate match less than or equal to the key and needs sorted data.

`#N/A` means no matching value was found and `#VALUE!` appears when the index falls outside the range.

In practice `=VLOOKUP(A2, 'Employee Rates'!$A$2:$B$5, 2, FALSE)` pulls A2's pay rate from another sheet; dragged down it feeds the paycheck math.

## Common errors and fixes

An **[absolute reference](/glossary#absolute-reference)** locks a range so rows and columns do not change when copied — the `$` in `$A$2:$B$5`.

Results that are correct at the top but drift lower usually mean the range was never locked.

Version-control errors appear when the referenced sheet changes, such as an inserted column shifting the index onto the wrong data.

Locking the sheet via protected ranges prevents that drift, and when the sheet must stay editable **[MATCH](/glossary#match-function)** — a function that locates a lookup value's position — provides a more resilient pattern.

Using `FALSE` also avoids the subtle errors `TRUE` introduces.
