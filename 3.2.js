// Aim: calculate te average value of an array.

let testArr = [1, 2, 3, 4, 5]; //Avg: 3
let testArr2 = [100, 101, 102]; //Avg: 101
let addedNum = 0; 

for (let elem of testArr) {
    addedNum += elem;
}

console.log(addedNum/testArr.length);