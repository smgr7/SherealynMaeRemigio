const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
const close1 = Number(disneyData[0]['close']);
const close2 = Number(disneyData[1]['close']);
let averageClose = (close1 + close2) / disneyData.length;
averageClose = Math.ceil(averageClose * 100) / 100;
console.log("Average closing price of Disney is " + averageClose.toFixed(2));