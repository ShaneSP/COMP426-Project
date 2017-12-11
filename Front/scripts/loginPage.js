$(document).ready(function () {
    var REALLOGINBOIZ = new REALLOGINBOIZButton($("#wrapper")[0]);
});

var REALLOGINBOIZButton = function(wrapper) {
    var summoner_name_form = $("<div class=\"container\">" + "<div class=\"input-group input-group-lg\" style=\"width:700px; background-color: white;\">" +
        "<input type=\"text\" class=\"form-control req_sum_name\" placeholder=\" Username\" aria-describedby=\"basic-addon1\" style=\"text-align: center;\">" +
        "</div>" + "</div>");
    var password_form = $("<div class=\"container\">" + "<div class=\"input-group input-group-lg\" style=\"width:700px; background-color: white;\">" +
        "<input type=\"password\" class=\"form-control req_password\" placeholder=\" Password\" aria-describedby=\"basic-addon1\" style=\"text-align: center;\">" +
        "</div>" + "</div>");
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

        console.log(req_summoner_name);
        console.log(req_password);

        $.ajax({
            url: 'http://localhost:3000/login?username=' + req_summoner_name +'&password=' + req_password,
            success: function(e){
              console.log(e);
              if(e.status == true)  {
              alert("login successful");
              localStorage.setItem("username", req_summoner_name);
              localStorage.setItem("user_profile", req_summoner_name);
              localStorage.setItem("login_state", "");
              localStorage.setItem("logout_state", "Log Out");
              return(req_summoner_name);
              return(req_password);
              location.href = "index.html";

            } else if(e.status == false)    {
              alert("login attempt failed, invalid summoner name or password");
              return false;
            }
        }
          });


        $(summoner_name_form).find('.req_sum_name').val("");
        $(password_form).find('.req_password').val("");

}
}
