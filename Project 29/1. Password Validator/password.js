const isvalidPassword = (password) => {
  let regexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return regexpassword.test(password);
};

let password = prompt("Enter Your Password Here");
let confirmed_password = prompt("Enter Your confirmed_password Here");

if (isvalidPassword(password)) {
  // console.log(password);
  let result =
    password === confirmed_password
      ? "Password Matched.Password validation Successful."
      : "Password didn't match. Password validation unsuccessful";
      console.log(result);
} else {
  console.log("Enter a Strong Password");
}

// console.log(!isvalidPassword(password));
