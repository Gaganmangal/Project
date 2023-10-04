const text = document.getElementById("text");
const button = document.getElementById("button");
const result = document.getElementById("result");
button.addEventListener("click", () => {
  if (text.value !== "") {
    result.innerHTML = "Loding....";
    setTimeout(() => {
      let texts = text.value.split("");
      texts = texts.reverse();
      texts = texts.join("");
      result.innerHTML = "Reverse String is:" + texts;
      text.value = "";
    }, 2000);
  }
});
