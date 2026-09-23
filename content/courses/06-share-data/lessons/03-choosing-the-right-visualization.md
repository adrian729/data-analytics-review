---
id: 06-share-data/03-choosing-the-right-visualization
courseId: 06-share-data
title: Choosing the Right Visualization
status: authored
summary: How a decision-tree mental model turns chart choice into yes/no questions about data structure — ranking, relativity, composition, and timing — and how the course's self-reflection activity applies that logic to retail sales scenarios.
format: cheatsheet
terms:
  - decision-tree
  - mental-model
  - ranking
  - relativity
  - data-composition
revisits:
  - termId: data-visualization
    note: Course 1 defined data visualization as the graphical representation of data. This lesson adds the Share-phase selection step — matching that graphic to the data's structure and the story you want to tell.
  - termId: correlation
    note: Course 1 defined correlation as the degree to which two variables change together. The decision-tree path that asks whether relationships need showing leads to correlation charts, where this definition determines why a scatterplot or heat map is chosen.
topics:
  - visualization
sourceModules:
  - coursera:share-data-art-of-visualization#module-1-visualize-data
---

A visualization fails before any styling is applied if it shows the wrong relationship, so the course treats chart choice as a thinking problem first and a design problem second. A **[decision tree](/glossary#decision-tree)** is the tool that makes that thinking explicit — a flowchart that frames the larger decision as a series of smaller yes/no decisions about critical features of the visualization — and the **[mental model](/glossary#mental-model)** behind it is the analyst's own thought process and approach to the problem: start from the story you want to tell and the audience's needs, then ask what the data actually is before committing to a graphic.

## The decision tree as a mental model

The tree in the reading starts with "which story would you like to tell?" and offers four paths the sources state verbatim. Following one path at a time keeps audience and goal in view — the sources remind you that a viewer should know what they are observing within five seconds and grasp the conclusion within the next five, and that only data the audience needs to understand findings should be shown — so the mental model is not "pick a chart you like" but "eliminate chart types that cannot answer the question the data poses." Best practice is to keep the tree simple enough to use live and to extend it with audience questions (for example, "what interests my audience?" or "is my audience data-savvy?") when the basic four paths are not enough.

## Four diagnostic questions — ranking, relativity, composition, and change

| Question to ask the data | What it tests | Visualizations the tree points to |
|---|---|---|
| Does your data have only one numeric variable? | Single continuous distribution | Histogram or density plot (and, for categorical cases, a bar chart) |
| Are there multiple datasets? | Comparing distinct series or parts of a whole | Line chart or pie chart |
| Are you measuring changes over time? | Trend and magnitude of change | Bar chart when changes are large, otherwise a line chart |
| Do relationships between the data need to be shown? | Two variables for the same set | Scatterplot when pairings are clear, heat map when points would obscure the relationship |

Three underlying ideas make those questions diagnostic. **[Ranking](/glossary#ranking)** is a system to position values of a dataset within a scale of achievement or status — for example, ranking metals by density or products by sales — and it is the question "do you need an order?" **[Relativity](/glossary#relativity)** is the process of considering observations in relation or proportion to something else — for example, quarterly sales as a share of annual sales — and it is the question "do you need a comparison to a whole or to another group?" **[Data composition](/glossary#data-composition)** is the process of combining the individual parts in a visualization and displaying them together as a whole — for example, stacked bars, donuts, or tree maps that show how categories add to a total — and it is the question "do you need parts and whole together?" The tree's spare wording hides these checks, but each path is really asking which of these relationships the audience must see, and the course frames them as the analyst's checklist before any chart is drawn.

## What the choose-your-visualization-type activity teaches

The self-reflection uses a retail scenario to show the tree in action: Product A sold 2.5 million units with 70% of annual sales in October–December, Product B sold 1.9 million steadily with a slight lift in November–January, and executives need to allocate next year's advertising. Walking the tree from "changes over time?" leads to a comparison of categories with a bar graph or to a month-to-month composition view with a line chart that carries a line per product — either can succeed if design principles support the reading that Product A's sales are extremely seasonal. The follow-up reflection asks about sales variation by city for targeted regional advertising; the tree's "do relationships need to be shown?" path then favors a heat map over a scatterplot because the single-product geography question is about intensity across areas, not about two variables conditioning each other. The takeaway the sources stress is transferable: break an overwhelming chart choice into sequential conditions, constraints, and goals, and compare the tree's suggestion to your first instinct before committing — then refine the choice with audience-specific branches.

## Quick selection check

When the tree suggests more than one viable chart, apply the module's five-second rules: can a viewer know what they are observing in five seconds and understand the conclusion in the next five? If not, trim irrelevant data or re-ask whether audience familiarity warrants a simpler or more complex form, because a [data visualization](/glossary#data-visualization) that cannot pass that test will not communicate [correlation](/glossary#correlation) or any other relationship no matter how accurate the underlying numbers are.
