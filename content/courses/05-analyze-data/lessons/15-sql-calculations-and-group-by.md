---
id: 05-analyze-data/15-sql-calculations-and-group-by
courseId: 05-analyze-data
title: SQL Calculations and GROUP BY
status: authored
summary: Embedding arithmetic and modulo in SELECT, guarding division with WHERE, and aggregating with GROUP BY, EXTRACT, COUNT, SUM, and ORDER BY to summarize groups of rows.
format: cheatsheet
terms:
  - modulo
  - group-by-clause
  - underscores
revisits:
  - termId: select-clause
    note: Course 3 defined SELECT as the clause that chooses columns. This lesson embeds calculations directly inside that clause with AS to name the result.
  - termId: from-clause
    note: Course 3 defined FROM as naming the table to pull from. Every embedded-calculation query here finishes with the same FROM before execution.
  - termId: where-clause
    note: Course 3 defined WHERE as the row filter. This lesson uses it to exclude Total_Bags = 0 so a percentage division does not fail.
  - termId: order-by-clause
    note: Course 4 defined ORDER BY as sorting query results, ascending by default. This lesson pairs it with GROUP BY to order yearly counts, adding DESC to reverse the order.
  - termId: distinct-keyword
    note: Course 4 introduced DISTINCT as returning each value once. The broader module notes it as the quick duplicate check before embedding calculations that assume clean inputs.
topics:
  - sql
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-4-perform-data-calculations
---

SQL does the same arithmetic you already know from spreadsheets — plus, minus, asterisk, and slash — but the operator is embedded in the query so the calculation runs when you pull the data, not after. The avocado and citibike examples show three patterns: a row-level calculation in [SELECT](/glossary#select-clause), a guarded division with [WHERE](/glossary#where-clause), and a grouped aggregation with **[GROUP BY](/glossary#group-by-clause)**.

## Embedded simple calculations in SELECT

A query's syntax is its structure: [SELECT](/glossary#select-clause) lists the columns, the operator sits between them, `AS` names the new column, and [FROM](/glossary#from-clause) names the table. To verify that Total_Bags is the sum of its parts, the BigQuery walkthrough (compressed here to its logic) runs `Small_Bags + Large_Bags + XLarge_Bags AS Total_Bags_Calc` alongside the original Total_Bags column after `SELECT Date, Region, Small_Bags, Large_Bags, XLarge_Bags, Total_Bags,` and the comparison shows the two totals match, confirming the source column is accurate. Percentages are a division scaled to 100: `(Small_Bags / Total_Bags) * 100 AS Small_Bags_Percent` puts the division in parentheses so it evaluates first, multiplies by 100 to turn a decimal into a percent, and names the result for stakeholders who read percentages more easily; an operator such as `/` cannot be skipped, and parentheses control order when `+`, `*`, or `/` appear together, just as in a spreadsheet formula. Note how the new names — `Total_Bags_Calc` — use **[underscores](/glossary#underscores)** instead of spaces: spaces can confuse certain servers and applications, while underscores keep multi-word names readable.

## Modulo and guarding division

**[Modulo](/glossary#modulo)** is the percent-sign operator (`%`) that returns the remainder when one number is divided by another — the SQL equivalent of `MOD` in Sheets — and it is taught alongside the four arithmetic operators as the way to keep only the remainder. Division introduces a failure mode the module highlights explicitly: any row where `Total_Bags = 0` makes `Small_Bags / Total_Bags` a division-by-zero error, so the query adds `WHERE Total_Bags <> 0` ( `!= 0` works identically) after [FROM](/glossary#from-clause), and the same guard is noted as achievable with `SAFE_DIVIDE` in BigQuery; the point is that embedding the calculation does not remove the need to validate the inputs with [WHERE](/glossary#where-clause) first.

## Aggregating groups with GROUP BY

[GROUP BY](/glossary#group-by-clause) is the clause that groups rows that have the same values into summary rows, and the sources pair it with aggregate functions such as `SUM` and `COUNT` that return a single value per group. The bike-share demo asks how many rides occurred per year: `SELECT EXTRACT(YEAR FROM starttime) AS year, COUNT(*) AS number_of_rides FROM bigquery-public-data.new_york_citibike.citibike_trips GROUP BY year ORDER BY year` extracts the year part from each timestamp, counts all rows in the group (`COUNT(*)`), groups the result `by year`, and orders it with [ORDER BY](/glossary#order-by-clause) ascending by default (adding `DESC` reverses to newest first). In that template `EXTRACT` pulls a date part for grouping, `COUNT(*)` or `SUM(column)` does the math, [GROUP BY](/glossary#group-by-clause) defines the groups, and [ORDER BY](/glossary#order-by-clause) with an optional [LIMIT](/glossary#limit-clause) or [DISTINCT](/glossary#distinct-keyword) shapes the report — the SQL equivalent of choosing rows, values, and filters in a pivot table, now expressed as clauses.
