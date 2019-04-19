$(document).ready(function () {

    $(".first-button").on("click", function () {

        $(".toggler-example__hamburger").toggleClass("open");
    });


    $(".nav-link").on("click", function () {
        $(".toggler-example").click();
    });
});
