---
id: 03-prepare-data/12-sql-for-large-datasets
courseId: 03-prepare-data
title: SQL for Large Datasets
status: authored
summary: The SELECT/FROM/WHERE structure of a basic query, working across SQL dialects like BigQuery, and the naming conventions that keep query output readable.
format: cheatsheet
terms:
  - select-clause
  - from-clause
  - where-clause
  - sql-dialect
  - snake-case
revisits:
  - termId: sql
    note: Course 1 defined SQL as the standard query language for databases. This lesson is the syntax of an actual query, plus BigQuery — the SQL platform this program uses for large public datasets.
topics:
  - sql
sourceModules:
  - coursera:prepare-data-for-exploration#module-3-working-with-large-datasets-in-sql
---

A basic [SQL](/glossary#sql) query is built from three clauses, always in the same order:

| Clause | Does |
|---|---|
| **[SELECT](/glossary#select-clause)** | Names the subset of columns you want returned |
| **[FROM](/glossary#from-clause)** | Names the table (or tables) the data comes from |
| **[WHERE](/glossary#where-clause)** | Filters to rows meeting a condition — Boolean logic included |

`SELECT name FROM Customers WHERE country = 'US'` reads in that order: pick the `name` column, from the `Customers` table, restricted to rows where `country` is `'US'`.

## Dialects

Vendors implement SQL with small variations, called **[SQL dialects](/glossary#sql-dialect)**. Most dialects (MySQL, PostgreSQL, SQL Server) are case-insensitive on string comparisons — `'us'` and `'US'` match the same rows. BigQuery, Google Cloud's data warehouse for querying very large datasets, is one of the dialects that *is* case-sensitive: `country_code = 'us'` in BigQuery won't match a row stored as `'US'`. Single quotes are the safest default for strings across dialects; double quotes are the fallback only when the string itself contains an apostrophe.

## Naming conventions in SQL

Consistent style keeps a query's output usable at a glance:

- Clause starters (`SELECT`, `FROM`, `WHERE`) and function names (`SUM()`) in all caps.
- Table names in CamelCase (`TicketsByOccasion`).
- Column names in **[snake_case](/glossary#snake-case)** — lowercase, words separated by underscores (`total_tickets`, never `total tickets`). A space in a column name breaks things outright: SQL truncates the name at the space, so `'total tickets'` becomes just `total`.
- `--` (or `/* */` for multiple lines) for comments, and lines kept under about 100 characters so a query stays easy to read and troubleshoot.

None of this changes what a query returns — SQL ignores capitalization and whitespace when it runs. It changes whether the person reading it later (often you) can tell what it does.
