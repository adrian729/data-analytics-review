---
id: 05-analyze-data/11-working-with-subqueries
courseId: 05-analyze-data
title: Working with Subqueries
status: authored
summary: Queries nested inside queries — subqueries in WHERE, subqueries that aggregate, functions working alongside subqueries, and the syntax rules that govern them.
format: cheatsheet
terms:
  - subquery
revisits:
  - termId: query
    note: Course 1 defined a query as a request for data from a database. This lesson nests one query inside another — the subquery — and names the statement containing it the outer query.
  - termId: where-clause
    note: Course 3 defined WHERE for filtering individual rows. Subqueries can live inside a WHERE clause, with IN matching against the list of values the inner query returns.
  - termId: distinct-keyword
    note: Course 4 defined DISTINCT as retrieving only non-duplicate entries, and the joining lesson's COUNT DISTINCT builds on it. A subquery returning a list of values can repeat entries, so wrapping the column in DISTINCT trims the list to each unique value once.
  - termId: join
    note: Defined in the previous lesson as combining rows from two or more tables based on a related column. A subquery in FROM builds a helper table that typically gets JOINed back to one of the original tables.
  - termId: function
    note: Course 1 defined a function as a preset command that automatically performs a specified process or task. SQL functions like AVG and COUNT perform the aggregation, and subqueries feed their results into the outer query.
  - termId: order-by-clause
    note: Course 4 introduced ORDER BY for sorting query results. The FROM-subquery example orders its final table by the count the subquery produced, descending.
topics:
  - sql
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-3-aggregate-data-for-analysis
---

A **[subquery](/glossary#subquery)** — also called an inner or nested query — is a SQL [query](/glossary#query) nested inside a larger query, like the layers of a nesting doll. Because the outer query's logic depends on the inner query, one query can combine several pieces of logic in one place — more efficient to run and easier to read than several separate trips to the database. The statement containing the subquery is the outer query (or outer SELECT); the subquery is the inner query, and the innermost query executes first, passing its results to the outer query to use. Subqueries are usually nested in FROM or [WHERE](/glossary#where-clause) clauses.

## Subqueries in WHERE

To list the stations that subscribers use, the outer query selects `station_id` and `name` from the citibike stations table, and its WHERE clause uses `IN` to match against a subquery that selects `start_station_id` from the trips table where `usertype = 'Subscriber'`. Subqueries support comparison operators like `>`, `<`, and `=`, and when an inner query returns more than one row it needs a multiple-value operator such as `IN`, `ANY`, or `ALL`. Because the trips table holds one row per trip, the same station ID appears many times in that inner list — wrapping it in [DISTINCT](/glossary#distinct-keyword) trims the results to each unique station.

## Subqueries used to aggregate

- **In SELECT** — a new column computed on the fly: `(SELECT AVG(num_bikes_available) FROM ...)` returns the overall average beside every station's own count, without that column existing in the table beforehand.
- **In FROM** — a helper table: a subquery groups trips by `start_station_id` and counts each station's rides, gets aliased, and is then [JOIN](/glossary#join)ed back to the stations table, ordered with [ORDER BY](/glossary#order-by-clause) descending.
- **For a business question** — a subquery supplies the grand total: counting each warehouse's orders while `(SELECT COUNT(*) FROM orders)` runs alongside yields every warehouse's count and the overall total in one result, ready for a CASE statement to bucket into fulfillment percentages.

## A functional friendship

SQL functions are the tools that make aggregation possible — AVG computes an average, COUNT counts rows — and subqueries let a function's result feed the outer query in a single request. Instead of running an average-salary query and then comparing each employee by hand, a [function](/glossary#function) inside a subquery identifies everyone above or below the average in one step. Working together, the two make each other far more useful.

## Syntax rules

Subqueries follow a few fixed rules: they must be enclosed within parentheses; they can specify one or more columns in their SELECT clause; subqueries that return more than one row can only be used with multiple-value operators such as IN; and a subquery can't be nested in a `SET` command, which pairs with `UPDATE` to change columns and values.