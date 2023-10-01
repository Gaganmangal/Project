let marks = [];
let highest = 0;
let Oo;
for (let i = 0; i < 5; i++) {
  let stumark = prompt("Enter Student Marks here");
  stumark = parseInt(stumark);
  marks.push(stumark);
}
for (const e of marks) {
  Oo = e;
  highest < Oo ? (highest = Oo) : (highest = highest);
}
console.log(` Highest Marks is ${highest}`);
