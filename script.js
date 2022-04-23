// USD => CNY (Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'. The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21"))

const countYuan = (dollarsUSA) => {
	let YuanPerDollar = 6.75;
	let counter = (YuanPerDollar * dollarsUSA).toFixed(2);
	return `'${counter} Chinese Yuan'`;
}

console.log(countYuan(15)); // Конвертер долларов США в китайские юани

// Is it even? Чётное или нечетное число?

function testEven(n) {
	return n % 2 === 0 ? true : false;
}

// Type of sum Вывести тип данных суммы

function typeOfSum(a, b) {
	let amount = a + b;
	return typeof amount;
}

// Century from year

function century(year) {
	let numberCentury;
	return (numberCentury = Math.ceil(year / 100));
}


// Капитализация (изменение первого символа в слове на Заглавный)

function capitalizeWord(word) {

	let result = String(word);
	let resultCapitalize = `${result[0].toUpperCase()}${result.slice(1)}`;
	return resultCapitalize;
}

console.log(capitalizeWord('andrey'));


// Beginner Series #2 Clock Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
	let secPerMin = 60;
	let secPerHour = 3600;
	let ms;
	return (ms = (s + (m * secPerMin) + (h * secPerHour)) * 1000);
}

console.log(past(1, 1, 1));


//Easy logs Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

function logs(x , a, b){
	let sumLog;
	return sumLog = Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
}


// Multiplication table for number Your goal is to return multiplication table for number that is always an integer from 1 to 10. You can use \n in string to jump to the next line. Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
	i = 1;

	while (i <= 10) {
		let result = String(`${i} * ${number} = ${i * number}\n`);
		console.log(result);
		i += 1;
	}
}

multiTable(2);


// No zeros for heros Надо удалить нули (0) только Последние, между других цифр Не надо. Only the ending ones.

function noBoringZeros(n) {
	return Number(n.toString().replace(/0+$/, ""));
}


// Mr.Freeze

//Object.freeze(MrFreeze);


// Comparison with the Equality Operator

function testEqual(val) {
	if (val == 12) { // Change this line
	return "Equal";
	}
	return "Not Equal";
}

console.log(testEqual(12));


// Area or Perimeter You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function (l, w) {
	if (l != w) {
		return (l + w) * 2;
	}
	return l * w;
}


// Remove String Spaces Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
	x = x.split(" ").join("");
	return x;
}


// If you can't sleep, just count sheep!! Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
	let murmur = "";
	for (var i = 0; i < num; i++) {
		murmur += i + 1 + " sheep...";
	}
	return murmur;
}


// The Feast of Many Beasts All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake. Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast. Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
	if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
		return true;
	}
	return false;
}

// Transportation on vacation After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you. You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers. Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total. Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
	return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;
}

console.log(rentalCarCost(7));


// Basic Mathematical Operations Your task is to create a function that does four basic mathematical operations. The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
	if (operation == '+') {
		return value1 + value2;
	} else if (operation == '-') {
		return value1 - value2;
	} else if (operation == '*') {
		return value1 * value2;
	} else if (operation == '/') {
		return value1 / value2;
	}
}

console.log(basicOp('*', 5, 5));