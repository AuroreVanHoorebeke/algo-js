//Aim: reusing the rand10() function and create a multiRand(n) function to create a program asking how many random numbers between 1 and 10 should  be displayed.
const readlineSync = require('readline-sync');

console.log("Hello, this program will help you generate random numbers between 1 and 10.");
let n = Number(readlineSync.question("How many random numbers do you want? "));

function rand10() {
    return Math.floor(Math.random() * 10);
}

/*multiRand(n) defines an empty array called "random" 
then  uses user input (an integer, stocked in the n variable) to run the rand10() function n times. 
The numbers returned by rand10() are then pushed in the "random" array. 
When the multiRand(n) ends, it returns the array.*/

function multiRand(n) {
    let random = [];
    for (let i = 0; i < n; i++) {
         random.push(rand10()) ;
    }
    return random;
}

console.log("Your random numbers are: " + multiRand(n) + ".");