

document.querySelector('.burger-icon').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('header__menu__active')
});

//////////////////// SCROLLTRIGGER  ///////////


gsap.registerPlugin(ScrollTrigger);



// gsap.to(".header__menu", {
//     x: 1000,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".header__menu",
//         start: "top 0%",
//         scrub: 2,
//         markers: true,
//     },

// });

// // Анімація логотипу
// gsap.to(".header__logo", {
//     x: -1000, // переміщення у протилежний бік
//     duration: 8,
//     scrollTrigger: {
//         trigger: ".header__logo",
//         start: "top 0%",
//         // end: "top 20%",
//         scrub: 2,
//         markers: true,
//     }
// });


function turnOnGsapAnimation() {
    const screenWidth = window.innerWidth;
    const targetWidth = 900;

    if (2 > 1) {

        gsap.to(".header__menu", {
            x: 1000,
            duration: 3,
            scrollTrigger: {
                trigger: ".header__menu",
                start: "top 0%",
                scrub: 2,
                markers: true,
            },

        });
///// animation burger-icon  //////
        gsap.to(".burger-icon", {
            x: 1000,
            duration: 3,
            scrollTrigger: {
                trigger: ".burger-icon",
                start: "top 0%",
                scrub: 1,
                // markers: true,
            },

        });

        

////////    animation header__logo ////////
        gsap.to(".header__logo", {
            x: -1000, 
            duration: 8,
            scrollTrigger: {
                trigger: ".header__logo",
                start: "top 0%",
                scrub: 1,
                // markers: true,
            }
        });
    }
};

// Виконати функцію під час завантаження сторінки
window.addEventListener('load', turnOnGsapAnimation);

// Виконати функцію при зміні розміру вікна
window.addEventListener('resize', turnOnGsapAnimation);