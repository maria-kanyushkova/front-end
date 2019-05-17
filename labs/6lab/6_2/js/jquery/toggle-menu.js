$(document).ready(function () {
    $(window).resize(function() {
        if ($(window.innerWidth < 992)) {
            if (!$(".navbar-toggler").hasClass("collapsed")) {
                $(".toggler-example").click();
            }
            $(".toggler-example__hamburger").removeClass("open");
        }
    });

    $(".first-button").on("click", function () {
        $(".toggler-example__hamburger").toggleClass("open");
    });


    $(".nav-link").on("click", function () {
        $(".toggler-example").click();
    });
});
