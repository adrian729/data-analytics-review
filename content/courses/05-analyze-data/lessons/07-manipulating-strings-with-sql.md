---
id: 05-analyze-data/07-manipulating-strings-with-sql
courseId: 05-analyze-data
title: Manipulating Strings with SQL
status: authored
summary: Using CONCAT, CONCAT_WS, and the || operator in SQL to join text strings into new fields for cleaner reports and analysis.
format: cheatsheet
terms: []
revisits:
  - termId: text-string
    note: This course's lesson 06 defined text string as a group of characters within a cell. This lesson uses those strings as the inputs to SQL concatenation.
  - termId: concat-function
    note: Course 4 defined CONCAT as the SQL function that joins strings into a new text string. This lesson works through SQL string concatenation, including the CONCAT_WS and || forms that module 2 adds to the basic CONCAT.
  - termId: sql-dialect
    note: Course 3 introduced SQL dialect as the vendor-specific variation of SQL. This lesson shows why CONCAT syntax changes between BigQuery and other dialects.
topics:
  - sql
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-2-format-and-adjust-data
---

Manipulating strings in SQL most often means concatenation — joining two or more [text strings](/glossary#text-string) stored in separate columns into one longer string that is easier to read or to use as a new variable. Once concatenated, the result can serve as a full name for a campaign, a readable route label, or a unique identifier, without changing the underlying tables.

## CONCAT, CONCAT_WS, and ||

| Function / operator | What it does | Example | Result |
|---|---|---|---|
| [CONCAT](/glossary#concat-function) | Joins two or more strings into a new text string | `CONCAT('Google', '.com')` | `Google.com` |
| `CONCAT_WS` | Joins with a separator between each string | `CONCAT_WS('.', 'www', 'your_company', 'com')` | `www.your_company.com` |
| `||` | Joins with the `||` operator (BigQuery) | `'Google' || '.com'` | `Google.com` |

The marketing example from the reading shows the base pattern: `SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customers;` merges `first_name` and `last_name` with a space `' '` so the output appears as a proper full name, and the alias `AS full_name` is required because SQL would otherwise not know what to use as the header for a derived field. The same idea builds a route label from the Citi Bike data discussed in the next reading — `CONCAT(start_station_name, ' to ', end_station_name) AS route` — so counts and averages can be grouped by a human-readable route. `CONCAT_WS` (CONCAT With Separator) adds the separator once and reuses it: `SELECT CONCAT_WS('.', 'www', 'your_company', 'com') AS website FROM web_data;` inserts a period between each URL component so the result is navigable. In BigQuery the `||` operator does the same work inline: `SELECT book_name || ' - ' || edition AS full_book_title FROM library;` combines a title and edition with a hyphen separator.

## Dialect matters

The reading stresses that the operator for concatenation depends on the [SQL dialect](/glossary#sql-dialect) you are in. BigQuery accepts `||` as shown above, but Microsoft SQL Server does not — there you write `'Google' + '.com'` instead — so you must use the syntax for the environment you are querying. Whichever form you use, the purpose is the same: create new, longer [text strings](/glossary#text-string) that make reports more readable and give the analysis new features to group, filter, and sort.
