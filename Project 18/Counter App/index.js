const button_1 = document.querySelector(".button_1");
const button_2 = document.querySelector(".button_2");
const button_3 = document.querySelector(".button_3");
const value = document.querySelector(".value");
// console.log(`button ${button_1.textContent} ${button_2.textContent} ${button_3.textContent}`);

button_3.addEventListener("click", () => {
  // alert('value')
  value.textContent = 0;
});
button_2.addEventListener("click", () => {
  // alert('value')
  let num = value.textContent;
  num++;
  value.textContent = num;
});
button_1.addEventListener("click", () => {
  // alert('value')
  let num = value.textContent;
  num--;
  value.textContent = num;
});
