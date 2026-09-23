---
id: 06-share-data/06-getting-started-with-tableau
courseId: 06-share-data
title: Getting Started with Tableau
status: authored
summary: What Tableau is as a business intelligence and analytics platform, how Tableau Public's free browser access differs from Desktop and browser-only tools like Looker and Data Studio, how its chart coverage and interactivity compare to spreadsheets, and the steps to connect data and build a first map visualization.
format: refresher
terms:
  - tableau
revisits:
  - termId: spreadsheet
    note: Course 1 defined a spreadsheet as a digital worksheet organized in cells, rows, and columns with formulas and functions for calculation. This lesson compares its seven primary chart types and static outputs to Tableau's broader catalog and interactive dashboards.
  - termId: data-visualization
    note: Course 1 defined data visualization as the graphical representation of data. This lesson shows Tableau as the platform for publishing that representation without code to audiences beyond the sheet.
  - termId: pivot-table
    note: Course 2 defined a pivot table as a data summarization tool for sorting, reorganizing, grouping, counting, totaling, or averaging data. This lesson positions Tableau sheets and dashboards as the complementary tool for visual exploration once that summarization is done.
topics:
  - visualization
  - tooling
  - spreadsheets
sourceModules:
  - coursera:share-data-art-of-visualization#module-2-create-data-visualizations-with-tableau
---

The Share phase turns analysis into decisions only if audiences can see the findings, and **[Tableau](/glossary#tableau)** is the visual analytics platform the module foregrounds for that job: a business intelligence and analytics platform that helps people see, understand, and make decisions with data, letting analysts connect to Excel, CSV, and Google Sheets and build interactive dashboards, maps, and graphs without coding, whose fundamentals also transfer to similar tools. Like any [spreadsheet](/glossary#spreadsheet), Tableau treats rows as observations and columns as features, but its interface separates presentation from calculation so that exploration, not just storage, drives the work.

## Tableau Public, Desktop, and other online tools

**[Tableau](/glossary#tableau)** is delivered in multiple forms whose differences are practical. Tableau Public is the free browser version you use throughout this course: you create an account at public.tableau.com, sign in with your Tableau.com credentials if you have them, and work in Vizzes, Favorites, Following, and Followers tabs where Create a Viz and Explore Sample Data open a Connect to Data screen that accepts spreadsheets, JSON, and CSV files and a Learn page that offers how-to videos, sample data, and forums. That long-term free browser access contrasts with a 14-day Tableau Free Trial started from the main Tableau site, which is not required and does not create a Public profile with a Hire Me button, bio, and public gallery. Tableau Desktop Public Edition is an optional free download for Windows and Mac that lets you use Public features without an internet connection and cannot run on ChromeOS; it is not required for the course but uses the same workbook logic once installed. The video notes two completely browser-based alternatives, Looker and Google Data Studio, that also turn raw data into visuals, with the distinction that Tableau exists in both browser and desktop forms while those tools are browser-only — so mastering Tableau's dimensions, measures, and Marks card prepares you for either environment.

## How visualizations differ from spreadsheets

A [spreadsheet](/glossary#spreadsheet) offers seven primary chart types the reading summarizes — column (vertical bar) for comparing categories by value, line for trends over time, pie for proportion of the whole, horizontal bar as a flipped column, area for change across multiple categories, scatter for trends in numeric data, and combo for multiple markers in one visual — with Insert > Chart in Sheets or Insert > chart type in Excel, plus Recommended Charts in Excel. The module stresses that most or all of those are available in Tableau, which then adds distinct types not available in spreadsheets: highlight tables that look like tables with conditional formatting, heat maps and density maps for intensity and concentration, Gantt charts for duration on a timeline, symbol maps that place a mark over longitude and latitude, filled maps that color areas by a measurement, circle views for comparative strength, box plots for distribution along an axis, bullet graphs as horizontal bars moving toward a desired value, and packed bubble charts in clustered circles. That catalog expands [data visualization](/glossary#data-visualization) from a static chart inside one sheet to a dashboard that can combine those forms and update when sources change.

## Building a first visualization

The walkthrough uses a cleaned CO2 dataset whose About page is separate from the data sheet itself. From My Profile > Create a Viz you open the Connect to Data Files tab or Data > New Data Source, drag the file in, double-click CO2 data cleaned under Connections or drag it to Drag tables here, and click Update Now to preview rows as observations and columns as features whose types Tableau infers from icons: # for numeric, abc for string, and a globe for geographic, with the first two columns in the CO2 example geographic, the third string, and the last three numeric. Above a gray line in the left pane sit dimensions (column names), below it measures you can track for those dimensions — the same split the Desktop reading illustrates. To show CO2 emissions per country you go to Sheet 1 and double-click the Country Name dimension, which draws a world map with equal-sized dots for each country in the data; double-clicking or dragging the CO2 kilotons measure then scales those dots proportionally to emissions. The middle column's Marks card (Color, Size, Label, Detail, Tooltip) controls that encoding: dragging a measure to Color, for instance, lets you choose Edit Colors to set a palette, while dragging Country to Detail creates a separate circle per country and dragging Year to Filters and choosing Show Filter with Single value adds a year control. Analogous to a [pivot table](/glossary#pivot-table) editor that summarizes without altering source data, you duplicate a sheet to keep formatting, replace Economy GDP per capita with Family or CO2 Per Capita on Rows or Columns, add a trend line from the Analytics tab to compare happiness-score relationships, rename tabs via right-click, clear a sheet with Clear Sheet on the toolbar or reverse any change with the back arrow, and note that deleting a sheet entirely cannot be undone — unlike clearing, it has no reversal. Saving is File > Publish As (creating an extract if prompted), after which the viz is public by default and an Eye icon can hide it; those steps turn raw connected data into a titled, color-encoded map like the Global CO2 Emissions example without writing code, emphasizing pre-attentive marks and their channels in plain prose rather than as linked definitions.
