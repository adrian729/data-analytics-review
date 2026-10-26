# Data Types and Structures

## Data Types

A **data type** specifies the kind of value a field or cell holds. Stored types guide software operations; statistical classifications describe what the values mean.

See [[Spreadsheets#Cell Values and Formatting|Cell Values and Formatting]] for spreadsheet values, date storage, and display formats.

### Statistical Classifications

Quantitative variables can be discrete or continuous; categorical variables can be nominal or ordinal.

#### Quantitative and Qualitative Data

- **Quantitative data:** Numerical counts or measurements of amounts.
- **Qualitative data:** Categories or descriptions of qualities and characteristics, such as product categories or interview responses.

#### Discrete and Continuous Data

- **Discrete:** Quantitative data with a finite or countably infinite set of possible values. Examples include visitor counts (0, 1, 2, …) and scores awarded in half-point steps.
- **Continuous:** Quantitative data modeled as taking any value within an interval, such as height, elapsed time, or temperature. Recorded values reflect the precision of the measuring instrument.

#### Nominal and Ordinal Data

- **Nominal:** Categories with no inherent order, such as blood groups.
- **Ordinal:** Categories with a meaningful order, such as low, medium, and high. Their values express rank rather than a defined numerical distance.

Categories can be encoded with numbers: for example, 1, 2, and 3 can label low, medium, and high.

## Data Organization

### Structured and Unstructured Data

- **Structured:** Data organized according to a predefined schema, such as a table with consistently defined columns.
- **Unstructured:** Data without a predefined tabular schema, such as free text, audio, or video. It may still have internal organization or metadata.

A database can store files alongside structured records and metadata describing their contents.

### Unstructured Data Examples

- **Audio file:** Digitally stored sound.
- **Digital photo:** A digital image made up of pixels; a **pixel** is an individual picture element.
- **Video file:** A sequence of images, often accompanied by audio.
- **Social media:** Platforms for sharing content and interacting; posts may combine text, images, audio, and video.

## Data Tables

- **Record:** A row of related values describing one item, event, or case.
- **Field:** A named attribute, usually represented by a column.
- **Attribute:** A characteristic being recorded, such as age.
- **Observation:** One unit of data at the chosen level of detail, often represented by a row.

Rows share a common set of fields, with each field describing a consistent kind of information. Missing values leave gaps in individual records.

### Sorting and Filtering

- **Sorting:** Arranging data in a meaningful order, such as alphabetically, chronologically, or from lowest to highest value, to make patterns and comparisons easier to examine.
- **Filtering:** Selecting data that meets specified conditions. In a table view, non-matching rows are hidden; in a query, they are excluded from the returned result. The source records remain intact.

For example, filter orders to one region, then sort them by date. Multiple sort keys establish priorities: sorting by region and then date orders records chronologically within each region.

See [[Spreadsheets#Sorting and Filtering|Sorting and Filtering in Spreadsheets]] for practical steps.

## Wide and Long Data

These formats arrange the same measurements differently. Choose the layout that suits the question and the tool.

- **Wide:** Repeated measurements are spread across columns, often with one row per subject. Convenient for side-by-side comparisons.
- **Long:** Repeated observations for a subject occupy separate rows. Identifier columns specify the subject and context, such as time, condition, or measurement type; value columns hold the measurements. Useful for grouping, filtering, and plotting.

**Wide example**

| Subject | Sales 2024 | Sales 2025 |
|---|---|---|
| A | 10 | 12 |
| B | 8 | 9 |

**The same data in long format**

| Subject | Year | Sales |
|---|---|---|
| A | 2024 | 10 |
| A | 2025 | 12 |
| B | 2024 | 8 |
| B | 2025 | 9 |

See [[Data Collection and Quality#Data Transformation|Data Transformation]] for changing the layout.

## Delimited Text Files

**CSV (comma-separated values)** is a plain-text format for tabular data. Records contain fields separated by commas, usually with an optional header row naming the columns.

Some applications also call semicolon-separated files CSV, often because of locale settings. **TSV** uses tabs. Check the actual delimiter when importing.

In comma-delimited CSV, quote a field containing a comma, line break, or double quote; represent an embedded double quote by doubling it:

```csv
customer_id,name,city
001,"Lee, Sam",Berlin
002,"Jo ""JJ"" Kim",Madrid
```

CSV stores values rather than workbook features such as multiple sheets, formulas, formatting, or validation rules. Data types and meaning need accompanying documentation. At import, specify encoding, delimiters, dates, and identifier types to preserve values such as leading zeros.

See [[Spreadsheets#Importing Data|Importing Data]] for practical import methods.

## Relational Databases

A **relational database** organizes data into tables that can be connected through matching key values.

### Primary and Foreign Keys

- **Primary key (PK):** A column or group of columns that uniquely identifies each row. Its values must be unique and non-null. A table can have at most one primary key; when it spans multiple columns, their combination is unique.
- **Foreign key (FK):** A column or group of columns that references a primary key or another unique key in a table. A foreign key constraint ensures that non-null references match an existing record.

For example, `Customers.customer_id` identifies each customer. `Orders.order_id` identifies each order, while `Orders.customer_id` is a foreign key linking the order to its customer. Several orders can reference the same customer.

See [[Data Foundations#Query Languages|Query Languages]] for working with relational databases using SQL.

## Data Modeling

- **Data element:** An individual item of information, such as a name, account number, or address.
- **Entity:** A thing the data describes, such as a customer or an order.
- **Data model:** A representation of data elements and their relationships that helps people understand the structure consistently.
- **Data modeling:** Creating those representations, often as diagrams.

For example, a model can show that a **Customer** places an **Order**, with attributes describing each.

### Levels of Detail

| Level | Focus |
|---|---|
| **Conceptual** | The big picture: important business concepts and their relationships, without implementation details. |
| **Logical** | Entities, attributes, relationships, and identifiers, without committing to a specific database implementation. |
| **Physical** | Implementation in a particular database: tables, columns, data types, and constraints. |

### Diagrams and Documentation

- **Entity Relationship Diagram (ERD):** Shows entities, their attributes, and relationships.
- **UML class diagram:** Shows classes, attributes, operations, and relationships; useful for modeling a system's structure.
- **Data dictionary:** Documents tables and fields, including their meanings and data types; may also record constraints and relationships. See [[Metadata and Governance#Repositories, Catalogs, and Dictionaries|metadata documentation]].

Diagrams show how things connect; a data dictionary explains the details of the fields.

See [[Data Foundations]] for basic concepts and [[Spreadsheets]] for working with tabular data.

---

[[Data Analysis|Back to overview]]
