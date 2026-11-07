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

let shoppingCart = [];

const userBalance = 150;

// Stage 3: Add products to cart

shoppingCart.push({
    productId: storeCatalog[0].id,
    quantity: 2
});

shoppingCart.push({
    productId: storeCatalog[1].id,
    quantity: 1
});

// Stage 4: Calculate cart total

function calculateCartTotal(cart) {
    const total = cart.reduce((accumulator, item) => {
        const product = storeCatalog.find(
            product => product.id === item.productId
        );

        if (product) {
            return accumulator + product.price * item.quantity;
        }

        return accumulator;
    }, 0);

    return total;
}

// Stage 5: Update stock

function updateStock(cartItem) {
    const product = storeCatalog.find(
        item => item.id === cartItem.productId
    );

    if (product) {
        product.stock -= cartItem.quantity;
    }
}

// Stage 6: Check stock availability

function checkStock(cart) {
    return cart.reduce((available, item) => {
        const product = storeCatalog.find(
            product => product.id === item.productId
        );

        if (product && product.stock >= item.quantity) {
            return available;
        }

        return false;
    }, true);
}

// Stage 7: Process checkout

function processCheckout(cart, balance) {
    const total = calculateCartTotal(cart);
    const stockAvailable = checkStock(cart);

    if (stockAvailable && balance >= total) {

        cart.reduce((processed, item) => {
            updateStock(item);
            return processed;
        }, 0);

        console.log("Checkout Successful!");
        console.log("Total Paid:", total);
        console.log("Remaining Balance:", balance - total);

        return true;

    } else {
        console.log("Checkout Failed!");

        if (!stockAvailable) {
            console.log("Insufficient Stock!");
        }

        if (balance < total) {
            console.log("Insufficient Balance!");
        }

        return false;
    }
}

// Stage 8: Final verification

const cartTotal = calculateCartTotal(shoppingCart);

const checkoutStatus = processCheckout(
    shoppingCart,
    userBalance
);

console.log("Cart Total:", cartTotal);
console.log("Checkout Status:", checkoutStatus);
console.log("Final Inventory:", storeCatalog);
console.log("Shopping Cart:", shoppingCart);
