const cart = [
  {
    item: "item_1",
    quantity: 2,
  },
  {
    item: "item_2",
    quantity: 3,
  },
  {
    item: "item_3",
    quantity: 1,
  },
];

function Correctabug(Array) {
  for (let i = 0; i < Array.length; i++) {
    cart[i].quantity *= 2;
  }
}

Correctabug(cart);
console.log(cart);
