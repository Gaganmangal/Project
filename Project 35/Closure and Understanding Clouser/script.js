function a() {
  let a = 10;
  function b() {
    let b = 20;
    function c() {
      let c = 30;
      console.log(c, b, a);
    }
    c();
  }
  b();
}
// a();


// function a(n) {
//   let a = n;
//   return b()
//   function b(p) {
//     let b = p;
//     return c()
//     function c(r) {
//       let c = r;
//       console.log(c, b, a);
//     }
//   }
// }
// a(10)(20)(30);
