$(document).ready(function () {
    var teamCreation = new teamCreationButton($("#team")[0]);
});

var teamCreationButton = function(team) {

var data = [{text: "same"},
    {text:"as"},
    {text:"fuck"},
];

var player1drop = document.getElementById("player1dropid");
var player2drop = document.getElementById("player2dropid");
var player3drop = document.getElementById("player3dropid");
var player4drop = document.getElementById("player4dropid");
var player5drop = document.getElementById("player5dropid");

player1drop.options.length = 1;
player2drop.options.length = 1;
player3drop.options.length = 1;
player4drop.options.length = 1;
player5drop.options.length = 1;

for(var i = 0; i < data.length; i++)    {
    var d = data[i];
    player1drop.options.add(new Option(d.text, i+1));
    player2drop.options.add(new Option(d.text, i+1));
    player3drop.options.add(new Option(d.text, i+1));
    player4drop.options.add(new Option(d.text, i+1));
    player5drop.options.add(new Option(d.text, i+1));    
}

var more_teams_button = document.getElementById("moreTeamsButton");
var to_tournaments_button = document.getElementById("returnToTournament");
var team_name_form = $("<form id = \"team1nameform\">Team Name<input class = \"req_team_name\" type=\"text\"></form>");
$(team).prepend(team_name_form);

team_name_form.on("submit", function(e){
    e.preventDefault();
    more_teams_button.onclick(e);
});


more_teams_button.onclick = function(e) {
    e.preventDefault();
    var player1 = $('#player1dropid option:selected')[0].text;
    var player2 = $('#player2dropid option:selected')[0].text;
    var player3 = $('#player3dropid option:selected')[0].text;
    var player4 = $('#player4dropid option:selected')[0].text;
    var player5 = $('#player5dropid option:selected')[0].text;   
    var req_team_name = $(team_name_form).find('.req_team_name').val();    
if(player1 == "Player" || player2 == "Player" || player3 == "Player" || player4 == "Player" || player5 == "Player"){
    alert("Ya din done forgot a player dipwad");
    return false;
} else if(req_team_name == "") {
    alert("You forgot to name the team!");
    return false;
}   else{
    submitTeam("test", req_team_name, player1, player2, player3, player4, player5);
    $(team_name_form).find('.req_team_name').val("");
    alert("team submitted");
    return true;
}  
}




to_tournaments_button.onclick = function(e) {
    var t = more_teams_button.onclick(e);
    if(t == true)   {
    window.location.href = "tournaments.html";
    }
  }

function submitTeam(tournament_name, team_name, player1, player2, player3, player4, player5)   {
    console.log(team_name);
    //make ajax call
}
}