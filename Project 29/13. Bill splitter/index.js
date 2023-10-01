let itemNumber = prompt("Enter the Number of dish");
let PersonNumber = prompt("Enter the Number of person");
let myArray = [];
for (let i = 0; i < itemNumber; i++) {
  let itemPrice = prompt("Enter the Price of dish");
  myArray.push(itemPrice);
}

function totalPrice(Array) {
  let total = 0;
  let billPerson = 0;
  Array.forEach((element) => {
    total = total + Number(element);
  });
  billPerson = total / PersonNumber;
  const bill = {
    totalbill: total,
    billPerson: billPerson,
  };
  return bill;
}

const bill = totalPrice(myArray);
console.log(
  `The total bill is ${bill.totalbill} bill per person ${bill.billPerson}`
);
