let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

const sliders = document.querySelectorAll('.counter');
const [leftArrow, rightArrow] = document.querySelectorAll('.navigation button');

leftArrow.addEventListener('click', () => changeSlide(-1));
rightArrow.addEventListener('click', () => changeSlide(1));

function changeSlide(index) {
    showSlide(index + currentIndex);
}

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;

    sliders.forEach((slider, i) => {
        slider.classList.toggle('active', i === currentIndex);
    })
}

function currentSlide(index) {
    showSlide(index);
}

sliders.forEach((sliders, i) => sliders.addEventListener('click', () => currentSlide(i)));
