$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:3000/get_all_users',
        success: function (e) {
            var array = e.names;

            for (var item in array) {
                console.log(array[item]);
                data.push({text: array[item]});
            }
            var teamCreation = new teamCreationButton($("#team")[0]);

        }

    })
});
data = [];

var teamCreationButton = function (team) {


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

    for (var i = 0; i < data.length; i++) {
        var d = data[i];
        player1drop.options.add(new Option(d.text, i + 1));
        player2drop.options.add(new Option(d.text, i + 1));
        player3drop.options.add(new Option(d.text, i + 1));
        player4drop.options.add(new Option(d.text, i + 1));
        player5drop.options.add(new Option(d.text, i + 1));
    }

    var more_teams_button = document.getElementById("moreTeamsButton");
    var to_tournaments_button = document.getElementById("returnToTournament");
    var team_name_form = $("<form id = \"team1nameform\">Team Name<input class = \"req_team_name\" type=\"text\"></form>");
    var seed_form = $("<form id = \"seedform\">Seed<input class = \"req_seed\" type=\"number\"></form>");
    $(team).prepend(team_name_form, seed_form);

    team_name_form.on("submit", function (e) {
        e.preventDefault();
        more_teams_button.onclick(e);
    });


    more_teams_button.onclick = function (e) {
        e.preventDefault();
        var player1 = $('#player1dropid option:selected')[0].text;
        var player2 = $('#player2dropid option:selected')[0].text;
        var player3 = $('#player3dropid option:selected')[0].text;
        var player4 = $('#player4dropid option:selected')[0].text;
        var player5 = $('#player5dropid option:selected')[0].text;
        var req_team_name = $(team_name_form).find('.req_team_name').val();
        var req_seed = $(seed_form).find('.req_seed').val();
        var tournament_name = localStorage.getItem("tournament_name");
        if (player1 == "Player" || player2 == "Player" || player3 == "Player" || player4 == "Player" || player5 == "Player") {
            alert("Ya din done forgot a player dipwad");
            return false;
        } else if (req_team_name == "") {
            alert("You forgot to name the team!");
            return false;
        } else {
            createAndSubmitTeam(tournament_name, req_team_name, player1, player2, player3, player4, player5, req_seed);
            $(team_name_form).find('.req_team_name').val("");
            alert("team submitted");
            return true;
        }
    }


    to_tournaments_button.onclick = function (e) {
        var t = more_teams_button.onclick(e);
        if (t == true) {
            window.location.href = "tournaments.html";
        }
    }

    function createAndSubmitTeam(tournament_name, team_name, player1, player2, player3, player4, player5, seed) {
        $.ajax({
            url: 'http://localhost:3000/create_team?team_name=' + team_name + '&tournament_name=' + tournament_name + '&seed=' + seed,
            success: function (e) {
                console.log(e);
                $.ajax({
                    url: 'http://localhost:3000/recruit_player?tournament_name=' + tournament_name + '&team_name=' + team_name + '&summoner_name=' + player1,
                    success: function (e) {
                        console.log(e);

                    }
                });
                $.ajax({
                    url: 'http://localhost:3000/recruit_player?tournament_name=' + tournament_name + '&team_name=' + team_name + '&summoner_name=' + player2,
                    success: function (e) {
                        console.log(e);

                    }
                });
                $.ajax({
                    url: 'http://localhost:3000/recruit_player?tournament_name=' + tournament_name + '&team_name=' + team_name + '&summoner_name=' + player3,
                    success: function (e) {
                        console.log(e);


                    }
                });
                $.ajax({
                    url: 'http://localhost:3000/recruit_player?tournament_name=' + tournament_name + '&team_name=' + team_name + '&summoner_name=' + player4,
                    success: function (e) {
                        console.log(e);

                    }
                });
                $.ajax({
                    url: 'http://localhost:3000/recruit_player?tournament_name=' + tournament_name + '&team_name=' + team_name + '&summoner_name=' + player5,
                    success: function (e) {
                        console.log(e);

                    }
                });
            }
        });
    }

};
