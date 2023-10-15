class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
    getSalary() {
      return `${this.salary}`;
    }
  }
  
  const Employe = new Employee("Rohit jain", 'Software Engineer', 800000);
  
  console.log(Employe.getSalary());
  