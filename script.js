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