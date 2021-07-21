


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".links-wraper");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}





/*
const toggleBotton = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleBotton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')  
})