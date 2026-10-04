// 1. Create a variable for the max value
let maxValue = 5;

// 2. Generate a random number between 1 and maxValue
let solution = Math.floor(Math.random() * maxValue) + 1;
// console.log("Solution:", solution); // Uncomment for testing

// 3. Create a tracking variable set to false
let isCorrect = false;

// 4. Use a while loop to iterate a prompt
while (!isCorrect) {
  let guess = Number(prompt(`Enter a number between 1 and ${maxValue}:`));
  
  // 5. Check if the guess matches the solution
  if (guess === solution) {
    isCorrect = true;
    console.log("Correct! You guessed the right number.");
  } else if (guess > solution) {
    console.log("Too high! Try again.");
  } else {
    console.log("Too low! Try again.");
  }
}