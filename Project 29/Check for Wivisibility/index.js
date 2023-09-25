let size = prompt("Enter the size of Array: ");
let myArray = [];
let newArray = [];
for (let i = 0; i < size; i++) {
  let Number = prompt("Enter number here: ");
  myArray.push(Number);
}

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 3 === 0 && myArray[i] % 2 != 0) {
    newArray.push(myArray[i]);
  }
}
// console.log(myArray);
console.log(newArray);
