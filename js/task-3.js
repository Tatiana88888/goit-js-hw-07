const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const spanEl = document.querySelector("#name-output");
console.log(spanEl);

inputEl.addEventListener("input", handleInput);

function handleInput(event) {
  const text = event.target.value.trim();
  if (!text) {
    spanEl.textContent = `Anonymous`;
  } else {
    spanEl.textContent = text;
  }
}
