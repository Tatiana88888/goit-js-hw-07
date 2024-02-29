const btnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnEl.addEventListener("click", handleBtn);

function handleBtn(event) {
  let color = getRandomHexColor();
  bodyEl.style = `background-color: ${color}`;
  spanEl.textContent = color;
}
