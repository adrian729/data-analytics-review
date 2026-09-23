---
id: 03-prepare-data/06-data-credibility-and-sourcing
courseId: 03-prepare-data
title: Data Credibility and Sourcing
status: authored
summary: The ROCCC framework for judging a data source, and what each letter looks like when it fails.
format: cheatsheet
terms:
  - rocc-framework
  - good-data-source
  - bad-data-source
revisits: []
topics:
  - data-quality
sourceModules:
  - coursera:prepare-data-for-exploration#module-2-explore-data-credibility
---

"Good data" sounds subjective, but there's a concrete checklist behind it: the **[ROCCC framework](/glossary#rocc-framework)**.

| Letter | Stands for | A [good data source](/glossary#good-data-source)... | A [bad data source](/glossary#bad-data-source)... |
|---|---|---|---|
| R | Reliable | is accurate, complete, and unbiased — vetted and proven fit for use | can't be trusted: inaccurate, incomplete, or biased (including misleading visualizations, like a chart with a truncated y-axis) |
| O | Original | is validated against its original source, even if you found it second- or third-hand | can't be traced back to an original source, leaving you to just trust an intermediary |
| C | Comprehensive | contains all the critical information needed to answer the question | is missing information needed to answer the question, and may carry human error |
| C | Current | is refreshed regularly and relevant to the task at hand | is out of date and no longer relevant |
| C | Cited | names who created it and whether it comes from a credible organization | hasn't been cited or vetted by anyone |

A source that clears all five "ROCCCs" — it's good. A source that fails several is worth treating with real caution before it goes into an analysis. Vetted public datasets, academic papers, financial data, and government agency data (data.gov, the U.S. Census Bureau) are reliable starting points precisely because they tend to clear the bar by default.
