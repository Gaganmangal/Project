const person = {
  firstname: "Gagan",
  lastname: "Mangal",
  age: 20,
};

function ageInDays(e, callback) {
  const fullname = `${e.firstname} ${e.lastname}`;
  const ageInDays = e.age * 365;
  return callback(fullname, ageInDays);
}
function logResult(fullname, ageInDays) {
  console.log(
    `The person fullname is ${fullname} and their age in days is ${ageInDays}`
  );
}

ageInDays(person, logResult);
