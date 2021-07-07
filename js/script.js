"use ctrict";

const burgerBtn = document.querySelector('.burder-menu'),
    mobileBlock = document.querySelector('.navigation-block__mobile');

burgerBtn.onclick = function () {
    mobileBlock.classList.toggle('navigation-block__mobile--active');
};


