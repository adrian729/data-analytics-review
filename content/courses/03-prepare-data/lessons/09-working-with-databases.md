---
id: 03-prepare-data/09-working-with-databases
courseId: 03-prepare-data
title: Working with Databases
status: authored
summary: Relational databases, how primary and foreign keys connect their tables, composite keys, and the normalization that keeps redundant data out of a well-built database.
format: refresher
terms:
  - relational-database
  - primary-key
  - foreign-key
  - composite-key
  - normalized-database
  - redundancy
revisits:
  - termId: database
    note: Course 1 defined a database as data organized and accessed through a query language. This lesson is the internal structure — how a relational database's tables actually connect.
  - termId: query
    note: Course 1 defined a query as a request for data. This lesson supplies the keys a query relies on to pull matching data across tables.
topics:
  - databases
sourceModules:
  - coursera:prepare-data-for-exploration#module-3-working-with-databases
---

A **[relational database](/glossary#relational-database)** is a [database](/glossary#database) made of a series of tables connected through the fields they share. A car manufacturer's database might have separate tables for dealerships, product details, and repair parts — each holding only what's relevant to it, connected wherever the same field (say, a branch ID) shows up in more than one table.

## Primary and foreign keys

Two kinds of keys make those connections possible:

- A **[primary key](/glossary#primary-key)** uniquely identifies each record in a table. It must be unique and can never be null or blank, and a table can have only one. A dealership table's primary key might be its branch ID; a parts table's, its part ID.
- A **[foreign key](/glossary#foreign-key)** is a field that's the primary key of a *different* table, used to link back to it. A table can hold multiple foreign keys — the repair-parts table above might carry a VIN as a foreign key, connecting each part back to the vehicle table where VIN is the primary key.

Some tables need neither: a pure revenue table can hold several foreign keys with no primary key of its own. And a primary key doesn't have to be a single column — a **[composite key](/glossary#composite-key)** is a primary key built from two or more columns together, useful when no single column is unique on its own (e.g. `customer_id` plus `location_id`, where either alone might repeat but the pair never does).

## Normalization

**[Normalized databases](/glossary#normalized-database)** store only related data together in each table, connected through keys rather than duplicated across tables. The goal is directly against **[redundancy](/glossary#redundancy)** — the same piece of data sitting in two or more places, which increases the odds it goes stale or contradicts itself in one location without the others updating to match. Normalization is what makes a relational database easier to search and safer to update than one large table holding every possible variable at once.
