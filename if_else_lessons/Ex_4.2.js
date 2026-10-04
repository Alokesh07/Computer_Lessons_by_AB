let age = prompt("Enter your age:");

age = Number(age);

let message;

if (age >= 21) {
    message = "You meet the age requirement for the restricted activity.";
}
else if (age >= 19) {
    message = "You may enter the venue, but you do not meet the higher age requirement.";
}
else {
    message = "You do not meet the age requirement for entry.";
}

console.log(message);