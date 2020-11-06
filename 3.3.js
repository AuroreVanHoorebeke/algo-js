// Aim: writing a program duplicating a given array.
// Bonus: 
//      - version 1 only with push()
//      - do so with a single method call

// // push() version:

// let testArr = [1, 2, 3, 4, 5];
// let testArr2 = [100, 101, 102];
// let copyArr=[];

// for (let elem of testArr2) {
//     copyArr.push(elem);
// }

// console.log(copyArr);


// Single method call ? (Je sais pas si c'est comme ça qui faut faire )

let testArr = [1, 2, 3, 4, 5];
let testArr2 = [100, 101, 102];

copyArr = [...testArr];

console.log(copyArr);