const myArray = [1, 2, 3, 4, 5, 7, 8, 9];
array(myArray);
function array(a, callback) {
  const u = a.map(() => {
    return callback(num);
  });
  return u;
}

function callback(num) {
  return num * 2;
}

const o = array(myArray, callback);
console.log(o);
