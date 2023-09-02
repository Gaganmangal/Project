// // // // let aa = ['cddc','ccdc','dccc']
// // // // let cc = aa.length
// // // // console.log(typeof aa);
// // // // a.push('kkkk')
// // // // // console.log(a);
// // // // a.pop()
// // // // // console.log(a);
// // // // a.unshift('ssss')
// // // // console.log(a);

// // // let a = "Hi, I am Gagan Mangal";
// // // // console.log("a",a,typeof(a));

// // // let b = 1;
// // // // console.log("b",b,typeof(b));

// // // let c = false;
// // // // console.log("c",c,typeof(c));

// // // let d = 0;
// // // // console.log("d",d,typeof(d));

// // // // let f = Symbol("Key_1");

// // // // let e = {
// // // //   name: "Gagan",
// // // //   age: 20,
// // // //   [f]: "Key_2",
// // // // };
// // // // console.log(e,typeof(e));
// // // // console.table ([a,b,c,d,e])

// // // let r = 141014n;
// // // // console.log("r",r,typeof(r));

// // // let k;
// // // // console.log("k",k,typeof(k));

// // // // const first_name = 'Gagan'
// // // // const last_name = 'Mangal'
// // // // console.log(`Hi,My Name is ${first_name} ${last_name}`);

// // // const Name = new String("Deven")
// // // // console.log(Name.indexOf(1));
// // // // console.log(`Hi,My Name is ${Name}`);

// // // // const tagline = "MDN - Resources for developers, by developers";
// // // // console.log(tagline.indexOf("developers"));

// // // // const number = 1000
// // // // console.log(number);
// // // // const Number_7 = new Number(1800)
// // // // console.log(Number_7.indexOf(1));


// // // const newDate = new Date()
// // // // console.log(newDate.toLocaleDateString();
// // // // console.log(newDate.getTime());

// // /*******************************************ARRAY*****************************************************/

// const myArray = [1, 2, 3, 4, 5, 6]
// const myArray_1 = ['Gagan','Rohit','Mohit']
// // // console.log(myArray_1);
// // // console.log(myArray_1.indexOf("Gagan"));
// // // myArray_1.push("Deven")
// // // myArray_1.pop()
// // // myArray_1.unshift("Jain")
// // // myArray_1.shift()
// // // const Array_1 = myArray.join()
// // // console.log(typeof myArray);
// // // console.log(typeof Array_1);


// // /********Slice******************Splice***********************/ 

// const myArray_2 = myArray.slice(1,3)
// console.log(`myArray = ${myArray}`);
// console.log(`myArray_2 = ${myArray_2}`);
// const myArray_3 = myArray.splice(1,3)
// console.log(`myArray = ${myArray}`);
// console.log(`myArray = ${myArray_3}`);

// const marvel_heros = ["thor", "Ironman", "Spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// // const All_heros = marvel_heros.push(dc_heros)
// // const all_heros = marvel_heros.concat(dc_heros)

// // console.log(All_heros);
// // console.log(all_heros);

// const All_new_Heros = [...marvel_heros, ...dc_heros]
// console.log(All_new_Heros);

// // // const Array_1 = [1, 2,[3, 4,[5, 6]]]
// // // const All_Array = Array_1.flat(Infinity)
// // // console.log(All_Array);

// // const Array_1 = "GaganMangal"
// // // console.log(Array.isArray("GaganMangal"));
// // // console.log(Array.from("GaganMangal"));
// // let number_1 = 1;
// // let number_2 = 2;
// // let number_3 = 2;
// // let number_4 = 4;
// // let number_5 = 5;
// // let number_6 = 6;
// // console.log(Array.of(number_1,number_2,number_3,number_4,number_5));
