async function getCombinedData() {
  const [data1, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((respone) =>
      respone.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((respone) =>
      respone.json()
    ),
  ]);
  const CombinedData = {
    todo: data1,
    post: data2,
  };
  return CombinedData;
}
getCombinedData().then((data) => {
  console.log(data);
});
