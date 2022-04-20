let contenedorPreload = document.getElementById("contenedorPreload");
setTimeout( () =>{
    contenedorPreload.classList.add("preload_cerrar");
}, 8000)

let sectionPresentacion = document.getElementById("sectionPresentacion");
setTimeout( () =>{
    sectionPresentacion.style.display = "flex";
}, 8030)
let index_header = document.getElementById("index_header");
setTimeout( () =>{
    index_header.classList.remove("header_hidden");
}, 8010)