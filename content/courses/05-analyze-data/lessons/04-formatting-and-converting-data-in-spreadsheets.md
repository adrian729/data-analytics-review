---
id: 05-analyze-data/04-formatting-and-converting-data-in-spreadsheets
courseId: 05-analyze-data
title: Formatting and Converting Data in Spreadsheets
status: authored
summary: Why correctly typed spreadsheet fields prevent sorting and analysis errors, and how converting types, validating input with dropdowns, and highlighting with conditional formatting keep data accurate and readable.
format: refresher
terms: []
revisits:
  - termId: data-type
    note: Course 3 defined data type as the kind of value a field holds. This lesson shows why a spreadsheet that stores dates or currency as text breaks sorting and why correcting the type is required before analysis.
  - termId: typecasting
    note: Course 4 introduced typecasting as converting data from one data type to another with CAST in SQL. This lesson is the spreadsheet counterpart — using Format menus and functions like CONVERT to cast values into the right type.
  - termId: data-validation
    note: Course 4 defined data validation as checking accuracy before adding or importing data. This lesson applies it as the spreadsheet feature that restricts input to a dropdown list or checkbox.
  - termId: conditional-formatting
    note: Course 4 defined conditional formatting as changing a cell's appearance when a value meets a condition. This lesson combines it with validation to color-code status and due dates during analysis.
  - termId: inconsistent-data
    note: Course 4 defined inconsistent data as different formats for the same thing. This lesson shows how mixed date strings, number-as-text, or mixed units create that inconsistency if types are not standardized.
  - termId: stakeholders
    note: Course 1 defined stakeholders as people who invest time and resources into a project and are interested in its outcome. This lesson shows how incorrectly typed fields lead to wrong sorts and mislead those stakeholders.
topics:
  - spreadsheets
  - data-types
  - data-quality
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-2-format-and-adjust-data
---

Even after cleaning, data can still be in the wrong format for the question you want to answer, and the analysis will be wrong before any formula runs. A movie table that stores release dates as [data types](/glossary#data-type) typed as text will sort alphabetically instead of chronologically, so a request for the 20 most recent films returns the wrong list; a budget column left as plain numbers instead of currency sorts and calculates differently; and the same kind of [inconsistent data](/glossary#inconsistent-data) that Course 4 flagged as dirty — mixed units, mixed formats — reappears here as dollars mixed with pounds or temperatures mixed across scales. [Typecasting](/glossary#typecasting) in spreadsheets is the fix before any deeper analysis begins, and getting it right early avoids mistakes that are time-consuming to undo and that can mislead [stakeholders](/glossary#stakeholders) once the results are shared.

## Converting between types in spreadsheets

Spreadsheets expose a Format menu that lets you cast an entire column to number, currency, date, percentage, or a custom number format, with a currency shortcut that applies it in one click. When the unit itself must change, the `CONVERT` function does the work — `=CONVERT(B2, "F", "C")` turns a Fahrenheit temperature into Celsius and `=CONVERT(D2, "mph", "m/s")` turns miles per hour into meters per second — and you fill down to keep the unit consistent across the table. The same idea covers the cases the reading collects as external references: text to date, text to number so values actually add in formulas, and numbers to percentages with `TO_PERCENT` in Sheets. Best practice is to keep an entire column in one format, and after a conversion that used a formula, use Copy then Paste special > Paste values only so the cell holds a locked value instead of a live formula that would shift if its source changes.

## Controlling input with data validation

[Data validation](/glossary#data-validation) in this context is the spreadsheet feature — distinct from the broader validation process — that controls what can be entered in a cell. Its most common use is a dropdown created from Data > Data validation > List of items, for example "Not Yet Started," "In Progress," and "Ready" in a Status column, which acts like a multiple-choice question for collaborators and cuts later cleaning. The same menu creates custom checkboxes — "Approved" and "Not approved" under a Review column — and it can require a valid date or reject any input that does not match the rule, which protects structured data and formulas from being accidentally overwritten when many people edit the same sheet.

## Making patterns visible with conditional formatting

[Conditional formatting](/glossary#conditional-formatting) is the companion tool that changes how cells appear when values meet specific conditions, adding visual cues that make a table readable at a glance. Applied to the validated Status column, rules such as Format cells if Text is exactly "Not Yet Started" in red, "In Progress" in yellow, and "Ready" in green give an instant count of what is pending versus done. Combined again with a validated date column, a rule like Date is after today colored orange highlights upcoming deadlines, while the same mechanism previously highlighted empty cells that still needed data — the same feature Excel also exposes as built-in color codes — so anyone opening the sheet sees where attention is needed without reading every row.
