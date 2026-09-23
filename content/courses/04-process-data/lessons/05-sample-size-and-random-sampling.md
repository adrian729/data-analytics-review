---
id: 04-process-data/05-sample-size-and-random-sampling
courseId: 04-process-data
title: Sample Size and Random Sampling
status: authored
summary: The terms a sample size calculator asks for — confidence level, confidence interval, response rate — and how random sampling keeps a sample from being biased.
format: cheatsheet
terms:
  - random-sampling
  - confidence-level
  - confidence-interval
  - estimated-response-rate
revisits:
  - termId: population
    note: Course 3 defined a population as every possible value in the set being studied. It's the number a sample-size calculator needs as an input.
  - termId: sample
    note: Course 3 defined a sample as a representative subset of a population. This lesson is how big that subset needs to be, and how to pick it without bias.
  - termId: sampling-bias
    note: Course 3 named sampling bias as a sample that over- or under-represents part of the population. Random sampling is the main lever for avoiding it.
topics:
  - statistics
sourceModules:
  - coursera:process-data-dirty-to-clean#module-1-sample-size
---

Surveying an entire [population](/glossary#population) is usually too slow or too expensive, which is why analysts work from a [sample](/glossary#sample) instead. The minimum recommended sample size is 30 — the smallest size at which the Central Limit Theorem still holds, meaning a sample's average starts to reliably represent the population's average.

## Getting the sample without bias

**[Random sampling](/glossary#random-sampling)** selects a sample so that every possible type within the population has an equal chance of being chosen. It's the direct countermeasure to [sampling bias](/glossary#sampling-bias): a survey of cat owners that only reaches people with smartphones systematically excludes the ones without, no matter how large the resulting sample is.

## What a sample size calculator needs

| Input | What it means |
|---|---|
| [Population](/glossary#population) | The total group the sample is pulled from |
| [Confidence level](/glossary#confidence-level) | The probability the sample accurately reflects the population — a 95% confidence level means running the same survey 100 times would produce similar results 95 of those times |
| [Margin of error](/glossary#margin-of-error) | How far the sample's result is expected to differ from the population's actual result |

95% confidence is the common default, sometimes relaxed to 90%; pharmaceutical-style studies often demand higher. A middle school of 500 students, surveyed at 95% confidence and a 5% margin of error, needs a sample of about 218 — tighten the margin of error to 3% and the required sample grows to about 341. Confidence level and margin of error are independent settings, not two halves of 100%.

The output of a calculator like this is the *minimum* sample needed. For a survey specifically, that number isn't the number of invitations to send — the **[estimated response rate](/glossary#estimated-response-rate)**, the share of recipients expected to actually respond, decides that. Needing 100 responses at an estimated 10% response rate means sending the survey to 1,000 people.

A **[confidence interval](/glossary#confidence-interval)** ties the two calculator outputs together: it's the sample result plus or minus the margin of error, and it's the range the population's true result is expected to fall within at the chosen confidence level.
