document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const wishlistLinks = document.querySelectorAll(".hear-icon-open");
        const wishlistSection = document.querySelector(".wishlist-main");
        const heartCloseIcon = document.getElementById("heart-close-icon");
        const loginFormSection = document.querySelector(".form-main");

        console.log("Wishlist Links Found:", wishlistLinks.length); // Debugging log

        wishlistLinks.forEach((link) => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (localStorage.getItem("token")) {
                    wishlistSection.classList.add("wishlist-tranform"); // Show wishlist section
                } else {
                    wishlistSection.classList.remove("wishlist-tranform");
                    localStorage.setItem("showWishlistAfterLogin", "true"); // Store flag

                    Swal.fire({
                        toast: true,
                        icon: "error",
                        title: "Please login to view Wishlist",
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });

                    // Trigger login form
                    loginFormSection.style.display = "block";
                    loginFormSection.classList.remove("form-main-transform");

                    setTimeout(() => {
                        loginFormSection.classList.add("form-main-transform");

                    }, 10);
                }
            });
        });

        heartCloseIcon.addEventListener("click", function () {
            wishlistSection.classList.remove("wishlist-tranform");
        });

        // Check and show wishlist after login
        if (localStorage.getItem("showWishlistAfterLogin") === "true" && localStorage.getItem("token")) {
            wishlistSection.classList.add("wishlist-tranform");
            localStorage.removeItem("showWishlistAfterLogin");
        }
    }, 500); // Small delay to ensure elements exist
});


document.addEventListener("DOMContentLoaded", function () {
    // ✅ Keep wishlist open after login
    if (localStorage.getItem("wishlist_open") === "true") {
        document.querySelector(".wishlist-main").classList.add("wishlist-tranform");
        localStorage.removeItem("wishlist_open"); // Remove flag after use
    }
});
