---
id: 04-process-data/15-documenting-and-reporting-the-cleaning-process
courseId: 04-process-data
title: Documenting and Reporting the Cleaning Process
status: authored
summary: Why every cleaning change gets recorded, the difference between automated version history and a changelog, and how a version control system manages shared queries.
format: refresher
terms:
  - documentation
  - changelog
  - version-control-system
  - code-review
  - code-commit
revisits:
  - termId: report
    note: Course 2 defined a report as a static, prepared summary of data. Stakeholders can't see a changelog directly — the data-cleaning report is what actually reaches them.
topics:
  - data-quality
sourceModules:
  - coursera:process-data-dirty-to-clean#module-4-document-the-cleaning-process
---

**[Documentation](/glossary#documentation)** — tracking the changes, additions, deletions, and errors involved in a cleaning effort — does three things: it lets you recover from a cleaning error without reconstructing it from memory, it informs anyone who picks up the project later, and it helps judge the underlying quality of the data itself. Creating a clean copy of a table rather than overwriting the original keeps the source available if any of that documentation needs to be checked against it.

## Version history vs. changelog

Most spreadsheet and database tools already track *what* changed automatically — Google Sheets' version history, Excel's Track Changes, BigQuery's query history. A **[changelog](/glossary#changelog)** goes a step further and records *why*: a chronologically ordered list of modifications, typically noting what changed, a description, the date, who made and approved the change, a version number, and the reason for it. That reason is what a plain revert can't recover — knowing a formula was changed to match another report, and that the other report later turned out to be wrong, is only useful if it's written down somewhere a person can find it again.

## Version control for shared queries

A **[version control system](/glossary#version-control-system)** holds the official version of a query or file that's shared across a team, and changing it follows a set sequence:

1. Sync to the most up-to-date version before making a change.
2. Make the change.
3. Have someone else review it — a **[code review](/glossary#code-review)**, which can be as informal as asking a senior analyst to take a look.
4. Submit the change to the repository — a **[code commit](/glossary#code-commit)** — documenting what changed and why in a comment.
5. Everyone else syncs to the newly updated version.
6. If the change causes a problem, revert to the previous version — everyone sees the reverted, original query.

## Reporting to stakeholders

A team can read a changelog directly; stakeholders generally can't, which is what a [report](/glossary#report) is for. The content is the same raw material as the changelog — what was removed, what changed as a result (a row count that dropped from 33 to 32, a total that fell by $500) — reshaped into something a non-technical reader can follow. Consistent documentation and reporting also feeds back into the process that produced the dirty data in the first place: a pattern of the same error recurring is a signal to fix a survey question or a data-entry process, not just the data it produced.
