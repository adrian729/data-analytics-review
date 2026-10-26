# Metadata and Governance

## Metadata

**Metadata** describes data's meaning, origin, structure, and management. It helps people find, interpret, evaluate, and reuse data consistently.

### Types of Metadata

| Type | Purpose | Examples |
|---|---|---|
| **Descriptive** | Identifies and describes a resource so people can discover and understand it. | Title, description, author, subject tags, geographic and time coverage. |
| **Structural** | Describes how components are organized and related. | Tables, columns, relationships, worksheet organization, or the order of pages in a document. |
| **Administrative** | Supports managing, accessing, and preserving a resource. | File format, creation and modification dates, access permissions, usage rights, and retention information. |

These categories can overlap; technical and preservation metadata may also be treated as separate categories.

Metadata appears in digital and physical resources: a photo can record its camera and location; an email has sender and timestamp fields; a book has an author, publisher, and publication date.

### Metadata for Analysis

Before using or combining datasets, check:

- **Meaning and structure:** Field definitions, data types, units, codes, identifiers, and what each row represents.
- **Origin and collection:** Who collected the data, why, and with which methods.
- **Coverage and currency:** Population, locations, dates covered, collection dates, and update frequency.
- **History and quality:** Versions, transformations, missing values, known limitations, and validation checks.
- **Access and reuse:** Who maintains the data, how to contact them, permissions, licensing, and restrictions.

For example, a sales dataset needs metadata stating whether revenue includes tax, which currency it uses, and whether each row represents an order or an item. Those definitions determine which totals and comparisons are meaningful.

Use metadata to assess [[Data Collection and Quality#Evaluating Data Sources|source quality]] and compatibility, then check that the actual data matches its documentation. Keep metadata updated as data changes.

### Repositories, Catalogs, and Dictionaries

- **Metadata repository:** A central store for metadata about data assets, including their structure, location, ownership, and history.
- **Data catalog:** A searchable inventory that helps people discover datasets and understand their context and access requirements.
- **Data dictionary:** Field-level documentation of names, meanings, types, units, codes, and constraints.

These can work together: a catalog can expose metadata from a repository and link to each dataset's dictionary. Shared definitions reduce repeated investigation and help teams compare and combine data consistently.

## Data Governance

**Data governance** establishes decision-making authority, responsibilities, policies, and standards for managing and using an organization's data.

It covers:

- **Accountability:** Who approves access and changes, maintains definitions, and resolves data issues.
- **Quality and consistency:** Shared definitions, documentation standards, and checks.
- **Protection and appropriate use:** Access controls, privacy, security, and permitted uses.
- **Life-cycle rules:** Collection, storage, sharing, retention, and disposal.

Governance sets expectations and accountability; data management puts them into practice. Analysts follow those rules, maintain documentation, and flag quality or access problems to the responsible people.

See [[Data Workflows#Data Life Cycle|Data Life Cycle]] and [[Data Ethics and Privacy]].

---

[[Data Analysis|Back to overview]]
