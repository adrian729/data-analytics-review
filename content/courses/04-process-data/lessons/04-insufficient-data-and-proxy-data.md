---
id: 04-process-data/04-insufficient-data-and-proxy-data
courseId: 04-process-data
title: Insufficient Data and Proxy Data
status: authored
summary: What to do when there's no data, too little of it, or the wrong data — including when proxy data and open datasets are the workaround.
format: refresher
terms:
  - proxy-data
revisits:
  - termId: open-data
    note: Course 2 defined open data as data available to the public. It's one of the standard places to look for proxy data when your own organization doesn't have what a project needs.
topics:
  - data-quality
sourceModules:
  - coursera:process-data-dirty-to-clean#module-1-overcome-challenges-of-insufficient-data
---

Every analyst eventually hits a project where the data needed for the business objective simply isn't there yet, or isn't enough. Recognizing this early — once the objective is clear — makes it possible to deal with it before analysis starts rather than partway through.

## No data

- Gather a small-scale sample for a preliminary analysis, then request more time to collect the rest — survey a subset of employees now, ask for three more weeks to reach everyone.
- If there's no time to collect anything, use **[proxy data](/glossary#proxy-data)** from a related dataset instead — the most common workaround. Analyzing peak commute times for a city with no data of its own can proxy from a similar-sized city with a similar demographic.

## Too little data

- Add proxy data alongside what's actually available, growing the sample — golden retriever owner trends can be padded out with data from labrador owners.
- Adjust the analysis to fit what exists, and say so in the report: *this conclusion applies to adults 25 and older only*, if the 18–24 group is missing.

## Wrong data, including errors

- If the data is wrong because requirements were misunderstood, restate the requirements rather than working around the mistake.
- If there's a pattern to the errors, fix them at the source — correcting a broken conditional statement, not just the values it produced.
- If the errors can't be fixed and the sample is still large enough that dropping the bad rows won't introduce bias, it's reasonable to ignore them and continue. Errors can also be a sign the whole dataset isn't reliable — that's a judgment call, not an automatic pass.

## Where to find proxy data

Beyond a related internal dataset, [open datasets](/glossary#open-data) — Kaggle among them — cover CSV, JSON, SQLite, and BigQuery formats and can proxy for data that doesn't exist yet in-house. A clinic that just started collecting first-party patient data on a new nasal vaccine, for instance, can proxy an open dataset from an earlier trial of the injected version, filtered to the patient profiles that best match its own. Open datasets carry the same cleaning burden as any other: check for duplicates and understand how a dataset uses null before analyzing it, since null can sometimes be recorded as a literal 0 instead of a true absence of data.
