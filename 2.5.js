// // "prompt" version
// youWrong()

// function youWrong() {
//     let favNum = prompt("What's your favorite number?")

//     if (favNum != 42) {
//         console.log("Are you sure? Try again")
//         youWrong()
//     } else {
//         console.log('I like you!')
//     }
// }

//readlineSync version

const readlineSync = require('readline-sync')
youWrong()

function youWrong() {
    let favNum = readlineSync.question("What's your favorite number? ")

    if (favNum != 42) {
        console.log("Are you sure? Try again")
        youWrong()
    } else {
        console.log('I like you!')
    }
}