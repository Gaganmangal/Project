const text = document.getElementById("paragraph");
let myArray = text.innerText.split(" ");

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i].length > 8) {
    myArray[i] = '<span class="hightlight">' + myArray[i] + "</span>";
  }
}
text.innerHTML = myArray.join(" ");
