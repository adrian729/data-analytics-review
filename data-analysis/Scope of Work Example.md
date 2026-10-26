# Scope of Work — Citysville Traffic Congestion Analysis

> **Illustrative example:** Citysville, roles, dates, and planning commitments below are fictional. This document defines planned work; it contains no analysis results.

- **Analyst / team:** Citysville Transport Analytics Team
- **Client / sponsor:** Citysville Department of Transportation (DOT), Head of Transport Planning
- **Version / last updated:** 1.0 — 2027-01-08
- **Status:** Agreed for this fictional scenario

## Purpose and Objectives

- **Business question:** Which monitored road segments experience the greatest weekday peak-period delays, and which improvements merit further investigation?
- **Intended use:** Help DOT prioritize locations and options for its next transport-improvement planning round.
- **Success criteria:** Deliver a reproducible ranking of ten eligible segments, a hotspot map, and an engineer-reviewed shortlist of up to three feasible improvement options, with evidence, estimates, and limitations clearly documented.

## Scope and Boundaries

- **Data sources:** Existing DOT records of segment travel times, traffic counts, sensor availability, roadworks, and incidents; road-segment maps; and existing engineering cost and intervention evidence.
- **Coverage:** Sensor-monitored road segments within Citysville's official city boundary. Findings apply to eligible monitored segments.
- **Time period:** 2026-01-01 to 2026-12-31; weekdays excluding public holidays, during 07:00–09:00 and 16:00–18:00.
- **Analysis:** Rank segments by average excess travel time per vehicle during these periods, using reference travel times agreed with DOT's traffic engineer. Report traffic volumes, coverage, and variation alongside the ranking. Review plausible contributing factors and potential improvements with engineering staff.

**Out of scope**

- Roads outside the city boundary or without sufficient monitoring data.
- New sensor installation, camera collection, or surveys.
- Implementing interventions, detailed engineering design, or procurement.
- Establishing causal effects from observational associations alone.

## Major Activities

| Activity | Description | Responsible person / team |
|---|---|---|
| Review data | Confirm access, definitions, sensor coverage, and usable records. | Analyst and data custodian |
| Prepare data | Resolve duplicates and invalid readings; document missing data, exclusions, and transformations. | Analyst |
| Identify hotspots | Calculate agreed metrics, rank eligible segments, check sensitivity to missing data, and map the top ten. | Analyst |
| Assess options | Review contributing factors and feasible interventions; obtain indicative cost and benefit estimates where supported. | Analyst and traffic engineer |
| Report findings | Prepare outputs, complete technical review, and present the shortlist and limitations. | Analyst and planning lead |

## Deliverables and Acceptance

| Deliverable | Contents and format | Acceptance criteria | Reviewer / approver | Due date |
|---|---|---|---|---|
| Analysis package | Cleaned CSV, field dictionary, analysis workbook or script, and preparation log. | Source-to-output steps are reproducible; units, exclusions, missingness, and checks are documented. | Data custodian and traffic engineer | 2027-02-05 |
| Hotspot map and ranking | PDF map and CSV ranking with metrics, coverage, and segment identifiers. | Ten eligible segments ranked using the agreed method; mapped locations and calculations pass review. | Traffic engineer | 2027-02-19 |
| Options assessment | Spreadsheet of feasible options, indicative cost and benefit ranges, evidence, assumptions, and confidence. | Every hotspot is considered; estimates have an identified basis, and unsupported quantities are marked unavailable. | Traffic engineer and planning lead | 2027-03-12 |
| Final report and presentation | PDF report and briefing slides, including an executive summary and shortlist of up to three options. | Findings trace to the analysis; recommendations explain trade-offs and uncertainty; review comments are resolved or recorded. | Sponsor | 2027-03-26 |

## Schedule and Milestones

| Milestone | Completion criteria | Target date | Dependency |
|---|---|---|---|
| Data suitability confirmed | Access works; definitions, reference travel times, and eligibility rules are agreed. | 2027-01-22 | Data and specialist access |
| Data preparation complete | Analysis package passes review. | 2027-02-05 | Suitable source data |
| Hotspot list accepted | Ranking and map pass technical review. | 2027-02-19 | Prepared data |
| Options reviewed | Engineering assessment and estimates are documented. | 2027-03-12 | Hotspot list and engineering input |
| Project complete | Final report and briefing accepted. | 2027-03-26 | Consolidated review feedback |

- **Expected start:** 2027-01-11
- **Estimated completion:** 2027-03-26, including review and revision.
- **Schedule conditions:** Data access by 2027-01-11, engineering input during analysis, and consolidated feedback within five working days of each submission.

## Assumptions, Dependencies, and Constraints

- **Assumptions:** At least ten monitored segments have usable observations for 80% of expected peak-period intervals in each month. The analyst and data custodian will verify this by 2027-01-22; the traffic engineer will confirm that the coverage supports comparison.
- **Dependencies:** The data custodian supplies extracts and definitions; the traffic engineer supplies reference travel times, feasibility advice, and the basis for estimates.
- **Constraints:** Existing data and approved tools only; one analyst for up to three days per week, with scheduled specialist support. Use aggregated traffic data without identifiable vehicle or person records.
- **Key risks and response:** If coverage is inadequate or access is delayed, present revised coverage, outputs, and dates to the sponsor for agreement. Document unavailable estimates rather than inventing values.

Historical associations support hypotheses about congestion. Cost and benefit estimates require engineering evidence; compare options using consistent units, time horizons, and assumptions. Where benefits cannot be estimated credibly, explain the qualitative assessment.

## Responsibilities and Progress Updates

- **Data access / subject expertise:** DOT data custodian manages extracts and definitions; traffic engineer reviews metrics, interpretation, feasibility, and estimates.
- **Progress updates:** Weekly email to the sponsor, planning lead, and traffic engineer covering completed work, next steps, blockers, decisions, and schedule changes.
- **Scope decisions:** The sponsor approves changes after consultation with the analyst and relevant specialists. The analyst raises blockers promptly.

## Agreement and Changes

- **Scope agreed by:** Head of Transport Planning (sponsor), Transport Analytics Lead, DOT Data Custodian, and Traffic Engineering Lead.
- **Date:** 2027-01-08, within this fictional scenario.

Proposed changes must describe their effect on coverage, work, deliverables, resources, and dates. Record sponsor agreement before taking on additional work.

| Date / version | Change and reason | Effect on work, resources, and schedule | Agreed by |
|---|---|---|---|
| 2027-01-08 / 1.0 | Initial scope agreed. | Establishes the activities, outputs, resource allocation, and schedule above. | Sponsor and named leads |

---

Blank version: [[Scope of Work Template]] · Guidance: [[Project Planning#Scope of Work (SOW)|Scope of Work]]
