function Student(name) {
  this.name = name;
}

const student = new Student("Gagan");

Student.prototype.printDetails = function () {
  console.log(`Hello, my name is ${this.name}`);
};
student.printDetails();
