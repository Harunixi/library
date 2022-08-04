const button = document.querySelector(".top__btn");
const flex = document.querySelector(".top__flex");
const line = document.querySelector(".top__btn-line");
button.addEventListener("click", () => {
    line.classList.toggle("open");
    flex.classList.toggle("open");
})