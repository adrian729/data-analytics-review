---
id: 05-analyze-data/01-organize-data-for-analysis
courseId: 05-analyze-data
title: Organize Data for Analysis
status: authored
summary: Where the Analyze stage sits in the data analysis process, why organization persists through every phase, and how sorting and filtering make patterns visible so analysis can answer the original question.
format: refresher
terms: []
revisits:
  - termId: data-analysis-process
    note: Course 1 defined the data analysis process as Ask, Prepare, Process, Analyze, Share, and Act. This lesson places Analyze as the fourth stage and details its four internal phases — organize, format and adjust, get input, and transform.
  - termId: sorting
    note: Course 2 defined sorting as arranging data into a meaningful order so it is easier to understand and visualize. Here it appears as one of the two organizing actions analysts use during the Format-and-adjust phase of analysis.
  - termId: filtering
    note: Course 2 defined filtering as showing only the data that meets a specified criteria while hiding the rest. This lesson frames it alongside sorting as the reversible way to isolate errors, outliers, and the subset relevant to the question.
topics:
  - process
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-1-organize-data-for-more-effective-analysis
---

Analysis is the process of making sense of data you have collected so you can identify trends and relationships and accurately answer the question you are asking. You have already learned to ask the right questions, prepare data for exploration, and process it until it is clean — the [data analysis process](/glossary#data-analysis-process) places Analyze as the heart of that sequence, after Ask, Prepare, and Process and before Share and Act, and the course stresses that decisions about organization continue through all of those phases.

## Where the Analyze stage sits

The module teaches analysis as four phases: organize data, format and adjust data, get input from others, and transform data by observing relationships and making calculations. The wedding-registry example makes the distinction concrete: the registry is an already-organized dataset you choose to analyze, formatting it means [sorting](/glossary#sorting) gift prices low to high and [filtering](/glossary#filtering) to the $60 budget, getting input means checking whether another guest already bought the item, and transforming means relating preference, price, and availability to choose the answer that solves your problem.

## Why organization keeps feeding forward

Organization is not a one-time cleanup before analysis starts; how data is classified and structured impacts findings whether you work in a spreadsheet or a database, and the course warns to be prepared to adjust no matter how far into analysis you are. Most data you will analyze is organized in tables — the example database has tables for car dealerships, product details, and repair parts, each with fields like branch owner and repair-part cost — and that structure helps you decide which variables and types you need, when to hide a duplicate column, and when to convert a type with `CAST` (the purchase-price column changed from `STRING` to `FLOAT` so it could be used in calculations) before you go further.

## The two organizing actions

[Sorting](/glossary#sorting) ranks data by a chosen metric and groups similar records — ascending or descending, alphabetically like books in a library, chronologically like text messages, or by price, acreage, location, runs, or any classification a business uses to compare competitors. [Filtering](/glossary#filtering) saves time when there is a lot of data because it isolates the current question and flags errors and outliers — points very different from similarly collected data that might not be reliable — and removing the filter returns the original organization once they are fixed. The two are not alternatives: you can filter first and then sort what remains, and spreadsheets, SQL databases, and document tables all support both, while a pivot table shows the same principle by sorting its row and column areas by a custom list first and otherwise ascending by default, with a descending rule persisting even after new data is added.
