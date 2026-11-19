// CHANGE HIGHLIGHTS: Replaced direct cart edits and extra checkout helpers
// with the six functions specified by the problem; added quantity/tag checks,
// atomic stock validation, calculated totals, and the complete summary.

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

const shoppingCart = [];
const userBalance = 150;

function addToCart(cart, catalog, productId, quantity) {
    if (!Array.isArray(cart) || !Array.isArray(catalog)) {
        return { success: false, message: "Cart and catalog must be arrays." };
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        return { success: false, message: "Quantity must be a positive integer." };
    }

    const product = catalog.find(item => item.id === productId);
    if (!product) {
        return { success: false, message: `Product ${productId} was not found.` };
    }
    if (!Number.isInteger(product.stock) || product.stock < quantity) {
        return { success: false, message: `Not enough stock for ${product.name}.` };
    }

    cart.push({ productId, quantity });
    return { success: true, message: `${quantity} ${product.name}(s) added to cart.` };
}

// CHANGE: Check every line, including duplicate product IDs, before any stock changes.
function updateInventoryStock(catalog, cart) {
    if (!Array.isArray(catalog) || !Array.isArray(cart)) {
        return { success: false, message: "Catalog and cart must be arrays." };
    }

    const quantitiesByProduct = new Map();
    for (const cartItem of cart) {
        if (
            !cartItem
            || !Number.isInteger(cartItem.productId)
            || !Number.isInteger(cartItem.quantity)
            || cartItem.quantity <= 0
        ) {
            return { success: false, message: "The cart contains an invalid item." };
        }

        const product = catalog.find(item => item.id === cartItem.productId);
        if (!product) {
            return { success: false, message: `Product ${cartItem.productId} was not found.` };
        }

        if (!Number.isInteger(product.stock) || product.stock < 0) {
            return { success: false, message: `Stock data for ${product.name} is invalid.` };
        }

        const requiredQuantity = (quantitiesByProduct.get(cartItem.productId) || 0) + cartItem.quantity;
        if (product.stock < requiredQuantity) {
            return { success: false, message: `Not enough stock for ${product.name}.` };
        }
        quantitiesByProduct.set(cartItem.productId, requiredQuantity);
    }

    for (const [productId, quantity] of quantitiesByProduct) {
        const product = catalog.find(item => item.id === productId);
        product.stock -= quantity;
    }
    return { success: true, message: "Inventory updated successfully." };
}

function addProductTag(catalog, productId, newTag) {
    if (!Array.isArray(catalog) || typeof newTag !== "string" || !newTag.trim()) {
        return { success: false, message: "Provide a catalog and a non-empty tag." };
    }

    const product = catalog.find(item => item.id === productId);
    if (!product) {
        return { success: false, message: `Product ${productId} was not found.` };
    }
    if (!Array.isArray(product.tags)) {
        return { success: false, message: `${product.name} does not have a valid tag list.` };
    }
    if (!product.tags.includes(newTag)) {
        product.tags.push(newTag);
    }
    return { success: true, product };
}

function calculateCartTotal(cart, catalog) {
    if (!Array.isArray(cart) || !Array.isArray(catalog)) {
        throw new TypeError("Cart and catalog must be arrays.");
    }

    return cart.reduce((total, cartItem) => {
        const product = catalog.find(item => item.id === cartItem.productId);
        if (!product) {
            throw new RangeError(`Product ${cartItem.productId} was not found.`);
        }
        if (!Number.isFinite(product.price) || !Number.isInteger(cartItem.quantity) || cartItem.quantity <= 0) {
            throw new TypeError("Cart items require a valid price and positive integer quantity.");
        }
        return total + product.price * cartItem.quantity;
    }, 0);
}

function checkBalanceSufficiency(balance, cartTotal) {
    if (!Number.isFinite(balance) || balance < 0 || !Number.isFinite(cartTotal) || cartTotal < 0) {
        throw new TypeError("Balance and cart total must be non-negative numbers.");
    }

    return balance >= cartTotal;
}

function displayCheckoutSummary(catalog, cart, balance, total, isBalanceSufficient) {
    console.log("Shopping cart:", cart);
    console.log("Updated inventory:", catalog);
    console.log("First product tags:", catalog[0].tags);
    console.log("Cart total:", total);
    console.log("User balance:", balance);
    console.log("Sufficient balance:", isBalanceSufficient);
    console.log("Checkout message:", isBalanceSufficient ? "Checkout can proceed." : "Insufficient balance.");
}

// Required execution sequence
const firstAddResult = addToCart(shoppingCart, storeCatalog, 101, 2);
const secondAddResult = addToCart(shoppingCart, storeCatalog, 102, 1);
console.log(firstAddResult.message);
console.log(secondAddResult.message);

if (!firstAddResult.success || !secondAddResult.success) {
    console.error("Checkout stopped because one or more cart additions failed.");
} else {
    const inventoryResult = updateInventoryStock(storeCatalog, shoppingCart);
    console.log(inventoryResult.message);

    if (!inventoryResult.success) {
        console.error("Checkout inventory validation failed; stock was not changed.");
    } else {
        console.log("Tag update:", addProductTag(storeCatalog, 101, "discounted"));

        const cartTotal = calculateCartTotal(shoppingCart, storeCatalog);
        const isBalanceSufficient = checkBalanceSufficiency(userBalance, cartTotal);
        displayCheckoutSummary(storeCatalog, shoppingCart, userBalance, cartTotal, isBalanceSufficient);
    }
}
