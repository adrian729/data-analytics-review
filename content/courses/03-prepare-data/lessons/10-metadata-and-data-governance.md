---
id: 03-prepare-data/10-metadata-and-data-governance
courseId: 03-prepare-data
title: Metadata and Data Governance
status: authored
summary: Metadata's three types, the data dictionaries and repositories that store it, and the data governance discipline that keeps a company's data assets under formal control.
format: refresher
terms:
  - metadata
  - descriptive-metadata
  - structural-metadata
  - administrative-metadata
  - data-dictionary
  - metadata-repository
  - data-governance
revisits: []
topics:
  - databases
  - data-quality
sourceModules:
  - coursera:prepare-data-for-exploration#module-3-managing-data-with-metadata
  - coursera:prepare-data-for-exploration#module-1-differentiate-between-data-formats-and-structure
---

**[Metadata](/glossary#metadata)** is data about data — the who, what, when, where, and how that turns a raw file into something you can actually interpret and trust. A photo's metadata includes the camera, timestamp, and location it was taken at; a spreadsheet's includes its author, creation date, and column names; a book's includes its title, author, and table of contents. Whatever the medium, metadata is what lets you find, reuse, and preserve data later, instead of just staring at it.

## Three types

- **[Descriptive metadata](/glossary#descriptive-metadata)** describes a piece of data well enough to identify it later — a title, tags, categories.
- **[Structural metadata](/glossary#structural-metadata)** indicates how the data is organized, and whether it belongs to one collection or more than one.
- **[Administrative metadata](/glossary#administrative-metadata)** indicates the technical source of a digital asset — who created or last modified it, and when.

A **[data dictionary](/glossary#data-dictionary)** is a tabular way of recording a lot of this at once: an inventory of a dataset's tables, listing each one's columns and their data types, sometimes supplemented with constraints or descriptions.

## Storing and governing it

Larger organizations tend to accumulate data across incompatible systems — an on-premises store, a cloud platform, second- or third-party data from a partner — each with its own way of organizing things. A **[metadata repository](/glossary#metadata-repository)** solves the resulting mess by holding metadata centrally: where every system and dataset lives, and how the data across them connects.

**[Data governance](/glossary#data-governance)** is the broader process of formally managing a company's data assets — security, privacy, integrity, usability, and the flow of data in and out of the organization. It's not just naming conventions and procedures; it's the roles and responsibilities of the people (often metadata specialists) who keep that metadata accurate and the standards behind it consistent day to day.
