function manipulateString(string, callback) {
  const newstring = string.touppercase();
  callback(newstring);
}

function logString(manipulateString) {
  console.log(`The manipulated string is: ${manipulateString}`);
}

manipulateString("hello world", logString);
