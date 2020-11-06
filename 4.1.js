//Aim: create a program with a  "calcSurface" function, returning the surface of a rectangle according to length and width given by the user.

const readlineSync = require('readline-sync')

let l = Number(readlineSync.question("Give the length of your rectangle: "));
let w = Number(readlineSync.question("Give the width of your rectangle: "));

// calcSurface is a function taking as arguments the length and width of the user's rectangle and returns its surface.
function calcSurface(l,w) {
    return l * w;
}

console.log("The surface of your rectangle is " + calcSurface(l,w) + " (the unit of your choice)²")

