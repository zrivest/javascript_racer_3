$(document).ready(function() {
  var player1_counter = 0;
  var player2_counter = 0;

  $(document).on('keyup', function(e) {
      if(e.keyCode == 80) {
        $('#player1_strip .active').next().addClass('active');
        $('#player1_strip .active').prev().removeClass('active');
         player1_counter += 1;
         if(player1_counter === 12) {
           console.log($('#player1_strip .active'));
           alert("Player 1 wins!");
           player1_counter = 0;
           player2_counter = 0;
           var winner = {player_id : $('#player1_strip .active').attr('id')};
            console.log(winner)
             $.post('/results', winner, function(response){
             $('.racer_table').after(response);

            });



           $('#player1_strip').children('.active').removeClass();
           $('#player1_strip').children().first().addClass('active');
           $('#player2_strip').children('.active').removeClass();
           $('#player2_strip').children().first().addClass('active');


         }
      }
  });
  $(document).on('keyup', function(e) {
      if(e.keyCode == 32) {
        $('#player2_strip .active').next().addClass('active');
        $('#player2_strip .active').prev().removeClass('active');
        player2_counter += 1;
         if(player2_counter === 12) {
           console.log($('#player2_strip .active'));
           alert("Player 2 wins!");
           player1_counter = 0;
           player2_counter = 0;
           var winner = {player_id : $('#player2_strip .active').attr('id')};
            console.log(winner)
             $.post('/results', winner, function(response){
             $('.racer_table').after(response);

            });

           $('#player1_strip').children('.active').removeClass();
           $('#player1_strip').children().first().addClass('active');
           $('#player2_strip').children('.active').removeClass();
           $('#player2_strip').children().first().addClass('active');

        }
      }
  });
});
