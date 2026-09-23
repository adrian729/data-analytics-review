---
id: 03-prepare-data/07-data-ethics-and-privacy
courseId: 03-prepare-data
title: Data Ethics and Privacy
status: authored
summary: The six aspects of data ethics — ownership, transparency, consent, currency, privacy, and openness — plus what anonymizing personally identifiable information actually involves.
format: refresher
terms:
  - ownership
  - transaction-transparency
  - consent
  - currency
  - data-privacy
  - gdpr
  - data-anonymization
  - personally-identifiable-information
  - de-identification
revisits:
  - termId: data-ethics
    note: Course 1 defined data ethics through the fair-analysis lens (beneficence, consent, data-as-people). This lesson supplies the six named aspects the field breaks it into.
topics:
  - ethics-fairness
sourceModules:
  - coursera:prepare-data-for-exploration#module-2-data-ethics-and-privacy
---

[Data ethics](/glossary#data-ethics) breaks down into six named aspects. The first four apply mostly to how data is collected and used; the last two — privacy and openness — get more room below and in the next lesson.

## Four aspects of data ethics

- **[Ownership](/glossary#ownership)** — individuals own the raw data they provide. The organization that stores, processes, and analyzes it doesn't own it; the person it describes retains primary control over how it's used and shared.
- **[Transaction transparency](/glossary#transaction-transparency)** — all data-processing activities and algorithms should be explainable and understood by the person who provided the data. This is a direct response to [data bias](/glossary#data-bias): transparency is what lets people judge whether an outcome is fair and raise concerns if it isn't.
- **[Consent](/glossary#consent)** — an individual's right to know how and why their data will be used before they agree to provide it. In practice, consent often collapses into a terms-and-conditions checkbox few people read in full — which doesn't make the underlying right optional. Real consent matters most for protecting marginalized groups from being disproportionately targeted by biased data.
- **[Currency](/glossary#currency)** — individuals should be aware of any financial transactions that result from the use of their personal data, and the scale of those transactions, with the ability to opt out.

Governments have started legislating around these obligations — the EU's **[GDPR](/glossary#gdpr)** is the best-known example of a policy body built specifically to protect people and their data.

## Data privacy

**[Data privacy](/glossary#data-privacy)** (also called information privacy) is preserving a data subject's information and activity every time a data transaction occurs — covering the access, use, and collection of data, plus a person's legal rights to it: protection from unauthorized access, freedom from inappropriate use, the right to inspect and correct it, the ability to consent to (or refuse) its use, and the legal right to access it. For a company, honoring privacy is what makes people willing to trust it with their data in the first place.

## Anonymizing personal data

**[Personally identifiable information](/glossary#personally-identifiable-information)** (PII) is any data that can identify a specific person, alone or combined with other data — names, phone numbers, addresses, social security numbers, IP addresses, medical records. **[Data anonymization](/glossary#data-anonymization)** protects it by blanking, hashing, or masking it, often replacing a column's real values with fixed-length codes.

As a junior analyst you're rarely responsible for anonymizing data yourself — the organization that collects it generally handles that — though you might have to anonymize a working copy yourself for testing or development. Healthcare and financial data go furthest, typically going through **[de-identification](/glossary#de-identification)**: a process that strips out all personally identifying information entirely, rather than just masking it.
