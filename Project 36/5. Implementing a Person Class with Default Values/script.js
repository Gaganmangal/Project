class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const Person1 = new Person("Gagan Mangal", 19);
const Person2 = new Person();

console.log(Person1.getDetails());
console.log(Person2.getDetails());
