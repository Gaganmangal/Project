const urlRegex =
  /^(http|https):\/\/[\w\-+]+(\.[\w\-+]+)+([\w.,@?^=%&:/~+#]*[\w@?^=%&/~+#])?$/;

const url = "https://example.com";

//Code for check valid url

if (url.match(urlRegex)) {
  console.log(`${url} is a valid URL`);
} else {
  console.log(`${url} is not a valid URL`);
}
