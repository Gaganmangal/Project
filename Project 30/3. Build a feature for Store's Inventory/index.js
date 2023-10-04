const store = {
    apple: 1,
    banana: 10,
    orange: 20,
    mango: 30,
}

const pricecanveter = Object.entries(store).map(([item,price])=>{
let pricerupess = price*80;
return {item,pricerupess}
})
console.log(pricecanveter);