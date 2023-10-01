let carName = prompt("Enter Car Name Here: ");
let day = Number(prompt("Enter Numbers of days: "));
let result;
function Calculaterentalcost(carName) {
  if ("Economy" === carName) {
    for (let i = 1; i > 0; i++) {
      if (day == i) {
        result = 4000 * i;
        console.log(`The total Rent of Car ${carName} is ${result}`);
        break
      }
    }
  } else if ("Midsizd" === carName) {
    for (let i = 1; i > 0; i++) {
      if (day == i) {
        result = 10000 * i;
        console.log(`The total Rent of Car ${carName} is ${result}`);
        break
      }
    }
  } else if ("Luxury" === carName) {
    for (let i = 1; i > 0; i++) {
      if (day == i) {
        result = 20000 * i;
        console.log(`The total Rent of Car ${carName} is ${result}`);
        break
      }
    }
  } else {
    console.log("error not found....");
  }
}

Calculaterentalcost(carName);

