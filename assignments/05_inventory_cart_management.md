# JavaScript Practical Assessment: Complex Inventory & Shopping Cart Management System

**Difficulty:** Intermediate\
**Technology:** Vanilla JavaScript\
**Topics:** Objects, arrays, nested data structures, custom functions,
`push()`, `find()`, `includes()`, `reduce()`, conditional logic, stock
management, and checkout calculations.

## 1. Problem Statement

You are developing an inventory and shopping cart module for an
e-commerce website. The application stores products, prices, stock
levels, and category tags. Customers can add products to a cart,
inventory must reflect purchased quantities, promotional tags can be
updated, and the system must determine whether the customer's balance
covers the cart total.

Create a `storeCatalog` array, an empty `shoppingCart` array, and a
`userBalance` variable. Implement each operation as a separate
custom-defined function.

## 2. Initial Data Structure

Create three product objects:

``` javascript
const storeCatalog = [
    {
        id: 101,
        name: "Wireless Mouse",
        price: 25,
        stock: 10,
        tags: ["electronics", "accessories"]
    },
    {
        id: 102,
        name: "Mechanical Keyboard",
        price: 60,
        stock: 5,
        tags: ["electronics", "gaming"]
    },
    {
        id: 103,
        name: "USB-C Hub",
        price: 35,
        stock: 8,
        tags: ["electronics", "connectivity"]
    }
];
```

Each product has:

-   `id`: unique numeric identifier.
-   `name`: product name.
-   `price`: unit price.
-   `stock`: available quantity.
-   `tags`: an array of category or promotional strings.

Initialize the cart and balance:

``` javascript
const shoppingCart = [];
let userBalance = 150;
```

Each cart item must be an object with `productId` and `quantity`.

## 3. Required Custom Functions

### Function 1: `addToCart(shoppingCart, storeCatalog, productId, quantity)`

-   Validate that `quantity` is a positive integer.
-   Find the product in the catalog.
-   Check whether the requested quantity is available.
-   If valid, append `{ productId, quantity }` using `push()`.
-   Return a success indicator or meaningful error result.

Add these items in order:

``` javascript
addToCart(shoppingCart, storeCatalog, 101, 2);
addToCart(shoppingCart, storeCatalog, 102, 1);
```

The cart should contain two Wireless Mice and one Mechanical Keyboard.

For this exercise, each product is added once; combining repeated
requests for the same product is not required.

### Function 2: `updateInventoryStock(storeCatalog, shoppingCart)`

-   Iterate over cart items.
-   Find each corresponding product using `productId`.
-   Verify that the product exists and stock is sufficient.
-   Deduct the requested quantity from `stock`.
-   Never allow stock to become negative.
-   Return a success indicator or meaningful error result.

Validate all cart items before modifying any stock so that an invalid
item does not leave the inventory partially updated. Inventory must be
deducted only once for a successful checkout.

### Function 3: `addProductTag(storeCatalog, productId, newTag)`

-   Find the product using its ID.
-   Check whether the tag already exists.
-   If it does not exist, add it using `push()`.
-   Avoid duplicate tags.
-   Return a success indicator or updated product.

Add `"discounted"` to product ID `101`.

The tags for the first product should become:

``` javascript
["electronics", "accessories", "discounted"]
```

### Function 4: `calculateCartTotal(shoppingCart, storeCatalog)`

-   Iterate through cart items.
-   Find the corresponding product and retrieve its unit price.
-   Multiply price by quantity.
-   Sum all subtotals using `reduce()` or a loop.
-   Return the total.
-   Handle missing product IDs appropriately.

Expected calculation:

-   Wireless Mouse: `25 × 2 = 50`
-   Mechanical Keyboard: `60 × 1 = 60`

Expected cart total: `110`.

### Function 5: `checkBalanceSufficiency(userBalance, cartTotal)`

-   Compare the balance with the total.
-   Return `true` if the balance is greater than or equal to the total;
    otherwise return `false`.
-   Do not hardcode the total or balance.
-   Display a meaningful checkout message.

For a balance of `150` and total of `110`, the result should be `true`.

### Function 6: `displayCheckoutSummary(storeCatalog, shoppingCart, userBalance, cartTotal, isBalanceSufficient)`

Display the cart, updated inventory, first product's tags, total cost,
customer balance, and balance sufficiency result.

Use readable `console.log()` or `console.table()` output.

## 4. Required Execution Sequence

1.  Initialize `storeCatalog`, `shoppingCart`, and `userBalance`.
2.  Call `addToCart()` to add two Wireless Mice and one Mechanical
    Keyboard.
3.  Call `updateInventoryStock()` to deduct quantities from inventory.
4.  Call `addProductTag()` to add `"discounted"` to product ID `101`.
5.  Call `calculateCartTotal()` and store the result in `cartTotal`.
6.  Call `checkBalanceSufficiency()` and store the result in
    `isBalanceSufficient`.
7.  Call `displayCheckoutSummary()`.

Inventory must be updated only once. In a real checkout system,
inventory reservation and payment confirmation would need coordination;
this exercise assumes the cart represents the intended purchase.

## 5. Expected Results

### Final shopping cart

``` javascript
[
    { productId: 101, quantity: 2 },
    { productId: 102, quantity: 1 }
]
```

### Final inventory

    Product ID Product name            Price   Remaining stock
  ------------ --------------------- ------- -----------------
           101 Wireless Mouse             25                 8
           102 Mechanical Keyboard        60                 4
           103 USB-C Hub                  35                 8

### Updated tags

``` javascript
["electronics", "accessories", "discounted"]
```

### Cart total and balance check

``` text
Cart total: 110
User balance: 150
Sufficient balance: true
```

The console output should display the cart, updated inventory, updated
tags, total, balance, and sufficiency result.

## 6. Additional Constraints

1.  Use `const` and `let`; do not use `var`.
2.  Define each function separately.
3.  Pass arrays and values as parameters.
4.  Use `push()` for cart items and tags.
5.  Use an array search method such as `find()` to locate products.
6.  Use `reduce()` or a loop to calculate the cart total.
7.  Prevent duplicate tags and negative stock.
8.  Do not hardcode totals or final stock values.
9.  Handle missing products and invalid quantities.
10. Use plain JavaScript without external libraries.

## 7. Deliverables

Submit the complete JavaScript source code, all six functions, calls in
the prescribed order, and console output showing the cart, inventory,
total, and balance sufficiency. Include a short explanation of `push()`,
`find()`, `reduce()`, and conditional validation.

## 8. Evaluation Rubric

  Assessment area                                Marks
  ------------------------------------------ ---------
  Initial catalog and cart structures               10
  Function design and parameters                    15
  Cart additions and product lookup                 15
  Inventory updates and validation                  20
  Tag insertion and duplicate prevention            10
  Cart total calculation                            15
  Balance sufficiency check                          5
  Output, error handling, and code quality          10
  **Total**                                    **100**

**Interviewer tip:** Check whether the candidate distinguishes adding
items to a cart from deducting inventory. A strong candidate validates
all cart items before making stock changes, looks up prices dynamically,
and calculates totals rather than hardcoding them.
