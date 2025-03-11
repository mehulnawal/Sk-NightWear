// nav bar 

// responsive menu srt
$(document).ready(function () {

    $(".menu").click(function () {
        $(".menu1").addClass("menu1-toggle");
        $(".menu2").addClass("menu2-toggle");
    })

    $(".menu-list").click(function () {
        $(".menu-icon-toggle").addClass("toggle-menu");
        return false;
    })

    $(".cross").click(function () {
        $(".menu-icon-toggle").removeClass("toggle-menu");
        $(".menu1").removeClass("menu1-toggle");
        $(".menu2").removeClass("menu2-toggle");
        return false;
    })
})
// responsive menu srt


// accordion srt
$(document).ready(function () {
    $(".q1-title").click(function () {
        const parent = $(this).parent();
        const content = parent.find(".q1-content");
        const view = parent.find(".view");
        const close = parent.find(".close");

        // Close other sections
        $(".q1")
            .not(parent)
            .find(".q1-content:visible")
            .slideUp(300) // Smoothly close
            .parent()
            .find(".view").fadeIn(200); // Show "View"
        $(".q1")
            .not(parent)
            .find(".close").fadeOut(200); // Hide "Close"

        // Toggle current section
        if (content.is(":visible")) {
            content.slideUp(300);
            view.fadeIn(200);
            close.fadeOut(200);
        } else {
            content.slideDown(300);
            view.fadeOut(200);
            close.fadeIn(200);
        }
    });
});

// accordion end


document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll('.categories-content li');

    categories.forEach(category => {
        category.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent bubbling up

            // Collapse all categories except the clicked one
            categories.forEach(item => {
                if (item !== category) {
                    item.classList.remove('dropdown-active');
                }
            });

            // Toggle the clicked category
            category.classList.toggle('dropdown-active');
        });
    });
});




$(document).ready(function () {
    $(".new-arrivals-main").click(function () {
        $(".new-arrivals-content").slideToggle();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll('.new-arrivalsy-content li');

    categories.forEach(category => {
        category.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent bubbling up

            // Collapse all categories except the clicked one
            categories.forEach(item => {
                if (item !== category) {
                    item.classList.remove('dropdown-active');
                }
            });

            // Toggle the clicked category
            category.classList.toggle('dropdown-active');
        });
    });
});

// search srt
$(document).ready(function () {
    $("#search-icon").click(function () {
        $(".search-bar-main-main").addClass("search-bar-main-main-transform");
        return false;
    });

    $("#search-close-icon").click(function () {
        $(".search-bar-main-main").removeClass("search-bar-main-main-transform");
        return false;
    });
});

// search end

// cart icon
$(document).ready(function () {
    $("#cart-icon").click(function () {
        $(".shopping-cart-main").addClass("shopping-cart-main-transform");
        return false;
    });
});
$(document).ready(function () {
    $("#close-cart-icon").click(function () {
        $(".shopping-cart-main").removeClass("shopping-cart-main-transform");

    });
});
// cart
// cart icon


//this is comment out because i want user login first and then use it
// cart icon
// $(document).ready(function () {
//     $(".hear-icon-open").click(function () {
//         $(".wishlist-main").addClass("wishlist-tranform");
//         return false;
//     });
// });

// $(document).ready(function () {
//     $("#heart-close-icon").click(function () {
//         $(".wishlist-main").removeClass("wishlist-tranform");

//     });
// });
// cart
// cart icon


// user login
// user login
$(document).ready(function () {
    $("#user-icon").click(function () {
        $(".form-main").show(); // Ensure form is visible
        $(".form-main").removeClass("form-main-transform"); // Reset animation

        setTimeout(function () {
            $(".form-main").addClass("form-main-transform");
        }, 10);

        return false;
    });

    $("#user-close-icon").click(function () {
        $(".form-main").removeClass("form-main-transform"); // Trigger closing animation

        setTimeout(function () {
            $(".form-main").css("display", ""); // Reset display (instead of .hide())
        }, 300); // Adjust timeout based on animation duration
    });
});
