# JavaScript Practical Assessment: E-Commerce Product Catalog Merger and Reorganization

**Difficulty:** Intermediate\
**Technology:** Vanilla JavaScript\
**Topics:** Objects, arrays, custom functions, spread operator,
`concat()`, `splice()`, `slice()`, `findIndex()`, sorting, searching,
and shallow copying.

## 1. Problem Statement

You are developing a product catalog management module for an e-commerce
application. Products arrive in two category arrays. Your task is to
merge the catalogs, simulate duplicate batch uploads, remove selected
products, insert a promotional banner, create a featured list, locate
the banner, and create a separate price-sorted catalog.

Implement each operation as a custom-defined, reusable function. Do not
write all operations in one block.

## 2. Initial Data

Create two arrays, each containing two product objects. Every product
must have `sku`, `title`, `price`, and `rating`.

``` javascript
const categoryA = [
    { sku: "A101", title: "Wireless Mouse", price: 799, rating: 4.5 },
    { sku: "A102", title: "Mechanical Keyboard", price: 2499, rating: 4.8 }
];

const categoryB = [
    { sku: "B201", title: "USB-C Hub", price: 1499, rating: 4.2 },
    { sku: "B202", title: "Gaming Headset", price: 3299, rating: 4.7 }
];
```

## 3. Required Custom Functions

### Function 1: `mergeCatalogs(categoryA, categoryB)`

-   Combine the two arrays using the spread operator or `concat()`.
-   Simulate duplicate uploads by including both arrays twice.
-   Preserve this order: `categoryA`, `categoryB`, `categoryA`,
    `categoryB`.
-   Return the new array without modifying the source arrays.

The resulting `fullCatalog` must initially contain eight entries.

### Function 2: `removeBoundaryProducts(fullCatalog)`

-   Validate that the input is an array.
-   Remove the first and last entries using `splice()`.
-   Handle arrays with fewer than two entries appropriately.
-   Return the updated catalog.

**Constraint:** Use `splice()` for the removals, not `filter()` or
slicing.

### Function 3: `insertPromotionalBanner(fullCatalog, position, banner)`

-   Validate the insertion position and banner.
-   Insert the banner using `splice()`.
-   Preserve the order of existing entries.
-   Return the updated catalog.

Insert this object at index `2`:

``` javascript
{
    sku: "PROMO100",
    title: "Special Deal",
    price: 0,
    rating: 5.0
}
```

### Function 4: `createFeaturedItems(fullCatalog)`

-   Use `slice()` to create a new array containing the second, third,
    and fourth entries.
-   Return exactly three entries.
-   Do not remove or reorder entries in `fullCatalog`.

Remember that `slice(start, end)` includes `start` but excludes `end`;
the required indices are `1`, `2`, and `3`.

### Function 5: `findPromotionalBanner(fullCatalog, bannerSKU)`

-   Use `findIndex()` to locate the product whose `sku` matches
    `bannerSKU`.
-   Return its index.
-   Return `-1` if it does not exist.

Find the index of `"PROMO100"`.

### Function 6: `sortCatalogByPrice(catalog, order)`

-   Accept a catalog and `"ascending"` or `"descending"` order.
-   Sort by numeric `price`.
-   Return a sorted copy; do not mutate the original catalog.
-   Use `slice()` or the spread operator before `sort()`.

Keep the sorted copy separate from `fullCatalog`.

### Function 7: `displayCatalogResults(fullCatalog, featuredItems, bannerIndex)`

Display:

-   The final catalog.
-   The featured items.
-   The banner index.
-   The total catalog entry count.
-   The featured item count.

Use readable `console.log()` or `console.table()` output.

## 4. Required Execution Sequence

1.  Create `categoryA` and `categoryB`.
2.  Call `mergeCatalogs()` and store the result as `fullCatalog`.
3.  Call `removeBoundaryProducts()`.
4.  Create the promotional banner object.
5.  Call `insertPromotionalBanner()` to insert it at index `2`.
6.  Call `createFeaturedItems()`.
7.  Call `findPromotionalBanner()` to find `"PROMO100"`.
8.  Call `sortCatalogByPrice()` to create a separate ascending-price
    catalog.
9.  Call `displayCatalogResults()`.
10. Display the separately sorted catalog.

Calculate the featured items and banner index from the updated, unsorted
`fullCatalog`.

## 5. Expected Results

### Final `fullCatalog`

    Index SKU        Product title           Price
  ------- ---------- --------------------- -------
        0 A102       Mechanical Keyboard      2499
        1 B201       USB-C Hub                1499
        2 PROMO100   Special Deal                0
        3 B202       Gaming Headset           3299
        4 A101       Wireless Mouse            799
        5 A102       Mechanical Keyboard      2499
        6 B201       USB-C Hub                1499

### Expected `featuredItems`

  SKU        Product title      Price
  ---------- ---------------- -------
  B201       USB-C Hub           1499
  PROMO100   Special Deal           0
  B202       Gaming Headset      3299

### Expected index and counts

``` text
Promotional banner index: 2
Total catalog entries: 7
Total featured items: 3
```

### Expected ascending-price order

  SKU        Product title           Price
  ---------- --------------------- -------
  PROMO100   Special Deal                0
  A101       Wireless Mouse            799
  B201       USB-C Hub                1499
  B201       USB-C Hub                1499
  A102       Mechanical Keyboard      2499
  A102       Mechanical Keyboard      2499
  B202       Gaming Headset           3299

Either order is acceptable for products with equal prices.

## 6. Additional Constraints

1.  Use `const` and `let`; do not use `var`.
2.  Define every function separately.
3.  Use parameters rather than unnecessary global variables.
4.  Use spread or `concat()` for merging, `splice()` for required
    removal and insertion, `slice()` for featured items, and
    `findIndex()` for the banner search.
5.  Do not hardcode counts or the banner index.
6.  Preserve the original category arrays.
7.  Keep sorting separate from the final catalog.
8.  Include basic validation and readable output.
9.  Use vanilla JavaScript only.

## 7. Deliverables

Submit the complete JavaScript source code, all seven functions, calls
in the required sequence, console output for the final catalog and
sorted catalog, and a brief explanation of `splice()`, `slice()`,
`findIndex()`, spread/`concat()`, and `sort()`.

## 8. Evaluation Rubric

  Assessment area                             Marks
  --------------------------------------- ---------
  Initial catalog structures                     10
  Function design and parameters                 15
  Merging and duplicate batches                  15
  `splice()` removal and insertion               15
  `slice()` and featured items                   10
  `findIndex()` result                           10
  Sorting without mutating the original          10
  Validation, output, and code quality           15
  **Total**                                 **100**

**Interviewer tip:** Check whether the candidate understands that
`slice()` does not mutate the source array, `splice()` does, and sorting
should happen on a copy to preserve the required catalog order.
