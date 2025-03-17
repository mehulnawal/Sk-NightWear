/*
1. xxl click - add to cart - text change -> sold out -> toggle -> change the bg of sold out done
2. sizes -> css change -> background color -> black
3. sizes click - add to cart - no text change
4. change prices on clicking on xl & xxl
5. increase number of quantity - clicking plus -> if less than 0 then minus cursor -> no clickable 
6. decrease the gap between the product carousel
7. only one size can be select at a time

*/

// toggle add to cart text and css
$(".sold-out").click(function () {
    let addToCart = $("#add-to-cart");

    if (addToCart.text() === "Add to Cart") {
        addToCart.text("Sold Out");
    } else {
        addToCart.text("Add to Cart");
    }

    addToCart.toggleClass("toggle-addToCart");
});

// change bg-color and color of size names 
$(".size-name").click(function () {
    let bgColor = $(this).css("background-color");

    if (bgColor === "rgb(255, 255, 255)") {
        $(this).css({
            "backgroundColor": "#000",
            "color": "#fff",
        })
    }
    else {
        $(this).css({
            "backgroundColor": "#fff",
            "color": "#000",
        })
    }
});

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