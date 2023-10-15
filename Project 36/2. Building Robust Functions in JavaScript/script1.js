function getPerson(person) {
  try {
    if (typeof person !== "object" || !person.name || !person.age) {
      throw new Error("Invalid parameter type");
    }
    return `name: ${person.name}, Age: ${person.age}`;
  } catch (error) {
    return error;
  }
}

console.log(getPerson({ name: "gagan", age: "20" }));
console.log(getPerson({ name: "Mithun" }));
console.log(getPerson(["name", "Mithun"]));
