// vests
$(document).ready(function () {
    $(document).on("click", ".plus-1", function () {
        $(".shopLook-main .shopLook").addClass("shopLook-toggle");
        $(".prime").css("opacity", "0.6");
    });

    $(document).on("click", ".shopLook-main .cross-icon", function () {
        $(".shopLook-main .shopLook").removeClass("shopLook-toggle");
        $(".prime").css("opacity", "1");
    });
});

// shorts
$(document).ready(function () {
    // Open shopLook on container click
    $(document).on("click", ".plus-2", function () {
        $(".shopLook-main-shorts .shopLook").addClass("shopLook-toggle");
        $(".prime").css("opacity", "0.6");
    });

    // Close shopLook on cross-icon click
    $(document).on("click", ".shopLook-main-shorts .cross-icon", function () {
        $(".shopLook-main-shorts .shopLook").removeClass("shopLook-toggle");
        $(".prime").css("opacity", "1");
    });
});