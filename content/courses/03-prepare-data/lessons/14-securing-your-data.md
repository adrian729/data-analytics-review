---
id: 03-prepare-data/14-securing-your-data
courseId: 03-prepare-data
title: Securing Your Data
status: authored
summary: What data security covers beyond keeping people out, spreadsheet-level access control, and the encryption/tokenization tradeoff for protecting data at rest.
format: refresher
terms:
  - data-security
  - access-control
  - encryption
  - tokenization
revisits: []
topics:
  - data-quality
  - databases
sourceModules:
  - coursera:prepare-data-for-exploration#module-4-securing-data
---

**[Data security](/glossary#data-security)** is protecting data from unauthorized access or corruption by putting safety measures in place. That covers more than keeping other people out — it also means locking a worksheet down so a formula doesn't get broken by accident during collaboration.

## Access control in spreadsheets

**[Access control](/glossary#access-control)** — password protection, user permissions, and similar features — is what both major spreadsheet programs offer, with slightly different mechanics: Excel supports encrypting a file or worksheet with a password before it's shared; Google Sheets manages the same thing through its sharing settings, plus the option to make an editable copy so the original stays untouched. Both let you hide tabs, though a hidden tab can always be unhidden by anyone with access — hiding isn't the same guarantee as restricting access.

## Encryption and tokenization

Data analysts have to balance keeping data secure against the need to actually use it in a timely way. Two mechanisms make that balance more workable:

- **[Encryption](/glossary#encryption)** alters data using an algorithm, making it unusable to anyone without the "key" needed to reverse it. With the key, the data is fully usable in its original form.
- **[Tokenization](/glossary#tokenization)** replaces the data you want to protect with a randomly generated "token," while the real data is stored separately and mapped to that token. Even if the tokenized data is breached, the original stays safe in its separate location, since the token alone doesn't unlock it.

As a junior analyst you're unlikely to build either system yourself — that's usually a dedicated security team or a third-party specialist — but knowing which one an employer relies on tells you a lot about what's actually protected if something goes wrong.
