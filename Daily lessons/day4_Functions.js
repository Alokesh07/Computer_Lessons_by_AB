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

let addNum = (x,y) =>{console.log(x+y)};
addNum(5,10); // This will print 15 in the console