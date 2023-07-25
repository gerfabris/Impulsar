
/* para controlar el hover del submenu */
const serviciosContainer = document.getElementById("li-servicios-container");

/* serviciosContainer.addEventListener("mouseleave", function() {
    // Agregar un pequeño retraso antes de ocultar el submenú
    setTimeout(() => {
        submenu.style.display = "none";
    }, 200);
}); */

serviciosContainer.addEventListener("mouseenter", function() {
    // Mostrar el submenú cuando el cursor esté sobre el elemento "Servicios"
    submenu.style.display = "block";
});
submenu.addEventListener("mouseenter", function() {
    // Mostrar el submenú cuando el cursor esté sobre el elemento "Servicios"
    submenu.style.display = "block";
});
submenu.addEventListener("mouseleave", function() {
    submenu.style.display = "none";
});

/* submenu.addEventListener("mouseenter", function() {
    // Detener el retraso para que el submenú no se oculte
    clearTimeout();
}); */