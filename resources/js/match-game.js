var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {

};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};

$(document).ready(function(){
  $(".card").flip();
  });

/*  var numberArray1 = [];
  for (i = 0; i <= 8; i++){
    numberArray1.push(i);
  }

  var numberArray2 = [];
  for (i = 0; i <= 8; i++){
    numberArray2.push(i);
  } */


var list_1 = [];

for (i = 1; i <= 8; i++){
  list_1.push(i);
}

for (i = 1; i <= 8; i++){
  list_1.push(i);
}

var rand = list_1[Math.floor(Math.random() * list_1.length)];
var rand_1
$("#game .row:nth-child(0n+1)").find("span").html(rand);
/*if($("#game .row").hasclass(".back")) {
  $(this).html(rand);
}*/
