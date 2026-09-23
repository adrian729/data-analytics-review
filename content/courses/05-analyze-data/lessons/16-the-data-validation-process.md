---
id: 05-analyze-data/16-the-data-validation-process
courseId: 05-analyze-data
title: The Data Validation Process
status: authored
summary: Why validating throughout analysis — not just at import — catches errors with six validation types, recalculation checks, and common-sense queries before stakeholders see results.
format: refresher
terms:
  - data-validation-process
revisits:
  - termId: data-integrity
    note: Course 4 defined data integrity as the accuracy, completeness, consistency, and trustworthiness of data. The data validation process is the ongoing checking that protects that integrity.
  - termId: data-validation
    note: Course 4 defined data validation as the spreadsheet feature that controls what can be entered. This lesson broadens it to the full process that also checks ranges, constraints, and consistency.
  - termId: accuracy
    note: Course 4 defined accuracy as conformance to the real entity. The examples here validate that calculated purchase prices and recorded prices actually match.
  - termId: verification
    note: Course 4 defined verification as confirming data is correct. The recalculation and zero-division checks here are verification steps inside the larger validation process.
  - termId: data-security
    note: Course 3 defined data security as protecting data from unauthorized access or corruption. The module includes security alongside accuracy, completeness, and consistency as the fourth quality the validation process guards.
topics:
  - data-quality
sourceModules:
  - coursera:analyze-data-to-answer-questions#module-4-perform-data-calculations
---

The spreadsheet [data validation](/glossary#data-validation) dropdown that restricts what can be typed is only one tool; the **[Data validation process](/glossary#data-validation-process)** is the process of checking and rechecking the quality of data so that it is complete, accurate, secure, and consistent, and the module insists it is used throughout analysis, not only at import. Pairing business knowledge with technical checks is what makes the process work — asking questions is presented as a pro tip for catching the business rule behind a number.

## Check and recheck as you calculate

Every calculation should be validated by recalculating it a different way and comparing. The furniture-retailer example adds a column that recomputes purchase price as `quantity * product price` and finds at least one row where the recomputed total does not match the recorded column; asking the business reveals a 30% discount on five or more units of certain items, a rule the raw data alone did not explain. The avocado SQL example does the same check with `Small_Bags + Large_Bags + XLarge_Bags AS Total_Bags_Calc` compared to `Total_Bags`, and when the next query computes `(Small_Bags / Total_Bags) * 100 AS Small_Bags_Percent` a division-by-zero error surfaces for rows where `Total_Bags = 0`, fixed by adding `WHERE Total_Bags <> 0` (or `!= 0` or `SAFE_DIVIDE`) before the result is shared. A common-sense filter — no sales on Saturday and Sunday for a weekday-only business — is also a validation check; if weekend rows appear, the question is whether the business premise is wrong (special weekend events) or the data is, and excluding those rows deliberately is itself a validation decision.

## The six validation types

The reading lists six types — the first five validate data, the sixth validates the code that accepts it — each with a purpose, example, and limitation that shows why one check alone is never enough. Data type validation checks that the value matches the field's allowed type (school grades 1–12 must be numeric, and a yes/no binary fails when members can visit many locations on a birthday, requiring a numeric field instead); its limitation is that 13 passes as numeric but is still wrong, so a data range check is also needed. Data range validation checks that the value falls within an acceptable interval (1 to 12), but 11.5 passes the interval while failing a content constraint. Data constraint validation checks additional conditions such as whole numbers or numeric-only characters (a grade must be whole, a zip code must be numeric and exactly five characters, and "`USA`" versus "`US`" or a trailing space fails a length check); again, a whole number like 13 can still be outside the valid range. Data consistency validation checks that related values make sense together (a shipping date cannot precede its production date); a later shipping date can still be [accuracy](/glossary#accuracy) wrong, so consistency does not guarantee correctness. Data structure validation checks that the value conforms to a required format such as an MP3 or HTML structure — correctly displayed content can still be the wrong content. Code validation checks that the application code itself systematically performs those prior validations during input (whether only one type is allowed, whether range checking exists, whether string endings are defined); its limitation is that no single code review catches every variation. Asking a data owner which of these validations were already performed, before assuming the dataset is clean, protects [data integrity](/glossary#data-integrity) and keeps [verification](/glossary#verification) from being mistaken for one-time cleaning — it is a continuous safeguard that also preserves [data security](/glossary#data-security) alongside [accuracy](/glossary#accuracy) and completeness.
