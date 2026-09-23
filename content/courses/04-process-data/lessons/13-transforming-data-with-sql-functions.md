---
id: 04-process-data/13-transforming-data-with-sql-functions
courseId: 04-process-data
title: Transforming Data with SQL Functions
status: authored
summary: Converting data types with CAST, building unique keys with CONCAT, and filling in nulls with COALESCE.
format: cheatsheet
terms:
  - cast-function
  - typecasting
  - concat-function
  - coalesce-function
  - float-data-type
revisits:
  - termId: data-type
    note: Course 3 defined data type as a value's classification. CAST is the SQL tool for fixing a value stuck in the wrong one.
  - termId: data-transformation
    note: Course 3 introduced data transformation as changing a dataset's structure or format. CAST, CONCAT, and COALESCE are three specific transformations available in SQL.
topics:
  - sql
  - data-types
sourceModules:
  - coursera:process-data-dirty-to-clean#module-3-transforming-data
---

A newly imported dataset often has its [data types](/glossary#data-type) wrong even when the values themselves are fine — a price column imported as text sorts `89.85` before `799.99`, because SQL compares text character by character (`8` before `7`) rather than as numbers.

## CAST and typecasting

**[Typecasting](/glossary#typecasting)** is converting data from one data type to another, and **[CAST](/glossary#cast-function)** is the SQL function that does it: `CAST(purchase_price AS FLOAT64)` in `ORDER BY` fixes the sorting problem above by telling SQL to treat the column as a **[float](/glossary#float-data-type)** — a number with a decimal — instead of text. The same function converts a date-time field down to a plain date: `CAST(date AS DATE)` drops the time portion when only the date matters, such as filtering purchases to a single December sales period.

## CONCAT

**[CONCAT](/glossary#concat-function)** joins strings together to build a new one, most often as a unique key that doesn't already exist as its own column. A furniture store's product code doesn't distinguish a couch's colors, so `CONCAT(product_code, product_color)` produces a compound key that lets an analyst count how many of each color actually sold.

## COALESCE

**[COALESCE](/glossary#coalesce-function)** returns the first non-null value from a list of columns, in order. When some rows have a null product name but still have a product code, `COALESCE(product, product_code) AS product_info` shows the product name where it exists and falls back to the code where it doesn't — one column with no nulls, built without touching the underlying table. Used inside a calculation, it also keeps null values from breaking the math outright.
