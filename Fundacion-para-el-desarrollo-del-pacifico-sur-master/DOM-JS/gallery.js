//imagenes
let images = ['/assets/gallery/programas-sociales.jpeg', '/assets/gallery/programas-sociales-1.jpeg', '/assets/gallery/programas-sociales-2.jpeg', '/assets/gallery/programas-sociales-3.jpeg'];

//elemento general del slider 
let sliderContainer = document.getElementById("galeria__slider");

// Variable para saber si el slide esta activo
let active = true;



let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function currentDiv(n) {
showDivs(slideIndex = n);
}

function showDivs(n) {
let i;
let x = document.getElementsByClassName("galeria__slider__container__item");
let dots = document.getElementsByClassName("galeria__slider__container__circle");
if (n > x.length) {slideIndex = 1}    
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" galeria__slider__container__circle__active", "");
}
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " galeria__slider__container__circle__active";
}

let timeGalery = setInterval(function(){
    plusDivs(1);
}, 8000)

//Evento para saber si el raton esta sobre del slide
sliderContainer.addEventListener("mouseover", ()=>{
    clearInterval(timeGalery);
	
});
sliderContainer.addEventListener("mouseout", ()=>{
    if (active === true) {
        timeGalery = setInterval(function(){
            plusDivs(1);
        }, 5000)
    }
});
