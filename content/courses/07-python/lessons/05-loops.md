---
id: 07-python/05-loops
courseId: 07-python
title: Loops
status: draft
summary: "Draft: while vs for, range(start, stop, step), and break/continue — iterating without copy-pasting and without infinite runs."
format: cheatsheet
terms:
  - loop
revisits: []
topics:
  - python
sourceModules:
  - unverified-notes:introduction-to-data-analysis-using-python#module-3-loops-and-strings
---

> **Unverified draft.** Reconstructed from personal course notes and public syllabus pages, not the official readings — details and course-specific examples may be wrong or missing. Verify against the live course before trusting.

A **[loop](/glossary#loop)** repeats one block without duplicating it, and the choice of loop type is the first design decision: use `while` when you do not know how many steps you need and must watch a condition, use `for` when you already have a sequence to walk — the latter dominates data work because you almost always have rows, columns, or characters to iterate rather than an open-ended condition to poll.

## `while` — unknown count, infinite-loop risk

`while condition:` rechecks before each iteration and stops when the condition becomes `False`; the classic pattern `n = 3; while n > 0: print(n); n -= 1` prints `3,2,1` and relies on `n -= 1` inside the body — forget that update and the loop never ends, which in a notebook means interrupting the kernel, so guard `while` loops with a clear progress toward `False` and prefer `for` when the iteration count is knowable upfront.

## `for` — iterate a known sequence

`for item in sequence:` binds `item` to each element in turn: `for name in ["Ada", "Bo"]: print(name)`, `for ch in "hi": print(ch)`, or `for row in rows:` over data you already hold; unlike `while`, there is no manual counter to maintain, and the loop terminates exactly when the sequence is exhausted, which eliminates an entire class of off-by-one and infinite-loop bugs.

## `range(start, stop, step)` — the numeric workhorse

`range()` generates the index sequence `for` usually walks: `range(5)` → `0,1,2,3,4` (stop is exclusive), `range(1, 6)` → `1..5`, `range(0, 10, 2)` → even numbers `0,2,4,6,8`, `range(10, 0, -1)` counts down; a frequent pattern is `for i in range(len(items)): print(i, items[i])` though `enumerate()` is more Pythonic when you need both index and value — `range` is just the arithmetic helper, not the iteration mechanism itself.

## `break` and `continue` — short-circuiting the default

`break` exits the entire **[loop](/glossary#loop)** immediately (`for x in data: if x is None: break` stops at the first missing value), `continue` skips to the next iteration (`for x in data: if x is None: continue; process(x)` processes only non-missing values); both keep loop bodies flat by avoiding deep nesting, but overusing them can obscure flow — an `if`/`else` often reads more clearly than a `continue`-heavy body.

## Tiny verifiable examples

`total = 0; for n in range(1, 6): total += n` leaves `total == 15`; `s = 0; i = 1; while i <= 4: s += i; i+=1` computes the same sum via `while` but requires the manual `i+=1`; `for i, v in enumerate(["a","b","c"]): print(i, v)` prints index-value pairs `0 a, 1 b, 2 c` without managing `i` yourself, which is why `for` plus `range`/`enumerate` is the default in analysis scripts.
