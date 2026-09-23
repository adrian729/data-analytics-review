---
id: 03-prepare-data/03-data-types-fields-and-values
courseId: 03-prepare-data
title: Data Types, Fields, and Values
status: authored
summary: What a data type is, the record/field vocabulary databases use for rows and columns, and how Boolean logic combines AND, OR, and NOT into filter conditions.
format: refresher
terms:
  - data-type
  - record
  - field
  - value
  - boolean-logic
revisits: []
topics:
  - data-types
  - databases
sourceModules:
  - coursera:prepare-data-for-exploration#module-1-explore-data-types-fields-and-values
---

A **[data type](/glossary#data-type)** tells you what kind of value you're working with — a specific data attribute rather than the data itself. Data types can vary by the query language or platform in use, but in a spreadsheet there are generally three: a number, a text or string (a sequence of characters, including numbers that aren't meant for calculation, like a phone number), and a Boolean.

## Records, fields, and values

A data table's rows and columns have a second, more general vocabulary that applies to any structured data, not just spreadsheets:

- A **[record](/glossary#record)** is a row — one complete entry, like one song in a playlist or one customer in a table.
- A **[field](/glossary#field)** is a column — one characteristic shared across every record, like a song's title or a customer's address. Every field within a table holds a single data type, though different fields can hold different types.
- A **[value](/glossary#value)** is the specific piece of data in one field of one record — a single cell.

"Rows and columns" and "records and fields" describe the same structure. Spreadsheet work tends to use the first pair; database and query-language work tends to use the second.

## Boolean logic

**[Boolean logic](/glossary#boolean-logic)** combines multiple true/false conditions into one filter, using three operators:

- **AND** requires every condition to be true. `Color = "Grey" AND Color = "Pink"` only matches something that is both.
- **OR** requires at least one condition to be true. `Color = "Grey" OR Color = "Pink"` matches either.
- **NOT** excludes a condition. `Color = "Grey" AND NOT Color = "Pink"` matches grey items, except ones that are also pink.

Conditions can be grouped with parentheses and combined: `(Color = "Grey" OR Color = "Pink") AND Waterproof = "True"` filters for either color, but only among waterproof items. Analysts write Boolean statements constantly — inside search queries, inside database queries, and inside conditional logic in code.
