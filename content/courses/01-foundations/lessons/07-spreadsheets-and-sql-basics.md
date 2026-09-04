---
id: 01-foundations/07-spreadsheets-and-sql-basics
courseId: 01-foundations
title: Spreadsheets and SQL Basics
status: authored
summary: Structural vocabulary for spreadsheets — cells, attributes, observations, formulas, functions — and the SELECT/FROM/WHERE skeleton every SQL query is built on, with the operators worth memorizing.
format: cheatsheet
terms:
  - attribute
  - observation
  - formula
  - function
  - query
revisits:
  - termId: spreadsheet
    note: The tool comparison is in the toolbox lesson. This one is the structural vocabulary — what the parts are called once you are inside one.
  - termId: sql
    note: Introduced as a category in the toolbox lesson. Here it is the actual query skeleton and the operators.
topics:
  - spreadsheets
  - sql
sourceModules:
  - 01-foundations-data-everywhere/03_set_up_your_data_analytics_toolbox.md
  - 01-foundations-data-everywhere/02_the_wonderful_world_of_data.md
---

## Spreadsheet structure

| Term | Meaning |
|---|---|
| **Cell** | One unit, identified by column letter + row number — `D3`. |
| **Column** | Vertical, ordered by letter. |
| **Row** | Horizontal, ordered by number. |
| **[Attribute](/glossary#attribute)** | A characteristic used to label a column — "first name", "siblings". Also called a column label or header. |
| **[Observation](/glossary#observation)** | One row — all the attribute values describing a single record. |

Attribute and observation are the pair to keep straight: **an attribute describes a column, an observation is a row.**

## Formulas and functions

A [formula](/glossary#formula) is a set of instructions performing a calculation using cell references. It always starts with `=`:

```
=C2+C3+C4
```

A [function](/glossary#function) is a preset, built-in formula for a common calculation. The distinction is simply **who wrote it** — you write a formula, the application ships a function.

Two practical notes: sorting is done through the Data menu's "Sort range", where the **header row** option keeps column labels pinned while the data below reorders. And Google Sheets auto-saves to Drive, whereas Excel and most other spreadsheet programs need an explicit save.

## The SQL skeleton

A [query](/glossary#query) is a request for data from a database. Every SQL query is built on the same three clauses:

```sql
SELECT column_name    -- which columns to retrieve
FROM   table_name     -- which table to retrieve them from
WHERE  condition      -- filter criteria
```

Multiple columns are comma-separated in `SELECT`; multiple conditions are joined with `AND` in `WHERE`.

## Operators and syntax worth memorizing

| Item | What it does |
|---|---|
| `LIKE` with `%` | Pattern matching rather than exact match. `WHERE field1 LIKE 'Ch%'` matches "Chavez", "Chen". Some databases use `*` as the wildcard instead. |
| `<>` | "Does not equal" — filters a value *out*. Combines with `AND`: `WHERE jobCode <> 'INT' AND salary <= 30000`. |
| `SELECT *` | Retrieves every column. Valid, but slow on wide tables — use sparingly. |
| `/* ... */` and `--` | Comments. Dialect-dependent; `#` is **not** recognized in MySQL. |
| `AS` | An alias — temporarily renames a table or column *for the duration of the query only*. It does not change anything in the database. |

Aliasing in full:

```sql
SELECT my_table_alias.actual_column_name AS my_column_alias
FROM   actual_table_name AS my_table_alias
```

Style conventions — capitalizing keywords, indenting, terminating with a semicolon — are not enforced by SQL itself, but they make queries readable and easier to troubleshoot. The semicolon is the ANSI SQL-92 standard statement terminator, though not every database requires it.
