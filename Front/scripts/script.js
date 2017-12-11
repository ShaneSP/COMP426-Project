$(document).ready(function () {
    $('#navBar').find('li.highlight').on("click", function (e) {
        $('a.active').removeClass('active');
        $(this).find('a').addClass('active');
    });


});

var $root = $('body, html');
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $root.animate({scrollTop: $($.attr(this, 'href')).offset().top - 59}, 500);
});

function onSignIn(googleUser) {
    var $intro = $('#intro');

    var profile = googleUser.getBasicProfile();
    $intro.append('Id: ' + profile.getId() + '<br>' +
        'Name: ' + profile.getName() + '<br>' +
        'URL: ' + profile.getImageUrl() + '<br>' +
        'Email: ' + profile.getEmail() + '<br>');
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}