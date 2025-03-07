document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Load the components
    function loadComponent(divId, filePath) {
        return fetch(filePath)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.text();
            })
            .then(data => {
                document.getElementById(divId).innerHTML = data;

                // Step 2: Initialize events after component loads
                if (divId === "navReuse") {
                    setTimeout(() => {
                        initializeNavbarEvents();
                    }, 100);
                } else if (divId === "categories-filters") {
                    setTimeout(() => {
                        initializeFilterEvents();
                    }, 100);
                }
            })
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    }

    // First load the header and footer
    Promise.all([
        loadComponent("categories-filters", "categories-filters.html"),
    ]).then(() => {
        console.log("All filters components loaded");
    });

    // Function to initialize all navbar-related events
    function initializeNavbarEvents() {
        console.log("Initializing navbar events");
        // Your navbar event handlers
    }

    // Function to initialize all filter-related events
    function initializeFilterEvents() {
        console.log("Initializing filters toggle and brand dropdown");

        $(".QF-body").on("click", function () {
            $(this).children(".cross-icon").toggleClass("toggle-cross-icon");

        });

        // filter side toggle
        $(".filter").click(function () {
            $(".filter-side-toggle").addClass("toggle-filter-side");
            $("body").addClass("body-toggle");
        });

        $(".cross-icon").click(function () {
            $(".filter-side-toggle").removeClass("toggle-filter-side");
            $("body").removeClass("body-toggle");
        });

        $(".list-li").click(function () {
            $(this).children(".angle-right").toggle();
            $(this).children(".angle-down").toggle();
            $(this).siblings(".li-dropdown").toggle();
        });

        // popularity-dropdown-toggle
        $(".sort-by-brand").click(function () {
            $(".popularity-dropdown").toggleClass("popularity-dropdown-toggle");
            $(".angle-up-icon").toggle();
            $(".angle-down-icon").toggle();
        });

    }
});