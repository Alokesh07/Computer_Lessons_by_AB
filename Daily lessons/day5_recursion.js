/**Recursive functions:
 * Functions that call themselves are called recursive functions. They are used to solve problems that can be broken down into smaller, similar subproblems. A recursive function typically has two main components: a base case that stops the recursion and a recursive case that continues the recursion by calling the function itself with modified arguments.
 * 
 * function a() {
 *      Code to be executed
 *      b(); -> a different function call
 *      a();  --> This is a recursive call
 * }
 * function b() {
 *      Code to be executed
 *      a(); -> a different function call
 *      b(); --> This is a recursive
 * }
 */

let a =(x) => {
    if(x <= 0) {   //The terminating condition for the recursion. This is the base case that stops the recursion when x is less than or equal to 0.
        return; // Base case to stop recursion
    }
    console.log("Function a is called");
    a(x--); // This is a recursive call, with updation of the argument x. The function a is called again with the value of x decremented by 1. This will continue until the base case is reached.
};  
a(5);
/**
 * user inputs x=5  a(5) -> Function a is called ...... -> a(4) -> Function a is called ...... -> a(3) -> Function a is called ...... -> a(2) -> Function a is called ...... -> a(1) -> Function a is called ...... -> a(0) -> return
 */


for(let i=5;i>=0;i--){
    console.log("Function a is called");
}