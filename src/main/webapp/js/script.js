let currentSlide = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalSlides = images.length;

function changeSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;  
  slides.style.transform = `translateX(-${currentSlide * 100}%)`; ;
}


setInterval(changeSlide, 3000);

$(document).ready(function() {
  $('.slider2').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
	speed: 1000,
	centerMode: true,
    arrows: true,
    dots: true,
	centerMode: true,  
	centerPadding: '40px', 
	focusOnSelect: true  
	
  });
});
