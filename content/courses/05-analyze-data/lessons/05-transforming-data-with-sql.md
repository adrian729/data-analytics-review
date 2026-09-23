---
id: 05-analyze-data/05-transforming-data-with-sql
courseId: 05-analyze-data
title: Transforming Data with SQL
status: authored
summary: Using CAST and SAFE_CAST to change data types in SQL and applying ROUND to control numeric precision for analysis-ready query results.
format: cheatsheet
terms:
  - round-function
revisits:
  - termId: data-type
    note: Course 3 defined a data type as an attribute describing a piece of data by its values and the operations it can perform. This lesson casts values into whichever type the query needs.
  - termId: cast-function
    note: Course 4 defined CAST as the SQL function that converts data from one type to another. This lesson revisits its full conversion table and syntax as the primary typecasting tool in BigQuery.
  - termId: typecasting
    note: Course 4 introduced typecasting as converting data from one data type to another. Here it is the rationale for every CAST — getting the type right before sorting, calculating, or comparing.
  - termId: data-transformation
    note: Course 3 defined data transformation as changing a dataset's format, structure, or values. CAST and ROUND are two specific transformations that prepare SQL data for analysis without changing the underlying table.
  - termId: sql-dialect
    note: Course 3 introduced SQL dialects as vendor-specific variations of SQL. The CAST/ROUND examples here are shown in BigQuery Standard SQL, with notes on how other dialects differ.
topics:
  - sql
  - data-types
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-2-format-and-adjust-data
---

Even after a dataset is imported, its types are often wrong for the analysis — a price stored as text sorts `89.85` before `799.99`, and a date left as text cannot be filtered by date — so SQL provides standard rules for changing types, just as spreadsheets do. Being able to run that conversion yourself, rather than waiting for someone else, is treated in the reading like a driver who can change a flat tire: it keeps the analysis moving.

## CAST and typecasting

[Typecasting](/glossary#typecasting) is converting data from one [data type](/glossary#data-type) to another, and [CAST](/glossary#cast-function) is the ANSI function SQL uses to do it: `CAST(expression AS typename)`, where `typename` is the type to return. Common conversions include numeric to string (`SELECT CAST(MyCount AS STRING) FROM MyTable`), string to integer (`SELECT CAST(MyVarcharCol AS INT) FROM MyTable`), date to string (`SELECT CAST(MyDate AS STRING) FROM MyTable`), and date to datetime (`SELECT CAST(MyDate AS DATETIME) FROM MyTable` retains time as `YYYY-MM-DD hh:mm:ss`). The reading's table summarizes the full matrix — numeric can become integer, numeric, big number, floating integer, or string; string can become boolean, integer, numeric, big number, floating integer, string, bytes, date, datetime, time, or timestamp; date can become string, date, datetime, or timestamp — with pointers to Conversion Rules in Standard SQL for the complete list. Two related functions are noted in passing: `COERCION` for big numbers and `UNIX_DATE`, which returns days since 1970-01-01 for cross-timezone date comparison, but `CAST` is the one you will use most often. When a cast would otherwise error, `SAFE_CAST` uses the same syntax (`SELECT SAFE_CAST(MyDate AS STRING) FROM MyTable`) but returns `Null` instead of failing the query, so a single bad value does not abort the whole result.

## ROUND and formatting results

**[ROUND](/glossary#round-function)** is the function for controlling numeric precision after a transformation — it returns a number rounded to a given number of decimal places. The Citi Bike example that runs through both readings shows the pattern: `ROUND(AVG(CAST(tripduration AS INT64)/60), 2) AS duration` first [typecasts](/glossary#typecasting) a duration from text/number to `INT64` (BigQuery uses 64-bit integers, hence the `64`), divides by 60 to move from seconds to minutes, averages with `AVG`, and then rounds to two decimals so the report is readable. The same concern for a clean [SQL dialect](/glossary#sql-dialect) result applies to any [data transformation](/glossary#data-transformation) that produces a derived column: conversions and rounding shape the query output for analysis, not the stored table, and choosing the right target type — `STRING`, `INT`, `FLOAT64`, `DATE`, `DATETIME`, or `TIMESTAMP` — is how that output is made sortable, comparable, and ready to share.
