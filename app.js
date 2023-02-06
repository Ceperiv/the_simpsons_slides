const upBtn = document.querySelector('.up_button');
const downBtn = document.querySelector('.down_button');
const sideBar = document.querySelector('.side_bar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main_slide');
const slidesCount = mainSlide.querySelectorAll('.main_slide_block').length;

let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount-1)*100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up')
});
downBtn.addEventListener('click', () => {
    changeSlide('down')
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }

    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px )`
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
