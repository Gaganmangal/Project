const  originalprice = 100;
const discountedprice = 80;

function calculatediscountedpersontage(){

    if(originalprice <= 0 || discountedprice <= 0){
        console.log("Error....");
    }
    const discountedAmount = originalprice - discountedprice;
    const discountedpercentage = (discountedAmount / originalprice) * 100;

    return discountedpercentage
}

const result = calculatediscountedpersontage()

console.log(`The Save discountedpercentage is ${result}%`);