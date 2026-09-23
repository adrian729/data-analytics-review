---
id: 05-analyze-data/08-getting-unstuck-during-analysis
courseId: 05-analyze-data
title: Getting Unstuck During Analysis
status: authored
summary: How to get unstuck during analysis by asking peers, searching effectively with the right terms, and choosing among spreadsheets, SQL, and R when a tool stops fitting the task.
format: refresher
terms: []
revisits:
  - termId: spreadsheet
    note: Course 1 defined spreadsheet as a digital worksheet organized in cells with formulas and functions. This lesson revisits it as the small-data tool that hits limits around a million rows and benefits from shortcuts and lookup practice.
  - termId: database
    note: Course 1 defined database as a collection of data stored by rules and relationships. This lesson revisits it as the system SQL queries when a spreadsheet can no longer hold the data efficiently.
  - termId: sql
    note: Course 1 defined SQL as the standard language for communicating with a database. This lesson revisits it as the scale tool for querying and updating large datasets and notes when its nested queries become a reason to consider R.
  - termId: analytical-thinking
    note: Course 1 defined analytical thinking as identifying a problem and solving it with data in an organized way. This lesson shows how that thinking — plus the right search terms — turns a stuck moment into a findable question online.
  - termId: stakeholders
    note: Course 1 defined stakeholders as people invested in a project's outcome. This lesson echoes the earlier theme that triage and tool choice ultimately protect the story you will tell those stakeholders.
topics:
  - tooling
  - analytical-thinking
  - spreadsheets
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-2-format-and-adjust-data
---

Getting stuck is treated in these readings as a normal part of analysis, not a sign of failure — data work is problem-solving, and knowing how to find help is itself a skill. Two habits carry most of the weight: asking people around you, and asking the internet in a way that returns answers you can actually use, then stepping back to ask whether you are even using the right tool for the job.

## Ask people and ask the internet — effectively

When a formula must handle both same-day and next-day intervals, the bike-share example shows the pattern: calculating hours between rides works with `end - start` until a ride crosses midnight, at which point the result goes negative, so you need a conditional form like `=IF(end>start, end-start, 24+end-start)` or `=MOD(end-start,1)` to flip negatives positive. The narrator could not build that conditional from memory, so they checked with teammates who had hit the same issue — a quick email or desk visit surfaced the `IF` version that was already proven — and when teammates have no answer, forums and basic web search fill the gap. The reading on running into challenges frames that second path as a practice: combine the thinking skills from the program ([analytical thinking](/glossary#analytical-thinking) and structured thinking) to narrow the error to formula versus data, then search with the vocabulary other analysts use — "left string query SQL" returns more than "four characters in a column" — and lean on the list of advanced [spreadsheet](/glossary#spreadsheet) shortcuts and function references the course collects so that an online example using a familiar tool is recognizable and adaptable. Modifying that example to fit your own columns is the final step, not copying it verbatim.

## The analyze stage and choosing the right tool

Analytical lead Layla frames the analyze stage as the moment after cleaning when you become the expert on your fields — their averages, medians, and how rows differ — and then turn a filtered, formatted result into pivot tables and charts that tell a story rather than just naming a largest value. The tools for that stage remain the [database](/glossary#database) and [SQL](/glossary#sql) plus [spreadsheets](/glossary#spreadsheet), and part of becoming expert is knowing when a tool stops fitting. The "when to use which tool" video makes the thresholds concrete: five to ten rows are fine for pivot tables in a sheet, a million-row sheet will start to crash and belongs in SQL — which can filter and group billions of rows in seconds and is built for querying, updating, and optimizing — and when analysis becomes long nested queries that are mostly debugged rather than interpreted, it may be time to consider R, the programming language introduced as a complement for statistical analysis and visualization. Having multiple tools matters, the reading concludes, but knowing when to switch and being willing to search for a new pattern in the right terms is what keeps a stalled analysis moving for the [stakeholders](/glossary#stakeholders) waiting on it.
