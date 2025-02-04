const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const thumbnails = document.querySelectorAll('.thumb');

let currentIndex = 0;
const totalSlides = slides.length;

const updateSlide = () => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
};

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
};

const goToSlide = (index) => {
    currentIndex = index;
    updateSlide();
};

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => goToSlide(index));
});

// Auto-slide feature
setInterval(nextSlide, 5000);
