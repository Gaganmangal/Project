function greeting(name) {
  return new Promise((resolve) => {
    const greeting = `Hello ${name}!`;
    resolve(greeting);
  });
}

greeting("Gagan").then((message) => {
  console.log(message);
});
