var tournamentCreationButton = function(wrapper) {
    var tournament_name_form = $("<div> \n" +
    "<form id= \"tournamentName\" class =\"wrapper_child\"> Tournament Name: <br> <input type=\"text\" name= \"Tournament Name\" class = \"req_tou_name\"><br></form>\n"+
    "</div> ");
    var organizer_form = $("<div> \n"  +
    "<form id=\"organizerName\" class =\"wrapper_child\"> Organizer's Summoner Name: <br> <input type=\"text\" name= \"Organizer Name\" class = \"req_org_name\"><br></form>\n" +
    "</div>");
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
