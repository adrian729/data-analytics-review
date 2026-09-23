---
id: 05-analyze-data/14-pivot-tables-for-analysis
courseId: 05-analyze-data
title: Pivot Tables for Analysis
status: authored
summary: How pivot tables organize, summarize, and calculate — rows, columns, values and filters, grouping dates, changing summary functions, and creating calculated fields to answer business questions.
format: cheatsheet
terms:
  - calculated-field
revisits:
  - termId: pivot-table
    note: Course 2 defined the pivot table as a data summarization tool for sorting, reorganizing, grouping, counting, totaling, or averaging data. This lesson revisits it specifically as a calculation engine for sums, averages, counts, and calculated fields.
  - termId: pivot-chart
    note: Course 2 defined a pivot chart as a chart created from the fields in a pivot table. The analysis here feeds that chart — once the pivot summarizes revenue by year, the chart is the natural next step for sharing the trend.
topics:
  - spreadsheets
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-4-perform-data-calculations
---

A [pivot table](/glossary#pivot-table) is the spreadsheet counterpart to a SQL GROUP BY: it lets you view the same dataset many ways without touching the source table, and the movie-revenue case uses it to turn 509 dated rows into yearly totals, averages, and the filtered, calculated answers a manager actually asks for. Insert > Pivot table into a new sheet keeps calculations separate from the raw data, and the editor on the right is where the four parts come together.

## The four parts and what each controls

| Part | Does | How the movie case uses it |
|---|---|---|
| Rows | Organizes and groups data horizontally | Release Date is added as rows, then grouped by year (right-click a date cell > Create pivot date group > Year) so one row represents each year instead of every individual date. |
| Columns | Organizes and displays values vertically; can be pulled from the dataset or created from values | Columns are created by the Values entries rather than chosen directly in this example. |
| Values | Calculates and counts — the variable you measure and the place you create a **[Calculated field](/glossary#calculated-field)** | Box Office Revenue is added three times as Values: summarized by SUM for annual totals (2014 highest, 2016 lowest), by AVERAGE for average revenue per movie per year (2015 notably low), and by COUNT for how many movies contributed each year. |
| Filters | Shows only the subset matching a condition, just like sheet filters | A filter on Box Office Revenue with condition `< 10000000` isolates movies earning less than $10 million so the lower-earning slice can be compared. |

A [Calculated field](/glossary#calculated-field) is a new field within the pivot table that carries out calculations based on the values of other fields — the source definition — and in the copy of the pivot it is built from the Values menu as `=SUM('Box Office Revenue ($)') / COUNT('Box Office Revenue ($)')` to recalculate the average for the filtered set and verify the number copied from the first pivot is still correct after filtering.

## Using the pivot to answer the question

Totals alone mislead when years contain different numbers of films, so the module layers calculations: the SUM column shows 2015 second-lowest on total revenue despite having the most movies, the AVERAGE column flags its per-movie weakness, the COUNT column explains why, and a percentage column outside the pivot (`= count_filtered / count_original` dragged with the fill handle and formatted as percent) quantifies the hypothesis — 16% of 2015 films earned under $10 million versus about 10% in other years, which explains the depressed average. Sorting the Values columns (e.g., Toys generating the most revenue in the department-store example) and filtering to the condition of interest are the same organize-then-calculate workflow taught for sorting and filtering in spreadsheets, now executed inside the pivot editor rather than on the source range, and a [pivot chart](/glossary#pivot-chart) can then visualize whichever summarized Value the stakeholder needs without re-querying the underlying table.
