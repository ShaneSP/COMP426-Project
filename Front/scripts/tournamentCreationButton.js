var tournamentCreationButton = function(wrapper) {
    var tournament_name_form = $("<div> \n" +
    "<form id= \"tournamentName\" class =\"wrapper_child\"> Tournament Name: <br> <input type=\"text\" name= \"Tournament Name\" class = \"req_tou_name\"><br></form>\n"+
    "</div> ");
    var organizer_form = $("<div> \n"  +
    "<form id=\"organizerName\" class =\"wrapper_child\"> Organizer's Summoner Name: <br> <input type=\"text\" name= \"Organizer Name\" class = \"req_org_name\"><br></form>\n" +
    "</div>");
    $(wrapper).append(tournament_name_form, organizer_form);
}