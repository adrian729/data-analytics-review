---
id: 05-analyze-data/03-filtering-and-sorting-data-with-sql
courseId: 05-analyze-data
title: Filtering and Sorting Data with SQL
status: authored
summary: Filtering with the WHERE clause and its operators, sorting with ORDER BY and ASC/DESC, capping results with LIMIT, and the minimal BigQuery workflow for running those queries.
format: cheatsheet
terms: []
revisits:
  - termId: where-clause
    note: Course 3 defined the WHERE clause as the filter of a SQL query. This lesson demonstrates it on the Movies dataset — filtering where Genre exactly matches 'Comedy' and combining conditions with AND.
  - termId: order-by-clause
    note: Course 4 defined ORDER BY as the clause that sorts query results, ascending by default and DESC for descending. This lesson applies it to Release_Date with both directions and with WHERE.
  - termId: limit-clause
    note: Course 4 introduced LIMIT as the clause that caps how many rows a query returns. This lesson notes where it belongs when you filter first and then sort.
  - termId: select-clause
    note: Course 3 covered SELECT as the clause that chooses columns, with * meaning all columns. This lesson uses SELECT * as the starting line of every BigQuery example.
  - termId: from-clause
    note: Course 3 covered FROM as the clause that names the table. This lesson uses FROM projectID.movie_data.movies in the same queries that add WHERE and ORDER BY.
  - termId: distinct-keyword
    note: Course 4 introduced DISTINCT as the keyword that returns each value once. This lesson notes it as the quick check for duplicate movies before filtering and sorting.
  - termId: sql-dialect
    note: Course 3 introduced SQL dialects and BigQuery as this program's Standard SQL. The queries here are written for BigQuery, with projectID replaced by your own.
topics:
  - sql
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-1-organize-data-for-more-effective-analysis
---

When a dataset outgrows what a spreadsheet can hold reliably, the same organize-then-refine workflow moves to SQL, where [filtering](/glossary#filtering) and [sorting](/glossary#sorting) are clauses you add to a query rather than buttons you click. The module demonstrates both on a Movies table with columns Movie_Title, Release_Date, Genre, Director, Cast_Members, Budget, and Total_Revenue, using BigQuery as the engine but writing standard clauses that apply in any dialect.

## Filtering with WHERE

[WHERE](/glossary#where-clause) is SQL's filter — the clause that returns only rows that meet a condition you name, just as a spreadsheet filter shows only matching rows. The example starts from `SELECT *` — the [SELECT](/glossary#select-clause) clause with an asterisk meaning all columns — and `FROM projectID.movie_data.movies` — the [FROM](/glossary#from-clause) clause naming the table — and then adds `WHERE Genre = 'Comedy'` to keep only rows where Genre exactly matches the string 'Comedy' (quotes required for strings, capitalization must match exactly). A second condition is added with `AND` without repeating `WHERE`: `WHERE Genre = 'Comedy' AND Revenue > 300000000` keeps only comedies whose Revenue exceeds 300 million, written without commas; you can check values beforehand with [DISTINCT](/glossary#distinct-keyword) — `SELECT DISTINCT` — if you want to see which genres exist.

## Sorting with ORDER BY

[ORDER BY](/glossary#order-by-clause) is the clause that sorts the result returned by the query and is placed on the last line so everything selected and filtered is ordered together. By itself `ORDER BY Release_Date` sorts oldest to newest because ascending is the default, while `ORDER BY Release_Date DESC` reverses it so the most recent releases are first. Combined with filtering the order is fixed: [SELECT](/glossary#select-clause) and [FROM](/glossary#from-clause) first, then [WHERE](/glossary#where-clause) (and `AND` if needed), then [ORDER BY](/glossary#order-by-clause) last — `SELECT * FROM projectID.movie_data.movies WHERE Genre = 'Comedy' ORDER BY Release_Date DESC` returns only comedies sorted newest to oldest, and adding `LIMIT 1000` — the [LIMIT](/glossary#limit-clause) clause — would cap that sorted, filtered result at a thousand rows.

## BigQuery practice notes

The readings compress the operational walkthrough to a passing mention, as Course 4 does: to follow along in the [SQL dialect](/glossary#sql-dialect) used here, log into BigQuery, upload the Movies CSV as a new table, open Explorer > Preview > Query in new tab, paste the query and click Run, replacing `projectID` with your own ID. Once the table exists the analysis is just the clauses above: choose columns with [SELECT](/glossary#select-clause), point at the table with [FROM](/glossary#from-clause), narrow rows with [WHERE](/glossary#where-clause), order them with [ORDER BY](/glossary#order-by-clause), and optionally cap them with [LIMIT](/glossary#limit-clause).
