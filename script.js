// USD => CNY (Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'. The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21"))

const countYuan = (dollarsUSA) => {
	let YuanPerDollar = 6.75;
	let counter = (YuanPerDollar * dollarsUSA).toFixed(2);
	return `'${counter} Chinese Yuan'`;
};

console.log(countYuan(15)); // Конвертер долларов США в китайские юани


// Is it even? Чётное или нечетное число?

function testEven(n) {
	return n % 2 === 0 ? true : false;
}