

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


////////////////////////////////

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

    let navigationList = document.querySelector('.navigation__list');
if(isMobile.any()) {
    navigationList.classList.add('touch');
    let arrows = document.querySelectorAll('.arrow');

    arrows.forEach((el) => {
        let subMenu = el.nextElementSibling;
        el.addEventListener('click', function() {
            subMenu.classList.toggle('active')
            el.classList.toggle('open')
        })
    })

} else {
    navigationList.classList.add('mouse');
}


function updateCSSRules() {
    const width = window.innerWidth;
    const subNavLists = document.querySelectorAll('.sub-navigation__list, .sub-navigation__list_new');


    subNavLists.forEach((item) => {
        if (width < 500) {
            item.classList.remove('sub-navigation__list');
            item.classList.add('sub-navigation__list_new');
        } else {
            item.classList.remove('sub-navigation__list_new');
            item.classList.add('sub-navigation__list');
        }
    })
}

updateCSSRules();
window.addEventListener('resize', updateCSSRules);