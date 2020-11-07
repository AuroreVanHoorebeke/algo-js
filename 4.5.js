/*Aim: Creating a function named "calcDistance" taking the coordinates of two different points A and B in a 2D space.
That function must return the distance between those two points.
REFLEXiON: the function shouldn't return negative values, but admit them as parameters.*/

const readlineSync = require('readline-sync');

console.log("This program will calculate the distance between two points, using their x and y coordinates.");
let x1 = Number(readlineSync.question("What is the x coordinate of point A? "));
let y1 = Number(readlineSync.question("What is the y coordinate of point A? "));
let x2 = Number(readlineSync.question("What is the x coordinate of point B? "));
let y2 = Number(readlineSync.question("What is the y coordinate of point B? "));

/*This function uses the Math.sqrt and Math.pow functions to calculate the distance between two points thanks to their x and y coordinates and stocks the value inside the "dist" var.
This function uses this mathematical fomula: √ ((x2-x1)² + (y2-y1)²).
Then, it determines that the "dist" var should only display the first two decimals, only if necessary. The function declares the variable "roundDist" to stock it all and returns this same variable.*/
function calcDistance(x1, y1, x2, y2) {
    let dist = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)));
    let roundDist = parseFloat(dist.toFixed(2));
    return roundDist;
}

console.log("There is a distance of " + calcDistance(x1, y1, x2, y2)  + " between your 2 points.");