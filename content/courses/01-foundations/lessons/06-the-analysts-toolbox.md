---
id: 01-foundations/06-the-analysts-toolbox
courseId: 01-foundations
title: The Analyst's Toolbox
status: authored
summary: The four tool categories — spreadsheets, query languages, visualization tools, programming languages — what each is for, and the spreadsheet-versus-database comparison that decides which one you reach for.
format: cheatsheet
terms:
  - spreadsheet
  - database
  - query-language
  - sql
  - data-visualization
revisits: []
topics:
  - tooling
  - databases
  - visualization
sourceModules:
  - 01-foundations-data-everywhere/02_the_wonderful_world_of_data.md
  - 01-foundations-data-everywhere/03_set_up_your_data_analytics_toolbox.md
---

Four categories cover essentially everything an analyst touches.

## The four categories

| Category | Examples | What it's for |
|---|---|---|
| **[Spreadsheets](/glossary#spreadsheet)** | Excel, Google Sheets | Digital worksheets with formulas and functions. Best for smaller, well-defined datasets. |
| **[Query languages](/glossary#query-language)** | [SQL](/glossary#sql), via MySQL, Microsoft SQL Server, BigQuery | Retrieving, filtering, and manipulating data held in a [database](/glossary#database). Needed once volume outgrows a spreadsheet. |
| **Visualization tools** | Tableau, Looker | Turning results into something an audience can read. Tableau is strong for non-technical audiences; Looker connects to a live database for real-time views. |
| **Programming languages** | Python, R | Preparing, processing, analyzing, and visualizing at greater scale and flexibility. Covered in later courses. |

## Spreadsheets vs. databases

The comparison that decides which tool the job needs:

| | Spreadsheets | Databases |
|---|---|---|
| Access | Software application | Query language |
| Structure | Rows and columns | Rules and relationships |
| Organization | Cells | Complex collections |
| Data volume | Limited | Huge |
| Data entry | Manual | Strict and consistent |
| Users | Generally one at a time | Multiple |
| Control | User-controlled | Controlled by a database management system |

In practice analysts use both together — store in a database, export to a spreadsheet for analysis, or the reverse. The choice is not tribal.

## Data visualization

[Data visualization](/glossary#data-visualization) is the graphical representation of data. It turns raw numbers and tables into a form an audience can interpret quickly.

The planning process is three steps, and the order matters:

1. **Explore the data for patterns first** — you cannot choose a visual for a finding you haven't found.
2. **Plan which visuals answer the audience's actual questions** — trends over time call for a line chart, geography for a map, segments for a donut chart, comparisons for a bar chart.
3. **Build** using the chosen tool.

| Tool | Notes |
|---|---|
| Spreadsheets | Built-in charting for simple visuals — bar, line, pie |
| Tableau | Drag-and-drop interactive dashboards; strong for non-technical audiences |
| Python | Matplotlib (foundational, flexible), Seaborn (polished statistical graphics, less code), Plotly (interactive, web-based) |
| R | Typically used through Posit, formerly RStudio |

The historical example the course uses is Florence Nightingale, who during the Crimean War in the 1850s used a data visualization to show hospital administrators that most soldier deaths came from preventable causes — and directly changed patient care as a result. The point is not the chart. It is that the visualization is what made the finding actionable.
