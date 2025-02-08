// box clicked 

$(document).ready(function () {
    $(".name").click(function () {
        $(this).toggleClass("name-bg-toggle");
    });
})

// sort by dropdown
$(document).ready(function () {
    $(".sort-by-li").click(function () {
        $(".sort-by-dropdown").toggleClass("li-dropdown-toggle");
        $(".sort-by-li").toggleClass("li-toggle");
        $(".sort-by-li .angle-right-icon").toggleClass("angle-right-icon-toggle");
    });
});

// size dropdown
$(document).ready(function () {
    $(".size-li").click(function () {
        $(".size-dropdown").toggleClass("li-dropdown-toggle");
        $(".size-li").toggleClass("li-toggle");
        $(".size-li .angle-right-icon").toggleClass("angle-right-icon-toggle");
    });
});



