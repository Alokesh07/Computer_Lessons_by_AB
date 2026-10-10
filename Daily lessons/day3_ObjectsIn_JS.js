//Previosuly what we studied, arrays are also objects.
//Objects are collections of key-value pairs, where each key is a string (or symbol or a variable) and each value can be any data type, including other objects or functions. Objects are used to represent more complex data structures and can be created using object literals or constructors.
let arr = [1, 2, 3];  //---> arr[0] = 1, arr[1] = 2, arr[2] = 3
//The elements in an array are the values at their respective indices, and the indices are the keys of the object. In this case, the keys are 0, 1, and 2, and the values are 1, 2, and 3 respectively. The array is an object that has properties (keys) and values associated with those properties.
console.log(arr +"  " +typeof arr); // Output: object
console.log(arr[0]); // Output: 1
let number = {  //This is an object with keys as indices and values as the elements of the array. The keys are strings that represent the indices of the array, and the values are the elements at those indices.
    "0":1,
    "1":2,
    "2":3
};
console.log(number);
// console.log(number."0");

let table = {
    "name": "Dining Table",
    "shape": "Rounded ",
    size: "Large",
    "material": "Fine wood",
    weight_in_kg: 56,
    isBranded: true
}; //In this object the preperties/keys are name, shape, size, material, weight_in_kg and isBranded. The values are "Dining Table", "Rounded", "Large", "Fine wood", 56 and true respectively. The keys can be strings or symbols, and the values can be of any data type.

console.log(table);
//How to access the properties of an object:
console.log(table.name); //Syntax: <object_name>.<property_name> or <object_name>["<property_name>"]
console.log(table["shape"]);   //When .property_name is used, the property name must be a valid identifier (no spaces, special characters, etc.). When ["property_name"] is used, the property name can be any string, including those with spaces or special characters. In this case, both table.name and table["shape"] are valid ways to access the properties of the object.
console.log(table.size);
console.log(table["material"]);
console.log(table.weight_in_kg);
console.log(table.isBranded);

table.isBranded = false; //To modify the value of a property, you can use either dot notation or bracket notation. In this case, we are using dot notation to change the value of the isBranded property from true to false.
table["weight_in_kg"] = "60"; //To modify the value of a property, you can use either dot notation or bracket notation. In this case, we are using bracket notation to change the value of the weight_in_kg property from 56 to 60.
console.log(table);
let variable = "size";
table[variable] = "Medium"; //To modify the value of a property using a third variable as the key, you always use bracket notation. In this case, we are using the variable size to change the value of the size property from "Large" to "Medium".
table.variable = "Small"; //This will create a new property called variable in the object table and assign it the value "Small". It does not modify the size property because we are using dot notation, which treats variable as a literal property name rather than a variable that holds the name of a property.
console.log(table);