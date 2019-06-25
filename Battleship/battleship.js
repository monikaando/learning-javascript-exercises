var randomLoc = Math.floor(Math.random() *5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (isSunk == false) {
  guess = prompt("Ready, steady, go! (enter a number between 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Wrong number! You should put a number between 0-6");
    }
    else {
      guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
          hits = hits + 1;
          alert("Hit!");
            if (hits == 3) {
            isSunk = true;
             alert("Congratulation! You sank my ship!");
        }
          }
          else {
           alert("Miss");
      }
             
    }
  }

var stats = "You needed " + guesses + " tries, to sank the ship. " + "It means, that your efficiency is: " + (3/guesses) + ".";
alert(stats);
