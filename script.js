// section for gallary
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
let currentIndex = 0;

// content slide function
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

showSlide(currentIndex);

// place container
function places() {


    const placeContainer = document.getElementById("placeContainer");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const cardsPerPage = 1;

    const cards = document.querySelectorAll(".place-card");
    const totalCards = cards.length;
    const cardWidth = 200 + 20; // Width + gap
    let currentIndex = 0;

    function updateScroll() {
        const offset = currentIndex * cardsPerPage * cardWidth;
        placeContainer.style.transform = `translateX(-${offset}px)`;
    }

    const totalFullSets = Math.floor(totalCards / cardsPerPage); // e.g. 8/4 = 2

    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalFullSets - 1) {
            currentIndex++;
            updateScroll();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateScroll();
        }
    });

}
places();







// Initial render
// renderCards();