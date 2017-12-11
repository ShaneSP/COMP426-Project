

var loginButton = function(wrapper) {
    var summoner_name_form = $("<div> \n" +
    "<form id= \"summonerName\" class =\"wrapper_child\"> Summoner Name: <br> <input type=\"text\" name= \"Summoner Name\" class = \"req_sum_name\"><br></form>\n"+
    "</div> ");
    var first_name_form = $("<div> \n"  +
    "<form id=\"firstName\" class =\"wrapper_child\"> First Name: <br> <input type=\"text\" name= \"First Name\" class = \"req_fir_name\"><br></form>\n" +
    "</div>");
    var last_name_form = $("<div>   \n" +
    "<form id=\"lastName\" class =\"wrapper_child\"> First Name: <br> <input type=\"text\" name= \"First Name\" class = \"req_las_name\"><br></form>\n" +
    "</div>");
    var password_form = $("<div>   \n"  +
    "<form id=\"password\" class =\"wrapper_child\"> Password: <br> <input type=\"text\" name= \"Password\" class = \"req_password\"><br></form> \n" +
    "</div>");
    $(wrapper).append(summoner_name_form, first_name_form, last_name_form, password_form);

    var submit_button = document.getElementById("submit_button");
    

    submit_button.onclick = function (e)   {
        e.preventDefault();

        var req_summoner_name = $(summoner_name_form).find('.req_sum_name').val();
        var req_first_name = $(first_name_form).find('.req_fir_name').val();
        var req_last_name = $(last_name_form).find('.req_las_name').val();
        var req_password = $(password_form).find('.req_password').val();
    
        if(req_summoner_name == "" ) {
            alert("You forgot your Summoner name silly!");
            $(summoner_name_form).find('.req_sum_name').val("");
            return false;
        }

        if(req_first_name == "")    {
            alert("You forgot your first name silly!");
            $(first_name_form).find('.req_fir_name').val("");            
            return false;
        }
        if(req_last_name == "")     {
            alert("You forgot your last name silly!");
            $(last_name_form).find('.req_las_name').val("");
            return false;            
        }
        if(req_password == "")  {
            alert("You forgot to pick a password silly!");
            $(password_form).find('.req_password').val(""); 
            return false;
        }
        console.log(req_summoner_name);
        console.log(req_first_name);
        console.log(req_last_name);
        console.log(req_password);

        $.ajax({
            url: 'http://localhost:3000/create_user?username=' + req_summoner_name +'&password=' + req_password + '&firstname=' + req_first_name +'&lastname=' + req_last_name,
            success: function(e){
              alert("success");
            }
          });

        $(summoner_name_form).find('.req_sum_name').val("");
        $(first_name_form).find('.req_fir_name').val("");
        $(last_name_form).find('.req_las_name').val("");
        $(password_form).find('.req_password').val(""); 
        
        
}  
}

    