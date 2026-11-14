// CHANGE HIGHLIGHTS: Reorganized the direct array operations into the seven
// required functions; added validation, a separate sorted copy, and all
// required result output without changing either source category.

const categoryA = [
    { sku: "A101", title: "Wireless Mouse", price: 799, rating: 4.5 },
    { sku: "A102", title: "Mechanical Keyboard", price: 2499, rating: 4.8 }
];

const categoryB = [
    { sku: "B201", title: "USB-C Hub", price: 1499, rating: 4.2 },
    { sku: "B202", title: "Gaming Headset", price: 3299, rating: 4.7 }
];

function mergeCatalogs(firstCategory, secondCategory) {
    if (!Array.isArray(firstCategory) || !Array.isArray(secondCategory)) {
        throw new TypeError("Both categories must be arrays.");
    }

    return [...firstCategory, ...secondCategory, ...firstCategory, ...secondCategory];
}

function removeBoundaryProducts(catalog) {
    if (!Array.isArray(catalog)) {
        throw new TypeError("The catalog must be an array.");
    }

    if (catalog.length < 2) {
        catalog.splice(0, catalog.length);
        return catalog;
    }

    catalog.splice(0, 1);
    catalog.splice(catalog.length - 1, 1);
    return catalog;
}

function insertPromotionalBanner(catalog, position, banner) {
    const validBanner = banner
        && typeof banner.sku === "string"
        && typeof banner.title === "string"
        && Number.isFinite(banner.price)
        && Number.isFinite(banner.rating);

    if (
        !Array.isArray(catalog)
        || !Number.isInteger(position)
        || position < 0
        || position > catalog.length
        || !validBanner
    ) {
        throw new TypeError("Provide a catalog, valid insertion position, and valid banner.");
    }

    catalog.splice(position, 0, banner);
    return catalog;
}

function createFeaturedItems(catalog) {
    if (!Array.isArray(catalog) || catalog.length < 4) {
        throw new RangeError("The catalog must contain at least four products.");
    }

    return catalog.slice(1, 4);
}

function findPromotionalBanner(catalog, bannerSKU) {
    if (!Array.isArray(catalog) || typeof bannerSKU !== "string") {
        throw new TypeError("Provide a catalog and a banner SKU.");
    }

    return catalog.findIndex(product => product && product.sku === bannerSKU);
}

// CHANGE: Sorting uses a shallow copy, preserving the required catalog order.
function sortCatalogByPrice(catalog, order = "ascending") {
    if (!Array.isArray(catalog) || !["ascending", "descending"].includes(order)) {
        throw new TypeError("Provide a catalog and an ascending or descending order.");
    }

    return catalog.slice().sort((first, second) =>
        order === "ascending" ? first.price - second.price : second.price - first.price
    );
}

function displayCatalogResults(catalog, featuredItems, bannerIndex) {
    console.log("Final catalog:", catalog);
    console.log("Featured items:", featuredItems);
    console.log("Promotional banner index:", bannerIndex);
    console.log("Total catalog entries:", catalog.length);
    console.log("Total featured items:", featuredItems.length);
}

// Required execution sequence
const fullCatalog = mergeCatalogs(categoryA, categoryB);
removeBoundaryProducts(fullCatalog);

const promotionalBanner = {
    sku: "PROMO100",
    title: "Special Deal",
    price: 0,
    rating: 5.0
};

insertPromotionalBanner(fullCatalog, 2, promotionalBanner);
const featuredItems = createFeaturedItems(fullCatalog);
const bannerIndex = findPromotionalBanner(fullCatalog, "PROMO100");
const sortedCatalog = sortCatalogByPrice(fullCatalog, "ascending");

displayCatalogResults(fullCatalog, featuredItems, bannerIndex);
console.log("Ascending-price catalog:", sortedCatalog);
