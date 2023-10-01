const password = document.querySelector("#Password");
const Confirmpassword = document.querySelector("#Confirmpassword");
const email = document.querySelector("#Email");
const name = document.querySelector("#name");
const button = document.querySelector("button");
const eye = document.querySelector("span");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validvalue();
});

const MYerror = (element, masseng) => {
  const var_1 = element.parentElement;
  const var_2 = var_1.querySelector(".error");
  var_2.innerText = masseng;
};

const Mysucces = (element) => {
  const var_1 = element.parentElement;
  const var_2 = var_1.querySelector(".error");
  var_2.innerText = "";
};

const isvalidEmail = (email) => {
  let regexpassword = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/gim;
  return regexpassword.test(email);
};

const isvalidPassword = (password) => {
  let regexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return regexpassword.test(password);
};

const validvalue = () => {
  const username = name.value.trim();
  const useremail = email.value.trim();
  const userpassword = password.value.trim();
  const userConfirmpassword = Confirmpassword.value.trim();

  if (username == "") {
    MYerror(name, "Username is required");
  } else {
    Mysucces(name);
  }

  if (useremail === "") {
    MYerror(email, "Email id is required");
  } else if (!isvalidEmail(useremail)) {
    MYerror(email, "please a enter valid email id");
  } else {
    Mysucces(email);
  }

  if (userpassword === "") {
    MYerror(password, "Password is required");
  } else if (!isvalidPassword(userpassword)) {
    MYerror(password, "pelase enter valid password");
  } else {
    Mysucces(password);
  }

  if (userConfirmpassword === "") {
    MYerror(Confirmpassword, "Please Confirm your Password");
  } else if (userConfirmpassword !== userpassword) {
    // console.log(`${userConfirmpassword} :>< ${userpassword}`);
    MYerror(Confirmpassword, "Password doesn't match");
  } else {
    Mysucces(Confirmpassword);
    alert("Password Match");
    clear(name);
    clear(email);
    clear(password);
    clear(Confirmpassword);
  }
};

function clear(e) {
  e.value = "";
  eye.innerHTML = `<i class="fa-solid fa-eye eye"></i>`;
  password.type = "password";
}

eye.addEventListener("click", (e) => {
  if (password.type === "password") {
    password.type = "text";
    eye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else {
    password.type = "password";
    eye.innerHTML = `<i class="fa-solid fa-eye eye"></i>`;
  }
});
