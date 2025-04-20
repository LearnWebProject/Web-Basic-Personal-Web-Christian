document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-icon");
    const navbar = document.querySelector("section:nth-child(2) nav ul");

    function updateMenuDisplay() {
        if (window.innerWidth <= 700) {
            menuToggle.style.display = "flex";
            navbar.style.display = "none";

        } else {
            menuToggle.style.display = "none";
            navbar.style.display = "flex"; 
        }
    }

    menuToggle.addEventListener("click", function() {
        if (navbar.style.display === "none" || navbar.style.display === "") {
            navbar.style.display = "flex"; 
        } else {
            navbar.style.display = "none"; 
        }
    });




    updateMenuDisplay(); 

    window.addEventListener("resize", updateMenuDisplay);
});