---
id: 04-process-data/03-aligning-data-with-business-objectives
courseId: 04-process-data
title: Aligning Data with Business Objectives
status: authored
summary: Judging whether available data is actually relevant to a business objective, and what to do when it's clean-but-partial, dirty-but-relevant, or missing a variable the objective turns out to need.
format: refresher
terms: []
revisits:
  - termId: business-task
    note: Course 1 introduced the business task as the specific problem a project needs to solve. This lesson is about judging whether the data on hand can actually answer it.
  - termId: data-constraint
    note: This course's own data constraints (data type, range, mandatory, unique, regex, cross-field validation) are the tool used here to narrow data back into alignment when a newly discovered variable threatens it.
topics:
  - data-quality
sourceModules:
  - coursera:process-data-dirty-to-clean#module-1-data-integrity-and-analytics-objectives
---

Passing a data-integrity check isn't the same as being the right data for the job. The data also has to be relevant — able to help solve the business problem or determine a course of action toward the business objective. Judging that alignment is a skill in its own right, and it plays out a few different ways.

## Clean data, good alignment

Sometimes the data already lines up. An online subscription service wants to know how soon users view content after activation; the analyst confirms the export is clean and that both the activation date and first-access date exist. All that's left is the calculation itself — a job for lookup functions like `VLOOKUP` (to pull the activation date, user name, and first-access date across sheets) and `DATEDIF` (to get the number of days between two dates).

## Good alignment, but the data still needs cleaning

A software company wants a list of companies with five or more attendees across a series of webinars, so sales can follow up. The attendance data is relevant, but before analysis can start it needs cleaning: company name was an optional field, so a blank has to be inferred from the attendee's email domain, and the same person may have signed in under slightly different names across sessions — Joe Cox one time, Joseph Cox the next — so names need validating against a unique email address before they can be counted as one person.

## Partial alignment — new variables force a constraint

An after-school tutoring company wants to know the minimum number of tutoring hours before students see a 10% score improvement. The data looks aligned — session hours and assessment scores are both tracked — until the analyst notices some students logged consistent weekly sessions while others logged the same total hours on an irregular schedule. That's a variable the original objective didn't account for. The fix isn't to throw out the data; it's to add a [data constraint](/glossary#data-constraint) — restrict the analysis to students with consistent weekly sessions — so the subset that remains is the one that actually aligns with the objective.

## The pattern

- Clean data plus good alignment gives accurate conclusions directly.
- Good alignment with unclean data means: clean it first, then proceed.
- Partial alignment means modifying the objective or constraining the data until the two match — never proceeding as if the mismatch weren't there.
