---
id: 06-share-data/08-color-and-misleading-visualizations
courseId: 06-share-data
title: Color and Misleading Visualizations
status: authored
summary: How a diverging palette encodes two value ranges with hue for range and intensity for magnitude, how color semantics and palette choices affect readability for all viewers, and which design choices consistently make Tableau charts misleading.
format: refresher
terms:
  - diverging-color-palette
revisits: []
topics:
  - visualization
  - tooling
sourceModules:
  - coursera:share-data-art-of-visualization#module-2-create-data-visualizations-with-tableau
---

A beautiful Tableau workbook can still fail the test the module repeats throughout: within five seconds a viewer should know what they are observing and within the next five grasp the conclusion, so color and integrity choices are not decoration but comprehension, and the color discussion the video centers on is chosen for that reason. A **[diverging color palette](/glossary#diverging-color-palette)** is a color theme that displays two ranges of data values using two different hues, with color intensity representing the magnitude of the values — hue signals which range a number belongs to, intensity (brightness or dullness) signals how far it is from the center — which makes it a good way to show difference between numbers rather than just quantity within one range.

## Diverging palette, semantics, and readability

The video pairs a good use of that palette with two instructive failures. The good example is a KPI-style table where green is associated with higher numbers and red with lower numbers, and the intensity steps within each hue show magnitude; it works because it aligns with audience expectations where many viewers already associate green with positive or go and red with negative or warning, so the encoding is conscious and meaningful rather than arbitrary. The first ineffective example keeps the same idea but uses green and orange with points placed close together, so the hues do not clearly separate low from high and intensity steps are hard to read, and the module notes that the more power Tableau gives you over color, the more responsibility you have not to add that kind of complexity. The second failure adds too many labels that take up space and prevent clear reading, uses different fonts across those labels, and makes the visualization busy despite good underlying data — a reminder that titles, axes, and annotations should use as few labels as it takes to make sense and a single consistent font, with labels moved to white space where they do not obscure marks.

## Essential design principles re-applied in Tableau

The essential design principles reading frames those color decisions within a longer checklist the sources intend you to plan with and then evaluate against. Choose the right visual first, considering whether a simple table would serve the audience better than a complex graphic and which graphic will be most effective for that audience. Optimize the data-ink ratio by keeping the part of the visual essential to understanding the point and minimizing non-data ink such as boxes around legends or shadows. Use orientation effectively so written components like bar chart labels are easy to read, changing the orientation of the visual when that improves legibility. Treat color as a set of considerations: use it consciously and meaningfully, stay consistent throughout, be considerate of what colors mean to different people, and prefer inclusive scales that make sense for viewers with color vision deficiencies. Handle numbers of elements deliberately: try to plot five or fewer lines and use hue to emphasize the important ones when more are unavoidable, and keep pie-chart segments to fewer than seven because too many elements distract rather than inform. The same reading notes that companion tables showing the same data as a dashboard view can serve stakeholders who prefer spreadsheet-type formats while the main visuals retain their comparative power.

## Pitfalls that make visualizations misleading

Even when those principles are followed, the reading catalogs common errors that make visualizations not just unclear but deceptive, because decisions based on misleading charts can be costly. Cutting off the y-axis changes the scale so small differences look dramatic. Using a dual y-axis without clearly labeling both sides creates extremely misleading comparisons. Artificially limiting the scope of the data to the portion that confirms an analysis misrepresents the whole and disguises important trends. Binning or grouping data in problematic ways can hide or invent patterns. Using part-to-whole visuals like a pie chart when individual parts do not sum to 100 percent violates the visual's promise. Hiding trends in cumulative charts makes the scale too large to track change over time. Artificially smoothing trends by replacing scatterplot points with a smooth line makes points appear more connected over time than they are. Related cautions the discussion prompt surfaces are omitting a legend so the meaning of red, yellow, and green in a 14-by-4 category-year table must be guessed, and relying on color alone without texture or shape distinction for viewers who cannot distinguish those hues. The video's closing guidance is therefore practical: duplicate a sheet, try the same CO2 or happiness fields with a different palette, reduce labels, test the view on someone unfamiliar with the data, and keep whichever version passes the five-second test without needing verbal rescue.
