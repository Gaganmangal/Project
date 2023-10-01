const cart = [
    { unitprice: 10, quantity: 2 },
    { unitprice: 30, quantity: 1 },
    { unitprice: 20, quantity: 3 },
]

function Crttotal(cart){
    let total = 0;
    cart.forEach(element => {
        total = total + (element.unitprice * element.quantity)
    });
    return total;
}

const totalCost = Crttotal(cart)
console.log(`Total Cost of Cart is ${totalCost}`);