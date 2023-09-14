// // let a = [1, 2, 3, 4, 5];
// // console.log(a);
// // console.log(a.indexOf());
// // // console.log(a);

// // // // // const myArray = [1, 2, 3, 4, 5, 6];
// // // // /*******************************FOR LOOP*******************************/
// // // // // for (let i = 0; i < myArray.length; i++) {
// // // // //   const element = i;
// // // // //   //   console.log(element);
// // // // // }

// // // // /*******************************FOROF LOOP**************************/

// // // // for (const num of myArray) {
// // // //   console.log(num);
// // // // }

// // // // // const arr = "Gagan Mangal";
// // // // // for (const string of arr) {
// // // // //   if (string == " ") {
// // // // //     continue;
// // // // //   } else {
// // // // //     // console.log(`string: ${string}`);
// // // // //   }
// // // // // }

// // // // /***************************************MAPS****************************************/

// // // // const mapObject = new Map();
// // // // mapObject.set("Nmae", "Gagan");
// // // // mapObject.set("Age", "20");
// // // // mapObject.set("Id", "102A");
// // // // mapObject.set("city", "udaipur");
// // // // mapObject.set("class", "second");

// // // // // console.log(mapObject);

// // // // for (const [key, value] of mapObject) {
// // // //   // console.log(`keys: ${key} value: ${value}`);
// // // // }
// // // // /***********************************OBJECT*************************************************/

// // // // const oBject = {
// // // //   name: "gagan mangal",
// // // //   age: 20,
// // // //   id: "102K",
// // // //   class: "second",
// // // // };

// // // // // for (const Bject of oBject) {
// // // // //     console.log(Bject);
// // // // // }
// // // // /********************************************FORIN LOOP*****************************/

// // // // for (const key in oBject) {
// // // // //   console.log(`keys: ${key} value: ${oBject[key]}`);
// // // // }

// // // // const arr = ['gagan','rohit','deven','umesh','gargi']
// // // // for (const key in arr) {
// // // //     console.log(`${key}: ${arr[key]}`);
// // // // }

// // // // /*********************************************FOREACH LOOP*************************************/

// // // const nAme = ["gagan", "rohit", "deven", "umesh", "gargi"];

// // // nAme.forEach((element, index, nAme) => {
// // // //   console.log(element, index, nAme);
// // // });

// // // const nameObject = [
// // //   {
// // //     first_name: "gagan",
// // //     last_name: "mangal",
// // //   },
// // //   {
// // //     first_name: "rohit",
// // //     last_name: "lohar",
// // //   },
// // //   {
// // //     first_name: "deven",
// // //     last_name: "jain",
// // //   },
// // // ];

// // // nameObject.forEach((element) => {
// // //     console.log(`firstname: ${element.first_name}`);
// // // })

// // /*****************************************************FILTER***********************************************************/

// // const num = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// // // let bbb= num.forEach((element) => {
// // //   const hhh = element == 5;
// // //   return hhh;
// // // });
// // // console.log(bbb);

// // /*  foreach never return any value   so we use filter and map     */

// // // let newNumber = num.filter((num) => {
// // //   return num > 5;
// // // });

// // // console.log(newNumber);

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNum = [];
// const newNum11 = [];
// myNum.forEach((num) => {
//   if (num > 4) {
//     newNum.push(num);
//   } else {
//     newNum11.push(num);
//   }
// });
// console.log(newNum11);
// console.log(newNum);

/**************************************EAXAMPALE*****************************************/
// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let userBook = books.filter((bk) => {
//   return bk.publish === 2009;
// });

// console.log(userBook);

let usernewbook = [];

books.forEach((bk) => {
  if (bk.publish === 2011) {
    usernewbook.push(bk);
  }
});

// console.log(usernewbook);

/********************************************MAP*************************************/

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArray = myArray.map((arr) => {
  return arr * 10;
});
// console.log(newArray);

let newarr = myArray
  .map((arr) => {
    return arr * 10;
  })
  .map((arr) => {
    return arr + 1;
  })
  .filter((arr) => {
    return arr > 100;
  });
//  console.log(newarr);

/*******************************reduce********************************************/

const myArr = [1, 2, 3, 4];

const newarry = myArr.reduce((acc, currentvalue) => acc + currentvalue, 0);

console.log(newarry);
