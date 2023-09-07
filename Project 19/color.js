const button_1 = document.querySelector(".button_1");
const body = document.querySelector("body");
button_1.addEventListener("click", (e) => {
  let text = e.target.id;
  // console.log(text);
  changecolor(text);
});

function changecolor(text) {
  if (text == "Dark") {
    // alert("jj");
    button_1.innerHTML = '<i class="fa-regular fa-sun"></i> Light Mode';
    body.style.backgroundColor = "#212121";
    body.style.transition = "All 2s";
    button_1.id = "Light";
  }
  if (text == "Light") {
    button_1.innerHTML = '<i class="fa-regular fa-moon"></i> Dark Mode';
    body.style.backgroundColor = "white";
    body.style.transition = "All 2s";
    button_1.id = "Dark";
  }
}
