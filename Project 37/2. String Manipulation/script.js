function manipulateString(string, callback) {
  const newstring = string.toUpperCase();
  callback(newstring);
}

function logString(manipulateString) {
  console.log(`The manipulated string is: ${manipulateString}`);
}

manipulateString("hello world", logString);
