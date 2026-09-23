---
id: 05-analyze-data/12-common-data-calculations
courseId: 05-analyze-data
title: Common Data Calculations
status: authored
summary: How analysts turn raw sales figures into business answers with spreadsheet formulas for sums, differences, percentages, growth rates, averages, and profit margin.
format: refresher
terms:
  - profit-margin
revisits:
  - termId: formula
    note: Course 1 defined a formula as a set of instructions that performs a calculation using the data in a spreadsheet. This lesson shows how formulas become the reusable calculations for sums, growth, and averages.
  - termId: average-function
    note: Course 2 defined AVERAGE as returning the average of values in a range. Here it reappears as one of the summary calculations for comparing monthly performance across years.
  - termId: sum-function
    note: Course 2 defined SUM as adding values in a selected range. This lesson revisits it to build annual totals before any further rate or average calculation.
  - termId: return-on-investment
    note: Course 2 defined return on investment as (gain – cost) / cost. This lesson pairs it with profit margin as the two percentage-based business calculations analysts use to judge effectiveness.
  - termId: revenue
    note: Course 2 defined revenue as income generated from sales. The examples here calculate total, average, and maximum revenue from the same sales columns.
  - termId: metric
    note: Course 2 defined a metric as a single quantified measure. Annual sales, growth, and growth rate are all metrics produced by the calculations below.
topics:
  - spreadsheets
  - statistics
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-4-perform-data-calculations
---

Calculations are how an analyst turns a table of numbers into an answer a stakeholder can act on, and the module revisits them deliberately because every later technique — conditional functions, pivot tables, and SQL arithmetic — assumes you can build a correct [formula](/glossary#formula) first. Using monthly sales for a discount-store chain from 2011 to 2020, the video shows the same small toolbox — a cell reference and an operator — producing annual totals, year-over-year change, percentage growth rates, monthly averages, and the business [metric](/glossary#metric) that ties them together.

## Building totals, differences, and averages

The starting point is the row-wise total: `=SUM(B2:M2)` adds January through December for 2011 by selecting the range B2:M2 with the fill handle and closing the parentheses, then the handle is dragged down to fill annual totals for every other year without retyping. Growth is a simple subtraction — `=N3-N2` where N holds annual sales, so the difference between 2012 and 2011 appears in O3 — and growth rate is that difference divided by the earlier year, `=O3/N2`, formatted with the percent-style button so 0.12 reads as 12%. Monthly averages use [AVERAGE](/glossary#average-function) down a column instead of across a row, `=AVERAGE(B2:B11)` under January and filled across to December, and the extremes are `=MIN(B12:M12)` and `=MAX(B12:M12)` on that average row; the same [SUM](/glossary#sum-function) pattern that built the annual [revenue](/glossary#revenue) column therefore also verifies the calculation logic before conditional formatting with a color scale makes the seasonal peak — summer and December highest, January lowest — instantly visible.

## Percentages, ratios, and business interpretation

A percentage is just a ratio scaled to 100, and the module treats it as the stakeholder-facing form of any division: the slash operator does the math, multiplying by 100 or applying percent formatting does the presentation, and the same idea scales from growth rate to share of total. The video is explicit that these are shortcuts, not estimates — every [formula](/glossary#formula) still calculates with complete accuracy — and that thinking backward from the question (do we have yearly totals yet? if not, calculate them first, then the rate of change) prevents building a percentage on a missing intermediate step.

## Profit margin and ROI as the business lens

Raw sales mean little until they are related to cost and investment, which is why the module pairs the store example with **[Profit margin](/glossary#profit-margin)** — the percentage that indicates how many cents of profit are generated for each dollar of sale, such as 20% or $0.20 per dollar for product #789. Like [return on investment](/glossary#return-on-investment), profit margin is a ratio expressed as a percentage, but where ROI judges the return on a cost input, profit margin judges the efficiency of the sale itself; both become useful only after the underlying totals and averages are correct, and both are later inputs to the composite calculations in the next lesson where arrays are multiplied and summed together.
