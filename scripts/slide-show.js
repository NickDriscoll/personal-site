const slideShows = document.querySelectorAll(".slide-show");

slideShows.forEach((slideShow) => {
    const slides = slideShow.querySelectorAll(".slide");
    const leftArrow = slideShow.querySelector(".left-arrow");
    const rightArrow = slideShow.querySelector(".right-arrow");
    let current = 0;

    rightArrow.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        
        moveSlide(slides, current);
    });
    leftArrow.addEventListener("click", () => {
        current = (current ? current : slides.length) - 1;

        moveSlide(slides, current);
    });
})

const moveSlide = (slides, current) => {
    for (let i = 0; i < slides.length; i++){
        if (i === current) {
            slides[i].classList.remove("hide");
        } else {
            slides[i].classList.add("hide");
        }
    }
}