// A list of choices for the browser

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// A loop that runs through the alphabet using the array above
//------------------------------------------------------------
//for (var computerChoiceIndex = 0; computerChoiceIdex < computerChoice.length; computerChoiceIndex++) {

// console.log(computerChoice[computerChoiceIndex]);

//}

// Score keeping
var wins = 0;
var losses = 0;
var attemptsLeft = 10;

//-------------------------------------------------------------------------------------------------
//When the user enters a key the function is run below.

document.onkeyup = function (event) {

    // User input
    var userGuess = event.key;

    // The users last guess
    var guessesSoFar = userGuess;

    // Randomly picks a letter
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    //Score Keeping
    if (userGuess === computerGuess) {
        wins++;
        alert("Good guess!");
        attemptsLeft = 10;
    } else {
        attemptsLeft--;
    }

    if (attemptsLeft === 0) {
        losses++;
        attemptsLeft = 10;
        alert("You lose. Better luck next!");
    }

    // Writes to index.html the score keeping variables
    document.getElementById("guesses-left").innerHTML = attemptsLeft;
    document.getElementById("guesses-so-far").innerHTML = guessesSoFar;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
};
