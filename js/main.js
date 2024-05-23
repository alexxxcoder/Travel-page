

document.querySelector('.burger-icon').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('header__menu__active')
});

//////////////////// SCROLLTRIGGER  ///////////

gsap.registerPlugin(ScrollTrigger);

gsap.to(".header__menu", {
    x: 1000,
    duration: 3,
    scrollTrigger: {
        trigger: ".burger-icon",
        start: "top 0%",
        scrub: 2,
        // markers: true,
    },
});

///// animation burger-icon  //////

gsap.to(".burger-icon", {
    x: 1000,
    duration: 3,
    scrollTrigger: {
        trigger: ".burger-icon",
        start: "top 0%",
        scrub: 2,
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

