let Name = prompt("Enter Your name here");
let myArray = Name.split("");

const isvalidName = (Name) => {
  let regexpassword = /([A-Z])/;
  return regexpassword.test(Name);
};

isvalidName(myArray[0])
  ? (myArray[0] = myArray[0])
  : (myArray[0] = myArray[0].toUpperCase());

console.log(myArray.join(""));


