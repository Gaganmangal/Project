let randomnumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userNumber = document.querySelector("#guessField");
const guesslot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

// console.log(randomnumber);

let myArray = [];
let guessNumber = 1;
let play = true;
const p = document.createElement("p");

if (play) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userNumber.value);
    validNumber(guess);
  });
}

function validNumber(guess) {
  if (isNaN(guess)) {
    lowOrHi.textContent = `Please Enter a vaild Number`;
  } else if (guess < 1) {
    lowOrHi.textContent = `Please Enter a Number more then 1`;
  } else if (guess > 100) {
    lowOrHi.textContent = `Please Enter a Number more then 1`;
  } else {
    myArray.push(guess);
    if (guessNumber === 10) {
      displayguess(guess);
      displaymessage(`Game Over|Random Number is ${randomnumber}`);
      endgame();
    } else {
      displayguess(guess);
      chackNumber(guess);
    }
  }
}
function chackNumber(guess) {
  if (guess === randomnumber) {
    displaymessage("You are Winner");
    endgame();
  } else if (guess < randomnumber) {
    displaymessage("Number is To Less");
  } else if (guess > randomnumber) {
    displaymessage("Number is To Grater");
  }
}
function displayguess(guess) {
  userNumber.value = "";
  guesslot.textContent = `${myArray}`;
  guessNumber++;
  lastResult.innerHTML = `${11 - guessNumber}`;
}
function displaymessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endgame() {
  userNumber.value = "";
  userNumber.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='button'>Start New Game</h2>`;
  resultParas.appendChild(p);
  play = false;
  newgame();
}
function newgame() {
  const newgamestart = document.querySelector("#button");
  newgamestart.addEventListener("click", (e) => {
    randomnumber = parseInt(Math.random() * 100 + 1);
    myArray = [];
    guessNumber = 1;
    guesslot.innerHTML = "";
    lastResult.innerHTML = `${11 - guessNumber}`;
    lowOrHi.innerHTML = "";
    userNumber.removeAttribute("disabled");
    resultParas.removeChild(p);
    play = true;
  });
}
