---
id: 07-python/07-core-data-structures
courseId: 07-python
title: Core Data Structures
status: draft
summary: "Draft: lists (mutable ordered), tuples (immutable), dicts (key-value + methods), sets (unique), plus zip/enumerate/list comprehensions as the compact trio."
format: cheatsheet
terms:
  - list
  - tuple
  - dictionary
  - set
  - list-comprehension
revisits: []
topics:
  - python
  - data-types
sourceModules:
  - unverified-notes:introduction-to-data-analysis-using-python#module-4-data-structures-in-python
---

> **Unverified draft.** Reconstructed from personal course notes and public syllabus pages, not the official readings — details and course-specific examples may be wrong or missing. Verify against the live course before trusting.

Four built-ins carry most data work before you reach pandas, and the choice is a tradeoff you can read from two questions — ordered or unordered, mutable or immutable — plus three compact idioms that replace verbose loops when the structure itself suggests the operation.

## **[List](/glossary#list)** — ordered, mutable, bracketed

A **[list](/glossary#list)** is an ordered, mutable sequence written with `[]`: `nums = [3, 1, 2]; nums.append(4)` → `[3,1,2,4]`, `nums[0]` → `3`, `nums[1:3]` → `[1,2]`, `len(nums)` → `4`; lists allow duplicates, nest arbitrarily (`matrix = [[1,2],[3,4]]`), and share the same indexing/slicing you learned for strings, so `"hi"[0]` and `["hi","bye"][0]` follow identical rules.

## **[Tuple](/glossary#tuple)** — ordered, immutable, parenthesized

A **[tuple](/glossary#tuple)** is an ordered, immutable sequence written with `()`: `point = (3, 4); point[0]` → `3` but `point[0] = 5` raises `TypeError`; immutability makes tuples hashable when their elements are hashable — so `(3, 4)` is usable as a [dictionary](/glossary#dictionary) key or [set](/glossary#set) member where a list cannot go (a tuple holding a list, like `([1], 2)`, is not hashable), signals intent that the collection is a fixed record rather than a growing collection, and unpacks cleanly: `x, y = point`.

## **[Dictionary](/glossary#dictionary)** — key-value, method-rich

A **[dictionary](/glossary#dictionary)** is a mutable mapping of unique keys to values written with `{key: value}`: `user = {"name": "Ada", "age": 30}; user["name"]` → `"Ada"`, `user.get("city", "unknown")` avoids `KeyError` by returning a default, `user.keys()`, `user.values()`, `user.items()` expose views you can iterate, `user["city"] = "London"` inserts or overwrites; since Python 3.7 insertion order is preserved, so iterating `for k, v in user.items():` respects the order you wrote.

## **[Set](/glossary#set)** — unordered, unique, fast membership

A **[set](/glossary#set)** is an unordered collection of unique elements written with `{}` or `set()`: `s = {1, 2, 2, 3}` → `{1,2,3}`, `2 in s` → `True` (hash-based, faster than scanning a **[list](/glossary#list)**), `s.add(4)` and `s.discard(2)` mutate; create an empty set with `set()` not `{}` (which makes an empty **[dictionary](/glossary#dictionary)**), and use set operations like `a | b` (union), `a & b` (intersection), `a - b` (difference) when deduplication or overlap questions dominate.

## The efficiency trio — `zip()`, `enumerate()`, and **[list comprehensions](/glossary#list-comprehension)**

`zip()` pairs sequences (`list(zip(["a","b"], [1,2]))` → `[("a",1),("b",2)]` and truncates to the shortest), `enumerate()` pairs index with value (`for i, v in enumerate(["x","y"]):` → `0 x, 1 y` without managing a counter), and a **[list comprehension](/glossary#list-comprehension)** builds a new **[list](/glossary#list)** declaratively: `[x*2 for x in nums if x > 1]` filters and maps in one readable line instead of an explicit `for`+`append` block, with a generator expression `(x*2 for x in nums)` as the lazy counterpart when the result need not materialize at once.
