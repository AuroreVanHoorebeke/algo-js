const readlineSync = require('readline-sync');

let n = Number(readlineSync.question("Enter a number \(not too high or you'll stay here forever\): "));
let finalVal = 0;

for (i = 0; i < n; i++) {

    finalVal = Number(readlineSync.question("Enter another number: ")) + finalVal;

}

console.log(finalVal);