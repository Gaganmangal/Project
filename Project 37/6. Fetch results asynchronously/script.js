async function fetchData() {
  const respons = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await respons.json();
  console.log(data);
}

fetchData();
