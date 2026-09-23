---
id: 07-python/01-why-python-and-jupyter-notebooks
courseId: 07-python
title: Why Python and Jupyter Notebooks
status: draft
summary: "Draft: why analysts reach for Python over spreadsheets/SQL, how Jupyter notebooks mix code and narrative, and the OOP vocabulary (object/class/method) you meet on day one."
format: refresher
terms:
  - python
  - jupyter-notebook
  - object
revisits:
  - termId: spreadsheet
    note: Course 1 introduced spreadsheets as row/column grids for small-to-medium data; Python generalizes beyond their cell-by-cell model with scripts that automate repetitive steps.
  - termId: query
    note: Course 1 defined a query as a request for data from a database; Python reaches the same data via libraries but adds general-purpose control flow.
topics:
  - python
  - tooling
sourceModules:
  - unverified-notes:introduction-to-data-analysis-using-python#module-1-hello-python
---

> **Unverified draft.** Reconstructed from personal course notes and public syllabus pages, not the official readings — details and course-specific examples may be wrong or missing. Verify against the live course before trusting.

**[Python](/glossary#python)** shows up in data work not because [spreadsheets](/glossary#spreadsheet) or [queries](/glossary#query) are wrong but because they hit ceilings: a [spreadsheet](/glossary#spreadsheet) is brilliant for a few thousand rows you can see, and SQL is precise for asking a database a question, yet neither gives you loops, branching, reusable functions, or a package ecosystem for cleaning, statistical modeling, machine learning, and automation in one language — **[Python](/glossary#python)** is general-purpose and interpreted, trading a bit of beginner immediacy for scale and repeatability once datasets grow or steps must run daily without clicking.

## Why Python vs spreadsheets and SQL

Choose the tool by the shape of the work: use a [spreadsheet](/glossary#spreadsheet) when you need quick visual inspection, manual tweaks, and sharing with non-coders; use SQL when the data already lives in a relational database and the job is filtering/joining/aggregating at the source; reach for **[Python](/glossary#python)** when steps must be scripted, repeated, or extended — parsing irregular text, looping over files, calling APIs, fitting models, and chaining libraries like NumPy and pandas — and accept the cost that you will debug syntax and environments instead of clicking menus.

## Jupyter notebooks: cells that mix code, output, and narrative

A **[Jupyter Notebook](/glossary#jupyter-notebook)** is a browser-based document made of cells executed by a Python kernel: a code cell runs Python and shows its output directly underneath, a Markdown cell renders formatted notes, headings, and images, and that interleaving lets you narrate an analysis alongside the code that produced it rather than keeping logic in a separate script and results in a separate report.

## Notebook vs script — the stale-state pitfall

The same flexibility is the main foot-gun: cells can be run in any order, re-run individually, or skipped, so a variable can hold a value from an earlier run that no longer matches the code you see — a stale state unique to notebooks versus a plain `.py` script that always runs top-to-bottom, which is why restarting the kernel and running all cells in order is the reliable sanity check before you share results.

## Object-oriented vocabulary you meet immediately

**[Python](/glossary#python)** is object-oriented: every value is an **[object](/glossary#object)** — an instance of a class that bundles data (attributes) with behavior (methods) — so `"hello".upper()` is not a detached utility but the `upper` method belonging to the string class, `[1, 2].append(3)` mutates the list object via its method, and a pandas DataFrame later will feel familiar because it is just another object with dozens of such methods; the notes indicate the course introduces the words object, class, method, and attribute early so that dot-notation stops looking like punctuation and starts looking like vocabulary.

## What this course assumes you will not do yet

At this stage, per the notes, you are not expected to define your own classes; the goal is to recognize the vocabulary and to use objects fluently — create them, inspect them with `type()`, and call their methods — which is sufficient to work with libraries where the important classes (arrays, DataFrames) are already provided and documented.
