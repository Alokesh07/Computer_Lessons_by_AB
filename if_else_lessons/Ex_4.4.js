let randomNumber = Math.floor(Math.random() * 6);

let question = prompt("Ask the Magic 8-Ball a question:");

let response;

switch (randomNumber) {
    case 0:
        response = "Yes, definitely!";
        break;

    case 1:
        response = "It is very likely.";
        break;

    case 2:
        response = "The answer is unclear.";
        break;

    case 3:
        response = "Ask again later.";
        break;

    case 4:
        response = "Probably not.";
        break;

    case 5:
        response = "No, I don't think so.";
        break;

    default:
        response = "Something went wrong.";
}

console.log("Your question: " + question);
console.log("Magic 8-Ball: " + response);