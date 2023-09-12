const form = document.querySelector("form");
// const Calculate = document.querySelector("button");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  const results = document.querySelector("#results");
  // results.innerHTML = <span>results</span>;
  // alert("kkk");
  if (height == '' || height < 0 || isNaN(height)) {
    results.textContent = `please enter vaild ${height}`;
  }
 else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.textContent = `please enter vaild ${weight}`;
  }
  else{
    const bmi = (weight/((height * height) / 10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
  }
});
