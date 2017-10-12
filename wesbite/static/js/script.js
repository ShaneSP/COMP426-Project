$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('#navBar').find('li').on("click", function (e) {
        $('a.active').removeClass('active');
        $(this).find('a').addClass('active');
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        shouldChangeSelector = false;
        $root.animate({scrollTop: $($.attr(this, 'href')).offset().top - 59}, 500, function () {
            shouldChangeSelector = true;
        });
    });

});

var shouldChangeSelector = true;
var $root = $('body, html');

function onScroll(event) {
    if (shouldChangeSelector){
        var scrollPos = $(document).scrollTop();
        $('#navBar').find('li a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr('href'));
            if (refElement.position().top <= scrollPos + 59 && refElement.position().top + refElement.height() > scrollPos - 59) {
                console.log(true);
                $('a.active').removeClass("active");
                currentLink.addClass("active");
            } else {
                console.log(false);
                currentLink.removeClass("active");
            }
        });
    }
}

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