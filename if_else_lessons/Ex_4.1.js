// 1. Create a variable with a Boolean value
let myVariable = true;

// 2. Output the value of the variable to the console
console.log("Value of myVariable:", myVariable);

// 3. Check whether the variable is true and output a message
if (myVariable) {
    console.log("The variable is true!");
}

// 4. Add another if statement with an ! in front to check if it is not true
if (!myVariable) {
    console.log("The variable is not true (it is false)!");
}

// 5. Change the variable to the opposite and test again
myVariable = false;
console.log("--- After changing variable to opposite ---");
console.log("Value of myVariable:", myVariable);

if (myVariable) {
    console.log("The variable is true!");
}

if (!myVariable) {
    console.log("The variable is not true (it is false)!");
}