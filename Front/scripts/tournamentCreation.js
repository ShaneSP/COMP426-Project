$(document).ready(function () {
    var tournamentCreationPage = new tournamentCreationButton($("#wrapper")[0]);
});

var tournamentCreationButton = function(wrapper) {
    var tournament_name_form = $("<div class=\"container\">" + "<div class=\"input-group input-group-lg\" style=\"width:700px; background-color: white;\">" +
        "<input type=\"text\" class=\"form-control req_tou_name\" placeholder=\" Tournament Name\" aria-describedby=\"basic-addon1\" style=\"text-align: center; padding-left: 0px; padding-right: 0px; padding-top: 10px; padding-bottom: 10px;\">" +
        "</div>" + "</div>");
    var organizer_form = $("<div class=\"container\">" + "<div class=\"input-group input-group-lg\" style=\"width:700px; background-color: white;\">" +
        "<input type=\"text\" class=\"form-control req_org_name\" placeholder=\" Organizer Name\" aria-describedby=\"basic-addon1\" style=\"text-align: center; padding-left: 0px; padding-right: 0px; padding-top: 10px; padding-bottom: 10px;\">" +
        "</div>" + "</div>");
    $(wrapper).append(tournament_name_form, organizer_form);

    var tournament_button = document.getElementById("tournament_button");

    tournament_name_form.on("submit", function(a){
        a.preventDefault();
        tournament_button.onclick(a);
    });
    organizer_form.on("submit", function(a){
        a.preventDefault();
        tournament_button.onclick(a);
    });
    tournament_button.onclick = function (e)   {
        e.preventDefault();
        var req_tournament_name = $(tournament_name_form).find('.req_tou_name').val();
        var req_organizer = $(organizer_form).find('.req_org_name').val();

        if(req_tournament_name == "" ) {
            alert("You forgot to name your tournament silly!");
            $(tournament_name_form).find('.req_tou_name').val("");
            return false;
        }

        if(req_organizer == "")    {
            alert("You forgot your own name silly!");
            $(organizer_form).find('.req_org_name').val("");
            return false;
        }

        console.log(req_tournament_name);
        console.log(req_organizer);

        $.ajax({
            url: 'http://localhost:3000/create_tournament?tournament_name=' + req_tournament_name +'&summoner_name=' + req_organizer,
            success: function(e){
              alert("success");
            }
          });

        $(tournament_name_form).find('.req_tou_name').val("");
        $(organizer_form).find('.req_org_name').val("");


}
}
