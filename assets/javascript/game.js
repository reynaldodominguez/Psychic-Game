var computerLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var lettersGuessed = [];

var found = false;

var wins = 0;

var looses = 0;

var guesses = 9;

var computerSelection = computerLetters[Math.floor(Math.random() * computerLetters.length)];

function print() {
    //Print the results to the p tag in html
    document.getElementById("line-1").innerHTML = "Wins: " + wins;
    document.getElementById("line-2").innerHTML = "Looses: " + looses;
    document.getElementById("line-3").innerHTML = "Guess Left: " + guesses;
    document.getElementById("line-4").innerHTML = "Your guesses so far: " + lettersGuessed;
}

function reset() {
    //set guesses to 9 for a new game
    guesses = 9;
    //Select another letter for a new game
    computerSelection = computerLetters[Math.floor(Math.random() * computerLetters.length)];
    //Empty the lettersGuessed array
    lettersGuessed = [];
    //Call function print
    print();
}

//Call function print to charge the page with the info
print();

document.onkeyup = function (event) {
    var keyPressed = event.key;
    keyPressed = keyPressed.toLocaleLowerCase();

    //Set variable found to false to reset if last time the letter was found in the guesses array 
    found = false;

    //Loop for computer letters array
    for (var i = 0; i < computerLetters.length; i++) {

        //Check if the key pressed is on the computer letter array to only run 
        //the code when the key clicked is in the computerLetters array
        if (keyPressed === computerLetters[i]) {
            console.log("check if the pressed is on the computer letter array " + keyPressed);
            console.log("Computer Selection " + computerSelection);

            //Loop for letters guesses array 
            for (var j = 0; j < lettersGuessed.length; j++) {
                //Check if the letter is in the letters already guesses to not allow repeat letters
                if (keyPressed === lettersGuessed[j]) {
                    //Message to alert that this letter was already clicked
                    alert("You already select the letter " + keyPressed + " Please select another letter");
                    //Set found to true to identify that this letter was already clicked
                    found = true;
                }
            }
            //Check if found is false this mean that the letter was not clicked before 
            if (found == false) {
                console.log(found);
                //decrease the variable guesses
                guesses--;
                //Add the letter clicked to the letter guesses array
                lettersGuessed.push(keyPressed);
                //call print function to uptate the info in the site
                print();

                //Check if the letter pressed is the same that the computer selected
                if (keyPressed === computerSelection) {
                    //alert the user that find the correct letter
                    alert("You Win the letter was " + keyPressed);
                    //Add 1 to wins 
                    wins = wins + 1;
                    //call function reset
                    reset();

                } else if (guesses === 0) {
                    //add 1 to looses
                    looses = looses + 1;
                    //call function reset
                    reset();
                }


            }


        }



    }
}