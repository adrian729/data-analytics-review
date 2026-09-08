---
id: 02-ask-questions/06-sharing-data-dashboards-and-visualization
courseId: 02-ask-questions
title: Sharing Data — Dashboards and Visualization
status: authored
summary: Data-driven vs. data-inspired decisions, the tools analysts use to visualize data (spreadsheets vs. Tableau), the process for designing a dashboard, and the business-metric vocabulary that shows up in reports.
format: refresher
terms:
  - data-inspired-decision-making
  - dashboard
  - report
  - metric
  - metric-goal
  - algorithm
  - pivot-table
  - pivot-chart
  - revenue
  - return-on-investment
revisits:
  - termId: data-driven-decision-making
    note: Course 1 defined the term. Here it's contrasted directly with data-inspired decision-making, and paired with the dashboards analysts use to drive it.
topics:
  - decision-making
  - visualization
sourceModules:
  - coursera:ask-questions-make-decisions#module-2-follow-the-evidence
---

[Data-driven decision-making](/glossary#data-driven-decision-making) uses specific data findings to guide a specific decision. [Data-inspired decision-making](/glossary#data-inspired-decision-making) is broader: exploring different data sources to find out what they have in common, without necessarily aiming at one predetermined decision.

## Tools for visualizing data

Spreadsheets (Sheets/Excel) are the default: they clean, sort, filter, and produce static charts, [pivot tables](/glossary#pivot-table) and [pivot charts](/glossary#pivot-chart) that auto-update when the source data changes, and connect directly into docs and slides for reports.

Tableau is built for interactive visualizations like live [dashboards](/glossary#dashboard) — drag-and-drop, wide data-source support, advanced analytics for exploring trends in huge datasets. It takes real time to learn well, but it's the tool of choice once a dataset outgrows what a spreadsheet chart can show clearly.

A dashboard differs from a static [report](/glossary#report): a dashboard monitors live, incoming data from multiple sources in one place; a report is a periodic snapshot.

## Designing a dashboard

1. **Identify stakeholders** — who needs to see the data and how will they use it? Start by asking effective questions.
2. **Design** — clear header, short text description per visualization, most important information at the top.
3. **Mockups** (optional) — a simple draft for planning and evaluating progress before building.
4. **Select visualizations** to match the story — line/bar charts for change over time, pie/donut charts for parts of a whole.
5. **Add filters** as needed — [filtering](/glossary#filtering) shows certain data while hiding the rest without altering the underlying data, so multiple people can share one dashboard while each manages their own view.

Dashboard data updates automatically only if the data structure stays the same; a structure change means updating the dashboard design before data can flow again.

## Metrics vocabulary

A [metric](/glossary#metric) is a single, quantifiable type of data used for measurement; a [metric goal](/glossary#metric-goal) is a measurable goal a company sets and evaluates using metrics. Two metrics that show up constantly in business reporting: [revenue](/glossary#revenue) (total income from sales) and [return on investment](/glossary#return-on-investment) (a formula combining investment and profit to judge whether an investment paid off). An [algorithm](/glossary#algorithm) is a process or set of rules followed for a specific task — the term shows up throughout data analytics wherever a repeatable procedure, not just a single metric, does the work (e.g. the rules a dashboard's filters apply, or the logic behind an automated anomaly alert).
