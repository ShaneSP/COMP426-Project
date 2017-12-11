function player1Function() {
    document.getElementById("player1").classList.toggle("show");
}

function player2Function()  {
    document.getElementById("player2").classList.toggle("show");
}

function player3Function()  {
    document.getElementById("player3").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it

$("button[class*=dropbtn]").on("mouseclick", function() {
    console.log("test");
    $(this).toggleClass("show");
});

// $("div[class*=team-]")

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  } 
}