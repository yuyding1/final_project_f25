document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("open");
});