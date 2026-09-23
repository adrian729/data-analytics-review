---
id: 03-prepare-data/02-data-formats-and-structure
courseId: 03-prepare-data
title: Data Formats and Structure
status: authored
summary: A reference for the paired classifications data comes in — primary/secondary, internal/external, continuous/discrete, nominal/ordinal, structured/unstructured — plus what data modeling is for.
format: cheatsheet
terms:
  - structured-data
  - unstructured-data
  - primary-data
  - secondary-data
  - internal-data
  - external-data
  - continuous-data
  - discrete-data
  - nominal-data
  - ordinal-data
  - data-modeling
revisits:
  - termId: qualitative-data
    note: Course 2 defined qualitative and quantitative data. This lesson adds four more paired classifications data gets sorted by, alongside those two.
topics:
  - data-types
sourceModules:
  - coursera:prepare-data-for-exploration#module-1-differentiate-between-data-formats-and-structure
---

Data gets classified along several independent axes at once — the same dataset can be primary, internal, discrete, and structured all together. Here's each pair.

## Primary vs. secondary

**[Primary data](/glossary#primary-data)** is collected first-hand by the researcher who's using it — an interview you conducted, a survey you sent out. **[Secondary data](/glossary#secondary-data)** was gathered by someone else — a firm's customer profiles you bought, census data collected by a government agency.

## Internal vs. external

**[Internal data](/glossary#internal-data)** lives inside a company's own systems — HR's wage records, a store's own sales figures. **[External data](/glossary#external-data)** lives outside the organization — national wage averages, a customer's credit report.

## Continuous vs. discrete

**[Continuous data](/glossary#continuous-data)** is measured and can take almost any numeric value — height, temperature, a video's runtime. **[Discrete data](/glossary#discrete-data)** is counted and limited to a fixed set of values — daily hospital visits, tickets sold this month, a room's maximum capacity.

## Nominal vs. ordinal

Both are a type of [qualitative data](/glossary#qualitative-data), but they differ in whether order matters. **[Nominal data](/glossary#nominal-data)** has categories with no set order — new customer, returning customer, regular customer. **[Ordinal data](/glossary#ordinal-data)** has categories with a set order or scale — movie ratings, ranked-choice voting selections, income brackets.

## Structured vs. unstructured

**[Structured data](/glossary#structured-data)** is organized in a specific format, typically rows and columns — an expense report, a tax return. It's easy to store, query, and export because the structure travels with the data. **[Unstructured data](/glossary#unstructured-data)** isn't organized in any easily identifiable way — video, audio, social media posts, satellite imagery, open-ended survey responses. There's far more unstructured data in the world than structured data, and it's inherently harder to search, manage, and analyze.

That difficulty matters for fairness: as AI and machine learning tools get better at parsing unstructured data, making sure those tools are inclusive and unbiased becomes the live challenge. A tool that weights or represents some elements of a dataset more heavily than others produces the same skewed, unreliable outcomes as any other unfair dataset.

## Data modeling

**[Data modeling](/glossary#data-modeling)** is the process of diagramming how data is organized and structured — a blueprint different stakeholders can all work from, even though each has a different relationship to it. As a junior analyst you're unlikely to design a data model yourself, but you'll work with ones your organization already has. Three common levels of detail exist: conceptual (a high-level view of how data interacts across an organization, with no technical detail), logical (the technical relationships, attributes, and entities, without actual table names), and physical (how the database actually operates — table names, column names, and data types included).
