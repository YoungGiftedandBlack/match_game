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

$(document).ready(function(){
  var list_1 = [];

  for (i = 1; i <= 8; i++){
    list_1.push(i);
  }

  for (i = 1; i <= 8; i++){
    list_1.push(i);
  }

  /* This needs simplifying OMFG!!!
  Consider using $("#game .card:nth-child(0n+1)").find(".back span")
  do {
  var y = 0;
  var rand = list_1[Math.floor(Math.random() * list_1.length)];
  y++;
}
  while {
  y < 16;
}
  */

  var rand_1 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(1)").find(".back span").html(rand_1);
  var index_1 = list_1.indexOf(rand_1);
  list_1.splice(index_1, 1);
  var rand_2 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(2)").find(".back span").html(rand_2);
  var index_2 = list_1.indexOf(rand_2);
  list_1.splice(index_2, 1);
  var rand_3 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(3)").find(".back span").html(rand_3);
  var index_3 = list_1.indexOf(rand_3);
  list_1.splice(index_3, 1);
  var rand_4 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(4)").find(".back span").html(rand_4);
  var index_4 = list_1.indexOf(rand_4);
  list_1.splice(index_4, 1);
  var rand_5 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(5)").find(".back span").html(rand_5);
  var index_5 = list_1.indexOf(rand_5);
  list_1.splice(index_5, 1);
  var rand_6 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(6)").find(".back span").html(rand_6);
  var index_6 = list_1.indexOf(rand_6);
  list_1.splice(index_6, 1);
  var rand_7 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(7)").find(".back span").html(rand_7);
  var index_7 = list_1.indexOf(rand_7);
  list_1.splice(index_7, 1);
  var rand_8 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(8)").find(".back span").html(rand_8);
  var index_8 = list_1.indexOf(rand_8);
  list_1.splice(index_8, 1);
  var rand_9 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(9)").find(".back span").html(rand_9);
  var index_9 = list_1.indexOf(rand_9);
  list_1.splice(index_9, 1);
  var rand_10 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(10)").find(".back span").html(rand_10);
  var index_10 = list_1.indexOf(rand_10);
  list_1.splice(index_10, 1);
  var rand_11 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(11)").find(".back span").html(rand_11);
  var index_11 = list_1.indexOf(rand_11);
  list_1.splice(index_11, 1);
  var rand_12 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(12)").find(".back span").html(rand_12);
  var index_12 = list_1.indexOf(rand_12);
  list_1.splice(index_12, 1);
  var rand_13 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(13)").find(".back span").html(rand_13);
  var index_13 = list_1.indexOf(rand_13);
  list_1.splice(index_13, 1);
  var rand_14 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(14)").find(".back span").html(rand_14);
  var index_14 = list_1.indexOf(rand_14);
  list_1.splice(index_14, 1);
  var rand_15 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(15)").find(".back span").html(rand_15);
  var index_15 = list_1.indexOf(rand_15);
  list_1.splice(index_15, 1);
  var rand_16 = list_1[Math.floor(Math.random() * list_1.length)];
  $("#game .card:nth-child(16)").find(".back span").html(rand_16);
  var index_16 = list_1.indexOf(rand_16);
  list_1.splice(index_16, 1);

});
