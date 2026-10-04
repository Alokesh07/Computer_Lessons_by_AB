let product1 ={
"id":"ABCDE1234F",
"name": "AC",
"price": "35999",
"stock": "25",
tag1: ["electronics", "sale"] };

let product2 ={
"id":"GHIJI5678K",
"name": "JEANS",
"price": "2999",
"stock": "50",
tag2: ["clothes", "buy 1 get 1 free"] };

let product3 ={
"id":"LMNOP9123Q",
"name": "CAR WASHER",
"price": "4999",
"stock": "10",
tag3: ["car accessories", "discount"] };

storeCatalog: [product1, product2, product3];
/* The structure of the storeCatalog array
[
{"id":"ABCDE1234F",
"name": "AC",
"price": "35999",
"stock": "25",
tag1: ["electronics", "sale"]},   --> storeCatalog[0] = produc1

{"id":"GHIJI5678K",
"name": "JEANS",
"price": "2999",
"stock": "50",
tag2: ["clothes", "buy 1 get 1 free"]},  --> storeCatalog[1] = product2

{"id":"LMNOP9123Q",
"name": "CAR WASHER",
"price": "4999",
"stock": "10",
tag3: ["car accessories", "discount"]}    --> storeCatalog[2] = product3
]
*/

shoppingCart: []

let userBalance = 150

let cart1 ={
"id":"GHIJI5678K",
"quantity":2 };

let cart2 ={
"id":"ABCDE1234F",
"quantity":1 };

shoppingCart.push(cart1); 
/*
[
{"id":"GHIJI5678K",
"quantity":2}  --> shoppingCart[0]
]
*/ 
shoppingCart.push(cart2); 
/* Final structure for shoppingCart array
[
{"id":"GHIJI5678K",
"quantity":2},  --> shoppingCart[0]
{"id":"ABCDE1234F",
"quantity":1}  --> shoppingCart[1]
]
*/ 

//arr.forEach(i => console.log(i);)  --> Prints every element in the array
//for(i=0;i<arr.length;i++){console.log(arr[i]);}  --> Prints every element in the array

for (let i = 0; i < shoppingCart.length; i++) {  //shoppingCart.length = 2 the loop will traverse 2 times, with i=0 and i=1

  const cartItem = shoppingCart[i];

  for (let j = 0; j < storeCatalog.length; j++) {  //storeCatalog.length = 3 the loop will traverse 3 times, with j=0, j=1 and j=2

    if (storeCatalog[j].id === cartItem.id) {
      storeCatalog[j].stock -= cartItem.quantity; //Update the stock of the product in the storeCatalog based on the quantity purchased in the shoppingCart
      break; // Exit inner loop once product is found and updated
    }
  }
}
//Difference between == and === in JavaScript is that == checks for equality of values after type coercion (without checking the data type), while === checks for equality of both value and type without type coercion.
//For example, 5 == "5" would return true, but 5 === "5" would return false.

tag1.push("discounted"); 
/**
 * The whole structure of product1 after the push operation will be:
{
"id":"ABCDE1234F",
"name": "AC",
"price": "35999",
"stock": "24",  // Updated stock after purchase
tag1: ["electronics", "sale", "discounted"]  // Updated tags after push operation
}
 */
let totalPrice = 0;

for (let i = 0; i < shoppingCart.length; i++) {
  const cartItem = shoppingCart[i];

  for (let j = 0; j < storeCatalog.length; j++) {
    if (storeCatalog[j].id === cartItem.id) {
      totalPrice += storeCatalog[j].price * cartItem.quantity; //Calculate the total price of the items in the shopping cart based on their prices in the storeCatalog and their quantities in the shoppingCart
      break; // Exit inner loop once matching item price is added
    }
  }
}
/**
 * the final structure of the storeCatalog array after the purchase will be:
[
{"id":"ABCDE1234F",
"name": "AC",
"price": "35999",
"stock": "24",  // Updated stock after purchase
tag1: ["electronics", "sale", "discounted"]},  --> storeCatalog[0]
{
"id":"GHIJI5678K",
"name": "JEANS",
"price": "2999",
"stock": "48",  // Updated stock after purchase
tag2: ["clothes", "buy 1 get 1 free"]},  --> storeCatalog[1]

{"id":"LMNOP9123Q",
"name": "CAR WASHER",
"price": "4999",
"stock": "10",  // Stock remains unchanged as it was not purchased
tag3: ["car accessories", "discount"]}    --> storeCatalog[2]
]

the calcuated totalPrice will be 35999 + (2999 * 2) = 41997
 */
if (userBalance >= totalPrice) {
  console.log(`Purchase successful! Total: $${totalPrice}. Remaining balance: $${userBalance - totalPrice}`);
} else {
  console.log(`Insufficient balance! Total is $${totalPrice}, but you only have $${userBalance}.`);
}
//after the purchase, the userBalance will be updated to 150 - 41997 = -41847, which is insufficient for the purchase.



















//Demonstration of switch case statement in JavaScript and their respective if statements. The switch statement evaluates an expression and executes the code block corresponding to the matching case. If no case matches, the default case is executed. The equivalent if statements check the same conditions and execute the corresponding code blocks.
if(activity === "Get up") {
 console.log("It is 6:30AM");
} else if(activity === "Breakfast") {
 console.log("It is 7:00AM");
} else if(activity === "Drive to work") {
 console.log("It is 8:00AM");
} else if(activity === "Lunch") {
 console.log("It is 12.00PM");
} else if(activity === "Drive home") {
 console.log("It is 5:00PM")
} else if(activity === "Dinner") {
 console.log("It is 6:30PM");
}
else {console.log("None of it matches");}

//corresponding switch case:
/**
 * switch(expression) {
 case value1:
 // code to be executed
 break;
 case value2:
 // code to be executed
 break;
 case value-n:
 // code to be executed
 break;
}
 */
switch(activity) {
 case "Get up":
 console.log("It is 6:30AM");
 break;
 case "Breakfast":
 console.log("It is 7:00AM");
 break;
 case "Drive to work":
 console.log("It is 8:00AM");
 break;
 case "Lunch":
 console.log("It is 12:00PM");
 break;
 case "Drive home":
 console.log("It is 5:00PM");
 break;
 case "Dinner":
 console.log("It is 6:30PM");
 break;
 default:
 console.log("None of it matches");
 break;
}