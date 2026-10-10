//This is the first lesson of JavaScript essentials. We will cover the basics of JavaScript, including variables, data types, and basic operations and data modifications.

//Variables are values in your code that can represent different values each time the code runs.
//Before using a variable we need to declare it. 

//Declaration types: var, let and const... these keywords define the scope of the variable.
//Scope of the variable means where exactly can we access / use the variable.
// var is function scoped. It can be accessed anywhere in the function it is declared in, and also outside of it if declared globally(outside of any function).
// let and const are block scoped. They can only be accessed within the block they are declared in (e.g., inside a loop, an if statement, or a function).
//Only difference between let and const is that const cannot be reassigned after it has been declared, while let can be reassigned.


var firstname = "John";
var lastname = "Doe";
let age = 20;
const isStudent = true;

console.log(firstname + " " + lastname +" is "+ age +" years old. Is he a student? "+ isStudent); 

//These are the reassignments of the variables.
firstname = "Ruchet";   //var and let can be reassigned, but const cannot be reassigned.
lastname = "Rakshit";
age = 16;
// isStudent = false;  --> it is giving an error

console.log(firstname + " " + lastname +" is "+ age +` years old. Is he a student? `+ isStudent); 


//Primitive data types in JavaScript include:
//1. String: A sequence of characters enclosed in single quotes, double quotes, or backticks.
let a ="ABC";
let b ='XYZ';
let c = `PQR`;
//2. Number: Represents both integer and floating-point numbers,exponents, binary, octal and hexadecimal numbers as well.
let intR = 10;
let floatR = 3.14;
let expR = 1.5e15; // 1.5 x 10^15
let binR = 0b0001010; // binary for 10  
let octR = 0o1236; // octal for 670
let hexR = 0x1BCD34; // hexadecimal for 1,890,196
let bigR = 1234567890123456789012345678901234567890n; // BigInt for very large integers
console.log(intR+"\t"+floatR+"\t"+expR+"\t"+binR+"\t"+octR+"\t"+hexR+"\t"+bigR);

console.log(`${intR}\t${floatR}\t${expR}\t${binR}\t${octR}\t${hexR}\t${bigR}`); // Using template literals for better readability

//3. Boolean: Represents a logical entity that can have two values: true or false.
let isRaining = true;
let isSunny = false;
//4. Null: Represents the intentional absence of any object value.
let emptyValue = null;
//5. Undefined: Represents a variable that has been declared but has not been assigned a value.
let unassignedVariable;
//6. Symbol: Represents a unique identifier, often used for object properties.
let sym1 = Symbol('sym1');
console.log(sym1); // Output: Symbol(sym1)

//Working on the type of a variable - data type stored in avariable can be checked using the typeof operator. It returns a string indicating the type of the unevaluated operand. 
// let testVariable = 1;
// let variableTypeTest1 = typeof testVariable;
// let variableTypeTest2 = typeof(testVariable*2);
// console.log(variableTypeTest1);
// console.log(variableTypeTest2);

let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null; //It returns object but it is actually a primitive data type that represents the intentional absence of any object value.

console.log("str", typeof str);
console.log("nr", typeof nr);
console.log("bigNr", typeof bigNr);
console.log("expR", typeof expR);
console.log("binR", typeof binR);
console.log("bool", typeof bool);
console.log("sym", typeof sym);
console.log("undef", typeof undef);
console.log("unknown", typeof unknown);


//Modification of a variable in JS
sym ="Alokesh Bhatt";
console.log("sym", typeof sym); // It is giving string because we have reassigned the symbol variable to a string value.

//Conversion of data types in JavaScript can be done using built-in functions like String(), Number(), Boolean(), etc.
let strNum = String(42);
let floatNum = Number("3.14");
let boolNum = Boolean(0); //Except for 0, null, undefined, NaN and empty string, all other values are considered true in JavaScript.
console.log("strNum",strNum, typeof strNum);
console.log("floatNum", floatNum, typeof floatNum);
console.log("boolNum", boolNum, typeof boolNum);
console.log((Number("hi"))); //NaN stands for Not-a-Number, and it is a special value in JavaScript that indicates an invalid number. When you try to convert a non-numeric string like "hi" to a number using the Number() function, it results in NaN because "hi" cannot be interpreted as a valid number.

let n =1;
let x ="2";
let y = "hi";
console.log(n*x); // It is giving 2 because JavaScript automatically converts the string "2" to a number when performing the multiplication operation. This is known as type coercion.
console.log(n+x); // It is giving 12 because when the + operator is used with a string, JavaScript treats it as string concatenation. So, it converts the number 1 to a string and concatenates it with the string "2", resulting in "12".
console.log(n-x); // It is giving -1 because JavaScript converts the string "2" to a number when performing the subtraction operation, resulting in 1 - 2 = -1.
console.log(n-y); // It is giving NaN because when JavaScript tries to convert the string "hi" to a number for the subtraction operation, it fails and results in NaN (Not-a-Number).

//Exponential operator (**) is used to calculate the power of a number. It raises the base to the exponent.
let base = 2;
let exponent = 3;
let result = base ** exponent;
console.log(result); // Output: 8, because 2 raised to the power of 3 is 8 (2 * 2 * 2 = 8).

//Unary operators - Increment and Decrement operators are unary operators that increase or decrease the value of a variable by 1, respectively. They can be used in both prefix and postfix forms.
let ab = 7;  
console.log(ab++); // -> ab = ab + 1 - this operation result will be executed after the current statement is evaluated, so it will print 7 first and then increment ab to 8.
console.log(ab); // -> 8

let cd = 2;
console.log(++cd); //-> cd = cd+1 it will be reflected in the same statement, so it will print 3 and then increment cd to 3.

let xy = 19;
console.log(xy++);   //19
console.log(++xy);   //21

