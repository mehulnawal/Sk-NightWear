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
                        setActiveNavLink();
                    }, 100); // Small delay to ensure DOM is fully updated
                }
            })
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    }

    // First load the header and footer
    Promise.all([
        loadComponent("navReuse", "head.html"),
        loadComponent("footerReuse", "footer.html")
    ]).then(() => {
        console.log("All components loaded");
    });

    // Function to set active class based on current page
    function setActiveNavLink() {
        console.log("Setting active nav link");
        // Get the current page from URL
        const currentPath = window.location.pathname;
        const pageName = currentPath.split('/').pop() || 'index.html';

        console.log("Current page:", pageName);

        // Select all navigation links
        const navLinks = document.querySelectorAll('.nav-links ul li a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            console.log("Checking link:", href);

            // Clean and normalize paths for comparison
            const cleanHref = href ? href.replace('./', '').split('#')[0] : '';
            const cleanPageName = pageName.split('#')[0];

            // Check if this is the active link
            if (cleanHref === cleanPageName ||
                (cleanPageName === 'index.html' && cleanHref === '') ||
                (cleanHref === 'index.html' && cleanPageName === '')) {
                console.log("Setting active:", cleanHref);
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Also check the mobile menu links
        const mobileLinks = document.querySelectorAll('.menu-icon-toggle ul li a');
        mobileLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes(pageName)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Function to initialize all navbar-related events
    function initializeNavbarEvents() {
        console.log("Initializing navbar events");

        // 1. Menu toggle functionality
        $(".menu").click(function () {
            console.log("Menu clicked");
            $(".menu1").addClass("menu1-toggle");
            $(".menu2").addClass("menu2-toggle");
        });

        // side toggle 

        $(document).ready(function () {
            $(".menu-list").click(function () {
                $(".menu-icon-toggle").addClass("toggle-menu").css({
                    "overflow-y": "visible"
                });
                $("html, body").addClass("no-scroll"); // Disable scrolling
                return false;
            });

            $(".cross").click(function () {
                console.log("Cross clicked");
                $(".menu-icon-toggle").removeClass("toggle-menu").css({
                    "overflow-y": "hidden"
                });
                $("html, body").removeClass("no-scroll");
                $(".menu1").removeClass("menu1-toggle");
                $(".menu2").removeClass("menu2-toggle");
                $(".menu-icon-toggle").removeClass("menu-toggle-side");
                return false;
            });
        });


        // 2. Search functionality
        $("#search-icon").click(function () {
            console.log("Search icon clicked");
            $(".search-bar-main-main").addClass("search-bar-main-main-transform");
            return false;
        });

        $("#search-close-icon").click(function () {
            console.log("Search close clicked");
            $(".search-bar-main-main").removeClass("search-bar-main-main-transform");
            return false;
        });

        // 3. Cart icon
        $("#cart-icon").click(function () {
            console.log("Cart icon clicked");
            $(".shopping-cart-main").addClass("shopping-cart-main-transform");
            return false;
        });

        $("#close-cart-icon").click(function () {
            console.log("Cart close clicked");
            $(".shopping-cart-main").removeClass("shopping-cart-main-transform");
        });

        // 4. Wishlist icon
        $(".hear-icon-open").click(function () {
            console.log("Heart icon clicked");
            $(".wishlist-main").addClass("wishlist-tranform");
            return false;
        });

        $("#heart-close-icon").click(function () {
            console.log("Heart close clicked");
            $(".wishlist-main").removeClass("wishlist-tranform");
        });

        // 5. User login
        $("#user-icon").click(function () {
            console.log("User icon clicked");
            $(".form-main").addClass("form-main-transform");
            return false;
        });

        $("#user-close-icon").click(function () {
            console.log("User close clicked");
            $(".form-main").removeClass("form-main-transform");
        });

        // 6. 
        $(".shop-li").hover(function () {
            $(".shop-hover").toggleClass("shop-hover-toggle");
        })

        $(".shop-hover").hover(function () {
            $(this).toggleClass("shop-hover-toggle");
        });
    }
});


function setActiveNavLink() {
    // Get the current page from URL
    const currentPath = window.location.pathname;
    // Extract just the filename (e.g., "index.html" or "collection.html")
    const pageName = currentPath.split('/').pop() || 'index.html';

    console.log("Current page:", pageName);

    // Special handling for home page
    const isHomePage = pageName === '' || pageName === '/' || pageName === 'index.html';

    // Select all navigation links in both desktop and mobile menus
    const allNavLinks = document.querySelectorAll('.nav-links ul li a, .menu-icon-toggle ul li a');

    allNavLinks.forEach(link => {
        // Get the href attribute
        const href = link.getAttribute('href');
        if (!href) return;

        // Extract just the filename from the href
        const hrefFilename = href.split('/').pop();

        // Handle home page special case
        if (isHomePage && (hrefFilename === 'index.html' || href === './')) {
            link.classList.add('active');
        }
        // Handle collection page
        else if (pageName === 'collection.html' && hrefFilename === 'collection.html') {
            link.classList.add('active');
        }
        // Handle other pages normally
        else if (hrefFilename === pageName) {
            link.classList.add('active');
        }
        else {
            link.classList.remove('active');
        }
    });
}