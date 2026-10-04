let randomNumber = Math.floor(Math.random() * 10);

let userNumber = prompt("Enter a number:");
userNumber = Number(userNumber);

if (userNumber > randomNumber) {
    console.log("Your number is greater than the random number.");
}
else if (userNumber === randomNumber) {
    console.log("Your number is equal to the random number.");
}
else {
    console.log("Your number is less than the random number.");
}

console.log("Random number was: " + randomNumber);