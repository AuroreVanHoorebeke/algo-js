// Aim: Create a program using a function called rand10() to return a random integer between 1 and 10 each time it runs.


// rand10() returns a random integer between 1 and 10 using both Math.random and Math.round functions.
// To return an integer between 1 and 10, Math.random() is multiplied by 10 then I used Math.round to make sure the number returned is rounded to the nearest whole number.
function rand10(){
    return(Math.round(Math.random()*10));
}

console.log(rand10());