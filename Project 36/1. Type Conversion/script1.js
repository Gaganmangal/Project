function convertToNumber(e) {
  try {
    const x = Number(e);
    if (Number.isNaN(x)) {
      throw new Error("Invalid number");
    }
    return x;
  } catch (error) {
    return error.message;
  }
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));
