---
id: 03-prepare-data/04-wide-and-long-data
courseId: 03-prepare-data
title: Wide and Long Data
status: authored
summary: Wide data vs. long data, why analysts convert between them, and when each format earns its keep.
format: refresher
terms:
  - wide-data
  - long-data
  - data-transformation
revisits: []
topics:
  - data-types
sourceModules:
  - coursera:prepare-data-for-exploration#module-1-explore-data-types-fields-and-values
---

The same dataset can be arranged two different ways, and which one you want depends entirely on what you're about to do with it.

## Wide vs. long

In **[wide data](/glossary#wide-data)**, each subject gets a single row, with a separate column for every attribute or time point. Population data for a set of countries, with one row per country and one column per year, is wide. Wide data makes it easy to compare values across columns at a glance — sorting the sheet immediately shows which country had the highest population in a given year.

In **[long data](/glossary#long-data)**, each row is one time point for one subject, so a single subject spans multiple rows. The same population data, rearranged so each country appears once per year in its own row, is long. Long data stays compact as more variables get added — a new variable is one more column, not ten more (one per year).

|Wide data is preferred when|Long data is preferred when|
|---|---|
|Building tables and charts with a few variables per subject|Storing many variables per subject, e.g. 60 years of a bank's interest rates|
|Comparing straightforward line graphs|Doing advanced statistical analysis or graphing|

## Data transformation

**[Data transformation](/glossary#data-transformation)** is the process of changing a dataset's format, structure, or values — adding or deleting fields, standardizing variable names, renaming or combining columns, joining datasets together, or converting a file to a different format like CSV. Converting between wide and long is one common case, but transformation covers any reshaping done to make data easier to analyze, merge, or move between systems.

A merger is a typical trigger: a company that acquires another company usually inherits customer data in an incompatible format, and has to transform it — matching structure, then removing duplicate records — before the two datasets can be combined into one.

Long-to-wide is the more common direction in practice, since wide format is generally easier to read and chart, even though it holds no more information than the long version it came from — daily stock prices for a handful of companies, collected long (one row per date-company-price triple), get reshaped wide (one column per company) precisely so a single chart can compare all of them over the same dates.
