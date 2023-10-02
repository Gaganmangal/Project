const text = document.getElementById("text");
const button = document.getElementById("button");
const list = document.getElementById("list");

let deletebutton = button.addEventListener("click", () => {
  if (text.value !== " ") {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("delete-button");
    button.innerHTML =
      '<i class="fa-solid fa-trash" style="color: #ffffff;"></i> ';
    li.textContent = text.value;
    list.appendChild(li);
    list.appendChild(button);
    text.value = " ";
  }
//   return button;
});
console.log( deletebutton);
// deletebutton.addEventListener("click", () => {
//     list.removeChild(li);
//     list.removeChild(button);
// });

// console.log(text.value);
// function check(e) {
// text.addEventListener('input',()=>{
//     console.log(input);
//     if (text.value === " ") {
//         e.disabled = true;
//         console.log(e.disabled);
//       } else if (text.value !== " ") {
//         e.disabled = false;
//         console.log(e.disabled);
//         console.log(" ");
//       }
// })
// }
// console.log(check(button));
