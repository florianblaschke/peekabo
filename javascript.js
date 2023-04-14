const divone = document.querySelector('[data-js="card1"]');
const text = document.getElementById("div1");
const body = document.getElementById("body");
const button = document.querySelector('[data-js="kiss"]');

// button.addEventListener("click", () => {
//   body.classList.toggle("black");
// });

divone.addEventListener("click", () => {
  text.classList.toggle("visible");
});
