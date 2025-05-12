document.addEventListener("DOMContentLoaded", function () {
    /** 🔹 MOBILE MENU TOGGLE **/
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    /** 🔹 FILMS DROPDOWN BEHAVIOR **/
    const filmsLink = document.getElementById("films-link");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

    function handleFilmsClick(event) {
        if (window.innerWidth <= 768) {
            window.location.href = "films.html"; // ✅ Redirects mobile users
        } else {
            event.preventDefault(); // ✅ Prevents redirect on desktop
            dropdownMenu.classList.toggle("active"); // ✅ Toggles dropdown
        }
    }

    filmsLink.addEventListener("click", handleFilmsClick);

    /** 🔹 CLOSE DROPDOWN WHEN CLICKING A LINK **/
    dropdownLinks.forEach(link => {
        link.addEventListener("click", () => {
            dropdownMenu.classList.remove("active"); // ✅ Hides dropdown when a link is clicked
        });
    });

});













