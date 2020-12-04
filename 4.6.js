/*Aim:  Creating a recursive function called "factorial(a)" returning the factorial of a number.
Ex: 6! = 1*2*3*4*5*6 //720
! Should be undefined for negative numbers and 0! = 1.*/

const readlineSync = require('readline-sync');

console.log("This program will help you calculate the factorial of a number.");
let a = Number(readlineSync.question("Type a number: "));

let multiplication= 1;

/**
 * Calculates the factorial of a number.
 */
function factorial(a) {

    multiplication*=a;

    a--;

    if(a>1){
    factorial(a);
    }
    return multiplication;
}
let factorialFinal=factorial(a);

console.log(`The factorial of ${a} is ${factorialFinal}.`);