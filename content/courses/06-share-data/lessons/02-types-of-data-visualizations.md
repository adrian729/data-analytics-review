---
id: 06-share-data/02-types-of-data-visualizations
courseId: 06-share-data
title: Types of Data Visualizations
status: authored
summary: A catalog of the chart types the course actually defines — bar, line, pie, scatterplot, histogram, heat map, and map — plus axes, clusters, and why causation must not be inferred from correlation alone.
format: cheatsheet
terms:
  - chart
  - bar-graph
  - line-graph
  - pie-chart
  - scatterplot
  - histogram
  - heat-map
  - map
  - cluster
  - x-axis
  - y-axis
  - causation
revisits:
  - termId: correlation
    note: Course 1 defined correlation as a relationship between two or more variables — correlation does not equal causation; two trends moving together does not prove that one causes the other — used here to contrast with causation.
topics:
  - visualization
  - statistics
sourceModules:
  - coursera:share-data-art-of-visualization#module-1-visualize-data
---

A **[Chart](/glossary#chart)** is a graphical representation of data from a worksheet, and the right type depends on the pattern — change over time, ranking, distribution, relativity to a whole, or relationships. Show only the data the audience needs, as long as the result is not misleading.

## The catalog the sources define

| Type | What it is | When to use |
|---|---|---|
| [Bar graph](/glossary#bar-graph) | A data visualization that uses size to contrast and compare two or more values | Compare categories or ranked values; course examples track motivation by time of day and rank metals by density |
| [Line graph](/glossary#line-graph) | A data visualization that uses one or more lines to display shifts or changes in data over time | Track change over periods; better than bars when changes are small — cats vs dogs, graduation rates 2008–2012 |
| [Pie chart](/glossary#pie-chart) | A data visualization that uses segments of a circle to represent the proportions of each data category compared to the whole | Show how each part makes up the whole, such as daily activities or movie preferences; slices sum to 100% |
| [Scatterplot](/glossary#scatterplot) | A data visualization that represents relationships between different variables with individual data points without a connecting line | Show relationships between two variables, such as temperature vs ice-cream sales |
| [Histogram](/glossary#histogram) | A data visualization that shows how often data values fall into certain ranges — the binned numeric form of a distribution graph, the broader display of how often outcomes occur in a sample | Show distribution via bins (buckets), such as cups of coffee per week |
| [Heat map](/glossary#heat-map) | A data visualization that uses color contrast to compare categories in a dataset | Show relationships between two variables with color, such as climate by city/month; better when points would obscure a scatterplot |
| [Map](/glossary#map) | A data visualization that organizes data geographically | Hold location-based data audiences read quickly, such as happiness by European country |

## Axes, clusters, and what a chart stands on

Most charts stand on two reference lines. The **[X-axis](/glossary#x-axis)** is the horizontal line usually placed at the bottom, often used to represent time scales and discrete categories, while the **[Y-axis](/glossary#y-axis)** is the vertical line usually placed to the left, often used to represent frequencies and other numerical variables. Starting the y-axis at zero avoids exaggerating differences — a chart starting at 9,100 makes small differences look wide-ranging. A **[Cluster](/glossary#cluster)** is a collection of data points on a visualization with similar values; checking for clusters helps choose between a distribution or relationship view.

## Correlation is not causation

[Correlation](/glossary#correlation) describes two variables moving in relationship, but **[Causation](/glossary#causation)** is when an action directly leads to an outcome, such as a cause-effect relationship — lightning causes thunder. Humans find patterns even when variables are independent, so correlation can imply causation incorrectly. Pellagra in the early 1900s was blamed on unsanitary living, but the cause was lack of niacin; the living condition was only a correlation. Likewise, visits to a SNAP site correlate with abandonment, but only a survey can reveal the actual cause. Check context before claiming causation.
