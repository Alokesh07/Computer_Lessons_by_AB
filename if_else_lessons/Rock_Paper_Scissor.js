let choices = ["Rock", "Paper", "Scissors"];

let playerNumber = Math.floor(Math.random() * 3);
let computerNumber = Math.floor(Math.random() * 3);

let playerChoice = choices[playerNumber];
let computerChoice = choices[computerNumber];

let result;

if (playerNumber === computerNumber) {
    result = "It's a tie!";
}
else if (
    (playerNumber === 0 && computerNumber === 2) ||
    (playerNumber === 1 && computerNumber === 0) ||
    (playerNumber === 2 && computerNumber === 1)
) {
    result = "Player wins!";
}
else {
    result = "Computer wins!";
}

console.log("Player selected: " + playerChoice);
console.log("Computer selected: " + computerChoice);
console.log(result);