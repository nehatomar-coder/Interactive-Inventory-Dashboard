// --- 1. Data & Input Initialization ---
// Pre-existing items inside an array of objects
let inventory = [
    { name: "Laptop", price: 800, category: "" },
    { name: "Mouse", price: 25, category: "" }
];

console.log("--- Initializing Inventory System ---");

// Simulating prompt inputs (You can replace these with prompt() if running in a browser environment)
let userInputName = "Monitor";
let userInputPrice = "150";   // Input as string to demonstrate explicit conversion

console.log(`[Prompt executed: User adds "${userInputName}" at "$${userInputPrice}"]`);

// Explicit conversion of price from string to number
let parsedPrice = Number(userInputPrice);

// --- 3. Loops & Flow Control & Validation ---
// Handling bad or missing user inputs cleanly using loops and conditional control
let isValidInput = true;

while (true) {
    if (!userInputName || userInputName.trim() === "") {
        console.log("Error: Product name cannot be empty. Skipping addition.");
        isValidInput = false;
        break;
    }

    if (isNaN(parsedPrice) || parsedPrice < 0) {
        console.log("Error: Invalid price entered. Skipping addition.");
        isValidInput = false;
        break;
    }

    // If valid, exit validation loop
    break;
}

// Push new item if validation passed
if (isValidInput) {
    inventory.push({
        name: userInputName.trim(),
        price: parsedPrice,
        category: ""
    });
}

// --- 2. Control Flow & Conditional Evaluation ---
// Assigning category badges using if...else and switch blocks based on dynamic price thresholds
inventory.forEach(item => {
    if (item.price < 50) {
        item.category = "Budget";
    } else if (item.price >= 50 && item.price <= 300) {
        // Using a switch block for range or specific tier evaluation logic
        let tierKey = item.price <= 200 ? "Standard-Low" : "Standard-High";
        switch (tierKey) {
            case "Standard-Low":
            case "Standard-High":
                item.category = "Standard";
                break;
            default:
                item.category = "General";
        }
    } else {
        item.category = "Premium";
    }
});


// --- 4. Functions & Scope ---
// Regular function to calculate total inventory value with secure local scoping
function calculateTotalValue(items) {
    let total = 0; // Local scope variable
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

// Arrow function to apply custom tax parameters and calculate stats
const applyTaxAndGetStats = (items, taxRate = 0.05) => {
    let baseTotal = calculateTotalValue(items);
    let taxAmount = baseTotal * taxRate;
    return {
        baseTotal: baseTotal,
        grandTotal: baseTotal + taxAmount
    };
};


// --- 5. Array Methods & Iteration ---
console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach(item => {
    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${item.category}`);
});

console.log("\n--- Financial Analytics ---");
let stats = applyTaxAndGetStats(inventory);
console.log(`Total Inventory Value: $${stats.baseTotal}`);
console.log(`Grand Total (with 5% tax): $${stats.grandTotal.toFixed(2)}`);

// Using filter() to isolate affordable items under $200
let affordableItems = inventory.filter(item => item.price < 200);
let affordableNames = affordableItems.map(item => item.name);
console.log(`Filtered Affordable Items (Under $200):`, affordableNames);

// Using map() to produce a transformed uppercase report summary
let formattedReportList = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List:`, formattedReportList);