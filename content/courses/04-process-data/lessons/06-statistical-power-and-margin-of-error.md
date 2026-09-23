---
id: 04-process-data/06-statistical-power-and-margin-of-error
courseId: 04-process-data
title: Statistical Power and Margin of Error
status: authored
summary: Testing whether a survey or experiment's results are meaningful, and calculating how far a sample's results are likely to diverge from the full population's.
format: refresher
terms:
  - hypothesis-testing
  - statistical-power
  - statistical-significance
  - margin-of-error
revisits:
  - termId: sample
    note: Course 3 defined a sample as a representative subset of a population. Statistical power is about whether that sample is large enough to detect a real effect.
topics:
  - statistics
sourceModules:
  - coursera:process-data-dirty-to-clean#module-1-statistical-power
  - coursera:process-data-dirty-to-clean#module-1-consider-the-margin-of-error
---

**[Hypothesis testing](/glossary#hypothesis-testing)** is how an analyst checks whether a survey or experiment produced meaningful results before trusting them. Testing a new milkshake ad on too small a sample — say 50 randomly chosen customers — risks landing entirely on people who don't like milkshakes at all, leaving no way to measure whether the ad actually worked.

## Statistical power

**[Statistical power](/glossary#statistical-power)** is the probability of getting meaningful results from a test, shown as a value out of one — 0.6 means a 60% chance the result is real. A statistical power of at least 0.8 (80%) is typically the minimum bar for **[statistical significance](/glossary#statistical-significance)**: a determination of whether a result could be due to random chance, where greater significance means less due to chance. Larger sample sizes raise statistical power, because they're more likely to capture a genuine cross-section of how different types of people actually respond — the factor a small, lopsided sample can hide entirely.

## Margin of error

**[Margin of error](/glossary#margin-of-error)** is the maximum amount a sample's results are expected to differ from the results of the full population. It needs three inputs — population, sample size, and confidence level — and it moves in both directions from the sample's result: a survey finding 60% support for a four-day workweek, with a 10% margin of error, means the true population result is expected to fall somewhere between 50% and 70%.

That range matters most where it overlaps a meaningful threshold. If the range straddles 50%, the survey can't actually confirm majority support — it's inconclusive, even though the headline number looks decisive. Tightening the margin of error — from 10% to 5%, say — takes a larger sample size to achieve. In an A/B test comparing two email subject lines at 5% and 3% open rates with a 2% margin of error, subject line A's real range (3%–7%) overlaps subject line B's result, so the difference isn't statistically significant even though 5% looks bigger than 3% on its face.
