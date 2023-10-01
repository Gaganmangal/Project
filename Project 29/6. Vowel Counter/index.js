let Name = prompt("Enter Your name here");
let myArray = Name.split("");

function VowelCounter(arr) {
	let Vowel = ['a','e','i','o','u'];
    let newArray = [];
	arr.forEach(element => {
		if (Vowel.includes(element)) {
			newArray.push(element);
		}
	});
	return newArray;
}
console.log(VowelCounter(myArray).length);
