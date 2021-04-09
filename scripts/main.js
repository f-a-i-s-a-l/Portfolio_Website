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