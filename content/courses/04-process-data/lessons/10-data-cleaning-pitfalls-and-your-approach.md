---
id: 04-process-data/10-data-cleaning-pitfalls-and-your-approach
courseId: 04-process-data
title: Data-Cleaning Pitfalls and Your Approach
status: authored
summary: Common mistakes that undermine a data-cleaning effort, what can and can't be automated, and building a personal cleaning checklist.
format: refresher
terms:
  - workflow-automation
revisits: []
topics:
  - data-quality
sourceModules:
  - coursera:process-data-dirty-to-clean#module-2-continue-cleaning-data-in-spreadsheets
---

Cleaning data well is as much about avoiding a handful of recurring mistakes as it is about knowing the right tools.

## Common pitfalls

- **Not checking for spelling errors** that spell-check won't catch — "Jon" for "John" is a valid word, just the wrong one.
- **Forgetting to document errors**, losing the head start that documenting a fix gives you the next time the same thing breaks.
- **Not checking for misfielded values** — a correctly formatted value sitting in the wrong column, like a country name entered into a city field.
- **Overlooking missing values**, which quietly skews any total or average built on top of them.
- **Only cleaning a subset of the data** — cleaning one source out of several and missing that the same records repeat in another.
- **Losing track of the business objective** — an interesting pattern noticed mid-cleanup is a distraction unless it's the thing you were asked to find.
- **Fixing the symptom instead of the source** — correcting the same error over and over instead of fixing whatever process keeps producing it.
- **Not analyzing the system before cleaning** — understanding where the dirty data comes from before trying to remove it, the way a mechanic diagnoses before repairing.
- **Not backing up data before cleaning it** — the cheapest insurance against a cleaning pass that goes wrong.
- **Not budgeting time for cleaning** in a project's deadlines, which is what actually causes ETAs to slip.

## What can be automated

| Task | Automatable? |
|---|---|
| Communicating with stakeholders | No |
| Presenting findings | No |
| Preparing and cleaning data | Partially |
| Data exploration | Partially |
| Modeling data | Yes |

**[Workflow automation](/glossary#workflow-automation)** — automating parts of a workflow, like a script that flags missing values — pays off most when it's applied where the data lives, rather than repeated by hand every time a similar dataset comes through.

## Build a personal checklist

A cleaning checklist is a "what to search for" default, built from the tasks that come up on nearly every project: the dataset's size, the number of categories or labels it uses, whether data is missing, whether formatting is consistent, and what data types are present. This is a distinct list from the [verification checklist](/glossary#data-cleaning-verification-checklist) used later, after cleaning is done — this one is what to look for going in; that one is what to confirm coming out. Pairing a checklist with a settled set of preferred tools and methods is what makes repeat cleaning work fast instead of reinvented each time.
