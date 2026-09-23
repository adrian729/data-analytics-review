---
id: 07-python/04-conditional-statements
courseId: 07-python
title: Conditional Statements
status: draft
summary: "Draft: comparison and logical operators, if/elif/else first-true-branch rule, and indentation-as-syntax — making decisions in code."
format: cheatsheet
terms:
  - conditional-statement
revisits:
  - termId: boolean-logic
    note: Course 3 introduced Boolean logic as True/False reasoning; Python renders it literally with bool results and and/or/not.
  - termId: operator
    note: Course 2 introduced operators (+, -, *, /) for math expressions; Python reuses them and adds comparison (==, !=, <, >) and logical (and, or, not) operators.
topics:
  - python
sourceModules:
  - unverified-notes:introduction-to-data-analysis-using-python#module-2-functions-and-conditional-statements
---

> **Unverified draft.** Reconstructed from personal course notes and public syllabus pages, not the official readings — details and course-specific examples may be wrong or missing. Verify against the live course before trusting.

Every analysis branches — keep the row, flag the outlier, apply one rule to premium customers and another to everyone else — and a **[conditional statement](/glossary#conditional-statement)** expresses that branching in code: evaluate a condition to a `bool`, run the first branch whose condition is `True`, and skip the rest, with indentation alone marking which lines belong to which branch.

## Comparisons → `bool`, logical combinators → decision tables

Comparison [operators](/glossary#operator) `==` (equal), `!=` (not equal), `<`, `>`, `<=`, `>=` each return a `bool` — `5 > 3` → `True`, `"a" == "b"` → `False` — and [boolean-logic](/glossary#boolean-logic) combinators `and`, `or`, `not` compose them: `age >= 18 and has_id` is `True` only when both are `True`, `x < 0 or x > 100` catches out-of-range in one test, `not is_valid` flips `True`→`False`; precedence is `not` > `and` > `or`, and `==` binds tighter than `and`/`or` so `a == 1 or b == 2` needs no extra parentheses.

## `if` / `elif` / `else` — first true branch wins

Syntax is `if condition:` → indented block, zero or more `elif condition:` blocks, optional final `else:`; Python tests top-to-bottom and executes only the first `True` branch: `if score >= 90: grade="A"` then `elif score >= 80: grade="B"` then `else: grade="C"` ensures a `95` hits `A` and never tests the `B` line, which is why ordering from most specific to most general matters and why independent `if` chains (two separate `if`s) behave differently — both can fire — when `elif` guarantees exclusivity.

## Indentation as syntax

Indentation is not style in Python, it is structure: the indent level after `if x > 0:` defines exactly which lines belong to that branch, dedenting ends it, and inconsistent indentation raises `IndentationError`; a common bug is writing `z = 2` after an indented `y = 1` without further indentation, expecting `z = 2` to belong to the branch too — it does not; it always runs, so always indent the entire block or use a single line only when intentional (`if ok: return result`).

## Tiny verifiable examples

`def label(n): return "positive" if n > 0 else "non-positive" if n == 0 else "negative"` nests a ternary conditional, while the block form `if n > 0: label="positive"` / `elif n == 0: label="zero"` / `else: label="negative"` spells the same decision with explicit branches; `bool(0)`, `bool("")`, `bool([])` are all `False` (falsy) while `bool(1)` and `bool("hi")` are `True` (truthy), so `if my_list:` safely tests emptiness without comparing to `[]` explicitly.
