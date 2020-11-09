/*Aim:  Creating a recursive function called "factorial(a)" returning the factorial of a number.
Ex: 6! = 1*2*3*4*5*6 //720
! Should be undifined for negative numbers and 0! = 1.*/

const readlineSync = require('readline-sync');

console.log("This program will help you calculate the factorial of a number.");
let num = Number(readlineSync.question("Type a number: "));
let a = [];

function arrayPush(num) {

    for (let i = 0; i < num; i++) {
        a.push(i + 1);
    }
    return a;
}

function factorial(a) {
     arrayPush(num);
     let result = 1;
     for (i = 0; i < a.length; i++) {
         result *= a[i];
     }
     return result;
 }

console.log(`The factorial of ${num} is ${factorial(a)}.`);