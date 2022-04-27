window.addEventListener("load", ()=>{
    new Glider(document.querySelector('.carousel_lista'),{
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        draggable: true,
        dots: '.carousel_indicadores',
        arrows: {
            prev: '.carousel_left',
            next: '.carousel_right'
        },
        responsive: [
            {
                // screens greater than >= 500px
                breakpoint: 600,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 'auto',
                    slidesToScroll: 'auto',
                    //itemWidth: 150,
                    //duration: 0.25
                }
                },{
            // screens greater than >= 775px
            breakpoint: 768,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                //itemWidth: 150,
                //duration: 0.25
            }
            },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: '3',
                slidesToScroll: '2',
                //itemWidth: 150,
                //duration: 0.25
            }
            }
        ]
    }); 
})

/* slideAutoPaly(slider, '.carousel_lista');
function slideAutoPaly(glider, selector, delay = 5000, repeat = true) {
    let autoplay = null;
    const slidesCount = glider.track.childElementCount;
    let nextIndex = 1;
    let pause = true;
    function slide() {
        autoplay = setInterval(() => {
            if (nextIndex >= slidesCount) {
                if (!repeat) {
                    clearInterval(autoplay);
                } else {
                    nextIndex = 0;
                }
            }
            glider.scrollItem(nextIndex++);
        }, delay);
    }
    slide();
    var element = document.querySelector(selector);
    element.addEventListener('mouseover', (event) => {
        if (pause) {
            clearInterval(autoplay);
            pause = false;
        }
    }, 300);
    element.addEventListener('mouseout', (event) => {
        if (!pause) {
            slide();
            pause = true;
        }
    }, 300);
} */
