let plusIcon = document.getElementById("plus");
let minusIcon = document.getElementById("minus");
let quantity = document.getElementById("quantity-number");

plusIcon.addEventListener("click", function () {
    if (quantity.innerText >= 1) {
        quantity.innerText = parseInt(quantity.innerText) + 1;
    }
});

minusIcon.addEventListener("click", function () {
    if (quantity.innerText > 1) {
        quantity.innerText = parseInt(quantity.innerText) - 1;
    }
});

// decrease the quantity on clicking plus 
minusIcon.addEventListener("mouseover", function () {

    if (quantity.innerText == 1) {
        $(this).css({
            "cursor": "not-allowed",
        })
    }
    else {
        $(this).css({
            "cursor": "pointer",
        })
    }
});

// toggle return policy
$(".toggle-return-policy").click(function () {
    $(".return-main").toggleClass("toggle-return-main");
    $("body").addClass("body-toggle");
    $("body").addClass("no-scroll");
    $(".body-opacity").show();
});

$(".return-cross-icon").click(function () {
    $(".return-main").removeClass("toggle-return-main");
    $("body").removeClass("no-scroll");
    $("body").removeClass("body-toggle");
    $(".body-opacity").hide();
});

// toggle size chart 
$(".size-chart-box").click(function () {
    $(".size-chart-main").toggleClass("toggle-size-chart-main");
    $("body").addClass("body-toggle");
    $("body").addClass("no-scroll");
    $(".body-opacity").show();
});

$(".size-close").click(function () {
    $(".size-chart-main").removeClass("toggle-size-chart-main");
    $("body").removeClass("no-scroll");
    $("body").removeClass("body-toggle");
    $(".body-opacity").hide();
});