'use strict';
const body = document.body;
const slides = document.querySelectorAll('.slide');
const btnLeft = document.getElementById('nav-left');
const btnRight = document.getElementById('nav-right');
const numSlide = document.querySelector('.number-slide');

let activeSlide = 0;
btnRight.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBodyImage();

  setActiveSlide();
});
btnLeft.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBodyImage();

  setActiveSlide();
});

setBodyImage();
function setBodyImage() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  numSlide.innerText = `0${activeSlide + 1}`;
}

function setActiveSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[activeSlide].classList.add('active');
  numSlide.innerText = `0${activeSlide + 1}`;
}
