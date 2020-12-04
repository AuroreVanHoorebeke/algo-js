/*Aim: 
- Creating a function named randomizeCast(tvSerie) taking as argument the data structure of the previous exercise & return a list of the same cast but in a random order.
- Creating program using randomizeCast(tvSerie) & askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.*/

const readlineSync = require("readline-sync");

randomizeCast(askTVSerie());

/**
 * function asking user about their favorite show and returning an object with their
 */
function askTVSerie() {

    let name = readlineSync.question("What's your favorite TV Show? ");
    let prodYear = readlineSync.question("What's the show's production year? ");
    let castMembers = readlineSync.question("Who are the cast members ? (list them separated by a comma (,): ");
    // let name = "blabla";
    // let prodYear = "1990";
    // let castMembers = "blublu, blibli, bloblo, bleble";
    const cast = castMembers.split(",");


    let myShow = {
        Name: name,
        ProductionYear: prodYear,
        CastMembers: cast
    };

    return myShow;

}

/**
 * Shuffles using Fisher-Yates algorythm.
*/
function shuffle(arr){
    for(let i=arr.length-1; i>0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
}

/**
 * Function taking as argument the returned value of askTVSerie() and returning a shuffled list of cast members.
 */
function randomizeCast(x){

    console.log("avant shuffle");
    console.log(x.CastMembers);
    shuffle(x.CastMembers);
    console.log("après shuffle")
    console.log(x.CastMembers);
    //return myShow.CastMembers list in random order

    console.log(`You're lucky then, my next tv show called "The Worst People" starring ${x.CastMembers} is out next year!`)

}