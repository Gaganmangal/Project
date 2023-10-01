const customer = {
  Name: "Rohit Jain",
  balance: 10000,
};

customer.deposit = function (amount) {
  if (amount > 0) {
    customer.balance = customer.balance + amount;
    return `Successfully deposited $${amount}. New balance: $${customer.balance}`;
  } else {
    return "Invalid deposit amount. Please enter a positive amount.";
  }
};
customer.withdrawal = function (amount) {
  if (amount > 0 && amount <= customer.balance) {
    customer.balance = customer.balance - amount;
    return `Successfully withdrawal $${amount}. New balance: $${customer.balance}`;
  } else if (amount <= 0) {
    return "Invalid withdrawal amount. Please enter a positive amount.";
  } else {
    return "Insufficient balance for withdrawal.";
  }
};

console.log(customer.deposit(5000));
console.log(customer.withdrawal(5000));
console.log(customer.deposit(1000));
console.log(customer.withdrawal(5000));
