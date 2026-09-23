---
id: 06-share-data/09-linking-datasets-in-tableau
courseId: 06-share-data
title: Linking Datasets in Tableau
status: authored
summary: When to join, relate, or blend multiple sources in Tableau, how the optional multiple-source unit combines CO2, energy, GDP, and population tables on shared Year and Country keys, and why relationships and data blending differ from classic joins for telling a combined story.
format: refresher
terms:
  - data-blending
revisits:
  - termId: join
    note: Course 5 defined a JOIN as combining rows from two or more tables based on a related column, with inner, outer, left, and right variants. This lesson applies those same inner and outer logic to Tableau's drag-and-drop join interface on Year and Country.
  - termId: relational-database
    note: Course 3 defined a relational database as a database that contains a series of tables that can be connected to form relationships. This lesson creates those relationships directly in Tableau without building a new database.
  - termId: data-merging
    note: Course 4 defined data merging as the process of combining two or more datasets into a single dataset. Tableau's linking achieves a similar result visually without first exporting a merged file.
  - termId: vlookup
    note: Course 5 defined VLOOKUP as a spreadsheet function that vertically searches for a certain value in a column to return corresponding information. Tableau's joins and blends replace that lookup step with a key-based link across sources.
  - termId: composite-key
    note: Course 3 defined a composite key as a primary key comprising two or more columns used to uniquely identify rows. This lesson joins on a two-column key of Year plus Country to align the four tables.
topics:
  - visualization
  - tooling
  - databases
sourceModules:
  - coursera:share-data-art-of-visualization#module-2-create-data-visualizations-with-tableau
---

Analysts rarely answer a question with a single file, and the optional unit that closes module 2 exists because Tableau lets you share a more comprehensive story without first exporting a new merged file; the policy-institute scenario the videos use makes that concrete: you already have CO2 emissions per country from 1960 to 2011, but the analysis from 2000 to 2011 also needs energy use, total population, and total GDP that live in three separate tables collected from a government site, with missing data in the 1960s-1980s that you can ignore by focusing on the intersection of years 2000-2011 rather than by manually stitching a master sheet. **[Data blending](/glossary#data-blending)** is a Tableau method that combines data from multiple data sources and is one of three closely related mechanisms the readings distinguish for that task.

## Joins, relationships, and data blending

In Tableau the left-hand Connections pane holds each source you add with the plus icon after the initial CO2 file — energy, GDP total, and total population — while the central canvas where you drag tables controls how they connect. A [JOIN](/glossary#join) in this context has its Course-5 meaning of combining rows based on a related column, and the video builds Venn-diagram joins between CO2 Data Cleaned and energy, then energy and GDP, then the resulting group and totalpopulation, each on two clauses: Year on the left to Year1, Year GDP total, or Year totalpopulation on the right, and Country Name on the left to Country, Country1, or Country totalpopulation on the right, after first correcting types that would otherwise block the join — Year fields whose # icon indicates numeric must be changed to date so all four share a date type, Energy use whose abc indicates string must be changed to number decimal, and currentGDP from abc string to number whole, with Update Now refreshing the preview until the red exclamation between tables disappears and dates display as month/day/year with January 1 defaults. That is the classic [data merging](/glossary#data-merging) workflow executed visually: physically matching on a shared key that in [relational-database](/glossary#relational-database) terms forms a [composite key](/glossary#composite-key) of Year plus Country, equivalent to replacing repeated [VLOOKUP](/glossary#vlookup) calls with a single link. Relationships, which the resources describe as a more flexible alternative to joins that does not force you to create one single table from your multiple data sources, let you keep logical links and let Tableau settle the join logic at query time; they do not require opening the physical table view the video uses for explicit joins. **[Data blending](/glossary#data-blending)** is still more separate: instead of truly combining the data, blends query and aggregate data from multiple sources and combine the aggregated results, which is useful when sources differ in granularity, live at different update frequencies, or you want to keep them distinct while comparing — the reading explicitly notes the blended sources are not truly combined.

## Which to use and how the example finishes

The choice depends on whether you need a single unified table for row-level calculation or just coordinated aggregation. When you need to filter the final map to a single year, calculate CO2 per capita from CO2 and population in the same row, and let a Year slider from 2000-2011 drive color, an inner-style result that keeps only years and countries present in all four sources is appropriate — which is why the example's preview narrows to 2000-2011 even though CO2 alone spans 1960-2011. When you want to keep an energy source live via a Web Data Connector, compare sources at different grains, or avoid creating an extract, a relationship or a blend preserves source independence and updates when each source updates. The finished visualization then demonstrates the plumbing: drag Country Name to Detail, drag CO2 Per Capita to Color and switch the palette to Red-Green diverging with Stepped Color and Reversed so green signals lower emissions, set Start 0 and End 62 from the observed per-capita range 0.0396 to 61.9898, drag Year to Filters > Show Filter as Single value dropdown, and Publish As with Create Extract if prompted — a map whose color now reflects the correctly typed, correctly linked values from four files without ever merging them by hand, an outcome the reflections summarize as visualizing comparisons and combinations of data rather than building a new dataset from scratch.
