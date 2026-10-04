let output = "";
let skipNumber = 5;

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    continue;
  }
  output += i;
}

console.log(output); // Output: 1234678910

//OR


let outputBreak = "";
let stopNumber = 5;

for (let i = 1; i <= 10; i++) {
  if (i === stopNumber) {
    break;
  }
  outputBreak += i;
}

console.log(outputBreak); // Output: 1234