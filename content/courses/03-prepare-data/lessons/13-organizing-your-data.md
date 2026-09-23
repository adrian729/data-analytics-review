---
id: 03-prepare-data/13-organizing-your-data
courseId: 03-prepare-data
title: Organizing Your Data
status: authored
summary: File naming conventions worth agreeing on early, and the folder habits that keep current work easy to find as a project grows.
format: cheatsheet
terms:
  - naming-conventions
revisits: []
topics:
  - data-quality
sourceModules:
  - coursera:prepare-data-for-exploration#module-4-effectively-organize-data
---

**[Naming conventions](/glossary#naming-conventions)** are the consistent guidelines a team agrees on for what a file's name says about its content, creation date, and version. Agreeing on them early avoids the alternative — renaming a growing pile of files retroactively once the inconsistency becomes a problem.

## File naming

- Match your team's or company's existing convention rather than inventing a new one.
- Make names meaningful: project name, and whatever else someone would need to identify the right file without opening it.
- Include a date (`YYYYMMDD` is the international, unambiguous format) and a version number (`v01`, `v02`, leading zeros included so double digits don't break the sort order).
- Skip spaces and special characters — use dashes, underscores, or capitalization instead. Spaces cause errors in some tools, and specifically get in the way in SQL.
- Write a sample text file that documents the convention itself, next to an example file name that follows it. This is exactly the kind of thing [metadata](/glossary#metadata) is for — it explains what's there before anyone opens it.

## Folder organization

- Build folders and subfolders in a logical hierarchy, so related files actually sit together.
- Separate ongoing work from completed work — archive finished files elsewhere so current project files stay easy to find.
- Back files up manually and often if they aren't backed up automatically. Losing recent work is the failure mode a naming convention can't protect you from.
