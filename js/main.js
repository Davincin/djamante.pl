'use strict'
let $burger;
let $menuContainer;
let $menuItems;
let $nav;
let $navIconName;
let $navIcon;
let $asidePhone;
let $asidePhoneLarge;
let $header;
let $sections;
let $contactSection;
let $offerImages;
let $contactMenuItem;
let $elementsToAnimation;

const prepareDOMElements = () => {
    $burger = document.querySelector('.hamburger');
    $menuContainer = document.querySelector('.nav__items');
    $menuItems = document.querySelectorAll('.nav__item');
    $nav = document.querySelector('.nav');
    $navIconName = document.querySelector('.nav__logo');
    $navIcon = document.querySelector('.nav__logo i');
    $asidePhoneLarge = document.querySelector('.aside-phone-large');
    $asidePhone = document.querySelector('.aside-phone');
    $header = document.querySelector('.header');
    $sections = document.querySelectorAll('.scroll-spy');
    $contactMenuItem = document.querySelector('.nav__item-contact');
    $offerImages = document.querySelectorAll('.offer__image');
    $elementsToAnimation = document.getElementsByClassName('os');

};

const prepareDOMEvents = () => {
    // window.addEventListener('scroll', smallMenu);
    window.addEventListener('scroll', hidePhone);
    window.addEventListener('scroll', scrollSpy);
    window.requestAnimationFrame(osDavingin);
    window.addEventListener('scroll', osDavingin);
    $burger.addEventListener('click', burgerFunction);
    scrollSpy();
    changeImgsSource();
    
    
        

    
};



function scrollSpy(){
    for(let section of $sections) {
        let sectionId = section.getAttribute('id');
        if (window.pageYOffset >= (section.offsetTop - 300) && (window.pageYOffset < (section.offsetTop + section.clientHeight - 360))) {
            for(let menuLink of $menuItems) {
                if(menuLink.getAttribute('href') == `#${sectionId}`) {
                    menuLink.classList.add('nav__item--active');
                };
            };
        } else {
            for(let menuLink of $menuItems) {
                if(menuLink.getAttribute('href') == `#${sectionId}`) {
                    menuLink.classList.remove('nav__item--active');
                };
            };
        };
    };
};

const changeImgsSource = () => {
    if(window.innerWidth >= 992) {
        for(let img of $offerImages) {
            let newSource = `${img.getAttribute('src').slice(0, -5)}2.webp`;
            img.src = newSource;
        }
    };
};

const hidePhone = () => {
    if($contactMenuItem.classList.contains('nav__item--active')) {
        $asidePhoneLarge.classList.remove('aside-phone-large--active');
        $asidePhone.classList.add('aside-phone--hide');
    } else {
        $asidePhone.classList.remove('aside-phone--hide')
    }
};

// const smallMenu = () => {
//     if(window.innerWidth >= 992) {
//         if (window.pageYOffset > 150) {
//             // $nav.classList.add('nav--small');
//             $asidePhoneLarge.classList.add('aside-phone-large--active');
//         } else {
//             // $nav.classList.remove('nav--small');
//             $asidePhoneLarge.classList.remove('aside-phone-large--active');
//         };
//     };
// };

// const closeMenu = () => {
//     if ($menuContainer.classList.contains('nav--open')) {
//         $menuContainer.classList.remove('nav--open');
//         $burger.classList.remove('is-active');
//     };
// };

const burgerFunction = () => {
    $menuContainer.classList.toggle('nav--open');
    $burger.classList.toggle('is-active');

    for (let item of $menuItems) {
        item.addEventListener('click', () => {
            if ($menuContainer.classList.contains('nav--open')) {
                $menuContainer.classList.remove('nav--open');
                $burger.classList.remove('is-active');
            }; 
        })
    };
};

const osDavingin = () => {
    let offset;
    let bufor;
    for(let element of $elementsToAnimation) {
        if(element.classList.contains('fadeInUp')) {
            
            offset = element.getBoundingClientRect().height;
            
        } else {
            offset = 0;
        };
        
        (window.innerwidth > 992) ? bufor = 200 :  bufor = 100;


        if((element.getBoundingClientRect().top - offset) <= (window.innerHeight - bufor)) {
            setTimeout(() => {
                element.classList.add('os--active') 
            }, 180);
           
        };
    };

};

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};



document.addEventListener('DOMContentLoaded', main);