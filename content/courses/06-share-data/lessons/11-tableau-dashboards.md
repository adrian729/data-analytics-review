---
id: 06-share-data/11-tableau-dashboards
courseId: 06-share-data
title: Tableau Dashboards
status: authored
summary: What a Tableau dashboard is and how its layouts work, when to use live versus static insights, how filters and charts interplay to focus the story, and a concise first-dashboard build.
format: refresher
terms:
  - live-data
  - static-data
  - dashboard-filter
revisits:
  - termId: dashboard
    note: Course 2 defined dashboard as a tool that monitors live, incoming data and organizes information from multiple datasets into one central location. This lesson details how Tableau builds and lays out that tool.
  - termId: filtering
    note: Course 2 defined filtering as showing only data that meets a specified criteria while hiding the rest. Here that operation becomes dashboard filters, pre-filtering, and highlighting in Tableau and spreadsheets.
  - termId: pivot-chart
    note: Course 2 defined pivot chart as a chart created from the fields in a pivot table. The interplay section shows the same filter-to-chart thinking applied to spreadsheet maps and column charts before Tableau.
topics:
  - visualization
  - tooling
sourceModules:
  - coursera:share-data-art-of-visualization#module-3-craft-data-stories
---



A [dashboard](/glossary#dashboard) organizes information from multiple datasets into one central location for tracking, analysis, and visualization through tables, charts, and maps, and constantly monitors **[live data](/glossary#live-data)** — data that is automatically updated — so stakeholders see the current view without a manual refresh, first asking who will look, what they need, and how often.

## Tableau basics and layout

Cohesive visuals are balanced and make good use of space, and Tableau offers two layout choices: a vertical layout adjusts height, a horizontal layout resizes width, and within either you choose tiled or floating — tiled places visuals in a single-layer grid that automatically resizes with no overlapping elements, while floating lets you layer objects over one another. The course recommends distributing items evenly for a clear grid.

## Live versus static insights

Choosing between live and static depends on how old the data is, how quickly insights go stale, and whether analysis needs regular updating. **[Static data](/glossary#static-data)** is data that doesn't change once it has been recorded, often shown as screenshots or snapshots; it lets you tightly control a point-in-time narrative and explain complex analysis in depth, but its value erodes as the world moves on. Live data lets dashboards stay connected to automatically updated data, producing dynamic curated views and a single source of truth, at the cost of engineering and the risk that without interpretation teams draw conflicting conclusions.

## From filters to charts

A **[dashboard filter](/glossary#dashboard-filter)** is a tool for showing only the data that meets a specific criteria while hiding the rest, and the video treats [filtering](/glossary#filtering) in dashboards the same as in spreadsheets and queries: you can limit by time window, by customer, or to measures such as gross domestic product, family, generosity, freedom, trust, and health for world-happiness scatterplots, highlight or hide individual points, or filter rows and columns by selecting points and choosing exclude or keep only. Prefiltering does that work in advance, but the module warns not to drop an outlier just because it stands out — it must be investigated first. The same interplay appears in spreadsheets: inserting a column chart of purchases by store, filtering the store dimension, and inserting a map where light to dark blue shows satisfaction by country, while the [pivot chart](/glossary#pivot-chart) shows the same field-driven building.

## When a dashboard is the right call and your first build

Dashboards are most valuable when a business needs a visual snapshot of key performance indicators for quick decisions or a repeatable view that saves time, and the prompt advises to start with a basic dashboard for a core set of users before pursuing a full-feature design — too much at once creates overload. A first Tableau build compresses that advice: sign in to Tableau Public, create a Web Authoring session and upload the CO2 dataset, drag Year to Columns, CO2 kilotons to Rows, and Region to Color to produce a timeline by region from 1960 to 2012, then create a second sheet such as a map of per-capita values, add a dashboard, drop each sheet onto it, remove a redundant size legend, and float the remaining legends. That dashboard puts key information in one place, can update as data refreshes, and trades some narrative control for collaboration.
