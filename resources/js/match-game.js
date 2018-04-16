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

/*$(document).ready(function(){
  $(".card").flip();
});*/

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

$(document).ready(function(){
  $("#game .card .back").click(function() {
    if ($(this).css("z-index") == "1") {
      /*alert("The #" + $(this).children("span").text() + " card is facing up");*/
    }
  });
});

/* This function pushes the value of the card to face_up_cards variable as long as the number of face_up_cards <= 2 after, if face_up_cards = 3
it should remove the 0 & 1 indexed values. Then check for whether the values in the array match? */
$(document).ready(function(){
  var face_up_cards = [];
  $("#game .card .front").click(function(){

    /* these if functions check face up card values and change the background if the cards match */
    if (face_up_cards.length <= 1) {
      face_up_cards.push($(this).siblings(".back").children("span").text());
      document.getElementById("demo").innerHTML = face_up_cards;
      /* This function needs to remove the card's array value from the list_1 */


      if (face_up_cards[0] == face_up_cards[1]) {

        $(this).siblings(".back").removeClass("unmatched_card").addClass("matched_card");
        $(this).parent().css("pointer-events", "none");

        $(".back").filter(function() {
          if ($(this).css("z-index") == "1") {
            $(this).removeClass("unmatched_card").addClass("matched_card");
            $(this).parent().css("pointer-events", "none");
          }
        });
      }

      if (face_up_cards.length == 2) {
        if (face_up_cards[0] != face_up_cards[1]) {
          setTimeout(function () {
            $(".unmatched_card").parent().flip(false);
          }, 750);
      }

      }
    }
    if (face_up_cards.length > 1) {
      face_up_cards.splice(0, 2);
    }
  });
});

/* this function removes the turned cards' value from the array so that it can't match with itself */
