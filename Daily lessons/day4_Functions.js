/**What are functions ?
 * Functions are a block of code that can be reused multiple times. It is a set of statements that performs a certain task.
 * here we will make custom functions and use them in our code. Using functions means invoking a function. We can invoke a function by calling it by its name.
 * But there are already some built-in functions in JavaScript that we can use in our code. eg: alert(), prompt(), console.log(), push(), pop(), shift(), unshift() etc.
 */
/**Identifying a function = () in the end */
function def(){
    console.log("Hi");
    console.log("Hello, World!");
}
/**We can invoke this function using def() */
def(); // This will print "Hi" and "Hello, World!" in the console

/**pop() -- The way of calling pop in an array
 * push("ABCD") - The way of calling push in an array
 * the above both methods are for invoking a function.
 * Functions can be invoked in two ways:
 * 1. By calling the function by its name. - with or without parameters
 * 2. By using the function as a method of an object. - with or without parameters
 * 
 * What are parameters of a function ? -> 
 * Parameters are the values that we pass to a function when we invoke it. They are used to provide input to the function so that it can perform its task. Parameters are defined in the function definition and can be used within the function body which are called arguments. We can pass any number of parameters to a function. Parameters are optional. If we do not pass any parameters to a function, it will still work but it will not have any input to work with.
 */

function def1(x,y,z,a){
    console.log(x);
    console.log(y);
    console.log(z);
}

/**
 * Above function as arrow function
 * let def1 = (x,y,z,a) =>{
 *   console.log(x);
 *   console.log(y);
 *   console.log(z);
 * }
 */

def1("Hi", "Hello World!",4); // This will print "Hi" and "Hello, World!" in the console
def1("Good Morning", "Good Evening!"); // This will print "Good Morning" and "Good Evening!" in the console
def1("Good Night", "Good Afternoon!"); // This will print "Good Night" and "Good Afternoon!" in the console

/**naming conventions for functions:
 * Use camelCase for your functions: this means that the first word starts with a lowercase letter and new words start with a capital. That makes it a lot easier to read and keeps your code consistent. 
 * Make sure that the name describes what the function is doing: it's better to call a number addition function addNumbers than myFunc.
 */

let addNum = (x,y,z) => {console.log(x+y); return x*y;};
addNum(5,10); // This will print 15 in the console
/**
 * 
 * (x,y,z) => {console.log(x+y)};  --Its useless becuase you can not use this function without invoking it. So we need to invoke it by calling it by its name.
 */
addNum();  //-->returns NaN because we did not pass any parameters to the function. It will try to add undefined + undefined which is NaN.
addNum(5); //-->returns NaN because we did not pass the second parameter to the function. It will try to add 5 + undefined which is NaN.
addNum(3,5,6); //-->returns 8 because we passed 3 and 5 as parameters to the function. It will add 3 + 5 which is 8. The third parameter is not used in the function so it will be ignored.

/**Rest and spread operators -Unary operators  (...) 
 * in rest and spread operation, the operand is a JSON object
 * 
 * 1. Spread operator:
 * The spread operator is a special operator. It consists of three dots used before a referenced expression or string, and it spreads out the arguments/parameters of a function or elements of a JSON object. 
 * Why do we need to spread paramters / arguements of a function ?
 * arguements = {JSON object};
 * let a = (arguments)  => {console.log(arguments)};  // This will print the arguments object in the console
 * a(arguments); // This will print the arguments object in the console
*/

let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very","powerful"];
let message2 = ["JavaScript", "is", spread, "and", "very","powerful"];
console.log(message);
console.log(message2); // This will print the spread array as a single element in the console

function addFourNumbers(x, y, z, a) {   
    console.log(x + y + z + a); 
} 
let arr = [5, 9]; 
let arr2 = [6, 7]; 
addFourNumbers(...arr, ...arr2);
addFourNumbers(arr, arr2);

//A function always returns a value. If we do not specify a return value, the function will return undefined by default. We can use the return statement to return a value from a function. The return statement is used to exit a function and return a value from that function. The value returned by the function can be used in the code that called the function. We can also use the return statement to exit a function without returning any value. In this case, the function will return undefined by default.

let result = addNum(1,8); // This will print 8 in the console.. and return 8 because we specified a return value in the function.
console.log(result);