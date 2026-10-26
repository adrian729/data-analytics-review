# Spreadsheets

Spreadsheets organize data in rows and columns. Use them to enter, clean, calculate, analyze, and chart data, especially when the dataset is manageable enough to work with directly.

Examples: **Microsoft Excel** and **Google Sheets**.

## Sheets, Cells, and Ranges

- **Workbook:** An Excel file containing one or more worksheets; a Google Sheets spreadsheet similarly contains sheets (tabs).
- **Worksheet (sheet):** A grid of numbered rows and lettered columns.
- **Cell:** The intersection of a row and column, identified by an address such as `B2`.
- **Header:** A label identifying a column's contents, usually in the first row.
- **Range:** A group of cells, such as `A1:A5` or `A1:C5`.
- **Cell reference:** An address used to refer to a cell or range in a formula.

## Cell Values and Formatting

- **Number:** A value used in calculations.
- **Text (string):** A sequence of characters, such as a name or product code. Store identifiers as text when leading zeros matter.
- **Boolean:** One of two logical values: `TRUE` or `FALSE`.

Excel and Google Sheets store recognized dates and times as numbers: whole days and fractions of a day. Date/time formatting controls how they appear.

**Number formatting** controls display, including decimal places, currency, and percentages. For example, `0.25` displays as `25%`. Calculations use the stored value, even when fewer decimals are displayed.

- **Borders:** Lines around cells that visually separate information.
- **Conditional formatting:** Rules that change appearance based on values, such as highlighting overdue dates.
- **Data validation:** Rules for accepted inputs, such as a dropdown of categories or a permitted number range; invalid entries can be rejected or flagged.

See [[Data Types and Structures#Statistical Classifications|Statistical Classifications]] for what values mean in an analysis.

## Organizing Data for Analysis

Use one header row, consistent columns, and one record per row at the intended level of detail. Keep merged cells, subtotals, and blank separator rows outside the source table.

Keep missing values distinct from zero, use consistent units and date formats, and preserve a copy of the original data. **Freeze** header rows to keep labels visible while scrolling.

## Formulas and References

A **formula** performs a calculation using values, references, operators, or functions. It starts with `=`, for example `=A2+B2`. A **function** is a predefined operation within a formula, such as `=SUM(A2:A10)`; its inputs are called **arguments**.

| Reference | Behavior when copied |
|---|---|
| **Relative:** `A2` | Row and column adjust to the new position. |
| **Absolute:** `$A$2` | Row and column remain fixed. |
| **Mixed:** `$A2` or `A$2` | Only the part preceded by `$` remains fixed. |

For example, copying `=B2*$F$1` down one row produces `=B3*$F$1`: the quantity changes row, while the fixed rate stays in F1.

The **fill handle**, at a selection's lower-right corner, copies formulas or extends a series. **Paste values only** keeps calculated results without their formulas.

### Operators and Calculation Order

- **Math expression:** Values and operators describing a calculation, such as `2 + 3`.
- **Equation:** A statement that two expressions are equal, such as `2 + 3 = 5`.
- **Operators:** `+`, `-`, `*`, `/`, and `^` perform arithmetic; comparisons such as `>`, `=`, and `<>` return true or false.
- **Math function:** A predefined function for a mathematical calculation, such as SUM or ROUND.

Use parentheses to make calculation order explicit. For ordinary arithmetic, evaluate parentheses, powers, multiplication/division, then addition/subtraction; operations of equal precedence proceed left to right. Thus, `=2+3*4` returns **14**, while `=(2+3)*4` returns **20**.

## Common Functions

| Function | Purpose | Example |
|---|---|---|
| **SUM** | Adds numeric values. | `=SUM(B2:B10)` |
| **AVERAGE** | Calculates the arithmetic mean. | `=AVERAGE(B2:B10)` |
| **COUNT** | Counts cells containing numbers. | `=COUNT(B2:B10)` |
| **COUNTA** | Counts non-empty cells, including text. | `=COUNTA(A2:A10)` |
| **MIN / MAX** | Returns the smallest / largest number. | `=MAX(B2:B10)` |
| **COUNTIF** | Counts cells meeting one condition. | `=COUNTIF(B2:B10,">10")` |
| **SUMIF** | Adds values whose corresponding cells meet a condition. | `=SUMIF(A2:A10,"East",B2:B10)` |
| **IF** | Returns one result when a condition is true and another when false. | `=IF(B2>=10,"Met","Below")` |
| **ROUND** | Rounds a number to a chosen decimal precision. | `=ROUND(B2,2)` |
| **TRIM** | Removes leading/trailing ordinary spaces and reduces repeated spaces between words. | `=TRIM(A2)` |

AVERAGE ignores empty cells but includes zeros. COUNTA also counts formulas returning an empty string (`""`). Examples use English function names and commas; locale settings may change names or separators.

## Sorting and Filtering

See [[Data Types and Structures#Sorting and Filtering|Sorting and Filtering]] for the general concepts. The steps below use **Google Sheets on a computer**.

### Sorting a Table

1. Select the full table, including its headers and all related columns, so row values stay together.
2. Open **Data → Sort range → Advanced range sorting options** and enable **Data has header row**.
3. Choose the column and ascending or descending order. Use **Add another sort column** for secondary ordering, then apply the sort.

For example, sort by Region A–Z, then Sales Z–A to show the largest sales first within each region.

### Filtering a Table

1. Select the table, including its headers, and choose **Data → Create a filter**.
2. Open a column's filter control. Select allowed values or a condition, such as sales greater than 100.
3. Apply additional column filters as needed; rows must satisfy all active column filters. Use **Data → Remove filter** to show all rows again.

A regular filter affects the shared sheet. For your own saved sorting and filtering, use **Data → Create filter view**, configure it, and save a named view.

See [[Data Foundations#Boolean Logic|Boolean Logic]] for combining conditions.

## Pivot Tables and Charts

A **pivot table** groups source data and calculates summaries, such as counts, totals, or averages.

- **Rows and columns:** Define the groups.
- **Values:** Define the measurements and summary calculations.
- **Filters:** Limit which records contribute.

For example, set **Rows = Region**, **Columns = Month**, and **Values = SUM of Sales** to compare regional monthly sales. Check that the source range includes all records and that the summary calculation fits the question.

A **pivot chart** visualizes a pivot table's summary. Other spreadsheet charts can use selected cell ranges directly.

## Importing Data

- **Static import:** Loads a snapshot, such as uploading a CSV file. Later source changes require a new import.
- **Dynamic import:** Uses a linked source that can refresh. Updates may be delayed and depend on permissions, connectivity, and the tool's refresh behavior.

### Google Sheets Import Functions

In these examples, **A1 contains the source URL**. Enter the formula in an empty area with space for the returned rows and columns.

| Function | Source | Example |
|---|---|---|
| **IMPORTRANGE** | A range in another Google Sheets spreadsheet. | `=IMPORTRANGE(A1,"Sales!A1:F100")` |
| **IMPORTHTML** | An HTML table or list on a web page. | `=IMPORTHTML(A1,"table",1)` |
| **IMPORTDATA** | A CSV or TSV file available at a URL. | `=IMPORTDATA(A1)` |

For IMPORTRANGE, you need access to the source and must connect the spreadsheets using **Allow access** when prompted. An initial `#REF!` can indicate that this connection needs approval. Only connect a source when its data is appropriate for the destination's editors.

IMPORTHTML's final argument selects the table or list, counting from 1; it reads HTML structures, so a visually displayed table generated by JavaScript may not be available.

For recurring imports, keep source ranges manageable, avoid long chains of linked sheets, and check refresh failures or changed source columns. Preserve a dated snapshot when you need reproducible results.

For file imports, check the delimiter, encoding, dates, decimal separators, and identifiers in the preview. See [[Data Types and Structures#Delimited Text Files|Delimited Text Files]].

## Checking Errors

| Error | Common cause |
|---|---|
| `#DIV/0!` | Dividing by zero or an empty denominator. |
| `#VALUE!` | An input has an unsuitable type or value. |
| `#REF!` | A reference is invalid, often after deleting cells. |
| `#NAME?` | An unrecognized function or name, or missing quotation marks around text. |
| `#N/A` | A requested value is unavailable, often because a lookup found no match. |

Check inputs, references, and formula syntax before using `IFERROR(formula, fallback)` to display an alternative result. Check a few calculations manually and compare totals with the source.

See [[Data Types and Structures#Data Tables|Data Tables]] for attributes and observations, and [[Communicating Results]] for dashboards and reports.

---

[[Data Analysis|Back to overview]]
