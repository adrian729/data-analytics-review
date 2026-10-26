# Data Foundations

## Data and Datasets

- **Data:** Facts collected for reference or analysis.
- **Dataset:** A collection of data treated as a single unit for manipulation or analysis.
- **Database:** A collection of data stored in a computer system.
- **Cloud:** Online storage and computing resources accessed over a network, rather than relying only on your computer's local storage.
- **Open data:** Data available under an open license or public-domain status that permits anyone to access, use, modify, and share it.

### Big and Small Data

- **Small data:** Focused, manageable datasets used to answer specific questions, often supporting everyday decisions or short reporting periods.
- **Big data:** Datasets whose volume, speed of arrival, variety, or variability calls for scalable methods of storage, processing, and analysis. They can support broad or complex business questions.

See [[Data Types and Structures]] for data types, table layouts, and modeling.

## Fields and Roles

### Fields

- **Data analytics:** The field of using data, analytical methods, and tools to produce insights and support decisions.
- **Data science:** A field that uses raw data to develop new models and ways to understand what is not yet known.

### Roles

- **Data analyst:** A person who collects, transforms, and organizes data to draw conclusions, make predictions, and inform decisions.
- **Data scientist:** A person who uses statistical and computational methods to investigate data and develop models.
- **Data engineer:** A person who builds and maintains systems and pipelines for collecting, storing, and preparing data.

## Data Ecosystem and Stakeholders

- **Data ecosystem:** Interacting elements that support producing, managing, storing, organizing, analyzing, and sharing data.
- **Data interoperability:** The ability of systems and services to exchange data and use it meaningfully through compatible formats, shared definitions, and standards.
- **Kaggle:** A data science platform and community for finding datasets, running analyses in cloud notebooks, learning, and sharing projects. See [[Data Resources]] for dataset sources.

See [[Project Planning#Stakeholders|Stakeholders]] for the people involved in or affected by a project.

## Decision-Making

- **Data-driven decision-making:** Using factual evidence to guide business strategy.
- **Data-inspired decision-making:** Exploring different data sources to discover shared patterns or connections that can inform decisions.
- **Business task:** The business question or problem that an analysis aims to resolve.

## Measurement: Metrics and Goals

- **Metric:** A quantifiable measure used to track or assess something. Metrics may be direct counts or calculated values.
- **Metric goal:** A measurable target that a company sets and evaluates using one or more metrics.

### Examples of Metrics

**Voluntary turnover rate** measures employees' voluntary departures relative to workforce size over a defined period.

**Revenue** is income generated from sales. For a single product sold at a fixed price:

$$
\text{Revenue} = \text{Units sold} \times \text{Price per unit}
$$

**Return on investment (ROI)** measures the return relative to the cost of an investment:

$$
\text{ROI (\%)} = \frac{\text{Net profit from the investment}}{\text{Investment cost}} \times 100
$$

Here, net profit is the gain from the investment after subtracting its cost.

## Query Languages

- **Query:** A request for data or information from a database.
- **Query language:** A programming language used to communicate with a database, including requesting and manipulating data.

**SQL** stands for **Structured Query Language**. Use it to retrieve, filter, combine, and summarize data stored in relational databases.

### Boolean Logic

Boolean logic combines conditions that evaluate to true or false.

| Operator | Result is true when… |
|---|---|
| **AND** | Both conditions are true. |
| **OR** | At least one condition is true, including when both are true. |
| **NOT** | The condition it reverses is false. |

For example, `(is_grey OR is_pink) AND is_waterproof` selects waterproof items that are grey, pink, or both. Use parentheses to make grouping explicit.

In database searches, AND combines requirements, OR includes alternatives, and NOT excludes matches. Syntax varies by tool.

See [[Data Collection and Quality]] for collection, sampling, data quality, and fairness.

---

[[Data Analysis|Back to overview]]
