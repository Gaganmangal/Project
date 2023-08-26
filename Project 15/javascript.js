const a = "Gagan Mangal";
// console.log(`a = ${a} type of ${typeof a}`);

const b = 1002;
// console.log(`b = ${b} type of ${typeof b}`);

const bb = 100.2;
// console.log(`bb = ${bb} type of ${typeof bb}`);

const bbb = Number.POSITIVE_INFINITY;
// console.log(`bbb = ${bbb} type of ${typeof bbb}`);

const bbbb = NaN;
// console.log(`bbbb = ${bbbb} type of ${typeof bbbb}`);

const c = 10025205244522n;
// console.log(`c = ${c} type of ${typeof c}`);

const d = false;
// console.log(`d = ${d} type of ${typeof d}`);

let e;
// console.log(`e = ${e} type of ${typeof e}`);

const f = null;
// console.log(`f = ${f} type of ${typeof f}`);

const key = Symbol("key_1");
// console.log(key);

const user = {
  name: "Gagan Mangal",
  email: "H@gamil.com",
  age: 40,
  loging: false,
  [key]: "Key_2",
};
// console.log(user);

const first_user = [
  {
    first_name: "Rohit",
    Last_name: "Jain",
  },
  {
    age: 45,
    id: "12A",
  },
];
// console.log(first_user);

/*************************************************ARRAY**************************************************************/

const ARRAY = [
  "iphone",
  "Macbook Pro",
  "Flower Pot",
  "Water Bottle",
  "Mac Studio mini",
  "Watch",
  "Tennis Ball",
  "Mouse Pad",
  "Keyboard",
  "Lens",
];
// console.log(`ARRAY ${ARRAY} type of ${typeof ARRAY}`);

/*************************************************OBJECT**************************************************************/

const object_1 = {
  1: "Mithun",
  2: "Alka",
  3: "Anurag",
  4: "Prabir",
  5: "Shivam",
};
// console.log(`object_1 ${object_1} type of ${typeof object_1}`);
// console.log(object_1);

/*************************************************Create 2 Create 2 valid variables and 2 invalid variables and 2 invalid variables**************************************************************/

// valid variables

let name = "PW Skills";
// console.log(name);
let iAmHappy = true;
// console.log(iAmHappy);

// invalid variables

// let 1name = "PW Skills"
// console.log(1name);
// let var = 13
// console.log(var);

// Operators

// Write a program that prints the multiplication table in the textbook format of any number specified.
let number = 6;
// console.log(`${number} * 1 = ${number * 1}`);
// console.log(`${number} * 2 = ${number * 2}`);
// console.log(`${number} * 3 = ${number * 3}`);
// console.log(`${number} * 4 = ${number * 4}`);
// console.log(`${number} * 5 = ${number * 5}`);
// console.log(`${number} * 6 = ${number * 6}`);
// console.log(`${number} * 7 = ${number * 7}`);
// console.log(`${number} * 8 = ${number * 8}`);
// console.log(`${number} * 9 = ${number * 9}`);
// console.log(`${number} * 10 = ${number * 10}`);

// Write a program to perform all the arithmetic operations[except increment and decrement operators] of
// javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.

// let num1 = 8;
// let num2 = 8;

// console.log(`The addition of num1 and num2 is ${num1 + num2}`);
// console.log(`The substraction of num1 and num2 is ${num1 - num2}`);
// console.log(`The multiplication of num1 and num2 is ${num1 * num2}`);
// console.log(`The division of num1 and num2 is ${num1 / num2}`);
// console.log(`The modulo of num1 and num2 is ${num1 % num2}`);
// console.log(`The exponential of num1 and num2 is ${num1 ** num2}`);

// 3. Write a program to find out the perimeter of a rectangle. Print the results to the console.

let length = 10;
let width = 20;
let perimeterofRectangle = 2 * (length + width);

// console.log(
//   `The perimeter of the rectangle with length: ${length} and Width: ${width} is ${perimeterofRectangle}`
// );

// Write a program to demonstrate the results of comparison operators. Note that both the truth and false
// condition for each operator must be specified.

// let num1 = 12;
// let num2 = 12;

// console.log(num1 == num2);

// let num3 = 12;
// let num4 = 10;

// console.log(num3 == num4);

// let num11 = 12;
// let num12 = 12;

// console.log(num11 != num12);

// let num13 = 12;
// let num14 = 10;

// console.log(num13 != num14);

// let num21 = 12;
// let num22 = 12;

// console.log(num21 === num22);

// let num23 = 12;
// let num24 = "12";

// console.log(num23 === num24);

// let num31 = 12;
// let num32 = 12;

// console.log(num31 !== num32);

// let num33 = 12
// let num34 = "12"

// console.log(num33 !== num34);

// let num41 = 13;
// let num42 = 12

// console.log(num41 > num42);

// let num43 = 10
// let num44 = 12

// console.log(num43 > num44);

// let num51 = 13
// let num52 = 12

// console.log(num51 >= num52);

// let num53 = 10
// let num54 = 12

// console.log(num53 >= num54);

// let num61 = 12
// let num62 = 13

// console.log(num61 < num62);

// let num63 = 12
// let num64 = 10

// console.log(num63 < num64);

// let num71 = 13
// let num72 = 13

// console.log(num71 <= num72);

// let num73 = 12
// let num74 = 10

// console.log(num73 <= num74);

// Write a program of traffic control that accepts the traffic light displayed and prints the message. If the
// traffic light is red print the vehicles must stop.

// let trafficlight = "orange";
// if (trafficlight == "red") {
//   console.log("Vehicles must stop.");
// } else if (trafficlight == "orange") {
//   console.log("Vehicles must wait. The signal is changing to red or green.");
// } else if (trafficlight == "green") {
//   console.log("Vehicles may proceed with caution.");
// } else {
//   console.log("Invalid traffic light");
// }

// 2. Write a program to print the largest of 2 numbers.

// let num1 = 20
// let num2 = 15
// if (num1 > num2) {
//   console.log("num1 is greater than num2");
// } else {
//   console.log("num2 is greater than num1");
// }

// 3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible
// by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to
// the numbers divisible by 3 or 5.

// let num = 5;

// if (num % 5 == 0 && num % 3 == 0){
//   console.log("FizzBuzz");
// } else if (num % 3 == 0){
//   console.log("Fizz");
// } else if (num % 5 == 0){
//   console.log("Buzz");
// } else {
//   console.log("Invalid input");
// }

const day = "Tuesday";

let daysUntilWeekend;

switch (day) {
  case "Monday":
    console.log(`The are 5 day(s) until the weekend`);
    break;
  case "Tuesday":
    console.log(`The are 5 day(s) until the weekend`);
    break;
  case "Monday":
    console.log(`The are 5 day(s) until the weekend`);
    break;
  case "Monday":
    console.log(`The are 5 day(s) until the weekend`);
    break;
  case "Monday":
    console.log(`The are 5 day(s) until the weekend`);
    break;
  case "Monday":
    console.log(`The are 5 day(s) until the weekend`);
    break;
}
