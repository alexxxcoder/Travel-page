document.querySelector('.burger-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('header__menu__active')
})