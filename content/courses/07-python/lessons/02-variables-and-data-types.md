---
id: 07-python/02-variables-and-data-types
courseId: 07-python
title: Variables and Data Types
status: draft
summary: "Draft: assignment, dynamic typing, int/float/str/bool plus type(), explicit type conversion, and snake_case naming — the smallest building blocks before control flow."
format: cheatsheet
terms:
  - variable
  - python-data-types
  - type-conversion
revisits:
  - termId: float-data-type
    note: Course 4 defined Float as a decimal numeric type in SQL; Python's float is the same idea — a floating-point number like 3.14 — but created by literal syntax, not a column definition.
  - termId: snake-case
    note: Course 3 introduced snake_case for SQL field names; Python reuses the same convention for variable and function names (total_sales, not totalSales).
  - termId: typecasting
    note: Course 4 introduced typecasting via CAST in SQL; Python spells the same idea as constructor calls like int() and str(), without a query language.
  - termId: python
    note: The course's first lesson defined Python itself; this lesson covers its smallest building blocks — names, values, and types.
  - termId: naming-conventions
    note: Course 3 set naming conventions for files and fields; Python's variable-naming habit extends the same readability goal to code.
  - termId: text-string
    note: Course 5 defined a text string as characters inside a cell; Python's str is the same content as a first-class value that conversion functions can produce or consume.
topics:
  - python
  - data-types
sourceModules:
  - unverified-notes:introduction-to-data-analysis-using-python#module-1-hello-python
---

> **Unverified draft.** Reconstructed from personal course notes and public syllabus pages, not the official readings — details and course-specific examples may be wrong or missing. Verify against the live course before trusting.

Naming a value so you can reuse it is the first abstraction in [Python](/glossary#python), and Python makes it deliberately lightweight: a **[variable](/glossary#variable)** is just a name bound to an object with `=` — `revenue = 1000` — with no advance type declaration, inspected via `type()`, and reassigned freely because the name points at whatever object you last assigned, not at a fixed box with a fixed shape, which explains both the speed of prototyping and the class of bugs where a name no longer holds what you assume.

## Assignment and dynamic typing

Assignment binds a name to an object (`count = 5; name = "Ada"; flag = True`) and rebinding replaces the binding (`count = count + 1`); because typing is dynamic you never write `int count`, you discover types at runtime with `type(count)` → `<class 'int'>`, and the same name can later bind to a different type — allowed but usually a readability hazard worth avoiding.

## The four **[Python data types](/glossary#python-data-types)** you meet first

**[Python data types](/glossary#python-data-types)** cluster into `int` (whole numbers like `42`, `-7`), [float](/glossary#float-data-type) (`3.14`, `2.0`), `str` (text in quotes like `"hello"`), and `bool` (`True`/`False`); check with `type(3.14)` → `float` or `type("hi")` → `str`, and note that `bool` is a subclass of `int` in CPython (`True == 1`) but treat it as a logical type anyway — for example `is_valid = revenue > 0` yields a `bool`.

## Explicit **[type conversion](/glossary#type-conversion)**

Python refuses to guess across incompatible types (`"5" + 5` raises `TypeError`), so you convert explicitly via **[type conversion](/glossary#type-conversion)** — `int("5")` → `5`, `str(5)` → `"5"`, `float("3.14")` → `3.14`, `bool(0)` → `False` — the same idea as [typecasting](/glossary#typecasting) in SQL with `CAST`, but spelled as constructor calls; `int("3.9")` raises `ValueError` because the string is not a plain integer — the conversion goes through `float` first: `int(float("3.9"))` → `3`, truncating toward zero just as `int(3.9)` does, and `int("hello")` raises `ValueError` because the string does not look like a number.

## Naming: why **[snake_case](/glossary#snake-case)**

Descriptive [snake_case](/glossary#snake-case) names (`total_sales`, `customer_id`) are treated as a correctness habit, not cosmetic preference, echoing the same [naming-conventions](/glossary#naming-conventions) you saw for SQL fields — they make intent searchable, avoid single-letter mysteries like `x`, and signal that `MAX_SALES` (all caps) is a constant you intend not to rebind while `TotalSales` (CamelCase) is reserved by convention for classes.

## Tiny verifiable examples

`x = 10; y = "10"; x + int(y) == 20` is `True` because `int(y)` coerces the [text-string](/glossary#text-string) to an int first; `type(x) is int`, `type(y) is str`, and `float(x) == 10.0` illustrates that converting never mutates the original object — it returns a new one — so you must reassign if you want the name to keep the converted form (`y = int(y)`).
