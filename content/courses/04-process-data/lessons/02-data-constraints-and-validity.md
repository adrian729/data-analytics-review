---
id: 04-process-data/02-data-constraints-and-validity
courseId: 04-process-data
title: Data Constraints and Validity
status: authored
summary: The criteria — data type, range, mandatory fields, uniqueness, regex, cross-field validation, and the database-only constraints — that decide whether a piece of data is valid.
format: cheatsheet
terms:
  - data-constraint
  - data-range
  - mandatory-field
  - unique-constraint
  - regex-pattern
  - cross-field-validation
  - set-membership-constraint
revisits:
  - termId: data-type
    note: Course 3 defined data type as one of the properties a value can be classified by. Here it's the first entry in a table of data constraints — the criteria that decide whether that value is valid at all.
  - termId: primary-key
    note: Course 3 defined a primary key as the column that uniquely identifies each row in a database table. It's also one of the database-only data constraints below.
  - termId: foreign-key
    note: Course 3 defined a foreign key as a column referencing another table's primary key. It's the other database-only constraint in the table below.
topics:
  - data-quality
sourceModules:
  - coursera:process-data-dirty-to-clean#module-1-data-integrity-and-analytics-objectives
---

A **[data constraint](/glossary#data-constraint)** is a criterion that determines whether a piece of data is clean and valid. Constraints are what makes a data-integrity check concrete: instead of asking "does this look right?", you're checking each value against a specific, testable rule.

| Constraint | Value must... | Example |
|---|---|---|
| [Data type](/glossary#data-type) | Be of a certain type: date, number, percentage, Boolean, etc. | A date field holding the plain number `30` fails |
| [Data range](/glossary#data-range) | Fall between predefined maximum and minimum values | A 10–20 range rejects a value of `30` |
| [Mandatory](/glossary#mandatory-field) | Not be left blank or empty | Age must always be filled in |
| [Unique](/glossary#unique-constraint) | Have no duplicate | Two people can't share a phone number in the same service area |
| [Regular expression (regex)](/glossary#regex-pattern) | Match a prescribed pattern | A phone number must match `###-###-####` |
| [Cross-field validation](/glossary#cross-field-validation) | Satisfy a condition across multiple fields | Several percentage fields must add up to 100% |

Three more constraints apply only inside databases: a [primary key](/glossary#primary-key) value must be unique per column; a [set-membership](/glossary#set-membership-constraint) value must come from a defined set of discrete values, like a status column that only accepts Yes, No, or Not Applicable; and a [foreign key](/glossary#foreign-key) value must come from a defined set in another table — a US taxpayer database's State column, for instance, only accepting the states and territories listed in a separate States table.

## Why constraints matter beyond the individual value

The same accuracy, completeness, and consistency that define data integrity apply here too: accuracy is how closely a value matches the real thing it describes, completeness is whether all the desired fields are present, and consistency is whether the same fact reads the same way everywhere it's recorded — the same customer address, for instance, matching across a sales database and a repair database. Constraints are the mechanism for enforcing all three: a well-designed set of constraints catches an invalid value at the point of entry, before it has a chance to compromise an analysis downstream.
