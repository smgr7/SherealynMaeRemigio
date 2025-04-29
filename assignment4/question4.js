const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
const close1 = msftData[0][3];
const close2 = msftData[1][3];
averageClose = (close1 + close2) / msftData.length;
console.log("Average closing price of MSFT is " + averageClose.toFixed(2));
