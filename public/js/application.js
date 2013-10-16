$(document).ready(function() {
  console.log("got here")
  var player1 = new Player("jim", 32, "#player1_strip");
  var player2 = new Player("anne", 80, "#player2_strip");

  var game = new Game(player1, player2);

  $(document).on('keyup', function(event) {
    console.log(event.which);
    game.onKeyUp(event.which);
  });
});

function Player(name, keyCode, DOM_element){
  this.counter = 0
  this.name = name
  this.keyCode = keyCode
  this.DOM_element = DOM_element
}

Player.prototype.advance = function() {
  this.counter += 1
  console.log(this.counter)
  if(this.counter <= 12){
    $(this.DOM_element + ' .active').next().addClass('active');
    $(this.DOM_element + ' .active').prev().removeClass('active');
  } else {
    this.counter = 0
    this.persist_results();
    }
}

Player.prototype.persist_results = function() {
  var winner = {player_id : $(this.DOM_element + ' .active').attr('id')};
  $.post('/results', winner, function(response){
    $('.racer_table').after(response);
  });
}

function Game(player1, player2){
  this.player1 = player1
  this.player2 = player2
}

Game.prototype.onKeyUp = function(keyCode) {
  var playerToMove = this.findPlayerToMove(keyCode)
  if (playerToMove) {
    playerToMove.advance();
  }
}

Game.prototype.findPlayerToMove = function(keyCode) {
  if (keyCode === this.player1.keyCode) {
    return this.player1
  }
  else if (keyCode === this.player2.keyCode) {
    return this.player2
  }
  else {
    return false
  }
}

