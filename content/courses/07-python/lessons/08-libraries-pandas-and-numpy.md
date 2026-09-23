---
id: 07-python/08-libraries-pandas-and-numpy
courseId: 07-python
title: Libraries — pandas and NumPy
status: draft
summary: "Draft: libraries/packages/modules, importing, NumPy arrays and vectorization, pandas DataFrames — then boolean masking, grouping/aggregation, and merging as the bridge from syntax to analysis."
format: refresher
terms:
  - python-package
  - numpy
  - pandas
  - dataframe
revisits:
  - termId: data-aggregation
    note: Course 5 introduced aggregation as summarizing many rows (SUM, AVERAGE, pivot tables); pandas expresses the same via groupby().agg().
  - termId: boolean-logic
    note: Course 3 introduced Boolean logic for filtering rows; pandas boolean masking is that logic applied as an array of True/False to select rows.
  - termId: data-merging
    note: Course 4 introduced data merging as combining datasets; pandas merge()/join() is the programmatic counterpart to VLOOKUP and SQL JOIN.
topics:
  - python
  - tooling
  - data-types
sourceModules:
  - unverified-notes:introduction-to-data-analysis-using-python#module-4-data-structures-in-python
---

> **Unverified draft.** Reconstructed from personal course notes and public syllabus pages, not the official readings — details and course-specific examples may be wrong or missing. Verify against the live course before trusting.

Once syntax is comfortable the payoff arrives through libraries — curated packages that turn the same loops and conditionals into one-line, vectorized operations on whole columns — and two **[python-package](/glossary#python-package)** families dominate analyst work: **[NumPy](/glossary#numpy)** for contiguous numeric arrays and **[pandas](/glossary#pandas)** for labeled tables, with the **[dataframe](/glossary#dataframe)** as the central object where filtering, aggregation, and combining datasets finally feel like analysis rather than programming exercises.

## Libraries, packages, modules — and `import`

A module is a single `.py` file (`import math`), a **[python-package](/glossary#python-package)** is a directory of modules (`import numpy`), a library is the informal term for any reusable collection you install — the distinctions blur in conversation, but the import spellings matter: `import numpy as np` and `import pandas as pd` are community conventions, `from math import sqrt` pulls one name, and `import this` is Python's own easter-egg module; installing is typically `pip install pandas` outside the notebook, importing is inside.

## **[NumPy](/glossary#numpy)** — arrays and vectorization

**[NumPy](/glossary#numpy)** provides `ndarray`, a homogeneous, contiguous array where `import numpy as np; a = np.array([1,2,3]); a * 2` → `array([2,4,6])` multiplies every element without a loop (vectorization), `a.sum()`, `a.mean()`, `a[a > 1]` (boolean masking at the array level), and `a.reshape(3,1)` re-views shape without copying; this is where Python first beats spreadsheet formulas on scale — the same operation runs in compiled C across millions of values while the syntax stays as short as a cell formula.

## **[pandas](/glossary#pandas)** and the **[DataFrame](/glossary#dataframe)** — the analyst's workhorse

A **[dataframe](/glossary#dataframe)** in **[pandas](/glossary#pandas)** is a two-dimensional labeled table (rows + named columns) akin to a spreadsheet sheet plus a database table: `import pandas as pd; df = pd.DataFrame({"name": ["Ada","Bo"], "sales": [100, 200]})` gives `df["sales"]` as a Series, `df.shape` → `(2,2)`, `df.head()`, `df.info()`, and `df.describe()` as the first three things you run on any new file; every column is a Series (a **[NumPy](/glossary#numpy)**-backed vector with an index), so column-wise operations stay vectorized.

## Boolean masking, grouping/[data aggregation](/glossary#data-aggregation), merging — syntax becomes analysis

Boolean masking is [boolean-logic](/glossary#boolean-logic) as a row selector: `df[df["sales"] > 150]` keeps rows where the mask is `True`, `df[(df["sales"] > 100) & (df["name"] != "Ada")]` combines conditions with `&`/`|` (parentheses required); grouping and [data aggregation](/glossary#data-aggregation) collapses rows: `df.groupby("dept")["sales"].agg(["mean","sum"])` mirrors a pivot table or SQL `GROUP BY`; [data merging](/glossary#data-merging) combines tables: `pd.merge(orders, customers, on="customer_id", how="left")` parallels `VLOOKUP`/`JOIN` but handles many-to-one, suffixes, and indicator flags in one call — the three operations together move you from writing loops to asking dataset-level questions.
