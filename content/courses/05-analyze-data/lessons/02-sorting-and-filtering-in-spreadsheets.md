---
id: 05-analyze-data/02-sorting-and-filtering-in-spreadsheets
courseId: 05-analyze-data
title: Sorting and Filtering in Spreadsheets
status: authored
summary: How to sort whole sheets versus single ranges, the SORT function syntax, multi-column custom sorts, and the difference between ordinary filters and filter views in Sheets and Excel.
format: cheatsheet
terms:
  - sort-function
  - filter-view
  - sort-sheet
  - sort-range
revisits:
  - termId: sorting
    note: Course 2 defined sorting as arranging data into a meaningful order. This lesson adds the spreadsheet mechanics — Sort sheet versus Sort range, the SORT function, and multi-column tiebreakers.
  - termId: filtering
    note: Course 2 defined filtering as showing only rows that meet criteria. This lesson adds spreadsheet specifics — Create a filter versus filter views and combining FILTER with SORT for custom views.
  - termId: range
    note: Course 2 defined a range as a collection of cells. This lesson uses A2:D6 as the exact range argument the SORT function sorts over.
  - termId: cell-reference
    note: Course 2 defined cell references as coordinates like A2 and D6. This lesson shows them as the endpoints of the range passed to SORT and why the column argument uses a number, not a letter.
  - termId: header
    note: Course 2 defined the header as the title row. This lesson shows the Data has a header row checkbox that keeps that row out of both menu sorts and the fact that a SORT function range should never include it.
topics:
  - spreadsheets
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-1-organize-data-for-more-effective-analysis
---

Spreadsheets are where most analysts first learn to organize data, because a single menu choice or function can reimagine the same table and surface patterns not visible before. The module uses a movie dataset and a party-plan sheet to show two toolsets — menu Sort and Filter for quick work and the **[SORT](/glossary#sort-function)** and **[Filter view](/glossary#filter-view)** for repeatable rules — with Sheets and Excel differing mainly in button names.

## Sorting with the Data menu — sheet versus range

[Sorting](/glossary#sorting) in the menu is either `Sort sheet` or `Sort range`, and the choice determines whether a row stays an observation: a **[sort sheet](/glossary#sort-sheet)** sorts all data by one column's ranking and keeps data together across rows, while a **[sort range](/glossary#sort-range)** sorts only the specified range and preserves the cells outside it. Selecting column B (Release Date) and choosing Data > Sort sheet > Sort sheet by column B (A to Z) sorts the entire sheet by that column — chronological when the column holds dates — while keeping every movie title in its original row. Selecting column A (Movie Title) and choosing Data > Sort range > Sort range by column A (A to Z) sorts only that [range](/glossary#range) — the [cell reference](/glossary#cell-reference) A values alone — so titles go A-to-Z but the rest of the row is jumbled; the reading warns The Devil Inside can jump from 2012-01-06 to 2015-06-16, which is the error to avoid.

## The SORT function

A [SORT](/glossary#sort-function) is the same idea written as a preset command in a cell: `=SORT(A2:D6, 2, TRUE)` sorts the [range](/glossary#range) A2:D6 by column 2 (column B in that [range](/glossary#range), because the function does not recognize letters) in ascending order when the last argument is `TRUE` and descending when `FALSE`. The function inserts the sorted result where you typed it instead of overwriting the source, and its [range](/glossary#range) should never contain the [header](/glossary#header) row — start at row 2 if row 1 holds titles — whereas Data > Sort range offers a Data has a header row checkbox that does the same exclusion for a menu sort.

## Custom sort order and tiebreakers

A customized sort order sorts by multiple conditions in the order you apply them. The party-plan example highlights A1:D6, chooses Data > Sort range > Advanced range sorting options, checks Data has a header row, sets Sort by to Sent Invitation with A to Z so No sorts before Yes, then Add another sort column and sets it to Guest Names with A to Z. The dialog's order is the precedence order, exactly like supplying additional arguments to the [SORT](/glossary#sort-function).

## Filtering and filter views — Sheets versus Excel

[Filtering](/glossary#filtering) is Data > Create a filter in Sheets or the Sort & Filter button in Excel, which shows only rows that meet criteria; you can filter first and then sort what remains, or use `FILTER` with `SORT` in a [range](/glossary#range) to do both programmatically. Two best practices apply to both: back up or copy before major changes, and remember a plain filter in Google Sheets affects every viewer — for personal exploration create a [filter view](/glossary#filter-view) instead. Excel labels the same choice as Smallest to Largest / Largest to Smallest and offers Sort left to right under Options for row-wise sorts, plus SORT, SORTBY, and FILTER functions that parallel Sheets' equivalents.
