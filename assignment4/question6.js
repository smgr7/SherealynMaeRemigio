// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

function sortPrices (amdPrices) {
    return amdPrices.sort((a, b) => a - b);
}
const sortedPrices = sortPrices(amdPrices);
const threeLowestPrices = sortedPrices.slice(0, 3);
const formattedPrices = threeLowestPrices.slice(0,2).join(", ") + " and " + threeLowestPrices[2];
console.log("The three lowest prices are " + formattedPrices);


// let data = ()
// for price in data:
// 	if price < 3:
//     data.push(price)

