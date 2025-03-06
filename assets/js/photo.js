document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".product-box").forEach((product) => {
        let images = product.querySelectorAll(".swiper-slide img");
        let mainImage = product.querySelector(".main-img");
        let currentIndex = 0;
        let interval;
        let firstImageSrc = mainImage.src; // Store the first image source

        if (!mainImage || images.length < 2) return;

        // Function to start carousel on hover
        function startCarousel() {
            clearInterval(interval); // Clear any previous interval
            currentIndex = 0; // Reset index to ensure smooth loop
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                mainImage.src = images[currentIndex].src;
            }, 1000);
        }

        // Function to stop carousel and reset to first image
        function stopCarousel() {
            clearInterval(interval); // Stop interval
            mainImage.src = firstImageSrc; // Reset to first image
        }

        product.addEventListener("mouseenter", startCarousel);
        product.addEventListener("mouseleave", stopCarousel);
    });
});
