const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel__slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    let autoSlideInterval;

    function changeSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            dots[i].classList.remove("active");
            
            // Ensure only the correct slide is visible
            if (i === index) {
                slide.classList.add("active");
            }
        });
    
        currentIndex = index;
        dots[currentIndex].classList.add("active");
    }
    
    
    

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % slides.length;
            changeSlide(nextIndex);
        }, 5000);
    }
       
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            clearInterval(autoSlideInterval); // Pause auto-slide when user clicks
            changeSlide(index);
            setTimeout(startAutoSlide, 6000); // Resume auto-slide after 5s
        });
    });

    startAutoSlide(); // Start automatic fading transitions
});









