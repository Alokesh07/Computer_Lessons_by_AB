let myObj = {
  item1: "A",
  item2: "B",
  item3: "C"
};

for (let prop in myObj) {
  console.log(prop, ":", myObj[prop]);
}

let myArray = ["A", "B", "C"];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}