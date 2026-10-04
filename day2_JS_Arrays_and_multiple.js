/**
 * Array is something that can hold multiple values in a single variable. It is a data structure that can store a collection of items, which can be of any type (numbers, strings, objects, etc.). Arrays are useful for organizing and manipulating data in JavaScript.
 * In this section we will be covering:
 * 1. Arrays and their properties
 * 2. Array methods and operations
 * 3. Multidimesnional arrays
 * 4. Objects in JS
 * 5. Basic o/p with arrays and objects
 */
 //How to create an array:
 const arr1 = new Array("Green", "Red", true, 10, 3.14);
 let arr2 = ["Green", "Red", true, 10, 3.14];     //--> these will be input by user... not determined what will be the length of array ....
 let arr3 = new Array(10); //--> this will create an array of length 10 with all elements as undefined
 //The purpose of using new Array() is that in JS, arrays are dynamic in nature, meaning their size can change during runtime. When you use new Array(10), it creates an array with a length of 10, but all the elements are initially undefined. This can be useful when you want to create an array of a specific size and then fill it with values later on. However, if you want to create an array with specific values, it's more common to use the array literal syntax ([]) as shown in arr2.

 let arr4 = [10]; //--> this will create an array of length 1 with the first element as 10
// let arr5 = Array(10);
 console.log(arr4);

 let arr = ["hi there", 5, true]; //To access an element in an array, you can use its index. The index of the first element is 0, the second element is 1, and so on. Syntax: <array_name>[<index>]
console.log(typeof arr[0]);   
console.log(typeof arr[1]);  //a Proof that array can contain multiple values of different data types.
console.log(typeof arr[2]);

arr1[1] = 2.456;  //To overwrite an element
console.log(arr1);

// arr1 = ["22", "64", undefined, 3.14];  //As a whole cannot be changed because it is a constant array but individual elements can be changed. This will give an error.
// console.log(arr1);

console.log(arr2[-1]);  //This will give a undefined because negative indexing is not supported in JavaScript arrays. In JavaScript, array indices start from 0 and go up to the length of the array minus one. If you try to access an index that is out of bounds (like -1), it will return undefined.

//Built in proeperties of an array:
console.log(arr1.length); //The length property returns the number of elements in an array. It is a built-in property of arrays in JavaScript.
let numbers = [1, 2, 3, 4, 5];  //Good to go... Understoood.
numbers[7] = 7;
console.log(numbers+" has a length of "+numbers.length);

//Coming to the Array methods:
//1. Adding and replacing elements in an array:
let favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");  //Push() method adds one or more elements to the end of an array and returns the new length of the array. It modifies the original array.
console.log(favoriteFruits); // Output: ["grapefruit", "orange", "lemon", "tangerine"]

let favouriteFruits2 = favoriteFruits.push("line");
console.log(favoriteFruits);
console.log(favouriteFruits2);

//2. splice() method: The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the removed elements (if any).
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid"); //Syntax: array.splice(<starting_index>,<number_of_elements_to_remove>,<element1>,<element2>,...);
console.log(arrOfShapes);

let arrShapes2 = arrOfShapes.splice(1, 2, "hexagon", "octagon");
console.log(arrOfShapes);
console.log(arrShapes2);

//3. pop() method: The pop() method removes the last element from an array and returns that element. It modifies the original array.
let arrOfColors = ["red", "green", "blue"];
let lastColor = arrOfColors.pop();
console.log(arrOfColors+" "+arrOfColors.length); // Output: ["red", "green"] 2
console.log(lastColor);

//the shift() method: The shift() method removes the first element from an array and returns that removed element. It modifies the original array.
let arrOfColors2 = ["red", "green", "blue"];
let firstColor = arrOfColors2.shift();
console.log(arrOfColors2+" "+arrOfColors2.length); // Output: ["green", "blue"] 2
console.log(firstColor);

let arA = [1,2,3,4,5,6,7,8,9,10];
arA.splice(3,5);  //This will remove 5 elements starting from index 3 (4,5,6,7,8) and return them as an array.
console.log(arA);  // Output: [1, 2, 3, 9, 10]
//How do you delete an array item without changing the length of the array.
delete arA[2];  //This will delete the element at index 2 (3) and leave an empty slot.
console.log(arA+"     "+arA.length);  // Output: [1, 2, empty, 9, 10] 5

//Finding elements in anarray:
let arr8 = [ 2, 6, 7, 8, 6,7,8,6];
let findIndex = arr8.indexOf(6); //indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2); // Output: 1 -1
let findIndex3 = arr8.indexOf(6,2); //The second parameter specifies the index to start the search from. In this case, it starts searching for 6 from index 2.
console.log(findIndex3); // Output: 4
let findIndex4 = arr8.lastIndexOf(6); //lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. It searches the array backwards, starting from the last index.
console.log(findIndex4); // Output: 4 





//Multidimesional arrays
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6, someValues1]; //This array becomes [4, 5, 6, [1, 2, 3]] because someValues1 is an array itself and it is included as an element in someValues2.
let someValues3 = [7, 8, 9, someValues2]; //This array becomes [7, 8, 9, [4, 5, 6, [1, 2, 3]]] because someValues2 is an array itself and it is included as an element in someValues3.
let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log(arrOfArrays); // Output: [[1, 2, 3], [4, 5, 6, [1, 2, 3]], [7, 8, 9, [4, 5, 6, [1, 2, 3]]]]

let oneElement = arrOfArrays[2];
console.log(oneElement); // Output: [7, 8, 9, [4, 5, 6, [1, 2, 3]]]
let secondElement = oneElement[3];
console.log(secondElement); // Output: [4, 5, 6, [1, 2, 3]]
let thirdElement = secondElement[3];
console.log(thirdElement); // Output: [1, 2, 3]
let fourthElement = thirdElement[1];
console.log(fourthElement); // Output: 2

let singElement = arrOfArrays[2][3][3][1]; //This is a more concise way to access the same element (2) in the multidimensional array.
console.log(singElement); // Output: 2
