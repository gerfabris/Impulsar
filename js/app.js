particlesJS(
    {
    "particles": {
        "number": {
        "value": 130,
        "density": {
            "enable": true,
            "value_area": 481.0236182596568
        }
        },
        "color": {
            "value": "#E0E0E0"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
        },
        "polygon": {
            "nb_sides": 5
        },
        "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
        }
        },
        "size": {
        "value": 3,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
        }
        },
        "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
        }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
        "onhover": {
            "enable": false,
            "mode": "repulse"
        },
        "onclick": {
            "enable": false,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
            "opacity": 1
            }
        },
        "bubble": {
            "distance": 389.7970619046457,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
        },
        "repulse": {
            "distance": 73.08694910712106,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 8
        },
        "remove": {
            "particles_nb": 2
        }
        }
    },
    "retina_detect": true
    }
);

/* const mediaqueryList = window.matchMedia("(max-width: 900px)");
const contenedorParticles = document.getElementsByClassName("particles");
const navbar = document.getElementById("navbar");
if(mediaqueryList.matches) {
    contenedorParticles.id= "sinParticles";
    navbar.style.backgroundColor = "#000000";
    console.log("sin");
}else{
    contenedorParticles.id= "particles-js";
    navbar.style.background = "none";
} */


