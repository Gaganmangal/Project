function CountingWords(str) {
  const words = str.split(" ");
  const map = new Map();
  for (let word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }
  return map;
}

const text = "I am xyz. I am learning web development from PW Skills.";
console.log(CountingWords(text));
