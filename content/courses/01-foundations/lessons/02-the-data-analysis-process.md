---
id: 01-foundations/02-the-data-analysis-process
courseId: 01-foundations
title: The Data Analysis Process
status: authored
summary: The six phases — Ask, Prepare, Process, Analyze, Share, Act — that structure every project in the certificate, why the process is iterative rather than linear, and what it looks like end to end.
format: refresher
terms:
  - data-analysis-process
  - stakeholders
  - people-analytics
revisits:
  - termId: data-visualization
    note: The Share phase is almost always a visualization problem. The tool landscape is in the toolbox lesson; the design principles come in Course 6.
topics:
  - process
  - stakeholders
sourceModules:
  - 01-foundations-data-everywhere/01_introducing_data_analytics_and_analytical_thinking.md
  - 01-foundations-data-everywhere/02_the_wonderful_world_of_data.md
---

The [data analysis process](/glossary#data-analysis-process) is the certificate's central framework. It structures the whole program — each phase is literally a later course.

## The six phases

1. **Ask** — define the problem and confirm [stakeholder](/glossary#stakeholders) expectations *before* touching data.
2. **Prepare** — find, collect, and verify the data needed to answer the question.
3. **Process** — clean it: remove errors and inconsistencies, transform formats, combine datasets, handle outliers.
4. **Analyze** — use spreadsheets, SQL, or Python to find patterns, relationships, and answers.
5. **Share** — interpret the results and communicate them, usually visually.
6. **Act** — the business puts the insight to work on the original problem.

**The process is iterative, not linear.** A discovery mid-analysis — the wrong data source, a question that was poorly defined to begin with — sends you back to an earlier phase. That is the normal case, not a failure.

## Mapped to the program

| Phase | Certificate course |
|---|---|
| Ask | Ask Questions to Make Data-Driven Decisions |
| Prepare | Prepare Data for Exploration |
| Process | Process Data from Dirty to Clean |
| Analyze | Analyze Data to Answer Questions · Introduction to Data Analysis Using Python |
| Share | Share Data Through the Art of Visualization |
| Act | Google Data Analytics Capstone |

## People analytics, end to end

[People analytics](/glossary#people-analytics) — collecting and analyzing data about a company's own workforce — is the worked example the course uses, and it is the clearest illustration of all six phases on one problem. An organization with high new-hire turnover asked: *how can we improve retention for new employees?*

- **Ask** — interviewed managers and leaders to define what success meant and gather existing historical data.
- **Prepare** — set a timeline, chose an online survey of new employees as the collection method, and defined access rules up front: raw data restricted, only aggregated views (salary *ranges*, not individual compensation) shared more broadly.
- **Process** — obtained informed consent, limited access to a small number of analysts, cleaned the data, stored the raw data in a secured internal warehouse.
- **Analyze** — found that a long, complicated hiring process correlated with leaving, and an efficient, transparent evaluation and feedback process correlated with staying.
- **Share** — reported to managers with enough direct reports for the data to be meaningful, then had those managers deliver results to their own teams, so the numbers arrived with context.
- **Act** — standardized hiring and evaluation around the most efficient and transparent practices, and committed to repeating the survey annually to check whether retention actually improved.

Two analyst responsibilities run through that case and recur all program long: **get real consent before collecting personal data**, and **document findings honestly even when the result is unflattering**.

## Other models of the process

There is no single universally followed process — the practice traces back to scribes in ancient Egypt documenting calculations on papyri, which were effectively early spreadsheets and checklists. Several well-known alternatives share the same core ideas:

| Model | Steps | Difference worth noting |
|---|---|---|
| EMC / Dell EMC (David Dietrich) | Discovery, Pre-processing, Model planning, Model building, Communicate results, Operationalize | Explicitly cyclical — phases connect and repeat rather than being static milestones |
| SAS | Ask, Prepare, Explore, Model, Implement, Act, Evaluate | Adds **Evaluate** after Act, which loops back to Ask; visualized as an infinity symbol |
| Project-based (Vignesh Prajapati) | Identify problem, Design data requirements, Pre-process data, Perform analysis, Visualize data | Omits an explicit Act phase |
| Big data analytics (Erl, Khattak, Buhler) | 9 steps, from business case evaluation to utilization of results | More granular — mostly it just splits Prepare and Process into smaller pieces |

The takeaway is that the six-phase model is a convention, not a law. What is common to all of them is the shape: understand the problem, get the data, make it trustworthy, interrogate it, communicate it, and do something.
