document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".product-box").forEach((product) => {
        let images = product.querySelectorAll(".swiper-slide img"); // Get all images inside the swiper
        let mainImage = product.querySelector(".main-img"); // The initially displayed image
        let currentIndex = 0;
        let interval;

        if (!mainImage || images.length < 2) return; // Ensure at least 2 images exist

        //  Start changing images ONLY on hover
        product.addEventListener("mouseenter", function () {
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length; // Loop through images
                mainImage.src = images[currentIndex].src; // Change image source dynamically
            }, 1000); // Change every 1 seconds
        });

        //  Stop sliding images & reset on mouse leave
        product.addEventListener("mouseleave", function () {
            clearInterval(interval);
            mainImage.src = images[0].src; // Reset to first image
        });
    });
});
