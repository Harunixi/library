const button = document.querySelector(".top__btn");
const ul = document.querySelector(".top__ul");
const line = document.querySelector(".top__btn-line");
button.addEventListener("click", () => {
    line.classList.toggle("open");
    ul.classList.toggle("open");
})