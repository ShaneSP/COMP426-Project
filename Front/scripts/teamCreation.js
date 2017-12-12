
var more_teams_button = document.getElementById("moreTeamsButton");
var to_tournaments_button = document.getElementById("returnToTournament");

function anotherTeam()  {

}
var player1form = document.getElementById("player1drop");

function getSelectedOption(sel) {
    var opt;
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return opt;
}

function  toTournament()   {
    console.log(getSelectedOption(player1form));
  }

