let anchor = document.querySelectorAll(".anchord_secciones");
let toggler = document.getElementById("toggler");
anchor.forEach(a => {
    a.addEventListener('click', () => {
        toggler.checked = false;
    });
});
