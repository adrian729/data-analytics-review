---
id: 05-analyze-data/10-joining-tables-in-sql
courseId: 05-analyze-data
title: Joining Tables in SQL
status: authored
summary: JOIN syntax and the four JOIN types, aliases for readable queries, and the duplicate-rows pitfall that COUNT DISTINCT exists to solve.
format: cheatsheet
terms:
  - join
  - inner-join
  - left-join
  - right-join
  - outer-join
  - aliasing
  - count-distinct
revisits:
  - termId: relational-database
    note: Course 3 introduced relational databases as tables connected through the fields they share. This lesson is the read side — how a JOIN pulls those connected tables back together.
  - termId: primary-key
    note: Course 3 defined a primary key as the field that uniquely identifies each record in a table. A JOIN's ON condition typically lines a primary key up with a foreign key to combine the tables.
  - termId: foreign-key
    note: Course 3 defined a foreign key as a field that is another table's primary key. It is the matching column a JOIN reads across to connect two tables.
  - termId: redundancy
    note: Course 3 introduced redundancy — the same data sitting in two or more places. Normalized databases keep it out, and queries use JOINs to pull related data together instead of copying it into one big table.
  - termId: select-clause
    note: Course 3 defined SELECT, the clause that picks which columns a query returns. Joined queries prefix each column with its table name so shared column names stay unambiguous.
  - termId: from-clause
    note: Course 3 defined FROM as the clause naming the table a query reads. In a JOIN the second table is declared right there too, paired with ON to say how the tables match.
  - termId: limit-clause
    note: Course 4 introduced LIMIT for capping how many rows a query returns. Sampling a large dataset with LIMIT is a good first step before counting anything.
topics:
  - sql
  - databases
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-3-aggregate-data-for-analysis
---

SQL's answer to VLOOKUP for combining data in a database is the **[JOIN](/glossary#join)** — a SQL clause that combines rows from two or more tables based on a related column. JOINs read across a [relational database](/glossary#relational-database), using the [primary keys](/glossary#primary-key) and [foreign keys](/glossary#foreign-key) that connect its tables to pick which records belong together — the arrangement that lets a normalized database avoid [redundancy](/glossary#redundancy), because related data is joined on demand rather than duplicated into one giant table.

## JOIN syntax

The JOIN belongs to the [FROM](/glossary#from-clause) clause of the query: it names the second table, and `ON` states how the two tables line up.

```sql
SELECT employees.name, departments.name
FROM employee_data.employees
INNER JOIN employee_data.departments
ON employees.department_id = departments.department_id
```

The columns to return are listed in the [SELECT](/glossary#select-clause) clause, each prefixed with its table name — `employees.name` — because the two tables may well share column names.

## Aliases

**[Aliasing](/glossary#aliasing)** temporarily names a table or column in a query to make it easier to read and write. A table like `special_projects_customer_negotiation_mileages` is painful to retype every time it's used; aliased once to `mileage` in the `FROM` clause (`FROM ... AS mileage`), it's `mileage.column_name` everywhere else, for that query only. Queries run with or without `AS`, but keeping it makes the alias stand out.

## The four JOINs

Picturing the two tables as circles on a Venn diagram keeps the four common JOIN types straight — that's exactly the visual these joins are usually explained with:

- **[INNER JOIN](/glossary#inner-join)** — the overlapping area: returns records with matching values in both tables. It's the default — plain `JOIN` means `INNER JOIN` — and the most common choice.
- **[LEFT JOIN](/glossary#left-join)** — the entire left table (the first one mentioned) plus only the matching records from the right table; right-side columns return NULL where there's no match.
- **[RIGHT JOIN](/glossary#right-join)** — the opposite: all records from the right table and only the matching records from the left. Rarely used, because flipping the table order turns the same query into a LEFT JOIN.
- **[OUTER JOIN](/glossary#outer-join)** — combines LEFT and RIGHT to return all matching records in both tables: every row of both, with NULLs wherever one side has no match. Usually spelled `FULL OUTER JOIN`, and it can be a large data pull.

## The duplicate-rows pitfall

Joins multiply rows. Connecting the orders table to the warehouse table on `warehouse_id` repeats each warehouse's row once per order, so counting warehouse state values now counts every order row — 9,999 results, when only three states appear in the data. **[COUNT DISTINCT](/glossary#count-distinct)** returns only the distinct values in a range, dropping duplicate rows and null values from the result, so the same joined data comes back as exactly 3. Sampling the dataset with `LIMIT 100` first is a cheap way to see what you're about to count.