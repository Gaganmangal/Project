let item_No = prompt("Enter your item number");
let arr = [];

for (let i = 0; i < item_No; i++) {
  let item = prompt("Enter Your item Nmae here");
  arr.push(item);
}

function removeDuplicates(arr) {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
console.log(removeDuplicates(arr));
