---
id: 08-capstone/04-cyclistic-speedy-success-case
courseId: 08-capstone
title: Cyclistic Speedy Success Case
status: authored
summary: Track A case 1 — how a fictional Chicago bike-share frames the casual-versus-member conversion task, the questions and stakeholders, and what the documented R walk-through demonstrates across all six phases from business task to recommendations.
format: refresher
terms: []
revisits:
  - termId: business-task
    note: Course 1 defined business task as the question or problem data analysis answers for stakeholders. Here the task is understanding how casual riders and annual members use Cyclistic differently to decide how to convert casuals to members.
  - termId: data-analysis-process
    note: Course 1 defined the data analysis process as Ask, Prepare, Process, Analyze, Share, and Act. The Cyclistic documentation is explicitly structured around those six phases and their key tasks.
  - termId: dirty-data
    note: Course 4 defined dirty data as data with errors and inconsistencies. The Cyclistic Process phase demonstrates handling it by checking for errors, filtering null and non-positive ride lengths, and transforming timestamps.
topics:
  - process
  - career
sourceModules:
  - coursera:capstone-complete-case-study#module-2-optional-build-your-portfolio
---

Cyclistic is the course-provided Track A scenario that teaches the shape of a finished, presentation-ready case study: a fictional Chicago bike-share with more than 5,800 bicycles and 692 geotracked stations, flexible pricing from single-ride to annual membership, and a director of marketing, Moreno, who has asked a junior analyst to explain how casual riders and annual members use the service differently so campaigns can convert casuals to higher-lifetime-value members.

## The business task, stakeholders, and deliverable

The [business task](/glossary#business-task) is phrased as differentiating behavior — "Do members and casual riders use Cyclistic bikes differently?" — to identify what attracts a casual rider to become an annual member. Moreno owns campaign design, the executive team approves the recommended program, and the analytics team collects, analyzes, and reports. The deliverable is a clear statement of that task, a concise problem framing, and insights backed by stakeholder-ready visuals and recommendations that can be acted on, following the [data analysis process](/glossary#data-analysis-process) end to end rather than cherry-picking a chart.

## What the worked documentation demonstrates at each phase

Ask clarifies the main objective, stakeholders, and deliverables instead of jumping to code. Prepare sources 12 monthly `YYYYMM-divvy-tripdata.csv` files for 2023, documents openness and credibility under the Divvy Data License Agreement, and notes organization by ride identifier, rideable type, start and end times and stations, and `member_casual`. Process chooses R and RStudio for scale, loads tidyverse, janitor, and lubridate, binds months with `bind_rows`, cleans names, parses timestamps with `ymd_hms`, derives `ride_length` and `day_of_week`, and removes [dirty data](/glossary#dirty-data) by filtering null and non-positive rides, with `glimpse` and `str` checks recorded. Analyze aggregates with grouped summaries — mean, median, max and min ride length by member type, ride counts by weekday, and station usage — to surface trends rather than list rows. Share renders three visuals in ggplot: average ride length by member type, ride count by day of week, and top start stations by member type, each presented to executives as evidence, not decoration. Act translates patterns into recommendations: longer weekend leisure rides for casuals suggest scenic-route and weekend-package positioning near lakefront stations like DuSable Lake Shore Dr and Streeter Dr, weekday consistency for members suggests commute-convenience and cost-savings messaging near business districts, plus member incentives, station optimization, timelines, budgets, KPIs, and a feedback loop.
