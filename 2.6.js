// // Prompt version

// let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let dayNum = prompt("Choose a number between 1 and 7");
// let i = dayNum - 1;

// if (i >= 1 && i <= 7) {
//     console.log(days[i]);
// } else {
//     console.log("I said \"a number BETWEEN 1 and 7\"... \:\(")
// }


// readlineSync version

const readlineSync = require('readline-sync')

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let dayNum = readlineSync.question("Choose a number between 1 and 7 : ");
let i = dayNum - 1;

if (i >= 1 && i <= 7) {
    console.log(days[i]);
} else {
    console.log("I said \"a number BETWEEN 1 and 7\"... \:\(")
}
