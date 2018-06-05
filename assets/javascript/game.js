var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
var answer = computerGuess.toUpperCase();

document.onkeyup = function(event) {
  
    // Determines which key was pressed.
    var userGuess = event.key;
 

   
console.log(computerGuess);
    if (guesses === 1) {
        losses++;
        document.getElementById('losses').innerHTML = losses;
        guesses = 9;
        document.getElementById('guesses').innerHTML = guesses;
        document.getElementById('guessed').innerHTML = "";
        document.getElementById('loser').innerHTML = "YOU LOSE, LOSER!!!  The correct answer was " + answer + "!";
        document.getElementById('evil').play();
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        answer = computerGuess.toUpperCase();
    }
   else if (userGuess === computerGuess) {
        wins++;
        document.getElementById('wins').innerHTML = wins;
        document.getElementById('guessed').innerHTML = "";
        guesses = 9;
        document.getElementById('guesses').innerHTML = guesses;
        document.getElementById('loser').innerHTML = "YOU MUST BE PSYCHIC! The correct answer was " + answer + "!";
        document.getElementById('brilliant').play();
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        answer = computerGuess.toUpperCase();
    
    }
    else if(userGuess !== computerGuess) {
        guesses--;
        document.getElementById('guesses').innerHTML = guesses;
        document.getElementById('guessed').innerHTML += userGuess += ",";
        document.getElementById('loser').innerHTML = "";
    
    }

};