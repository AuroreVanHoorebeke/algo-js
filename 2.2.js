// Former version, using prompt instead of readlineSync
// let min = Number(prompt("Enter a number :"));
// let max = Number(prompt("Enter a bigger number :"));
// let current = Number(prompt("Enter another number :"));

/*Version with readlineSync*/
const readlineSync = require('readline-sync')

let min = Number(readlineSync.question("Enter a number: "));
let max = Number(readlineSync.question("Enter a bigger number: "));

if (min >= max) {
    console.log("Looks like you don't understand what \"BIGGER\" means... Goodbye!");

} else {
    let current = Number(readlineSync.question("Enter another number: "))
    if (current > min && current < max) {
        console.log(current + " is between " + min + " and " + max + ".");
    } else {
        console.log(current + " isn't between " + min + " and " + max + ".");
    }
}