const ulEl = document.querySelector("#categories");

const items = [...ulEl.children];

console.log(`Number of categoris: ${items.length}`);
items.forEach((item) => {
  console.log(`Categori: ${item.querySelector("h2").textContent}`);
  console.log(
    `Elements: ${item.querySelectorAll(".categories-list-item").length}`
  );
});
