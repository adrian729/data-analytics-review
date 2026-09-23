---
id: 04-process-data/11-sql-for-cleaning-large-datasets
courseId: 04-process-data
title: SQL for Cleaning Large Datasets
status: authored
summary: Why SQL takes over from spreadsheets at scale, and the query keywords beyond SELECT/FROM/WHERE — DISTINCT, ORDER BY, LIMIT, and the statements that write to a table.
format: cheatsheet
terms:
  - distinct-keyword
  - order-by-clause
  - limit-clause
  - insert-into-statement
  - update-statement
  - create-table-statement
  - drop-table-statement
revisits:
  - termId: sql
    note: Course 1 defined SQL as the standard query language for databases. This lesson is why it wins over spreadsheets specifically when a dataset outgrows what a spreadsheet can handle.
  - termId: select-clause
    note: Course 3 covered SELECT, FROM, and WHERE as the three-clause skeleton of a basic query. This lesson adds the keywords layered on top of that skeleton for cleaning work.
  - termId: sql-dialect
    note: Course 3 introduced SQL dialects and BigQuery, the dialect this program uses. The queries in this lesson and the two after it are written in BigQuery's Standard SQL.
  - termId: csv-file
    note: Course 3 defined the CSV file. Getting a large dataset into SQL for cleaning usually starts with uploading one as a new table.
topics:
  - sql
sourceModules:
  - coursera:process-data-dirty-to-clean#module-3-learn-basic-sql-queries
---

Spreadsheets start to struggle well before a dataset reaches a million rows; SQL was built for exactly that scale — a query against a 10-billion-row public dataset can filter, group, and sort it in about 15 seconds. That gap is why data cleaning on a large dataset moves from a spreadsheet into a database once the row count crosses into the millions.

## Removing duplicates

Adding **[DISTINCT](/glossary#distinct-keyword)** to a `SELECT` statement is SQL's equivalent of a spreadsheet's remove-duplicates tool: `SELECT DISTINCT customer_id FROM customer_data.customer_address` returns each customer ID once, no matter how many times it's repeated in the underlying table.

## Sorting and limiting results

| Clause | Does |
|---|---|
| **[ORDER BY](/glossary#order-by-clause)** | Sorts results by a column — ascending by default, or `DESC` for descending |
| **[LIMIT](/glossary#limit-clause)** | Caps how many rows a query returns |

`SELECT * FROM cars.car_info ORDER BY price DESC` puts the most expensive row first; adding `LIMIT 1000` caps the result at a thousand rows regardless of how many the table actually holds.

## Writing to a table

| Statement | Does |
|---|---|
| **[INSERT INTO](/glossary#insert-into-statement)** | Adds a new row to a table |
| **[UPDATE](/glossary#update-statement)** | Changes existing rows — always paired with a `WHERE` clause, or every row in the table changes |
| **[CREATE TABLE IF NOT EXISTS](/glossary#create-table-statement)** | Creates a new table, if one by that name doesn't already exist |
| **[DROP TABLE IF EXISTS](/glossary#drop-table-statement)** | Deletes a table, if it exists |

Running a query doesn't save a table on its own — the result lives in local memory until it's downloaded as a [CSV](/glossary#csv-file) or written into a new table. `DROP TABLE IF EXISTS` is good housekeeping for tables created during your own exploration, not a tool for touching a company's existing data.
