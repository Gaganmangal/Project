const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const body = document.querySelector("body");
let intervalId;
const myArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
start.addEventListener("click", () => {
  intervalId = setInterval(() => {
    const var_3 = genratbackgroundcolor();
    body.style.backgroundColor = var_3;
  }, 1000);
});

let genratbackgroundcolor = function () {
  let var_4 = "#";

  for (let i = 0; i < 6; i++) {
    var_4 += myArray[indexnum()];
  }
  return var_4;
};
const indexnum = function () {
  let var_5 = Math.floor(Math.random() * myArray.length);
  return var_5;
};

stop.addEventListener("click", () => {
  clearInterval(intervalId);
});
