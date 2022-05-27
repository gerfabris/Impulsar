const navbar = document.getElementById("navbar");
const sectionPresentacion = document.getElementById("sectionPresentacion");
const particles = document.getElementsByClassName("particles-js-canvas-el");
let canva = particles.item(0)
let datosPresentacion = sectionPresentacion.getBoundingClientRect();
let datosNavbar = navbar.getBoundingClientRect();
const trans = canva.classList.add("particles_transition");
const scrollTop = window.addEventListener("scroll", (e) =>{
    let scrollTop = document.documentElement.scrollTop;
    if(scrollTop > (datosPresentacion.height - datosNavbar.height)){
        canva.classList.add("particles__blue");
    }else{
        canva.classList.remove("particles__blue");
    }
})
