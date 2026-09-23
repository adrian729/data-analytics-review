---
id: 03-prepare-data/01-selecting-the-right-data
courseId: 03-prepare-data
title: Selecting the Right Data
status: authored
summary: The considerations that decide what data to collect for a project — data sources, how much data you actually need, and the time frame you're working with.
format: refresher
terms:
  - first-party-data
  - second-party-data
  - third-party-data
  - population
  - sample
revisits: []
topics:
  - data-types
  - data-quality
sourceModules:
  - coursera:prepare-data-for-exploration#module-1-collecting-data
---

With nearly endless data available for any question, deciding what to collect is itself a skill. A business task usually narrows the choice for you, but a few considerations still need a deliberate answer before you start.

## Where the data comes from

Data sources fall into three tiers, in order of how much you can vouch for them:

- **[First-party data](/glossary#first-party-data)** — collected by you or your own organization, using your own resources. This is the preferred tier, because you know exactly how it was gathered.
- **[Second-party data](/glossary#second-party-data)** — collected by another group directly from its own audience, then sold to you. Still generally reliable, because it came from a source with direct experience.
- **[Third-party data](/glossary#third-party-data)** — collected by an outside source that had no direct relationship with the data, often aggregated from a number of other sources before it reaches you. It can still be useful, but it needs closer scrutiny for accuracy, bias, and credibility than the other two tiers.

Whichever tier you use, every dataset still needs to be inspected for accuracy and trustworthiness before you build on it.

## How much data to collect

A **[population](/glossary#population)** is every possible data value in the set you're studying — every car on a city's streets, every customer a company has ever had. Collecting from an entire population is often impractical, which is why analysts work with a **[sample](/glossary#sample)** instead: a part of the population that's representative of the whole. A sample might be one location within a larger area, or a random pull from the full population — which one depends on the project.

## Choosing the data type and time frame

Beyond source and volume, two more decisions shape a collection plan:

- **Data type** — pick a type that actually supports the analysis. Traffic records analyzed for weekly patterns need dates stored as a date type, not as text.
- **Time frame** — an urgent question forces you toward historical data that already exists, because there's no time to collect new data. A question about long-term trends may justify collecting data over an extended period instead.

Throughout, the filter that matters most is relevance: a traffic study doesn't need financial data just because it's available. Choose data that helps answer the business task, and leave the rest alone.
