$(document).ready(function () {
    var loginPage = new loginButton($("#wrapper")[0]);
});

var loginButton = function(wrapper) {
    var summoner_name_form = $("<div class=\"container\">" + "<div class=\"input-group input-group-lg\" style=\"width:700px; background-color: white;\">" +
        "<input type=\"text\" class=\"form-control req_sum_name\" placeholder=\" Summoner Name / Username\" aria-describedby=\"basic-addon1\" style=\"text-align: center;\">" +
        "</div>" + "</div>");
    var first_name_form = $("<div class=\"container\">" + "<div class=\"input-group input-group-lg\" style=\"width:700px; background-color: white;\">" +
        "<input type=\"text\" class=\"form-control req_fir_name\" placeholder=\" First Name\" aria-describedby=\"basic-addon1\" style=\"text-align: center;\">" +
        "</div>" + "</div>");
    var last_name_form = $("<div class=\"container\">" + "<div class=\"input-group input-group-lg\" style=\"width:700px; background-color: white;\">" +
        "<input type=\"text\" class=\"form-control req_las_name\" placeholder=\" Last Name\" aria-describedby=\"basic-addon1\" style=\"text-align: center;\">" +
        "</div>" + "</div>");
    var password_form = $("<div class=\"container\">" + "<div class=\"input-group input-group-lg\" style=\"width:700px; background-color: white;\">" +
        "<input type=\"text\" class=\"form-control req_password\" placeholder=\" Password\" aria-describedby=\"basic-addon1\" style=\"text-align: center;\">" +
        "</div>" + "</div>");
    $(wrapper).append(summoner_name_form, first_name_form, last_name_form, password_form);

    var submit_button = document.getElementById("submit_button");
    

    first_name_form.on("submit", function(a)  {
        a.preventDefault();
        submit_button.onclick(a);
    });
    last_name_form.on("submit", function(b)  {
        b.preventDefault();
        submit_button.onclick(b);
    });
    password_form.on("submit", function(c)  {
        c.preventDefault();
        submit_button.onclick(c);
    });
    summoner_name_form.on("submit", function(d)  {
        d.preventDefault();
        submit_button.onclick(d);
    });

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

    