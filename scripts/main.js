// Script for changing navigation bar background on scroll
const nav = document.querySelector("nav");
const about = document.querySelector(".cover-pic");

const aboutOptions = {
    rootMargin: "-20% 0px 0px 0px"
};

const aboutObserver = new IntersectionObserver(
    function(entries, aboutObserver){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                nav.classList.add('navbar-scrolled');
            } else{
                nav.classList.remove('navbar-scrolled');
            }
        })
    }, 
    aboutOptions
);

aboutObserver.observe(about);

// Script for Slideshow Animation
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}