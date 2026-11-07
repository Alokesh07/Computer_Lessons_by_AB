const categoryA = [
    { sku: "A101", title: "Wireless Mouse", price: 799, rating: 4.5 },
    { sku: "A102", title: "Mechanical Keyboard", price: 2499, rating: 4.8 }
];

const categoryB = [
    { sku: "B201", title: "USB-C Hub", price: 1499, rating: 4.2 },
    { sku: "B202", title: "Gaming Headset", price: 3299, rating: 4.7 }
];

const fullCatalog = [
    ...categoryA,
    ...categoryB,
    ...categoryA,
    ...categoryB,
];

fullCatalog.splice(0, 1);
fullCatalog.splice(6, 1);

fullCatalog.splice(2, 0, {
    sku: "PROMO100",
    title: "Special Deal",
    price: 0,
    rating: 5.0
});

const featuredItems = fullCatalog.slice(1, 4);

const bannerIndex = fullCatalog.findIndex(
    product => product.sku === "PROMO100"
);

console.log("Promotional Banner Index:", bannerIndex);

console.log("Full Catalog:", fullCatalog);

console.log("Featured Items:", featuredItems);