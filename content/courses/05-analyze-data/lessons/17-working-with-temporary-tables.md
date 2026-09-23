---
id: 05-analyze-data/17-working-with-temporary-tables
courseId: 05-analyze-data
title: Working with Temporary Tables
status: authored
summary: Why and how analysts create temporary tables with WITH, SELECT INTO, and CREATE TABLE — plus summary tables and Connected Sheets for large BigQuery data — to avoid repeated filtering and keep queries readable.
format: cheatsheet
terms:
  - temporary-table
  - summary-table
revisits:
  - termId: create-table-statement
    note: Course 4 defined CREATE TABLE IF NOT EXISTS as adding a new table to the database. Temporary variants use that same statement with TEMP or AS and are dropped when the session ends.
  - termId: drop-table-statement
    note: Course 4 defined DROP TABLE IF EXISTS as removing a table and its definition. This lesson notes it as the explicit cleanup for user-managed temporary tables.
  - termId: sql-dialect
    note: Course 3 introduced SQL dialects as variant syntaxes across systems. The three temporary-table methods here differ by dialect, so the correct syntax must be checked per RDBMS.
  - termId: data-merging
    note: Course 4 defined data merging as combining datasets into one. Collecting results from several databases into one temporary table is presented as the merging pattern that avoids repeated joins.
topics:
  - sql
  - databases
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-4-perform-data-calculations
---

When a query must join seven or eight tables, filter tens of millions of rows repeatedly, or bring together results from several databases, redoing the same filtering logic in every query makes code repetitive, slow, and typo-prone; a **[Temporary table](/glossary#temporary-table)** — a database table that is created and exists temporarily on a database server — solves that by storing a filtered or combined subset for the current session and disappearing when the session ends. The module compares it to a sticky note: useful for short-term calculations, then recycled.

## What temporary tables do best

| Use case | Why a temp table helps |
|---|---|
| Repeated subset analysis | Store `WHERE tripduration >= 60` once instead of adding the same filter to every count or average on citibike trips. |
| Combining many sources | Run initial queries in each separate database, collect their results into one temp table, and run the final report from that single holding area rather than re-joining all sources. |
| Reducing join size | Join the two or three smallest tables first, put their output in a temp table, then join that smaller result to a large fact table. |
| Pre-processing | Hold a staged **[Summary table](/glossary#summary-table)** — a table used to summarize statistical information about data, such as count, total revenue, and average revenue per quantity — so downstream calculations read a summarized shape instead of raw transactions. |

A [Summary table](/glossary#summary-table) as defined in the glossary is exactly what the kitchen-supplies lesson built for quantity versus revenue; a temporary table can persist that same summary while you test several follow-up questions.

## Three ways to create one — dialect matters

Because each [SQL dialect](/glossary#sql-dialect) has its own commands, the sources describe three patterns with their trade-offs. The `WITH` clause — a named subquery you can query multiple times that approximates a temporary table in BigQuery — is shown as `WITH trips_over_1_hr AS (SELECT * FROM bigquery-public-data.new_york_citibike.citibike_trips WHERE tripduration >= 60)` followed directly by `SELECT COUNT(*) AS cnt FROM trips_over_1_hr`; it creates no persistent object but is reusable inside the same statement and its code remains visible for review. The `SELECT INTO` pattern — `SELECT * INTO AfricaSales FROM GlobalSales WHERE Region = 'Africa'` — copies matching rows into a new table without adding it to the catalog in the dialect that supports it (not BigQuery), which keeps the database uncluttered when only the author needs the copy. The `CREATE TABLE` family — `CREATE TABLE AfricaSales AS (SELECT * FROM GlobalSales WHERE Region = 'Africa')` and, in BigQuery, `CREATE TEMP TABLE` — does add the table (optionally with metadata to describe it) and is preferred when the table will be shared, when its logic is complex to recreate, or when it must be explicitly managed; after use the author removes it with the [DROP TABLE](/glossary#drop-table-statement) statement (matching the [CREATE TABLE](/glossary#create-table-statement) pattern) as a performance hygiene step. Global versus local scope matters only where the system supports it, but for the analyst the deciding factors are whether the RDBMS supports the syntax, whether collaborators need to see the table, and whether rebuilding it from stored code is acceptable after the session ends.

## Connected Sheets and table hygiene

For large BigQuery data that would overwhelm a sheet, Connected Sheets bridges BigQuery and Google Sheets so billions of rows can be analyzed with familiar pivot tables, charts, and formulas without writing SQL — collaboration, versioned refreshing, and cloud storage keep the source of truth single and data security higher than copying extracts to desktops. The reading notes limits (1 TB free-month processing, requiring BigQuery access, and possible query failures on very large results that require filters or row caps) as reasons to prefer a temporary table or a filtered view when scale pushes past the Sheets connector. Whether the intermediate is a `WITH` query, a `SELECT INTO` copy, or a managed `CREATE TABLE`, the hygiene is the same: give the temp table a descriptive name, keep its creation code so it can be recreated after the session, and drop it when it is no longer needed so the database stays readable for the next analyst — the same readability benefit [data merging](/glossary#data-merging) gains when the combine is done once and reused.
