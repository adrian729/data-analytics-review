# Data Ethics and Privacy

**Ethics** concerns principles of right and wrong behavior, including rights, responsibilities, fairness, and effects on others.

**Data ethics** provides principles for collecting, processing, sharing, and using data responsibly, with attention to people's rights and the effects on them.

## Ethical Principles

| Aspect | Meaning |
|---|---|
| **Ownership** | Respecting people's control over how the data they provide is used, processed, and shared. |
| **Transaction transparency** | Explaining how data is processed, shared, and used in decisions in terms people can understand. |
| **Consent** | A person's informed, freely given, specific, and clear agreement to the stated use of their data. |
| **Currency (financial value)** | Making the financial value and commercial uses of personal data visible, including who benefits and what choices people have. |
| **Privacy** | Respecting appropriate boundaries around the collection, access, use, and sharing of personal information. |
| **Openness** | Supporting access and reuse under clear terms, while protecting personal information. |

See [[Data Collection and Quality#Fairness and Data Collection|Fairness]] for avoiding harm from biased analysis, and [[Data Foundations#Data and Datasets|Open data]] for reuse permissions.

## Personal Data

**Personal data** is information relating to an identified or identifiable person. Identifying information, often called **personally identifiable information (PII)**, can reveal identity on its own or in combination with other data.

Examples include names, phone numbers, email addresses, account numbers, government identifiers, licence plates, IP addresses, and photographs. Demographic or location details can also identify someone when combined.

Health and financial records need particular care because disclosure can expose private conditions or activities.

## Protecting Identity

- **De-identification:** Removing or altering identifying information to reduce the risk of linking data to a person.
- **Pseudonymization:** Replacing identifying information with codes, with additional information kept separately that can reconnect records to individuals.
- **Anonymization:** Transforming data so individuals are no longer identifiable using means reasonably likely to be available.

### Identity-Protection Techniques

| Technique | What it does |
|---|---|
| **Blanking or removal** | Deletes selected identifying values or fields. |
| **Masking** | Hides or replaces some characters or values, such as showing only the last four digits of an account number. |
| **Hashing** | Computes a fixed-length value from an input; used in pseudonymization with safeguards against guessing or linking the original values. |
| **Code replacement** | Substitutes identifiers with reference codes; a separately protected mapping can reconnect them to the original identities. |
| **Generalization** | Replaces precise values with broader categories, such as age bands. |
| **Aggregation** | Combines individual records into summaries, such as counts by region. |

Assess protection across the whole dataset, including combinations of fields and links to other sources. Effective anonymization depends on the remaining risk of identifying individuals.

### The Analyst's Role

- Recognize identifying information and flag data requiring protection.
- Follow the organization's approved privacy procedures and assigned responsibilities.
- Use appropriately protected data for analysis, including testing and development copies.

Organizations are responsible for protecting personal information; specialist teams may design and implement the protection measures.

## GDPR

The **General Data Protection Regulation (GDPR)** is the EU regulation governing the processing of personal data. It sets responsibilities for organizations and rights for individuals, including access, correction, and erasure under specified conditions.

Its protections also cover pseudonymized data that can still be linked to individuals.

When processing relies on consent, people must receive clear information and be able to withdraw it. Consent is one of several lawful grounds for processing personal data.

---

[[Data Analysis|Back to overview]]
