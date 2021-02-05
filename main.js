'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar-dark');
    }else{
        navbar.classList.remove('navbar-dark')
    }
})

// function declaration to scroll by ID
function scrollIntoView(selector){
    const contactPos = document.querySelector(selector);
    contactPos.scrollIntoView({behavior:'smooth'});
};

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target.dataset.links;
    if(target == null){
        return;
    }
    scrollIntoView(target);
    console.log(event.target.dataset.links);
})

// Handle click on 'contact me' button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact')
})

// 스크롤시 투명해지기 
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY/homeHeight;
    
});

