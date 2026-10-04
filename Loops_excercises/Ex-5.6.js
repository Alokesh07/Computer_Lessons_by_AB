let myArray = [];

for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}

console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (let val of myArray) {
  console.log(val);
}