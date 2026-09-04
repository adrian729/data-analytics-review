---
id: 01-foundations/08-fair-and-impactful-data-work
courseId: 01-foundations
title: Fair and Impactful Data Work
status: authored
summary: Why a conclusion can be factually true and still unfair, the five best practices for fair analysis, and what data ethics asks beyond simply avoiding harm.
format: refresher
terms:
  - fairness
  - data-ethics
  - oversampling
  - self-reporting
revisits:
  - termId: data-driven-decision-making
    note: Fairness is the constraint on this. A decision can be fully data-driven, technically correct, and still wrong — because the data was never the whole story.
topics:
  - ethics-fairness
sourceModules:
  - 01-foundations-data-everywhere/04_become_a_fair_and_impactful_data_professional.md
---

[Fairness](/glossary#fairness) is ensuring an analysis doesn't create or reinforce bias. There is no single standard definition of it, and that is precisely what makes it hard to apply consistently — you cannot check it off.

## True and still unfair

The case the course uses is the one worth remembering, because it shows that correctness is not the bar.

A company with a "boys' club" culture looks at its performance data and finds that only men are succeeding. It concludes it should hire more men.

That conclusion is **factually accurate and unfair.** It ignores the difficulty other gender identities face navigating a toxic environment, and it paints an incomplete picture by not considering the available data on company culture. Acting on it would discriminate against a whole group of future applicants on the strength of a true number.

The fair conclusion uses the same underlying data: **the company culture is preventing some employees from succeeding, and the company needs to address it to improve performance.** Same facts, different conclusion — because the second one accounts for the systemic factor instead of treating the outcome as inherent.

## Five best practices

1. **Consider all available data**, not just what confirms what you already expect. The course's example: a traffic study that looked at holiday status but initially ignored weather.
2. **Identify surrounding factors and context** that could bias the result. An HR vacation-planning project that used only bank holidays missed dates that were culturally significant to other employee groups.
3. **Include [self-reported data](/glossary#self-reporting)** where possible — letting people report their own information avoids the observer bias that creeps in when someone else records data *about* them.
4. **Use [oversampling](/glossary#oversampling) effectively** — deliberately increase the sample size of underrepresented groups so the analysis represents them fairly, instead of letting an imbalanced dataset skew the conclusion.
5. **Think about fairness end to end**, from collection through final presentation — including explicitly telling stakeholders which fairness measures were applied, rather than applying them silently.

## Fairness done right

A team of Harvard data scientists building a mobile platform to track cardiovascular-disease risk in the US "Stroke Belt" treated fairness as a design priority from the start, and the project hits three of the five practices at once:

- They **teamed analysts with social scientists** who could speak to human bias and social context.
- They **collected self-reported data in a separate system**, specifically to avoid introducing racial bias into the results.
- They **oversampled non-dominant groups** so the sample population was actually representative.

The structural lesson: fairness was designed in at the start. None of those three are things you can retrofit onto a finished analysis.

## Data ethics

[Data ethics](/glossary#data-ethics) is the good and right way of using data. It asks more than "did we avoid harm":

- **Beneficence** — actively asking how this use of data improves people's lives, not merely minimizing damage.
- **Data are people** — the records describe human beings, who deserve privacy protection.
- **Real consent and control** — giving people genuine mechanisms over their own data, rather than collecting it and asking them to trust you.
