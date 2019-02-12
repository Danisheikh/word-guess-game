var letters = ["x", "y", "z"];

var guessLetters = [];

var letterToGuess = null;

var GussessLeft = 3;

var wins = 0;
var lose = 0;


var updateGuessleft = function () {
    document.querySelector("#gussess-left").innerHTML = GussessLeft;
};

var updateletterToGuess = function () {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};





var updateGussesSofar = function() {
    document.querySelector("#gusses-so-far").innerHTML = guessLetters;
};
    

var Reset = function() {
    GussessLeft = 3;
    guessLetters = [];
    updateletterToGuess();
    updateGuessleft();
    updateGussesSofar();
};

//exicute on page load
updateletterToGuess();
updateGuessleft();

document.onkeydown = function(event) {
    GussessLeft--;

    var letter = String.fromCharCode(event.which).toLocaleLowerCase();



    guessLetters.push(letter);

    updateGuessleft();
    updateGussesSofar();

    if (letter === letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        Reset();
    }

    if (GussessLeft === 0) {
        lose++;
        document.querySelector("#losses").innerHTML = lose;
        Reset();
    }

};











