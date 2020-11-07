// Aim: creating a program asking a n number to user, then generating n times an random number between 1 and 10 (with multiRand(n)) AND displaying the average, min and max values of the array created by multiRand(n). 

const readlineSync = require('readline-sync');

console.log("Hello, this program will help you generate random numbers between 1 and 10 and display their average, minimum and maximum values.");
let n = Number(readlineSync.question("How many random numbers do you want? "));
let arr = [];

function rand10() {
    return Math.floor(Math.random() * 10);
}

function multiRand(n) {

    for (let i = 0; i < n; i++) {
        arr.push(rand10());
    }
    return arr;
}

/*The function defines a variable called "avg" and adds up all the values contained in the "arr" array. 
It then returns the average value of "avg" by dividing it by arr's length.*/
function average(arr) {
    let avg = 0;
    for (elem of arr) {
        avg += elem;
    }
    return avg / arr.length;
}

/*This function uses the Math.min function to return the minimum value found in the "arr" array. */
function min(arr) {
    return Math.min(...arr);
}

/*This function uses the Math.max function to return the maximum value found in the "arr" array. */
function max(arr) {
    return Math.max(...arr);
}

console.log("Your random numbers are: " + multiRand(n) + ".");
console.log("The average value of these numbers is: " + average(arr));

console.log("The minimum value of these numbers is: " + max(arr));

console.log("The maximum value of these numbers is: " + min(arr));