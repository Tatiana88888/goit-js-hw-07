function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divEl = document.querySelector("#controls");
const inputEl = divEl.querySelector("input");
const btnCreateEl = divEl.querySelector("[data-create]");
const btnDestroyEl = divEl.querySelector("[data-destroy]");

const divBoxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", createElement);

function createElement() {
  const value = inputEl.value;
  let size = 30;
  let elements = [];
  for (let i = 0; i < value; i += 1) {
    const element = `<div class="square" style="width:${size}px; height:${size}px; background:${getRandomHexColor()}" ></div>`;
    size += 10;
    elements.push(element);
  }
  destroyElement();
  divBoxesEl.insertAdjacentHTML("beforeend", elements.join(""));
}

btnDestroyEl.addEventListener("click", destroyElement);

function destroyElement() {
  divBoxesEl.innerHTML = "";
  inputEl.value = "";
}
