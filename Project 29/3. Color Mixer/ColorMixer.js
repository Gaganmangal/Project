let color1 = prompt("Enter Your First Color");
let color2 = prompt("Enter Your Second Color");
let result;
// console.log(num_1.typeof);
// console.log(typeof num_2);
let e;
if (
  (color1 === "red" & color2 === "blue") || (color1 === "blue" & color2 === "red")
) {
    result = 'purple'
    e = 0
}
 else if (
  (color1 === "red" & color2 === "yellow") || (color1 === "yellow" & color2 === "red")
) {
    result = 'orange'
    e = 1
}
 else if (
  (color1 === "blue" & color2 === "yellow") || (color1 === "yellow" & color2 === "blue")
) {
    result = 'green'
    e = 2
}
else{
    result = 'Invalid color com#ination'
    e = 3
}

switch(e){
    case 0:
        console.log(result);
        break;
    case 1:
        console.log(result);
        break;
    case 2:
        console.log(result);
        break;
    case 3:
        console.log(result);
        break;
    default:
        console.log('roung choice');
}