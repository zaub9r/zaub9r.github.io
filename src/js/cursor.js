$(document).ready(function() {

    var mouseCursor = document.querySelector(".cursor"); 
    var navLinks = document.querySelectorAll(".navigation-links li a");
    var entries = document.querySelectorAll(".about-text-wrapper p");
    var about = document.getElementById("about");
    var aboutbox = document.getElementById("about-text-wrapper");
    var service = document.getElementById("service");
    var contact = document.getElementById("contact");
    
    
    window.addEventListener('mousemove', cursor);

    function cursor(e){
        mouseCursor.style.top = e.clientY + 'px';
        mouseCursor.style.left = e.clientX + 'px';
    }    
    
    about.addEventListener("mouseover", function(){
        $(aboutbox).addClass("show");
    });
    
    about.addEventListener("mouseleave", function(){
        $(aboutbox).removeClass("show");
    });
    
    entries.forEach(para => {
        para.addEventListener("mouseover", () => {
            mouseCursor.classList.add("grow");
            para.classList.add("bright");
        });
        para.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("grow");
            para.classList.remove("bright");
        });
    });
    
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("grow");
            link.classList.add("bright");
        });
        link.addEventListener("mouseleave", () => {
             mouseCursor.classList.remove("grow");
             link.classList.remove("bright");
        });
    });
});