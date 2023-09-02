// // const myArray = [1, 2, 3, 4, 5, 6];
// /*******************************FOR LOOP*******************************/
// // for (let i = 0; i < myArray.length; i++) {
// //   const element = i;
// //   //   console.log(element);
// // }

// /*******************************FOROF LOOP**************************/

// for (const num of myArray) {
//   console.log(num);
// }

// // const arr = "Gagan Mangal";
// // for (const string of arr) {
// //   if (string == " ") {
// //     continue;
// //   } else {
// //     // console.log(`string: ${string}`);
// //   }
// // }

// /***************************************MAPS****************************************/

// const mapObject = new Map();
// mapObject.set("Nmae", "Gagan");
// mapObject.set("Age", "20");
// mapObject.set("Id", "102A");
// mapObject.set("city", "udaipur");
// mapObject.set("class", "second");

// // console.log(mapObject);

// for (const [key, value] of mapObject) {
//   // console.log(`keys: ${key} value: ${value}`);
// }
// /***********************************OBJECT*************************************************/

// const oBject = {
//   name: "gagan mangal",
//   age: 20,
//   id: "102K",
//   class: "second",
// };

// // for (const Bject of oBject) {
// //     console.log(Bject);
// // }
// /********************************************FORIN LOOP*****************************/

// for (const key in oBject) {
// //   console.log(`keys: ${key} value: ${oBject[key]}`);
// }

// const arr = ['gagan','rohit','deven','umesh','gargi']
// for (const key in arr) {
//     console.log(`${key}: ${arr[key]}`);
// }

// /*********************************************FOREACH LOOP*************************************/

const nAme = ["gagan", "rohit", "deven", "umesh", "gargi"];

nAme.forEach((element, index, nAme) => {
//   console.log(element, index, nAme);
});

const nameObject = [
  {
    first_name: "gagan",
    last_name: "mangal",
  },
  {
    first_name: "rohit",
    last_name: "lohar",
  },
  {
    first_name: "deven",
    last_name: "jain",
  },
];

nameObject.forEach((element) => {
    console.log(`firstname: ${element.first_name}`);
})