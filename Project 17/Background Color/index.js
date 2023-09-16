const var_1 = document.querySelector("#button");
const var_2 = document.querySelector("span");
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
var_1.addEventListener("click", () => {
  //   alert('bmbmsdb');
  const var_3 = genratbackgroundcolor();
  document.body.style.backgroundColor = var_3;
  var_2.textContent = var_3;
});

const genratbackgroundcolor = () => {
  let var_4 = "#";

  for (let i = 0; i < 6; i++) {
    var_4  +=  myArray[indexnum()]
  }
//   alert(var_4)
  return var_4;
};

const indexnum = () => {
  const var_5 = Math.floor(Math.random() * myArray.length);
  return var_5;
};
