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

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target.dataset.links;
    if(target == null){
        return;
    }
    const scrollTo = document.querySelector(target);
    scrollTo.scrollIntoView({behavior:'smooth'});
    console.log(event.target.dataset.links);

})