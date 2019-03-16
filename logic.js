//global variables:
var wordOptions = ["mariam", "rania", "ayesha", "ahmed", "mozzam", "momin", "noni", "dani"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game Counter:
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
//==============================================================================


//Functions:

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;



    //Reset:
    winCount = 0;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanks and sucesses with right number of blanks:
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }


    //change HTML to reflet right number of Blank:
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("WinCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;




    //Testing and debuging:
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLettrs(letters) {
    //check if letter exsit in the word 

    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letters) {
            isLetterInWord = true;
        }
    }
    //check where in the world letter exist.

    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letters) {
                blanksAndSuccesses[i] = letters;
            }
        }
    }

    //If letter wasn't found.
    else {
        wrongLetters.push(letters);
        guessesLeft--
    }

    //Testing and debugging.

    console.log(blanksAndSuccesses);

}

function roundComplete() {
    console.log("win Count:" + winCount + "| Loss Count:" + lossCount + "| Gussess Left:" + guessesLeft);



    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters;
    // Check if user win 

    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won!!!");

        //Update the info counter in the HTML.

        document.getElementById("WinCounter").innerHTML = winCount++;

        startGame();
    }

    //check if use lost.

    else if (guessesLeft == 0) {
        lossCount++;
        alert("You Lost!!!");
        document.getElementById("lossCounter").innerHTML = lossCount++;

        startGame();

    }
}

//==============================================================================


//Invocation:
startGame();

// Regiestering key Clicks

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLettrs(letterGuessed);
    roundComplete();

    //Testing and debugging
    console.log(letterGuessed);

}