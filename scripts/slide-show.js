const slideShows = document.querySelectorAll(".slide-show");
// console.log(slideShows);


// document.querySelectorAll(".left-arrow").forEach((leftArrow) => {
//     console.log(leftArrow);
//     leftArrow.addEventListener("click", (event)=>{
//         console.log("move left");
//     });
// });

// document.querySelectorAll(".right-arrow").forEach((leftArrow) => {
//     console.log(leftArrow);
//     leftArrow.addEventListener("click", (event)=>{
//         console.log("right left");
//     });
// });

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
    // console.log(slides);
    // console.log(leftArrow);
    // console.log(rightArrow);
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