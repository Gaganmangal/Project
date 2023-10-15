class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  getter() {
    return this.password.replace(/./g, "*");
  }
  setter(pass) {
    let regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    let x = regex.test(pass);
    if (x === true) {
      this.password = pass;
    } else {
      console.log(
        "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
      );
    }
  }
}

const user = new User("johndoe", "Password123");
console.log(user.getter());

user.setter("myPassword");
user.setter("MyPassword");
user.setter("Mypassword123");
console.log(user.getter());
