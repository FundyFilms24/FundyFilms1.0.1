const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});




document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel__slide");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    
    let currentIndex = 0;
    let autoSlideInterval;
    let autoSlideTimeout; // Stores timeout reference
    let arrowCooldown = false; // Prevent rapid clicking

    function startAutoSlide() {
    clearInterval(autoSlideInterval); // ✅ Stops any existing interval
    autoSlideInterval = setInterval(() => {
        let nextIndex = (currentIndex + 1) % slides.length;
        changeSlide(nextIndex);
    }, 5000); // ✅ Adjust timing if needed
}

function changeSlide(index) {
    clearTimeout(autoSlideTimeout); // ✅ Clears previous delay
    clearInterval(autoSlideInterval); // ✅ Stops current auto-slide

    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
        dots[i].querySelector(".progress-fill").style.width = "0%"; // ✅ Clears progress bar
    });

    currentIndex = index;
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");

    autoSlideTimeout = setTimeout(() => {
        dots[currentIndex].querySelector(".progress-fill").style.width = "100%"; // ✅ Starts progress after delay
        startAutoSlide(); // ✅ Ensures slides start auto-transitioning again
    }, 0); // ✅ Only delays once after a manual click
}


    function resetAutoSlide() {
    clearInterval(autoSlideInterval); // ✅ Stops auto-slide
    clearTimeout(autoSlideTimeout); // ✅ Clears previous timeout before setting a new one

    autoSlideTimeout = setTimeout(() => {
        dots[currentIndex].querySelector(".progress-fill").style.width = "100%"; // ✅ Delayed progress start
        startAutoSlide(); // ✅ Resume auto-slide after delay
    }, 3000); // ✅ Waits exactly 5 seconds without stacking
}


    function handleArrowClick(nextIndex) {
    if (arrowCooldown) return; // ✅ Ignore rapid clicks

    arrowCooldown = true; // ✅ Activate cooldown
    changeSlide(nextIndex);
    resetAutoSlide(); // ✅ Ensures only one delay happens

    setTimeout(() => {
        arrowCooldown = false; // ✅ Allows clicking again after transition
    }, 800);
}


    prevButton.addEventListener("click", () => {
        let prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        handleArrowClick(prevIndex);
    });

    nextButton.addEventListener("click", () => {
        let nextIndex = (currentIndex + 1) % slides.length;
        handleArrowClick(nextIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            clearInterval(autoSlideInterval);
            changeSlide(index);
            setTimeout(startAutoSlide, 5000); // Resume auto-slide after 5s
        });
    });

    startAutoSlide(); // Start auto transitions
});









