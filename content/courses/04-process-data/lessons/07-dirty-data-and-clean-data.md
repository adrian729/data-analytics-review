---
id: 04-process-data/07-dirty-data-and-clean-data
courseId: 04-process-data
title: Dirty Data and Clean Data
status: authored
summary: The line between dirty and clean data, and the five named types of dirty data — duplicate, outdated, incomplete, incorrect, and inconsistent.
format: cheatsheet
terms:
  - dirty-data
  - clean-data
  - duplicate-data
  - outdated-data
  - incomplete-data
  - incorrect-data
  - inconsistent-data
  - null-value
revisits:
  - termId: unique-constraint
    note: This course's uniqueness constraint is the rule duplicate data violates — a duplicate is exactly the case a uniqueness check is meant to catch.
topics:
  - data-quality
sourceModules:
  - coursera:process-data-dirty-to-clean#module-2-data-cleaning-is-a-must
---

**[Dirty data](/glossary#dirty-data)** is data that's incomplete, incorrect, or irrelevant to the problem being solved; **[clean data](/glossary#clean-data)** is complete, correct, and relevant. IBM puts the yearly cost of poor-quality data in the US alone at $3.1 trillion — and the single biggest cause isn't a system glitch, it's human error: a typo, a blank left where a value belonged, the same record entered twice.

## Five named types

| Type | Description | Common cause |
|---|---|---|
| [Duplicate data](/glossary#duplicate-data) | A record that shows up more than once | Manual entry, batch imports, data migration |
| [Outdated data](/glossary#outdated-data) | Data superseded by newer, more accurate information | People changing roles, systems becoming obsolete |
| [Incomplete data](/glossary#incomplete-data) | Data missing important fields | Improper collection or incorrect entry |
| [Incorrect/inaccurate data](/glossary#incorrect-data) | Data that's complete but wrong | Human error, fake or mock data |
| [Inconsistent data](/glossary#inconsistent-data) | Data using different formats for the same thing | Incorrect storage, errors during transfer |

Each type does real damage: duplicates skew counts and metrics, outdated data misleads decisions built on it, incomplete data can block an essential service outright, incorrect data drives bad decisions straight through to lost revenue, and inconsistent data makes it impossible to reliably segment or classify records.

## Null isn't zero

A **[null](/glossary#null-value)** value means the data simply doesn't exist — a survey question the respondent skipped, not a value of 0 they actually entered. Confusing the two changes the answer: a null customer-satisfaction rating and a rating of 0 mean very different things, and the fix for a column full of nulls is a decision — filter them out and disclose the smaller resulting sample, or keep them and treat their presence as its own finding — not an assumption.

## Recognizing dirty data by eye

Duplicates aside, the most common patterns are spelling and typing errors (misspellings, mixed-up letters, inconsistent punctuation), inconsistent formatting (a currency value displayed as a percentage), missing data, incorrect labels (an image of a bear labeled anything but "panda bear" in a labeled training set), and inconsistent field length (a birth-year field that should always be four digits). [Data validation](/glossary#data-validation) — checking accuracy and quality before data is even added or imported — is the tool built to catch these before they enter a dataset at all, rather than after.
