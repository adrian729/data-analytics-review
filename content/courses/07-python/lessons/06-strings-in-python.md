---
id: 07-python/06-strings-in-python
courseId: 07-python
title: Strings in Python
status: draft
summary: "Draft: 0-based and negative indexing, slicing with start:stop:step, f-strings, and regex via re as the next step beyond slicing."
format: cheatsheet
terms:
  - string-slicing
  - f-string
revisits:
  - termId: python
    note: The course's first lesson defined Python itself; this lesson works inside it, on its text values.
  - termId: text-string
    note: Course 5 defined text string as quoted characters in spreadsheets/SQL; Python's str is the same idea but as a first-class object with methods like .upper() and .split().
  - termId: regex-pattern
    note: Course 4 introduced regex for matching text patterns; Python exposes it through the re module (re.search, re.findall) rather than a spreadsheet formula.
topics:
  - python
  - data-types
sourceModules:
  - unverified-notes:introduction-to-data-analysis-using-python#module-3-loops-and-strings
---

> **Unverified draft.** Reconstructed from personal course notes and public syllabus pages, not the official readings — details and course-specific examples may be wrong or missing. Verify against the live course before trusting.

Text is where messy reality meets tidy tables — names, addresses, free-form notes — and [Python](/glossary#python) treats a [text-string](/glossary#text-string) as an ordered sequence of characters you can index, slice, format, and pattern-match, with four techniques that stack from precise positional cuts to expressive pattern searches.

## Indexing — 0-based, negative from the end

A string is indexed from `0`: `"hello"[0]` → `"h"`, `"hello"[4]` → `"o"`, and negative indices count from the end: `"hello"[-1]` → `"o"`, `"hello"[-2]` → `"l"`; out-of-range access raises `IndexError`, and single-character results are still `str` (there is no separate character type), so `"hi"[1].upper()` → `"I"` chains immediately because the result is itself a string object.

## **[String slicing](/glossary#string-slicing)** — `[start:stop:step]`

**[String slicing](/glossary#string-slicing)** extracts a substring with `s[start:stop:step]` where `start` is inclusive, `stop` exclusive, and `step` defaults to `1`: `"hello"[1:4]` → `"ell"`, `"hello"[:3]` → `"hel"` (omit `start` → beginning), `"hello"[2:]` → `"llo"` (omit `stop` → end), `"hello"[::-1]` → `"olleh"` (reverse), and `"hello"[::2]` → `"hlo"` (every second character); slicing never raises for out-of-range bounds — `"hi"[10:]` → `""` — unlike single-index access.

## **[F-strings](/glossary#f-string)** — the modern formatting standard

An **[f-string](/glossary#f-string)** embeds expressions directly: `value = 42; f"Total: {value}"` → `"Total: 42"`, `f"{value:.2f}"` formats a float to two decimals, `f"{name.upper()} has {len(items)} items"` calls methods inside braces; this replaces older `%` and `.format()` styles for brevity and readability, and any valid Python expression works inside `{}` including `f"{a + b}"` or `f"{s.strip()}"`.

## Regex via `re` — when slicing is not enough

When text follows a pattern rather than fixed positions, [regex-pattern](/glossary#regex-pattern) via `import re` takes over: `re.search(r"\d+", "order 42")` finds the first digit run, `re.findall(r"\b\w+@\w+\.\w+\b", text)` extracts emails, `re.sub(r"\s+", " ", s)` normalizes whitespace; the `r"..."` raw string avoids backslash doubling, and regex complements rather than replaces slicing — use slicing for known offsets, regex for pattern-shaped extraction you cannot pin to positions.

## Tiny verifiable examples

`s = "  Ada Lovelace  "; s.strip()` → `"Ada Lovelace"` removes surrounding spaces, `s.strip().split()` → `["Ada","Lovelace"]`, `"-".join(["2026","09","22"])` → `"2026-09-22"`, `f"{s.strip().upper()}:{len(s.strip())}"` → `"ADA LOVELACE:12"` demonstrates indexing, methods, and formatting together without needing any data file beyond the literal itself.
