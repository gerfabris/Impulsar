const inicio = document.getElementById("anchordNavInicio");
const arriba = inicio.addEventListener("click", (e)=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
arriba();
