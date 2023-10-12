function Onlyunique(array) {
  return new Set(array);
}
const a = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9];

console.log(Onlyunique(a));
