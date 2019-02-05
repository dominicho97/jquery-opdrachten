let startGame = $(".playButton").click(function() {
  alert("Your choice is " + myPlay(weapons));
});

//PC choice
function pcChoice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

var items = ["Rock", "Paper", "Scissors"];
alert("Computer choice is " + pcChoice(items));

// My play

function myPlay(weapons) {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

var weapons = ["Rock", "Paper", "Scissors"];

//compare
/*function compare() {
  if (pcChoice === "Paper" && myPlay === "Scissors") {
    alert("You win!");
  } else if (pcChoice === "Paper" && myPlay === "Rock") {
    alert("You lose");
  }
}

compare();*/
