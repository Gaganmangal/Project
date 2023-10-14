let myArray = ["Gagan", "deven"];
let newArray = [];

let obj = {
  Gagan: "Mangal",
  Deven: "Jain",

  get: function () {
    console.log(`get ${this.Gagan} ${this.Deven}`);
  },
};

Object.prototype.gagan = function () {
  console.log("Hey Gagan Mangal");
};

// console.log(myArray.gagan());
// console.log(obj.gagan());

Array.prototype.mangal = function () {
  console.log("BY Gagan Mangal");
};

// console.log(myArray.mangal());
// console.log(obj.mangal());

/******************Inheritance*************************/

const a = {
  Gagan: "mangal",
};

const b = {
  Deven: "Jain",
};

const c = {
  Rohit: "GJ",
  // __proto__: b
};
// c.__proto__ = a;

// Object.setPrototypeOf(c,a)

console.log(c.Gagan);

String.prototype.truelength = function () {
  console.log(`This is ${this.trim().length}`);
};
"Gagan     ".truelength();
