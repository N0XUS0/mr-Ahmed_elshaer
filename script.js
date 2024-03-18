
function todayDate(){
   var d = new Date();
   var n = d.getFullYear() + "  ";
   return document.getElementById("date").innerHTML = n;
 }

let nCount = selector => {
$(selector).each(function () {
$(this)
 .animate({



   Counter: $(this).text()
 }, {
   duration: 4000,
   easing: "swing",
   step: function (value) {
     $(this).text(Math.ceil(value));
   }
 });
});
};

let a = 0;
$(window).scroll(function () {
// The .offset() method allows us to retrieve the current position of an element  relative to the document
let oTop = $(".numbers").offset().top - window.innerHeight;
if (a == 0 && $(window).scrollTop() >= oTop) {
a++;
nCount(".rect > h1");
}
}); 
 


var swiper = new Swiper(".swiper", {
effect: "coverflow",
grabCursor: true,
centeredSlides: true,
slidesPerView: "auto",
coverflowEffect: {
rotate: 0,
stretch: 0,
depth: 10,
modifier: 20,
slideShadows: true
},
spaceBetween: 20,
loop: true,
pagination: {
el: ".swiper-pagination",
clickable: true
}
});
 
document.addEventListener("DOMContentLoaded", function () {
let carousel = document.querySelector(".carousel");
let items = carousel.querySelectorAll(".item");
let dotsContainer = document.querySelector(".dots");

// Insert dots into the DOM
items.forEach((_, index) => {
let dot = document.createElement("span");
dot.classList.add("dot");
if (index === 0) dot.classList.add("active");
dot.dataset.index = index;
dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");

// Function to show a specific item
function showItem(index) {
items.forEach((item, idx) => {
 item.classList.remove("active");
 dots[idx].classList.remove("active");
 if (idx === index) {
   item.classList.add("active");
   dots[idx].classList.add("active");
 }
});
}

// Event listeners for buttons
document.querySelector(".prev").addEventListener("click", () => {
let index = [...items].findIndex((item) =>
 item.classList.contains("active")
);
showItem((index - 1 + items.length) % items.length);
});

document.querySelector(".next").addEventListener("click", () => {
let index = [...items].findIndex((item) =>
 item.classList.contains("active")
);
showItem((index + 1) % items.length);
});

// Event listeners for dots
dots.forEach((dot) => {
dot.addEventListener("click", () => {
 let index = parseInt(dot.dataset.index);
 showItem(index);
});
});
});
 

var loader =document.getElementById("perloder");
window.addEventListener("load" ,function(){
 loader.style.display="none";
})
 