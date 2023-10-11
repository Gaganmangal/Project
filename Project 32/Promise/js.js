const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hey I am Gagan Mangal");
  }, 1000);
});

promiseOne.then(() => {
  console.log("Resolve PromiseOne");
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("BY, I am Gagan Mangal");
    resolve();
  }, 1000);
});

promiseTwo.then(() => {
  console.log("Resolve PromiseTwo");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ Name: "Gagan", Age: 19 });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error == true) {
      resolve({ Name: "Mangal", Age: 19 });
    } else {
      reject("Error.....404-NOT-FOUND");
    }
  }, 1000);
});

promisefour
  .then((user) => {
    return user.Age;
  })
  .then((Age) => {
    console.log(Age);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Network Error.............");
  });
