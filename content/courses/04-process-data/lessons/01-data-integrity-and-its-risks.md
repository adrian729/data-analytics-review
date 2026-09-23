---
id: 04-process-data/01-data-integrity-and-its-risks
courseId: 04-process-data
title: Data Integrity and Its Risks
status: authored
summary: What data integrity is, its four components, and the three ways it gets quietly compromised — replication, transfer, and manipulation.
format: refresher
terms:
  - data-integrity
  - accuracy
  - completeness
  - consistency
  - data-replication
  - data-transfer
  - data-manipulation
revisits: []
topics:
  - data-quality
sourceModules:
  - coursera:process-data-dirty-to-clean#module-1-focus-on-integrity
---

A strong analysis depends on the integrity of the data behind it. **[Data integrity](/glossary#data-integrity)** is the accuracy, completeness, consistency, and trustworthiness of data throughout its lifecycle — and when it's low, the damage ranges from a single lost pixel in an image to a wrong medical decision. The trouble is that the analysis can be flawless and still be wrong, simply because the data it started from wasn't.

## The four components

- **[Accuracy](/glossary#accuracy)** — the degree to which data conforms to the actual entity being measured or described.
- **[Completeness](/glossary#completeness)** — the degree to which data contains all desired components or measures.
- **[Consistency](/glossary#consistency)** — the degree to which data is repeatable from different points of entry or collection.
- Trustworthiness — whether the data can be relied on at all.

A global company's calendar dates make the stakes concrete: 12/10/20 means October 12 in some countries and December 10 in the US. Without a common format, "December 10" and "October 12" become interchangeable by accident — the kind of mix-up that leads to ordering extra inventory for the wrong month.

## Three ways integrity gets compromised

Data can be compromised every time it's replicated, transferred, or manipulated:

- **[Data replication](/glossary#data-replication)** — storing data in multiple locations. Replicate it at different times or places and the copies can fall out of sync: one analyst standardizes dates on a partial copy of a dataset because of a memory issue, certifies it as compliant, and now two versions of the same dataset disagree.
- **[Data transfer](/glossary#data-transfer)** — copying data from a storage device to memory, or from one computer to another. An interrupted transfer leaves an incomplete dataset; a field misclassified during import — a date field imported as text, say — silently corrupts every value in it.
- **[Data manipulation](/glossary#data-manipulation)** — changing data to make it more organized and easier to read. Meant to make analysis more efficient, but an error during the process — deleting a record that looked like a duplicate but was actually a legitimate one — can just as easily remove data that needs to be restored.

Data can also be compromised by human error, viruses, malware, hacking, and system failures. In many companies, a data warehouse or data engineering team owns a first pass at data integrity — but that's never a reason to skip double-checking that the data is complete and valid before analysis. Whoever does the checking, it's a required step before any analysis can be trusted.
