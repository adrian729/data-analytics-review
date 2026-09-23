---
id: 06-share-data/07-choosing-tableau-visualizations
courseId: 06-share-data
title: Choosing Tableau Visualizations
status: authored
summary: Tableau's Show-Me-style chart catalog beyond spreadsheets — what area, box-plot, bullet-graph, circle-view, column, combo, density-map, filled-map, Gantt, highlight-table, packed-bubble, and symbol-map each show and when to choose them for the story you need to tell.
format: cheatsheet
terms:
  - area-chart
  - box-plot
  - bullet-graph
  - circle-view
  - column-chart
  - combo-chart
  - density-map
  - filled-map
  - gantt-chart
  - highlight-table
  - packed-bubble-chart
  - symbol-map
revisits:
  - termId: conditional-formatting
    note: Course 4 defined conditional formatting as a spreadsheet tool that changes how cells appear when values meet specific conditions. Tableau's highlight table is the direct analogue — a table colored by the same rule-based logic.
topics:
  - visualization
  - tooling
sourceModules:
  - coursera:share-data-art-of-visualization#module-2-create-data-visualizations-with-tableau
---

Most of the seven primary spreadsheet charts have a Tableau equivalent, so the value of learning Tableau is not replacing column, line, pie, bar, area, scatter, and combo but extending them; the readings frame the extension as a Show-Me-style catalog — a visual menu that helps you match data structure and communication goal to the right graphic before styling — and they pair that menu with the five-second rule that a viewer should know what they are observing within five seconds and grasp the conclusion within the next five.

## Tableau chart catalog

| Visualization | What it shows (official wording) | When to choose it |
|---|---|---|
| **[Area chart](/glossary#area-chart)** | A data visualization that uses individual data points for a changing variable connected by a continuous line with a filled-in area underneath | Track change across multiple categories when the filled shape helps emphasize cumulative volume over time. |
| **[Box plot](/glossary#box-plot)** | A data visualization that displays the distribution of values along an x-axis | Illustrate distribution along an axis (also called box-and-whisker) without plotting every point. |
| **[Bullet graph](/glossary#bullet-graph)** | A data visualization that displays data as a horizontal bar chart moving toward a desired value | Compare a primary measure to a target and use instead of a dial gauge for compact KPI tracking. |
| **[Circle view](/glossary#circle-view)** | A data visualization that shows comparative strength in data | Show comparative strength when relative magnitude, not precise value, is the story. |
| **[Column chart](/glossary#column-chart)** | A data visualization that uses individual data points for a changing variable, represented as vertical columns | Display and compare multiple categories by value with height as the encoding. |
| **[Combo chart](/glossary#combo-chart)** | A data visualization that combines more than one visualization type | Showcase different aspects of the same data in one view, such as columns plus a line. |
| **[Density map](/glossary#density-map)** | A data visualization that represents concentrations, with color representing the number or frequency of data points in a given area on a map | Illustrate concentrations on a map where color encodes how many points occupy an area. |
| **[Filled map](/glossary#filled-map)** | A data visualization that colors areas on a map based on measurements or dimensions | Color geographic areas by a measure or dimension to compare regions rather than points. |
| **[Gantt chart](/glossary#gantt-chart)** | A data visualization that displays the duration of events or activities on a timeline | Demonstrate duration and overlap of events or activities along a horizontal timeline. |
| **[Highlight table](/glossary#highlight-table)** | A data visualization that uses conditional formatting and color on a table | Apply [conditional formatting](/glossary#conditional-formatting) logic to a table so color carries the comparison without leaving the grid. |
| **[Packed bubble chart](/glossary#packed-bubble-chart)** | A data visualization that displays data in clustered circles | Display data in clustered circles where bubble size encodes the numeric comparison. |
| **[Symbol map](/glossary#symbol-map)** | A data visualization that displays a mark over a given longitude and latitude | Place a mark over each longitude and latitude when location of the point, not the area's fill, is the message. |

## How to choose

The bonus guide the module cites reminds you that if your data matches more than one description a combo is legitimate, and the self-reflection reading reduces that choice to four practical filters: data structure (single distribution versus multiple series), whether the story is about frequency, change over time, categorical comparison, or relationship, what the audience expects to see, and whether color contrast and minimal labels can carry the message within five seconds. In Tableau that translates to starting with the catalog's one-sentence definitions above, testing the same CO2 or World Happiness fields as a highlights table, then a density or symbol map, then a packed-bubble alternative, and keeping the version where the relationship — for example, that happiness and economy move together but generosity does not — reads instantly rather than after a legend hunt. The table is not a mandate to memorize 24 variants from the external cheat-sheet link, but a reminder that the choice precedes the palette: pick the mark arrangement that matches the question, then tune color and labels.
