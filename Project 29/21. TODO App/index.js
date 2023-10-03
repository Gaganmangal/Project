const text = document.getElementById("text");
const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  if (text.value !== "") 
  {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("delete-button");
    button.innerHTML =
      '<i class="fa-solid fa-trash" style="color: #ffffff;"></i> ';
    li.textContent = text.value;
    list.appendChild(li);
    list.appendChild(button);
    text.value = "";
    console.log(list);

    button.addEventListener("click", () => {
      list.removeChild(li);
      list.removeChild(button);
      console.log(list);
    });
  }
});

