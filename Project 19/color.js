const button_1 = document.querySelector(".button_1");
const body = document.querySelector("body");

button_1.addEventListener("click", () => {
  let text = button_1.innerHTML;
  changecolor(text);
});

function changecolor(text) {
  if (text == '<i class="fa-regular fa-moon"></i> Dark Mode') {
    button_1.innerHTML = '<i class="fa-regular fa-sun"></i> Light Mode';
    body.style.backgroundColor = "#212121";
    body.style.transition = "All 2s";
  }
  if (text != '<i class="fa-regular fa-moon"></i> Dark Mode') {
    button_1.innerHTML = '<i class="fa-regular fa-moon"></i> Dark Mode';
    body.style.backgroundColor = "white";
    body.style.transition = "All 2s";
  }
}
