var gamePattern = [];

var userClickedPattern = [];

var started = false;


var level = 0;

var buttonsColors = ["red", "blue", "green", "yellow"];

function startOver(){
  started = false;

  level = 0;

  userClickedPattern = [];

  gamePattern = [];

}

function checkAnswer(currentLevel) {


        if(gamePattern[currentLevel] === userClickedPattern[currentLevel] ) {
          console.log("success");

          if(userClickedPattern.length === gamePattern.length){

   setTimeout(function() {nextSequence();
   },1000);
  }
}
  else {
    console.log('false');

    playSound("wrong");

    $('body').addClass('game-over')

    setTimeout(function() {

      $('body').removeClass('game-over');
    }, 200);

    $('h1').text("Game Over, Press Any Key to Restart");

    startOver();

  }
}

function nextSequence() {
userClickedPattern = [];
  level++;

  $("h1").text("Level " + level);

  var randomNumbers = Math.floor((Math.random() * 4));

  var randomChosenColor = buttonsColors[randomNumbers];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);

  // userColorPattern = [];

  console.log(userClickedPattern);

}


$(document).keydown(function() {

  if (!started) {

    $("h1").text("Level " + level);

    nextSequence();

    started = true;
  }
});


$('.btn').click(function() {

  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length -1);
});

function playSound(name) {

  var audio = new Audio("sounds/" + name + '.mp3');

  audio.play();
}

function animatePress(currentColor) {

  $(".btn." + currentColor).addClass('pressed')

  setTimeout(function() {

    $(".btn." + currentColor).removeClass('pressed');
  }, 100);

  console.log("pressed");
}
