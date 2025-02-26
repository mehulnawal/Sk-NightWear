$(document).ready(function () {
    $(".QF-body").on("click", function () {
        $(this).children(".cross-icon").toggleClass("toggle-cross-icon");
    });
});

// filter side toggle
$(document).ready(function () {

    $(".filter").click(function () {
        $(".filter-side-toggle").addClass("toggle-filter-side");
    });

    $(".cross-icon").click(function () {
        $(".filter-side-toggle").removeClass("toggle-filter-side");
    });

    $(".filter-type").click(function () {
        $(this).children(".angle-up").toggle();
        $(this).children("angle-down").toggle();
        $(this).siblings(".dropdown").toggle();
    })
});

// popularity-dropdown-toggle
$(document).ready(function () {
    $(".sort-by-brand").click(function () {
        $(".popularity-dropdown").toggleClass("popularity-dropdown-toggle");
        $(".angle-up-icon").toggle();
        $(".angle-down-icon").toggle();
    });
});

