// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie: Name, Production Year, Names of the cast members (there can be as much as the user want).
// Everything: in a single object. 
const readlineSync = require("readline-sync");

function askTVSerie() {

    let name = readlineSync.question("What's your favorite TV Show? ");
    let prodYear = readlineSync.question("What's the show's production year? ");
    let castMembers = readlineSync.question("Who are the cast members ? (list them separated by a comma (,): ");

    let myShow = {
        Name: name,
        ProductionYear: prodYear,
        CastMembers: castMembers
    };

    console.log(myShow);
}

askTVSerie();