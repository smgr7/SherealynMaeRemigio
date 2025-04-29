const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

//Write your code below
// const averagePrice = (prices) => {
//     let sum = 0;
//     for (let i = 0; i < prices.length; i++){
//         sum += prices[i];
//     }
//     return sum / prices.length;
// }

const averagePrice = (prices) => {
    const sum = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / prices.length;
}
console.log("The 7-day SMA of AMD is " + averagePrice(amdPrices).toFixed(2));
