let num_1 = prompt("Enter first number");
let num_2 = prompt("Enter second number");
let operator = prompt("Enter operator`");
let result;

num_1 = parseInt(num_1);
num_2 = parseInt(num_2);

switch (operator) {
  case "+":
    result = num_1 + num_2;
    console.log(`The Addition of ${num_1} and ${num_2} is ${result}`);
    break;
  case "-":
    result = num_1 - num_2;
    console.log(`The Subtraction of ${num_1} and ${num_2} is ${result}`);

    break;
  case "*":
    result = num_1 * num_2;
    console.log(`The Multiplication of ${num_1} and ${num_2} is ${result}`);

    break;
  case "/":
    result = num_1 / num_2;
    console.log(`The Division of ${num_1} and ${num_2} is ${result}`);

    break;
  default:
    console.log("Invalid operator");
    break;
}
