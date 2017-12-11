var REALLOGINBOIZButton = function(wrapper) {
    var summoner_name_form = $("<div> \n" +
    "<form id= \"summonerName\" class =\"wrapper_child\"> Summoner Name: <br> <input type=\"text\" name= \"Summoner Name\" class = \"req_sum_name\"><br></form>\n"+
    "</div> ");
    var password_form = $("<div>   \n"  +
    "<form id=\"password\" class =\"wrapper_child\"> Password: <br> <input type=\"text\" name= \"Password\" class = \"req_password\"><br></form> \n" +
    "</div>");
    $(wrapper).append(summoner_name_form, password_form);

    var login_button = document.getElementById("login_button");
    
    summoner_name_form.on("submit", function(a){
        a.preventDefault();
        login_button.onclick(a);
    });
    password_form.on("submit", function(a){
        a.preventDefault();
        login_button.onclick(a);
    });
    login_button.onclick = function (e)   {
        e.preventDefault();
        var req_summoner_name = $(summoner_name_form).find('.req_sum_name').val();
        var req_password = $(password_form).find('.req_password').val();
     
        if(req_summoner_name == "" ) {
            alert("You forgot your Summoner Name silly!");
            $(summoner_name_form).find('.req_sum_name').val("");
            return false;
        }

        if(req_password == "")    {
            alert("You forgot to input your password silly!");
            $(password_form).find('.req_password').val("");            
            return false;
        }

        localStorage.setItem("username", req_summoner_name);
        localStorage.setItem("user_profile", req_summoner_name);
        localStorage.setItem("login_state", "");
        localStorage.setItem("logout_state", "Log Out");
        
        console.log(req_summoner_name);
        console.log(req_password);
        
        $.ajax({
            url: 'http://localhost:3000/create_user?username=' + req_summoner_name +'&password=' + req_password + '&firstname=' + req_first_name +'&lastname=' + req_last_name,
            success: function(e){
              if(e.status == true)  {
              alert("login successful");
              return(req_summoner_name);
              return(req_password);
            } else if(e.status == false)    {
              alert("login attempt failed, invalid summoner name or password");
              return false;
            }
          });
        
      
        $(summoner_name_form).find('.req_sum_name').val("");
        $(password_form).find('.req_password').val("");
        
}
}