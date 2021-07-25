

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".links-wraper");

// Unlike document.querySelector above that returns the HTML element, 
// document.getElementsByClassName returns a collection(array)
// of all elements in the DOM with the specified class(es) even
// when it's just one element.

const hamburger = document.getElementsByClassName("hamburger")[0];
const navMenu = document.getElementsByClassName("links-wraper")[0];

console.log(navMenu)

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    // The toggle works now in the HTML, but you may have to adjust
    // your CSS with the .active class to reflect what you want to do
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}





/*
const toggleBotton = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleBotton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')  
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".links-wraper");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
*/