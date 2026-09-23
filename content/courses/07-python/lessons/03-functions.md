---
id: 07-python/03-functions
courseId: 07-python
title: Functions
status: draft
summary: "Draft: defining with def, parameters vs arguments, return vs implicit None, single-responsibility and why-comments — the cheapest way to make analysis repeatable."
format: cheatsheet
terms:
  - code-comment
revisits:
  - termId: snake-case
    note: Course 3 introduced snake_case for SQL field names; Python function and variable names follow the identical convention.
  - termId: function
    note: Course 1 introduced function as a preset spreadsheet command like SUM(); Python generalizes the idea — you define your own named, reusable blocks with def and call them anywhere.
topics:
  - python
sourceModules:
  - unverified-notes:introduction-to-data-analysis-using-python#module-2-functions-and-conditional-statements
---

> **Unverified draft.** Reconstructed from personal course notes and public syllabus pages, not the official readings — details and course-specific examples may be wrong or missing. Verify against the live course before trusting.

A [function](/glossary#function) turns a repeated analysis step into a name you can call instead of a block you copy-paste, so logic gets tested once and reused: define with `def`, call with parentheses, pass data in, get a result back, and keep each function focused on one job so reading code later feels like reading a table of contents rather than a single sprawling recipe.

## Defining and calling — `def`, parameters vs arguments

Define with `def name(parameters):` and an indented body, call with `name(arguments)`; parameters are the placeholders in the definition (`def add(a, b):`), arguments are the actual values at the call (`add(2, 3)`); `add(2, 3)` returns `5` while `add(a=2, b=3)` shows the same call with keyword arguments for clarity, and defaults like `def greet(name="there"):` let callers omit optional inputs.

## `return` and the implicit-`None` pitfall

`return` sends a value back and ends the function immediately — anything after `return` never runs — and a function with no `return` (or a bare `return`) implicitly returns `None`, which is the most common early bug: `def double(x): result = x*2` computes correctly but returns `None` because it never returns `result`, so `double(4) is None` is `True` until you add `return result`.

## Single-responsibility and **[code comments](/glossary#code-comment)**

Keep one function to one job — `clean_name()` cleans, `compute_tax()` computes — give it a verb-prefixed, [snake_case](/glossary#snake-case) name that states the job, and add a **[code comment](/glossary#code-comment)** (`# why, not what`) to explain intent the code cannot state itself, e.g. `# filter to completed orders because pending orders lack final amounts` above the filter, rather than `# loop over orders`; prefer a docstring (`"""Return tax for amount at given rate."""`) when the explanation belongs to the function's interface.

## Tiny verifiable examples

`def to_celsius(f): return (f - 32) * 5/9` followed by `to_celsius(68)` → `20.0` shows parameters, return, and call together; `def is_adult(age): return age >= 18` returns a `bool` and stays single-purpose, while `help(is_adult)` in a notebook displays its docstring, confirming why small, named, commented functions beat a long inline script when the same logic must run on every batch of data.

## Scope note

Names assigned inside a function are local by default — `x = 1` inside `def f(): x=2` does not change the outer `x` — so return values explicitly rather than relying on mutation of globals, which keeps reuse safe when the function is imported elsewhere.
