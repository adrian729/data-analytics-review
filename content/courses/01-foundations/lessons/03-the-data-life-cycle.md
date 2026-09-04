---
id: 01-foundations/03-the-data-life-cycle
courseId: 01-foundations
title: The Data Life Cycle
status: authored
summary: The six stages data itself moves through — Plan, Capture, Manage, Analyze, Archive, Destroy — and how organizations vary them. Not the same thing as the analysis process.
format: cheatsheet
terms:
  - data-life-cycle
revisits:
  - termId: data-analysis-process
    note: These two are the single most confused pair in the course. Both have six steps and both contain an "Analyze" — but one describes the life of the data, the other the work of the analyst.
topics:
  - data-lifecycle
sourceModules:
  - 01-foundations-data-everywhere/02_the_wonderful_world_of_data.md
---

The [data life cycle](/glossary#data-life-cycle) describes the life of *the data itself* — not the work of analyzing it.

## The six stages

| Stage | What happens |
|---|---|
| **Plan** | Decide what data is needed, how it will be managed, and who is responsible — before any collection starts. |
| **Capture** | Collect it, from external sources (public datasets) or internal ones (the company's own database). |
| **Manage** | Care for, store, and secure it — how and where it is kept, and which tools maintain it. |
| **Analyze** | Use it to solve problems, make decisions, and support goals. |
| **Archive** | Store data that is no longer actively used but still needed for reference, rather than keeping everything live. |
| **Destroy** | Securely erase it — wiped drives, shredded documents — once it is no longer needed, protecting company and customer privacy. |

## Life cycle vs. analysis process

This is the distinction the course flags explicitly, and it is worth over-learning:

| | Data life cycle | Data analysis process |
|---|---|---|
| Describes | The life of the data | The work of the analyst |
| Steps | Plan, Capture, Manage, **Analyze**, Archive, Destroy | Ask, Prepare, Process, **Analyze**, Share, Act |
| Ends with | Destruction of the data | Action taken by the business |

They both have six steps and they both contain "Analyze", which is exactly why they get swapped. They are not interchangeable.

## Organizational variations

Different organizations adapt the stages to their own priorities:

| Organization | Stages |
|---|---|
| U.S. Fish and Wildlife Service | Plan, Acquire, Maintain, Access, Evaluate, Archive |
| USGS | Plan, Acquire, Process, Analyze, Preserve, Publish/Share — plus ongoing metadata, quality, and security activities |
| Financial institutions | Capture, Qualify, Transform, Utilize, Report, Archive, Purge |
| Harvard Business School | Generation, Collection, Processing, Storage, Management, Analysis, Visualization, Interpretation |

The pattern behind the variation: **research-oriented organizations** emphasize archiving, visualization, and interpretation, because the output is knowledge that has to outlive the project. **Regulated industries** like finance have explicit purge and archive stages, because retention is a legal obligation.

One principle is universal across every variant — govern the data so it stays accurate, secure, and available.
