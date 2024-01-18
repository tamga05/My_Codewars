"use strict";

// USD => CNY (Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'. The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21"))

const countYuan = (dollarsUSA) => {
	let YuanPerDollar = 6.75;
	let counter = (YuanPerDollar * dollarsUSA).toFixed(2);
	return `'${counter} Chinese Yuan'`;
};

console.log(countYuan(15)); // Конвертер долларов США в китайские юани

// Is it even? Чётное или нечетное число?

function testEven(n) {
	return n % 2 === 0;
}

console.log(testEven);

// Type of sum Вывести тип данных суммы

function typeOfSum(a, b) {
	let amount = a + b;
	return typeof amount;
}

console.log(typeOfSum);

// Century from year

function century(year) {
	return Math.ceil(year / 100);
}

// Капитализация (изменение первого символа в слове на Заглавный)

function capitalizeWord(word) {
	let result = String(word);
	return `${result[0].toUpperCase()}${result.slice(1)}`;
}

console.log(capitalizeWord("andrey"));

// Beginner Series #2 Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since    midnight in milliseconds.

function past(h, m, s) {
	let secPerMin = 60;
	let secPerHour = 3600;
	return (s + m * secPerMin + h * secPerHour) * 1000;
}

console.log(past(1, 1, 1));

//Easy logs Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

function logs(x, a, b) {
	let sumLog = Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
	return sumLog;
}

// Multiplication table for number Your goal is to return multiplication table for number that is always an integer from 1 to 10. You can use \n in string to jump to the next line. Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
	let i = 1;

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
	if (val === 12) {
		// Change this line
		return "Equal";
	}
	return "Not Equal";
}

console.log(testEqual(12));

// Area or Perimeter You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function (l, w) {
	if (l !== w) {
		return (l + w) * 2;
	}
	return l * w;
};

// Remove String Spaces Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
	x = x.split(" ").join("");
	return x;
}

console.log(noSpace);

// If you can't sleep, just count sheep!! Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = function (num) {
	let murmur = "";
	for (let i = 0; i < num; i++) {
		murmur += i + 1 + " sheep...";
	}
	return murmur;
};

console.log(countSheep);

// The Feast of Many Beasts All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake. Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast. Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
	return (
		beast[0] === dish[0] &&
		beast[beast.length - 1] === dish[dish.length - 1]
	);
}

console.log(feast);

// Transportation on vacation After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you. You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers. Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total. Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
	return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;
}

console.log(rentalCarCost(7));

// Basic Mathematical Operations Your task is to create a function that does four basic mathematical operations. The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
	if (operation === "+") {
		return value1 + value2;
	} else if (operation === "-") {
		return value1 - value2;
	} else if (operation === "*") {
		return value1 * value2;
	} else if (operation === "/") {
		return value1 / value2;
	}
}

console.log(basicOp("*", 7, 7));

// For Twins: 1. Types Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

function typeValidation(variable, type) {
	return typeof variable === type;
}

// Bin to Decimal Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
	let digit = parseInt(bin, 2);
	return digit;
}

// Fundamentals: Return Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

function add(a, b) {
	return a + b;
}

function divide(a, b) {
	return a / b;
}

function multiply(a, b) {
	return a * b;
}

function mod(a, b) {
	return a % b;
}

function exponent(a, b) {
	return a ** b;
}

function subt(a, b) {
	return a - b;
}

// Quarter of the year Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
	if (month >= 1 && month <= 3) {
		return 1;
	} else if (month >= 4 && month <= 6) {
		return 2;
	} else if (month >= 7 && month <= 9) {
		return 3;
	} else if (month >= 10 && month <= 12) {
		return 4;
	}
};

// Функция принимает Двоичное число в виде строки и возвращает Десятичное число

function convertToInteger(str) {
	const stringInNumber = parseInt(str, 2);

	return stringInNumber;
}

console.log(convertToInteger("10011"));

// Функция складывает два числа и возвращает их сумму в Двоичном исчислении в виде Строки

function addBinary(a, b) {
	let sum = a + b;

	return sum.toString();
}

console.log(addBinary(5, 3));

// Функция возвращает количество Баллов студентов в зависимости от оценки на экзамене и количества выполненных проектов

function finalGrade(exam, projects) {
	if (exam > 90 || projects > 10) {
		return 100;
	} else if (exam > 75 && projects >= 5) {
		return 90;
	} else if (exam > 50 && projects >= 2) {
		return 75;
	}
	return 0;
}

// Cat years, Dog years Kata Task I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago. Return their respective ages now as [humanYears,catYears,dogYears] NOTES: humanYears >= 1 humanYears are whole numbers only Cat Years 15 cat years for first year +9 cat years for second year +4 cat years for each year after that Dog Years 15 dog years for first year +9 dog years for second year +5 dog years for each year after that

const humanYearsCatYearsDogYears = function (humanYears) {
	// Your code here!
	if (humanYears === 1) {
		return [1, 15, 15];
	}
	if (humanYears === 2) {
		return [2, 24, 24];
	}

	return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
};

// Third Angle of a Triangle. You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.

function otherAngle(a, b) {
	return 180 - (a + b);
}

// Return the day. Complete the function which returns the weekday according to the input number:

function whatday(num) {
	if (num === 1) {
		return "Sunday";
	} else if (num === 2) {
		return "Monday";
	} else if (num === 3) {
		return "Tuesday";
	} else if (num === 4) {
		return "Wednesday";
	} else if (num === 5) {
		return "Thursday";
	} else if (num === 6) {
		return "Friday";
	} else if (num === 7) {
		return "Saturday";
	} else {
		return "Wrong, please enter a number between 1 and 7";
	}
}

// Opposites Attract. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
	return (
		(flower1 % 2 === 0 && flower2 % 2 !== 0) ||
		(flower1 % 2 !== 0 && flower2 % 2 === 0)
	);
}

// Man in the west. A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him. So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

function checkTheBucket(bucket) {
	return bucket.includes("gold");
}

// 5 without numbers !! Write a function that always returns 5. Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

function unusualFive() {
	const five = "Write";
	return five.length;
}

// Ensure question. Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

function ensureQuestion(s) {
	if (s[s.length - 1] !== "?") {
		return `${s}?`;
	} else {
		return s;
	}
}

console.log(ensureQuestion("Разве нет"));
console.log(ensureQuestion("Почему?"));

// Difference of Volumes of Cuboids. In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

function findDifference([a, b, c], [d, e, f]) {
	let volumeA = a * b * c;
	let volumeB = d * e * f;
	return Math.abs(volumeA - volumeB);
}

// Grasshopper - Object syntax debug. While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.

const rooms = {
	first: {
		description: "This is the first room",
		items: {
			chair: "The old chair looks comfortable",
			lamp: "This lamp looks ancient",
		},
	},
	second: {
		description: "This is the second room",
		items: {
			couch: "This couch looks like it would hurt your back",
			table: "On the table there is an unopened bottle of water",
		},
	},
};

// Generate user links. Your task is to create user-links for the url, you will be given a username and must return a valid link.

// Example
// generate_link('matt c')
// http://www.codewars.com/users/matt%20c
// reference
// use this as a reference encoding

function generateLink(user) {
	return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

// Simple multiplication. This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
	if (number % 2 === 0) {
		return number * 8;
	} else {
		return number * 9;
	}
}

// Switch it Up!. When provided with a number between 0-9, return it in words. Input :: 1 Output :: "One".

function switchItUp(number) {
	if (number === 1) {
		return "One";
	} else if (number === 2) {
		return "Two";
	} else if (number === 3) {
		return "Three";
	} else if (number === 4) {
		return "Four";
	} else if (number === 5) {
		return "Five";
	} else if (number === 6) {
		return "Six";
	} else if (number === 7) {
		return "Seven";
	} else if (number === 8) {
		return "Eight";
	} else if (number === 9) {
		return "Nine";
	} else if (number === 0) {
		return "Zero";
	}
}

// N-th Power. You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

function index(array, n) {
	return array[n] ** n || -1;
}

// Rock Paper Scissors!. Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
	if (
		(p1 === "rock" && p2 === "scissors") ||
		(p1 === "paper" && p2 === "rock") ||
		(p1 === "scissors" && p2 === "paper")
	) {
		return "Player 1 won!";
	} else if (
		(p1 === "scissors" && p2 === "rock") ||
		(p1 === "rock" && p2 === "paper") ||
		(p1 === "paper" && p2 === "scissors")
	) {
		return "Player 2 won!";
	} else {
		return "Draw!";
	}
};

// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
	if (bool === true) {
		return "Yes";
	} else {
		return "No";
	}
}

// Make a simple function called greet that returns the most-famous "hello world!"

function greet1() {
	return "hello world!";
}

// Even or Odd. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
	if (number % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

// Convert a String to a Number! We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// const stringToNumber = function(str){
//   return Number(str);
// };

// const stringToNumber = function(str){
//   return +str;
// };

const stringToNumber = function (str) {
	return parseInt(str, 10);
};

console.log(stringToNumber("50"));
console.log(typeof stringToNumber("50"));

// Exclamation marks series #1: Remove an exclamation mark from the end of string. Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove(string) {
	let lastSign = string[string.length - 1];

	if (lastSign === "!") {
		return string.slice(0, -1);
	} else {
		return string;
	}
}

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

function saleHotdogs(n) {
	if (n < 5) {
		return 100 * n;
	} else if (n >= 5 && n < 10) {
		return 95 * n;
	} else {
		return 90 * n;
	}
}

// Training JS #2: Basic data types--Number. Making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

const v1 = 50,
	v2 = 100,
	v3 = 150,
	v4 = 200,
	v5 = 2,
	v6 = 250;

function equal1() {
	const a = v1;
	const b = v1;
	return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
	const a = v3; //set number value to a
	const b = v1; //set number value to b
	return a - b;
}

function equal3() {
	const a = v1; //set number value to a
	const b = v5; //set number value to b
	return a * b;
}

function equal4() {
	const a = v4; //set number value to a
	const b = v5; //set number value to b
	return a / b;
}

function equal5() {
	const a = v6; //set number value to a
	const b = v3; //set number value to b
	return a % b;
}

// Training JS #1: create your first JS function and print "Hello World!". mission 1:
//
// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})
//
// mission 2:
//
// use keyword var to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).
//
// mission 3:
//
// type the console.log() in the next line(don't forget to put the str in the brackets).

function helloWorld() {
	const str = "Hello World!";
	console.log(str);
}

// Training JS #3: Basic data types--String.

const a1 = "A",
	a2 = "a",
	b1 = "B",
	b2 = "b",
	c1 = "C",
	c2 = "c",
	d1 = "D",
	d2 = "d",
	e1 = "E",
	e2 = "e",
	n1 = "N",
	n2 = "n";

function Dad() {
	//select some variable to combine "Dad"
	return d1 + a2 + d2;
}

function Bee() {
	//select some variable to combine "Bee"
	return b1 + e2 + e2;
}

function banana() {
	//select some variable to combine "banana"
	return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
	//the answer should be "yes" or "no"
	return "no";
}

function answer2() {
	//the answer should be "yes" or "no"
	return "no";
}

function answer3() {
	//the answer should be "yes" or "no"
	return "yes";
}

// Calculate BMI. Write function bmi that calculates body mass index (bmi = weight / height2).

function bmi(weight, height) {
	const bmi = weight / height ** 2;

	if (bmi <= 18.5) {
		return "Underweight";
	} else if (bmi <= 25.0) {
		return "Normal";
	} else if (bmi <= 30.0) {
		return "Overweight";
	} else {
		return "Obese";
	}
}

// MakeUpperCase. Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
	return str.toUpperCase();
}

// Returning Strings. Make a function that will return a greeting statement that uses an input; your program should return, Hello, <name> how are you doing today?.

function greet2(name) {
	return `Hello, ${name} how are you doing today?`;
}

// Sum The Strings. Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string).

function sumStr(a, b) {
	return String(Number(a) + Number(b));
}

// How old will I be in 2099?.

function calculateAge(x, y) {
	const Age = Math.abs(y - x);

	if (y > x && Age === 1) {
		return `You are ${Age} year old.`;
	} else if (y < x && Age === 1) {
		return "You will be born in 1 year.";
	} else if (Age === 0) {
		return `You were born this very year!`;
	} else if (y > x) {
		return `You are ${Age} years old.`;
	} else if (y < x) {
		return `You will be born in ${Age} years.`;
	}
}

console.log(calculateAge(2023, 2022));

// Function 3 - multiplying two numbers.

const Multiply = (a, b) => a * b;
console.log(Multiply(7, 5));

//Will there be enough space? If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
	return Math.max(wait + on - cap, 0);
}

console.log(enough);

//101 Dalmatians - squash the bugs, not the dogs!

function howManyDalmatians(number) {
	const dogs = [
		"Hardly any",
		"More than a handful!",
		"Woah that's a lot of dogs!",
		"101 DALMATIANS!!!",
	];

	return number <= 10
		? dogs[0]
		: number <= 50
		? dogs[1]
		: number === 101
		? dogs[3]
		: dogs[2];
}

console.log(howManyDalmatians(101));

//Use Multiple Conditional (Ternary) Operators.

function checkSign(num) {
	return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(-10));

//Reversed Strings. Complete the solution so that it reverses the string passed into it.

function solution(str) {
	return str.split("").reverse().join("");
}

console.log(solution);

// Return Negative. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
	return Math.abs(num) * -1;
}

// Convert boolean values to strings 'Yes' or 'No'. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord2(bool) {
	return bool === true ? "Yes" : "No";
}

// function boolToWord( bool ){
//   if(bool === true) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }

// Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
	if (name.charAt(0) === "R" || name.charAt(0) === "r") {
		return `${name} plays banjo`;
	} else {
		return `${name} does not play banjo`;
	}
}

// String repeat. Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
	return s.repeat(n);
}

// Squaring an argument.

function square(x) {
	return x * x;
}

// You Can't Code Under Pressure #1. Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
	i = i * 2;
	return i;
}

// Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	return distanceToPump <= mpg * fuelLeft;
};

function sayHello(name) {
	return `Hello, Mr. ${name}`;
}

console.log(sayHello("Ivan"));

// Opposite number. Given an integer or a floating-point number, find its opposite.

function opposite(number) {
	return -Math.max(number);
}

// Summation. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = function (num) {
	let sum = 0;
	for (let i = 0; i <= num; i++) {
		sum = sum + i;
	}
	return sum;
};

//Jenny's secret message. Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
// Can you help her?

function greet(name) {
	if (name === "Johnny") {
		return "Hello, my love!";
	} else {
		return "Hello, " + name + "!";
	}
}

// Drink about.

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

function peopleWithAgeDrink(old) {
	if (old >= 21) {
		return "drink whisky";
	} else if (old >= 18 && old < 21) {
		return "drink beer";
	} else if (old >= 14 && old < 18) {
		return "drink coke";
	} else {
		return "drink toddy";
	}
}

// Return to Sanity. This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
	let results = { sanity: "Hello" };
	return results;
}

// Fix your code before the garden dies! You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

function rainAmount(mm) {
	if (mm < 40) {
		return `You need to give your plant ${40 - mm}mm of water`;
	} else {
		return "Your plant has had more than enough water for today!";
	}
}

console.log(typeof NaN);

console.log(typeof null);

//Unfinished Loop - Bug Fixing #1. Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number) {
	let newArray = [];

	for (let i = 1; i <= number; i++) {
		newArray.push(i);
	}

	return newArray;
}

console.log(createArray(15));

// Max Headroom and JavaScript style. Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

function getMax1() {
	const max = { name: "Max Headroom" };
	return max;
}

function getMax2() {
	const max = { name: "Max Headroom" };
	return max;
}

// Unexpected parsing. Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.
//
// But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

function getStatus(isBusy) {
	const msg = isBusy ? "busy" : "available";

	return { status: msg };
}

//Volume of a Cuboid.

class Kata {
	static getVolumeOfCuboid(length, width, height) {
		return length * width * height;
	}
}

//5 without numbers !!. Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

function unusualFive1() {
	let solution = "women";
	return solution.length;
}

//Be Concise I - The Ternary Operator. Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

function describeAge(age) {
	//   if (age <= 12) {
	//     return "You're a(n) kid";
	//   } else if (age >= 13 && age <= 17) {
	//     return "You're a(n) teenager";
	//   } else if (age >= 18 && age <= 64) {
	//     return "You're a(n) adult";
	//   } else {
	//     return "You're a(n) elderly";
	//   }
	let x = "You're a(n) ";
	//   (age <= 12) ? return `${x}kid` : (age >= 13 && age <= 17) ? return `${x}teenager` : (age >= 18 && age <= 64) ?
	//     return `${x}adult` : return `${x}elderly`;
	return age < 13
		? `${x}kid`
		: age < 18
		? `${x}teenager`
		: age < 65
		? `${x}adult`
		: `${x}elderly`;
}

// Или вот так, будет покороче

function describeAge1(age) {
	let x = "You're a(n) ";
	return age < 13
		? `${x}kid`
		: age < 18
		? `${x}teenager`
		: age < 65
		? `${x}adult`
		: `${x}elderly`;
}

// Или вот так, будет ЕЩЁ покороче

function describeAge2(a) {
	return `You're a(n) ${
		a < 13 ? "kid" : a < 18 ? "teenager" : a < 65 ? "adult" : "elderly"
	}`;
}

//Shifty Closures. Why doesn't greet_abe() actually greet Abe?

const name1 = "Abe";

const greetAbe = function () {
	return "Hello, " + name1 + "!";
};

const name2 = "Ben";

const greetBen = function () {
	return "Hello, " + name2 + "!";
};

// Be Concise IV - Index of an element in an array. Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

function find(a, e) {
	return a.indexOf(e) >= 0 ? a.indexOf(e) : "Not found";
}

// Geometry Basics: Circle Circumference in 2D. Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a
// number. Write a function calculating circumference of a Circle. Tests round answers to 6 decimal places.

function circleCircumference(circle) {
	//const l = 2 * Math.PI * circle.radius;
	//return l;
}

// Is this my tail?. Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
//
// If the tail is right return true, else return false.
//
// The arguments will always be non empty strings, and normal letters.

const correctTail = (body, tail) => body[body.length - 1] === tail;

// Define a card suit. You get any card as an argument. Your task is to return the suit of this card (in lowercase).

function defineSuit(card) {
	// let deck = card.split('');

	if (card.includes("♣")) {
		return "clubs";
	}

	if (card.includes("♦")) {
		return "diamonds";
	}

	if (card.includes("♥")) {
		return "hearts";
	}

	if (card.includes("♠")) {
		return "spades";
	}
}

// Beginner - Reduce but Grow. Given a non-empty array of integers, return the result of multiplying the values together in order.
const grow = (x) => x.reduce((a, b) => a * b);

// Beginner Series #4 Cockroach. The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per
// second, rounded down to the integer (= floored). Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
	return Math.floor(s * 27.7778);
}

// Classic Hello World. You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and
// don't return anything.

class Solution {
	static main() {
		console.log("Hello World!");
	}
}

// Thinkful - Logic Drills: Traffic light. You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
	return current === "yellow"
		? "red"
		: current === "green"
		? "yellow"
		: "green";
}

// Hex to Decimal. Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString) {
	return parseInt(hexString, 16);
}

// Take the Derivative. This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

function derive(coefficient, exponent) {
	return `${coefficient * exponent}x^${exponent - 1}`;
}

// Help the Elite Squad of Brazilian forces BOPE. In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.
// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times.

function magNumber(info) {
	return Math.ceil(
		(info[1] * 3) / { PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5 }[info[0]]
	);
}

// Find out whether the shape is a cube. To find the volume (centimeters cubed) of a cuboid you use the formula:
//
// volume = Length * Width * Height
//
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
//
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
//
// Return true if the cuboid could have equal sides, return false otherwise.
//
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
//
// Note: the sides must be integers

const cubeChecker = function (volume, side) {
	return volume / side ** 2 === side && side > 0;
};

// Pillars. There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
	return numPill === 1
		? 0
		: (numPill - 2) * width + 100 * dist * (numPill - 1);
}

// Multiple of index. Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

const multipleOfIndex = (array) =>
	array.filter((element, index) => element % index === 0);

// Invert values. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
	return array.map((each) => {
		return each * -1;
	});
}

// Who ate the cookie ?

function cookie(x) {
	const t = typeof x;
	const who = t === "string" ? "Zach" : t === "number" ? "Monica" : "the dog";
	return `Who ate the last cookie? It was ${who}!`;
}

// Reversed Words. Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str) {
	return str.split(" ").reverse().join(" ");
}

// Enumerable Magic #2 - True for Any? Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

function any(arr, fun) {
	return arr.some(fun);
}

// DNA to RNA Conversion. Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
	let str = "";
	for (let i = 0; i < dna.length; i++) {
		if (dna[i] === "T") {
			str += "U";
		} else {
			str += dna[i];
		}
	}
	return str;
}

// 8kyu interpreters: HQ9+.

function HQ9(code) {
	if (code === "H") {
		return "Hello World!";
	}

	if (code === "Q") {
		return code;
	}

	if (code === "9") {
		return "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
	} else {
		return undefined;
	}
}

// Calculate Price Excluding VAT. Write a function that calculates the original product price, without VAT.
//
// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00
//
// Thus, if your function receives 230.00 as input, it should return 200.00
//
// Notes:
//
// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1.

function excludingVatPrice(price) {
	return price === null ? -1 : Number((price / 1.15).toFixed(2));
}

// NBA full 48 minutes average. An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.
//
// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
//
// Examples:
//
// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48
// pointsPer48(5, 17) // 14.1
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!

function pointsPer48(ppg, mpg) {
	return mpg ? Number(((ppg / mpg) * 48).toFixed(1)) : 0;
}

// Simple Comparison? Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.
//
// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

function add(a, b) {
	return +a === +b;
}

// Find the force of gravity between two objects.

function solution([m1, m2, d], [um1, um2, ud]) {
	const G = 6.67e-11;
	const conversion = {
		kg: 1,
		g: 1e-3,
		mg: 1e-6,
		μg: 1e-9,
		lb: 0.453592,
		m: 1,
		cm: 1e-2,
		mm: 1e-3,
		μm: 1e-6,
		ft: 0.3048,
	};
	return (
		(G * m1 * conversion[um1] * m2 * conversion[um2]) /
		(d * conversion[ud]) ** 2
	);
}

// Count Odd Numbers below n. Given a number n, return the number of positive odd numbers below n, EASY!
//
// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

const oddCount = (n) => Math.floor(n / 2);

// Holiday VI - Shark Pontoon. Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.
//
// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!
//
// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
//
// You are given 5 variables;
//
// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
//
// sharkSpeed = how fast it can move in metres/second.
//
// pontoonDistance = how far you need to swim to safety in metres.
//
// youSpeed = how fast you can swim in metres/second.
//
// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
//
// The pontoon, you, and the shark are all aligned in one dimension.
//
// If you make it, return "Alive!", if not, return "Shark Bait!".

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
	if (dolphin) {
		sharkSpeed /= 2;
	}
	return pontoonDistance / youSpeed < sharkDistance / sharkSpeed
		? "Alive!"
		: "Shark Bait!";
}

// Expressions Matter. Task
// Given three integers a,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
//
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.
//
// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

function expressionMatter(a, b, c) {
	return Math.max(a + b + c, (a + b) * c, a * (b + c), a * b * c);
}

// Sum of differences in array. Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
	return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// Do you speak "English"? Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
//
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
//
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
//
// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(s) {
	return /english/i.test(s);
}

// Barking mad. Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.
//
// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.

function Dog(breed) {
	this.breed = breed;
}

const snoopy = new Dog("Beagle");

Dog.prototype.bark = function () {
	return "Woof";
};

const scoobydoo = new Dog("Great Dane");

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence. Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//
// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABC-DE") === "!BCD!"

function replace(s) {
	return s.replace(/[aeoiu]/gi, "!");
}

// BASIC: Making Six Toast. Story:
// You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.
//
// Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
//
// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
//
// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
//
// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):
//
// six_toast(12) == 6
// Good luck!

function sixToast(num) {
	return Math.abs(num - 6);
}

// Holiday VIII - Duty Free. The purpose of this kata is to work out just how many bottles of duty-free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
//
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
//
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
//
// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol) {
	return Math.floor((hol / normPrice / discount) * 100);
}

// Beginner - Lost Without a Map. Given an array of integers, return a new array with each value doubled.
//
// For example:
//
// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
	return x.map((n) => n * 2);
}

// All Star Code Challenge #18. Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
// If no occurrences can be found, a count of 0 should be returned.
//
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
//
// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter) {
	return str.split(letter).length - 1;
}

// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right. Remove n exclamation marks in the sentence from left to right. n is positive integer.
//
// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

function remove(s, n) {
	for (let i = 0; i < n; i++) s = s.replace("!", "");
	return s;
}

// Parse float. Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

function parseF(s) {
	return Number.isNaN(parseFloat(s)) ? null : parseFloat(s);
}

// Array plus array.Get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers.

function arrayPlusArray(arr1, arr2) {
	return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

// Find the first non-consecutive number.

function firstNonConsecutive(arr) {
	const result = arr.find((number, index) => number !== index + arr[0]);
	return Number.isInteger(result) ? result : null;
}

// No Loops 2 - You only need one. You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.
//
// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a, x) {
	return a.includes(x);
}

// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
//
// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

remove = (s) => `${s.replace(/!+/g, "")}!`;

// Reversing Words in a String. You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
//
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
//
// Example (Input --> Output)
//
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

function reverse(string) {
	return string.split(" ").reverse().join(" ");
}

// Calculate average. Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.

function findAverage(array) {
	return (
		array.reduce((result, current) => result + current, 0) / array.length
	);
}

// Potenciation. The function takes in 2 inputs x and y, and should return x to the power of y
//
// Simple, right? But you're NOT allowed to use Math.pow();
//
// Obs: x and y will be naturals, so DON'T take fractions into consideration;
//
// Note : zero to the power of zero equals one in this kata
//
// Great coding <3

function power(x, y) {
	return x ** y;
}

// Remove duplicates from list. Define a function that removes duplicates from an array of numbers and returns it as a result.
//
// The order of the sequence has to stay the same.

function distinct(a) {
	return [...new Set(a)];
}

// Convert a string to an array. Write a function to split a string and convert it into an array of words.
//
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
//
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
	return string.split(" ");
}

// For Twins: 2. Math operations.
// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:
//
// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.
// All inputs are integers. Assume no irregularities to the cuboid brick. You may assume the bottle is shaped like a cylinder. The brick cannot fit inside the rim. The ice brick placed into the bottle is the largest possible cuboid that could actually fit inside the inner volume.

const iceBrickVolume = (radius, bottleLength, rimLength) =>
	2 * radius * radius * (bottleLength - rimLength);

// Filter out the geese. Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

function gooseFilter(birds) {
	const geese = [
		"African",
		"Roman Tufted",
		"Toulouse",
		"Pilgrim",
		"Steinbacher",
	];
	return birds.filter((b) => !geese.includes(b));
}

// You only need one - Beginner.
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//
// Array can contain numbers or strings. X can be either.
//
// Return true if the array contains the value, false if not.

const check = (a, x) => a.includes(x);

// Powers of 2.
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
//
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
	return Array.from({ length: n + 1 }, (v, k) => 2 ** k);
}

// Who is going to pay for the wall?
// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
//
// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is

function whoIsPaying(name) {
	return name.length <= 2 ? [name] : [name, name.substr(0, 2)];
}

// Welcome!
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
//
// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// Possible invalid inputs include:
//
// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

function greet(language) {
	const base = {
		english: "Welcome",
		czech: "Vitejte",
		danish: "Velkomst",
		dutch: "Welkom",
		estonian: "Tere tulemast",
		finnish: "Tervetuloa",
		flemish: "Welgekomen",
		french: "Bienvenue",
		german: "Willkommen",
		irish: "Failte",
		italian: "Benvenuto",
		latvian: "Gaidits",
		lithuanian: "Laukiamas",
		polish: "Witamy",
		spanish: "Bienvenido",
		swedish: "Valkommen",
		welsh: "Croeso",
	};
	return base[language] || base.english;
}

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
//
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

const phrases = [
	"not at all",
	"I love you",
	"a little",
	"a lot",
	"passionately",
	"madly",
];

const howMuchILoveYou = (n) => phrases[n % 6];

// Find Maximum and Minimum Values of a List.
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
//
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// Grasshopper - Personalized Message
// DESCRIPTION:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//
// Use conditionals to return the proper message:
//
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet(name, owner) {
	return name === owner ? "Hello boss" : "Hello guest";
}

// Fake Binary.
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
// Note: input will never be an empty string

function fakeBin(x) {
	return x
		.split("")
		.map((n) => (n < 5 ? 0 : 1))
		.join("");
}

// Sum without highest and lowest number.
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
// Mind the input validation.
//
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
	if (!Array.isArray(array)) return 0;
	return array
		.sort((a, b) => a - b)
		.slice(1, array.length - 1)
		.reduce((a, b) => a + b, 0);
}

// Simple Fun #352: Reagent Formula.
// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.
//
// We know the rules of confect:
//
// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Task
// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.
//
// Example
// For formula = [1,3,7], The output should be true.
//
// For formula = [7,1,2,3], The output should be false.
//
// For formula = [1,3,5,7], The output should be false.
//
// For formula = [1,5,6,7,3], The output should be true.
//
// For formula = [5,6,7], The output should be true.
//
// For formula = [5,6,7,8], The output should be true.
//
// For formula = [6,7,8], The output should be false.
//
// For formula = [7,8], The output should be true.
//
// Note
// All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.
//
// Happy Coding ^_^

const isValid = (formula) => {
	const firstRule = !(formula.includes(1) && formula.includes(2));
	const secondRule = !(formula.includes(3) && formula.includes(4));
	const thirdRule = formula.includes(5) === formula.includes(6);
	const fourthRule = formula.includes(7) || formula.includes(8);

	return firstRule && secondRule && thirdRule && fourthRule;
};

// Convert to Binary.
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
//
// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:
//
// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

function toBinary(n) {
	return +n.toString();
}

// Is there a vowel in there?

// DESCRIPTION:
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
//
// If they are, change the array value to a string of that vowel.
//
// Return the resulting array.

function isVow(a) {
	return a.map((charCode) =>
		/[aeiou]/.test(String.fromCharCode(charCode))
			? String.fromCharCode(charCode)
			: charCode
	);
}

// UEFA EURO 2016.
// Finish the uefaEuro2016() function so it return string just like in the examples below:
//
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores) {
	const teamA = teams[0];
	const teamB = teams[1];

	if (scores[0] > scores[1]) {
		return "At match " + teamA + " - " + teamB + ", " + teamA + " won!";
	} else if (scores[0] < scores[1]) {
		return "At match " + teamA + " - " + teamB + ", " + teamB + " won!";
	} else if (scores[0] === scores[1]) {
		return "At match " + teamA + " - " + teamB + ", teams played draw.";
	}
}

// Sum Mixed Array.
//
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
// Return your answer as a number.

function sumMix(x) {
	return Number(x.reduce((a, b) => Number(a) + Number(b)));
}

// Fuel Calculator.
//
// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.
//
// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
//
// Good Luck!
//
// Note
// 1 Dollar = 100 Cents

const fuelPrice = (litres, pricePerLiter) => {
	let discountCents = 0;
	if (litres >= 2) discountCents = 0.05;
	if (litres >= 4) discountCents = 0.1;
	if (litres >= 6) discountCents = 0.15;
	if (litres >= 8) discountCents = 0.2;
	if (litres >= 10) discountCents = 0.25;
	const totalPrice = litres * pricePerLiter - litres * discountCents;
	return Number(totalPrice.toFixed(2));
};

// What's the real floor?
//
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
//
// Write a function that given a floor in the american system returns the floor in the european system.
//
// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
//
// Basements (negatives) stay the same as the universal level.
//
// Examples
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

function getRealFloor(n) {
	return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// Sum of positive.
//
// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
	return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// Is it a number?
//
// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

const isDigit = (s) => s === parseFloat(s);

// Sum of Multiples.
//
// Your Job
// Find the sum of all multiples of n below m
//
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n, m) {
	if (n >= m) return "INVALID";

	let sum = 0;
	for (let i = n; i < m; i += n) {
		sum += i;
	}
	return sum;
}

//

//Is your period late?

// In this kata, we will make a function to test whether a period is late.
//
// Our function will take three parameters:
//
// last - The Date object with the date of the last period
//
// today - The Date object with the date of the check
//
// cycleLength - Integer representing the length of the cycle in days
//
// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycleLength) {
	return (
		Math.floor(today.getTime() - last.getTime()) / 86400000 > cycleLength
	);
}

// Logical calculator.

// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
//
// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).

const operations = {
	AND: (a, b) => a && b,
	OR: (a, b) => a || b,
	XOR: (a, b) => a !== b,
};

const logicalCalc = (array, op) => array.reduce(operations[op]);

// Evil or Odious.

// The number n is Evil if it has an even number of 1's in its binary representation.
// The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20
//
// The number n is Odious if it has an odd number of 1's in its binary representation.
// The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19
//
// You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

function evil(n) {
	return n.toString().match(/1/g).length % 2 ? "It's Odious!" : "It's Evil!";
}

// Training JS #32: methods of Math---round() ceil() and floor().

// Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.
//
// If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.
//
// roundIt(3.45) should return 4
// If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.
//
// roundIt(34.5) should return 34
// If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.
//
// roundIt(34.56) should return 35

function roundIt(n) {
	let [left, right] = n
			.toString()
			.split(".")
			.map((x) => x.length),
		dx = left - right,
		fn = dx < 0 ? Math.ceil : dx > 0 ? Math.floor : Math.round;

	return fn(n);
}

//Points of Reflection

// "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.
//
// Task
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

function symmetricPoint([a, b], [c, d]) {
	return [c * 2 - a, d * 2 - b];
}

// Leonardo Dicaprio and Oscars.

// You have to write a function that describe Leo:
//
// function leo(oscar) {
//
// }
// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

function leo(o) {
	if (o === 88) return "Leo finally won the oscar! Leo is happy";
	if (o < 88 && o !== 86) return "When will you give Leo an Oscar?";
	if (o === 86) return "Not even for Wolf of wallstreet?!";
	if (o >= 88) return "Leo got one already!";
}

// Exclusive "or" (xor) Logical Operator.

// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:
//
// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

function xor(a, b) {
	return a !== b;
}

// Merge two sorted arrays into one.

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
//
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
//
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
//
// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

function mergeArrays(a, b) {
	return [...new Set(a.concat(b))].sort((a, b) => a - b);
}

// Grasshopper - Function syntax debugging.

// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

function main(verb, noun) {
	return `${verb}${noun}`;
}

// Days in the year

// A variation of determining leap years, assuming only integers are used and years can be negative and positive.
//
// Write a function which will return the days in the year and the year entered in a string. For example:
//
// yearDays(2000) returns "2000 has 366 days"
// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.
//
// Also the basic rule for validating a leap year are as follows
//
// Most years that can be divided evenly by 4 are leap years.
//
// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.
//
// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.

const yearDays = (year) =>
	`${year} has ${
		(!(year % 100) && year % 400) || year % 4 ? "365" : "366"
	} days`;

// Pick a set of first elements.

// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
//
// If n == 0 return an empty sequence []
//
// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

function first(arr, n = 1) {
	return arr.slice(0, n);
}

// Counting sheep...

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheeps) {
	return arrayOfSheeps.filter(Boolean).length;
}

// Find the position!

// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Ouput :: "Position of alphabet: 1"
//
function position(letter) {
	return `Position of alphabet: ${letter.charCodeAt - 96}`;
}

// The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).
// If the score < 0, return 0.
// For example:
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
// */

const checkExam = (answers, responses) => {
	const score = responses.reduce((total, response, index) => {
		if (!response) return total;
		if (response === answers[index]) return total + 4;
		if (response !== answers[index]) return total - 1;

		return total;
	}, 0);

	return score > 0 ? score : 0;
};

// Closest elevator.

// DESCRIPTION:
// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):
//
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").
//
// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
//
// You can assume that the inputs will always be valid integers between 0-2.
//
// Examples:
//
// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

const elevator = (left, right, call) =>
	Math.abs(call - left) < Math.abs(call - right) ? "left" : "right";

// Twice as old.

// DESCRIPTION:
// Your function takes two arguments:
//
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
	return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// Simple Fun #1: Seats in Theater.

// Task
// Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.
//
// The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.
//
// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

function seatsInTheater(nCols, nRows, col, row) {
	return (nCols - col + 1) * (nRows - row);
}

// Keep Hydrated!

// Nathan loves cycling.
//
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//
// For example:
//
// time = 3 ----> litres = 1
//
// time = 6.7---> litres = 3
//
// time = 11.8--> litres = 5

function litres(time) {
	return Math.floor(time / 2);
}

// Sort and Star.

/*
Description:
You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.
*/

function twoSort(s) {
	return s.sort()[0].split("").join("***");
}

// String cleaning.

/*
Description:
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:
stringClean('! !') == '! !'
stringClean('123456789') == ''
stringClean('This looks5 grea8t!') == 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/

function stringClean(s) {
	return s.replace(/\d/g, "");
}

// Heads and Legs.

const isNatural = (animal) => animal >= 0 && Number.isInteger(animal);
const animals = (heads, legs) => {
	const cows = legs / 2 - heads;
	const chickens = heads - cows;

	return isNatural(chickens) && isNatural(cows)
		? [chickens, cows]
		: "No solutions";
};

// Classy Extentions.

// Description:
// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing class extends You will be preloaded with the Animal class, so you should only edit the Cat class.
// Task
// Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g.
// 'Mr Whiskers meows.'
// The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

class Cat extends Animal {
	speak() {
		return `${this.name} meows.`;
	}
}

// Triple Trouble.
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
// Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"
// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three) {
	return one
		.split("")
		.reduce((a, s, c) => `${a}${one[c]}${two[c]}${three[c]}`, "");
}

// Not so black box.

// The kata has been preloaded with a function called blackBox. Figure out what the function does.

JSopenSesame();

// Blood-Alcohol Content.

/*
Description:
Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact, that he has broken the local law enforcement's breathalizer with his alcoholic breath! Bob feels simply aweful, so he wants to make up for it by creating a function that will calculate his blood-alcohol level for them. Unfortunately, Bob has gotten too inebriated to do any programming today, so he needs your help!
He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.
BAC calculator Formula:
BAC% = (A × 5.14 / W × r) - .015 × H
A: Total alcohol consumed, in ounces (oz)
W: Body weight, in pounds (lbs)
r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
H: Time passed since drinking, in hours
( Sources: http://www.endmemo.com/medical/bac.php, http://www.teamdui.com/bac-widmarks-formula/ )
Alcohol consumed will be passed as a drinks object with two properties: ounces (the total volume of beverage consumed in ounces), and abv (the % of alcohol by volume of the beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.
The gender will be passed as a string, either "male" or "female".
Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal places. No error handling will be required.
Using these parameters, create the function that will calculate Bob's and other partier's BAC.
*/

const bloodAlcoholContent = ({ ounces, abv }, weight, sex, time) =>
	Number(
		(
			((ounces * abv * 5.14) / weight) * (sex === "male" ? 0.73 : 0.66) -
			0.015 * time
		).toFixed(4)
	);

// isReallyNaN.

/*
Description:
I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.
Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.
Any solution is acceptable!
*/

const isReallyNaN = Number.isNaN;

// Do I get a bonus?

/*
Description:
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS and Java) or "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell).
*/

function bonusTime(salary, bonus) {
	return bonus ? `£${10 * salary}` : `£${salary}`;
}

// Get Nth Even Number.

/*
Description:
Return the Nth Even Number
nthEven(1) //=> 0, the first even number is 0
nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)
nthEven(100) //=> 198
nthEven(1298734) //=> 2597466
The input will not be 0.
*/

function nthEven(n) {
	return n * 2 - 2;
}

// How many stairs will Suzuki climb in 20 years?

/*
Description:
Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
20_year_estimate = one_year_total * 20
You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.
Each weekday in the stairs array is an array.
sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
Your function should return the 20 year estimate of the stairs climbed using the formula above.
*/

function stairsIn20(s) {
	return (
		s
			.reduce((arr, day) => arr.concat(...day), [])
			.reduce((total, stairs) => total + stairs, 0) * 20
	);
}

// Remove First and Last Character.

/*
Description:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str) {
	return str.slice(1, -1);
}

// Simple Fun #261: Whose Move.

/*
Description:
Task
Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.
Input/Output
[input] string lastPlayer/$last_player
"black" or "white" - whose move it was during the previous round.
[input] boolean win/$win
true if the player who made a move during the previous round won, false otherwise.
[output] a string
Return "white" if white is to move on the next round, and "black" otherwise.
Example
For lastPlayer = "black" and win = false, the output should be "white".
For lastPlayer = "white" and win = true, the output should be "white".
*/

function whoseMove(lastPlayer, win) {
	if (lastPlayer === "black" && win === false) return "white";
	if (lastPlayer === "white" && win === true) return "white";
	return "black";
}

// Improving Math.round(x).

Math.roundTo = function (number, precision) {
	return +number.toFixed(precision);
};

// Printing Array elements with Comma delimiters.

/*
Description:
Input: Array of elements
["h","o","l","a"]
Output: String with comma delimited elements of the array in th same order.
"h,o,l,a"
*/

function printArray(array) {
	return array.join();
}

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe.

/*
Description:
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/

String.prototype.toAlternatingCase = function () {
	return this.split("")
		.map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
		.join("");
};

// Did she say hallo?

/*
Description:
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
Write a simple regex to check if the string contains the word hallo in different languages.
These are the languages of the possible people you met the night before:
hello - english
ciao - italian
salut - french
hallo - german
holy - spanish
ahoj - czech republic
czesc - polish
By the way, how cool is the czech republic hallo!!
PS. you can assume the input is a string. PPS. to keep this a beginner exercise you don't need to check if the greeting is a subset of word ('Hallowen' can pass the test)
PS. regex should be case insensitive to pass the tests
*/

function validateHello(greetings) {
	let res = /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greetings);
	return res;
}

//  Crash Override.

/*
Description:
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.
Your task is to create a function that, given a proper first and last name, will return the correct alias.
I have created two objects that return a one word name in response to the first letter of your first name and one for the first letter of your surname.
If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}
aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
Happy hacking!
*/

const firstLetter = (str) => str[0].toUpperCase();

const isValidName = (name) => /[a-z]/gi.test(name);

const aliasGen = (fName, sName) =>
	isValidName(fName[0]) && isValidName(sName[0])
		? `${firstName[firstLetter(fName)]} ${surname[firstLetter(sName)]}`
		: "Your name must start with a letter from A - Z.";

// Thinkful - Number Drills: Blue and red marbles.

/*
Description:
You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:
You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.
You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:
the number of blue marbles you put in the bag to start
the number of red marbles you put in the bag to start
the number of blue marbles pulled out so far, and
the number of red marbles pulled out so far.
guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.
*/

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
	return (
		(blueStart - bluePulled) /
		(redStart - redPulled + (blueStart - bluePulled))
	);
}

// CSV representation of array.

/*
Description:
Create a function that returns the CSV representation of a two-dimensional numeric array.
Example:
input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]]
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.
More details here: https://en.wikipedia.org/wiki/Comma-separated_values
*/

function toCsvText(array) {
	return array.join("\n");
}

// For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre.

/*
Description:
This is a beginner friendly kata especially for UFC/MMA fans.
It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!
If the winner is George Saint Pierre he will obviously say:
"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:
"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck!
*/

const quote = function (fighter) {
	switch (fighter.toLowerCase()) {
		case "conor mcgregor":
			return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
		case "george saint pierre":
			return "I am not impressed by your performance.";
		default:
			"Who are you?";
	}
};

// Remove First and Last Character Part Two.

/*
Description:
This is a spin off of my first Kata, you are given a list of characters as a comma separated string. Write a function to return a string containing all except the first and last characters, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return null value.
Arrays are joined by adding a single space between each consecutive array element.
*/

function array(arr) {
	return arr.split(",").slice(1, -1).join(" ") || null;
}

// Grasshopper - Bug Squashing.

/*
Description:
Terminal game bug squashing
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.
You are using a library that already has the functions below. Create a function named that calls the functions in the proper order.
- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/

let health = 100;
let position = 0;
let coins = 0;

const main = () =>
	[rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(
		(action) => action()
	);

// Find the Difference in Age between Oldest and Youngest Family Members.

/*
Description:
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
*/

function differenceInAges(ages) {
	return [
		Math.min(...ages),
		Math.max(...ages),
		Math.max(...ages) - Math.min(...ages),
	];
}

// L1: Bartender, drinks!

/*
Description:
Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:
Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."
Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".
*/

function getDrinkByProfession(param) {
	param = param.toLowerCase();

	switch (param) {
		case "jabroni":
			return "Patron Tequila";
		case "school counselor":
			return "Anything with Alcohol";
		case "programmer":
			return "Hipster Craft Beer";
		case "bike gang member":
			return "Moonshine";
		case "politician":
			return "Your tax dollars";
		case "rapper":
			return "Cristal";
		default:
			return "Beer";
	}
}

// Tip Calculator.

/*
Description:
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
You need to consider the following ratings:
Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.
*/

function calculateTip(amount, rating) {
	switch (rating.toLowerCase()) {
		case "terrible":
			return 0;
		case "poor":
			return Math.ceil(amount * 0.05);
		case "good":
			return Math.ceil(amount * 0.1);
		case "great":
			return Math.ceil(amount * 0.15);
		case "excellent":
			return Math.ceil(amount * 0.2);
		default:
			return "Rating not recognised";
	}
}

// Add new item (collections are passed by reference).

/*
Description:
Add an item to the list:
AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)
In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.
P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)
*/

function addExtra(listOfNumbers) {
	return [...listOfNumbers, 1];
}

// Beginner Series #1 School Paperwork.

// Grasshopper - Terminal game move function.

/*
Description:
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
Example:
move(3, 6) should equal 15
*/

function move(position, roll) {
	return position + roll * 2;
}

// Grasshopper - Combine strings.

/*
Description:
Combine strings function
Create a function named combineNames(combine_names in python, ruby) that accepts two parameters (first and last name). The function should return the full name.
Example:
combineNames('James', 'Stevens')
returns:
'James Stevens'
*/

function combineNames(n1, n2) {
	return `${n1} ${n2}`;
}

// Is the date today.

/*
Description:
This is a simple function that should take in a date object and return a boolean representing weather the date is today or not.
Make sure that your function does not return a false positive by just checking just the day.
*/

function isToday(date) {
	return new Date().toDateString() === date.toDateString();
}

// Grasshopper - Order of operations.

/*
Description:
Grasshopper Order of Operations
You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.
*/

function orderOperations() {
	return (2 + 2) * (2 + 2) * 2;
}

// Grasshopper - Basic Function Fixer.jsr.

/*
Description:
Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors, but it returns the wrong number.

Can you help me fix the function?
*/

function addFive(num) {
	const total = num + 5;
	return total;
}

// Messi's Goal Total.

/*
Description:
Messi's Goal Total
Use variables to find the sum of the goals Messi scored in 3 games
Information
Messi goal scoring statistics:
Competition	Goals
La Liga	43
Champions League	10
Copa del Rey	5
Define
Create three variables and store the appropriate values using the table above:
laLigaGoals
championsLeagueGoals
copaDelReyGoals
Create a fourth variable named totalGoals (javascript, C#) or total_goals (python, ruby). totalGoals/total_goals should store the sum of all of Messi's goals for this year.
*/

const laLigaGoals = 43;
const championsLeagueGoals = 10;
const copaDelReyGoals = 5;

const totalGoals = 58;

// Terminal game turn function.

/*
Description:
Terminal game turn function
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.
You are using a library (Game.Logic in C#) that already has the functions below. Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper order as described in the paragraph above.
- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/

function doTurn() {
	rollDice(), move(), combat(), getCoins(), buyHealth(), printStatus();
}

// Grasshopper - Check for factor.

/*
Description:
Check for Factor
This function should test if the factor is a factor of base.
Return true if it is a factor or false if it is not.
Information
Factors are numbers you can multiply together to get another number.
2 and 3 are factors of 6 because:
2 * 3 = 6
You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
In Javascript and C# you can use % to check for a remainder
For example 2 is not a factor of 7 because:
7 % 2 = 1
*/

function checkForFactor(base, factor) {
	return base % factor === 0;
}

// Grasshopper - Array Mean.

/*
Description:
Find Mean
Find the mean (average) of a list of numbers in an array.
Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
For an example list of 1, 3, 5, 7
1. Add all of the numbers
1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
16/4 = 4
3. The mean (or average) of this list is 4
*/

const findAverage = function (nums) {
	return nums.reduce((a, b) => a + b, 0) / nums.length;
};

// Grasshopper - If/else syntax debug.

/*
Description:
If/else syntax debug
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive. Unfortunately, Greg made some errors while creating the function.
checkAlive/CheckAlive should return true if the player's health is greater than 0 or false if it is 0 or below.
checkAlive receives one parameter health which will always be a whole number between -10 and 10.
*/

function checkAlive(health) {
	return health > 0;
}

// Formatting decimal places #0.

/*
Description:
Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
Example:
5.5589 is rounded 5.56
3.3424 is rounded 3.34
*/

function twoDecimalPlaces(n) {
	return +n.toFixed(2);
}

// Beginner Series #1 School Paperwork.

/*
Description:
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need.
Example:
paperwork(5, 5) == 25
Note! if n or m < 0 return 0! Waiting for translations and Feedback! Thanks!
*/

function paperwork(n, m) {
	return n > 0 && m > 0 ? n * m : 0;
}

//  Super Duper Easy.

/*
Description:
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
Note: in C#, you'll always get the input as a string, so the above applies if the string isn't representing a double value.
*/

function problem(x) {
	return typeof x === "number" ? x * 50 + 6 : "Error";
}

// Online RPG: player to qualifying stage?.

/*
Description:
Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.
Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.
Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.
In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".
Otherwise return, False/false (according to the language n use).
NOTE
: Remember, in C# you have to cast your output value to Object type!
*/

function playerRankUp(points) {
	if (points >= 100)
		return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
	return false;
}

// Keep up the hoop.

/*
Description:
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
-If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
-If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/

function hoopCount(n) {
	return n >= 10
		? "Great, now move on to tricks"
		: "Keep at it until you get it";
}

// Count by X.

/*
Description:
Create a function with two arguments that will return a list of length (n) with multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

function countBy(x, n) {
	const z = [];
	for (let i = 1; i <= n * x; i++) if (i % x === 0) z.push(i);
	return z;
}

// Training JS #4: Basic data types--Array.

/*
Description:
Training JS #4:
Basic data types--Array

In javascript, Array is one of basic data types. Define an empty array can use var arr=new Array() or var arr=[]

Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

Each element in the array has an index, use arr[index] to get the value of element.

index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

var arr=[1,2,3];     //define an array arr contains elements 1 2 3
arr.push(4);         //add element 4 to arr
console.log(arr)     //[1,2,3,4]
arr.pop();           //remove the last element from arr
console.log(arr)     //[1,2,3]
#Task
I've written five function, each function receives a parameter: arr(an array), you should coding something with arr.
    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr
When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
*/

function getLength(arr) {
	//return length of arr
	return arr.length;
}

function getFirst(arr) {
	//return the first element of arr
	return arr[0];
}

function getLast(arr) {
	//return the last element of arr
	return arr[arr.length - 1];
}

function pushElement(arr) {
	const el = 1;
	//push
	arr.push(4);
	return arr;
}

function popElement(arr) {
	//pop an element from arr
	arr.pop();
	return arr;
}

// Training JS #6: Basic data types--Boolean and conditional statements if..else.

/*
Description:
Training JS #6:
Basic data types--Boolean and conditional statements if..else

In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, || or some bitwise operators:&, |, !, ^

Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example:

var arr=[];
...
...
......
if (arr.length) return "arr has elements";
else            return "arr is empty";
You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.

These values are converted to false in the conditional statement:

0, -0, "", null, undefined, NaN
#Task
Coding in function ```trueOrFalse```, function accept 1  parameters:```val```, try to use the conditional statement if...else, if ```val``` value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
*/

function trueOrFalse(val) {
	return Boolean(val).toString();
	// Training JS #11: loop statement --break,continue.

	/*
    Description:
    Training JS #11:
    loop statement --break,continue

    We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:

    function findFirstOddNumber(arr){
      var result;
      for (var i=0;i<arr.length;i++){
        if (arr[i]%2==1){
          result=arr[i];
          break;
        }
      }
      return result;
    }
    In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.

    In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:

    function dontDisplayNegative(arr){
      for (var i=0;i<arr.length;i++){
        if (arr[i]<0) continue;
        console.log(arr[i])
      }
    }
    In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.

    Through the use of break and continue, you can make the loop statement more flexible and convenient.

    Ok, lesson is over. let's us do some task with break and continue.

    #Task
    Coding in function ```grabDoll```. function accept 1 parameter:```dolls```. it's a string array, a list of some dolls.

    You need traverse ```dolls``` by using ```for``` loop. If element is  "Hello Kitty" or "Barbie doll", you should push it to a ```bag```(bag is an array, I've defined in the function); if it's other strings, we should use ```continue``` skip it.

    When the ```bag``` has three element, ```bag``` is full. You should use ```break``` jump out the loop; If ```bag``` is not full, you should traverse ```dolls``` until the last element.

    Return the ```bag``` after for loop finished.

    You should use ```for```, ```break``` and ```continue``` in your code. otherwise, your solution may not pass this kata.

    If you forgot how to push an element to array, please refer to [lesson 4](http://www.codewars.com/kata/571effabb625ed9b0600107a).
    */

	function grabDoll(dolls) {
		const bag = [];
		for (let i = 0; i < dolls.length; i++) {
			if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
				bag.push(dolls[i]);
			} else continue;

			if (bag.length >= 3) break;
		}
		return bag;
	}
}

// Chuck Norris VII - True or False? (Beginner).

/*
Description:


It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

Go show some truth who's boss!
*/

function ifChuckSaysSo() {
	return !true;
}

// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search().

/*
Description:
Training JS #17:
Methods of String object--indexOf(), lastIndexOf() and search()

This time we learn three methods to retrieve the string:indexOf() lastIndexOf() and search(). Their usage:

StringObject.indexOf(searchvalue,fromindex)
StringObject.lastIndexOf(searchvalue,fromindex)
StringObject.search(searchvalue/regexp)
indexOf() retrieves a string from the location of the fromindex to the right (If fromindex is omitted, began retrieval from index0).

lastIndexOf() retrieves a string from the location of the fromindex to the left (If fromindex is omitted, began retrieval from last chars).

Usage of search() is similar to indexOf(). It is characterized by the support of regular expressions, but it always returns the position of the first match from the left side(This means that it does not support the option "g" of regular expressions).

Here we use some examples to illustrate their usage and difference:

var str="Hello World!";
console.log(str.indexOf("e"))
console.log(str.lastIndexOf("e"))
console.log(str.search("e"))
//output:
1
1
1
We can see, str.indexOf("e") equals str.lastIndexOf("e"), because there is only one "e" in str. Look at the following example:

var str="Hello World!";
console.log(str.indexOf("o"))
console.log(str.lastIndexOf("o"))
console.log(str.search("o"))
//output:
4
7
4
We can see, indexOf() returned 4 and lastIndexOf() returned 7. search() always returned the first "o". Look at the following example:

var str="Hello World!";
console.log(str.indexOf("o",5))
console.log(str.lastIndexOf("o",5))
console.log(str.search("o"))
//output:
7
4
4
We can see, indexOf() returned 7, because it start retrieves from index 5 to the right; lastIndexOf() returned 4 because it start retrieves from index 5 to the left;. search() always returned the first "o". Look at the following example:

var str="Hello World!";
console.log(str.indexOf("world"))
console.log(str.lastIndexOf("world"))
console.log(str.search(/world/i))
console.log(str.search(/word/i))
//output:
-1
-1
6
-1
From this example we can see that indexOf() and lastIndexOf() can not find "world" in str, because "World" and "world" are diffrent; search() uses a regular expression, the option i allows it to ignore the case(Regular expressions are powerful and complex, and we will learn it later). when the search string is not found, they always return -1;

Ok, lesson is over. let's us do some task.

#Task
Coding in function ```firstToLast```, function accept 2 parameters:```str``` and ```c```. ```str``` is a string. ```c``` is a char.

Please return the gap between the first position of ```c``` and the last position of ```c```.

If there are a lot of ```c``` in the ```str```, should  return a positive integer; If there is only one ```c``` in ```str```, should return 0; If there is no ```c``` in the ```str```, should return -1. Retrieval should not ignored the case.

for example:

```
firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1
```
*/

function firstToLast(str, c) {
	const first = str.indexOf(c),
		last = str.lastIndexOf(c);
	const lenght = last - first;
	return str.includes(c) ? lenght : str.indexOf(c);
}

// Training JS #12: loop statement --for..in and for..of.

/*
Description:
Training JS #12:
loop statement --for..in and for..of

In lesson #11, we learned that for loop can traverse the array. If we want to traverse an object, we can use the variant of the for: for..in, it can traverse all the keys of the object. an example:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);
Code results:

keys of ob:
item1
item2
item3
item4
values of ob:
This
is
an
example
for..in can also be used in arrays, at this time the array is treated as an object. Modify the code above, we can see:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var arr=["one","two","three"];
console.log("keys of arr:")
showObjectKeys(arr);
console.log("values of arr:")
showObjectValues(arr);
Code results:

keys of arr:
0
1
2
values of arr:
one
two
three
We can see, keys is the index of the array elements. Need attention: When using for..in with an array, key(index) is always a string, not a number. In the example above, keys is "0", "1" and "2", we can't see the quotes because console.log() doesn't show it.

Although for..in can traverse the array, but we do not recommend the use of it. Because it has a flaw, in some cases, it may not be in accordance with the order of the array elements to traverse the array. So we recommend you use another variant:for..of(New member of ES6), it can traverse all the values of the array, if you don't care about its index. In the example above, function showObjectValues() can be modified like this:

function showArrayValues(arr){
  for (var value of arr){
    console.log(value);
  }
}
Ok, lesson is over, let's us do some task with for..in.

#Task
Coding in function ```giveMeFive```, function accept 1 parameter:```obj```, it's an object.

You need to the traverse the `obj`, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

Return the ```five``` after works finished.

You should use ```for..in``` in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)
*/

function giveMeFive(obj) {
	const arr = [];
	for (const key in obj) {
		if (key.length == 5) arr.push(key);
		if (obj[key].length == 5) arr.push(obj[key]);
	}
	return arr;
}

// Training JS #8: Conditional statement--switch.

/*
Description:
Training JS #8:
Conditional statement--switch

In javascript, switch is another condition statement.

switch(n){
  case 1:
    //code block
    break;
  case 2:
    //code block
    break;
  case ...:
    //code block
    break;

  default:       //default is optional, sometimes it can be omitted
    //code block
                 //The last one does not need break
}
switch is the keyword, n is the variable to switch, case 1 means when n==1, following the ":",you can add some executable statement, with keyword break as termination(if you forgot "break", code will running with case 2, case 3...until a "break" appear),default like else in the if..else statement.

In some cases, use the switch statement to look more clearly than the if..else statement.

For example, we can write a function to calculate what day is today, like this:

function whatDayIsToday(n){
  //getDay() is a methods of Date(), we will learn them later.
  var day=new Date().getDay(),x;
  switch (day){
    case 0:
      x="Today it's Sunday";
      break;
    case 1:
      x="Today it's Monday";
      break;
    case 2:
      x="Today it's Tuesday";
      break;
    case 3:
      x="Today it's Wednesday";
      break;
    case 4:
      x="Today it's Thursday";
      break;
    case 5:
      x="Today it's Friday";
      break;
    case 6:
      x="Today it's Saturday";
      break;
  }
  return x;
}
#Task
Complete function ```howManydays```, function accept 1  parameters:```month```, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).
+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
little tips: Use default for most of the cases can reduce your work.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
*/

function howManydays(month) {
	switch (month) {
		case 1:
			return 31;
		case 2:
			return 28;
		case 3:
			return 31;
		case 4:
			return 30;
		case 5:
			return 31;
		case 6:
			return 30;
		case 7:
			return 31;
		case 8:
			return 31;
		case 9:
			return 30;
		case 10:
			return 31;
		case 11:
			return 30;
		case 12:
			return 31;
	}
	return month;
}

// Training JS #5: Basic data types--Object.

/*
Description:
Training JS #5:
Basic data types--Object

In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}
you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")
#Task
Give you a function ```animal```, accept 1 parameter:```obj``` like this:

```
{name:"dog",legs:4,color:"white"}
```

and return a string like this:

```
"This white dog has 4 legs."
```
When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
*/

function animal(obj) {
	return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// Finish Guess the Number Game.

/*
Description:
Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

If the user tries to guess WRONG more than the limit the function should throw an error
If the user guess wrong it should lose a life and return false (if you guess correctly you shouldn't remove a life)
If the user guess right it should return true
Can you finish the game so all the rules are met?
*/

class Guesser {
	constructor(number, lives) {
		this.number = number;
		this.lives = lives;
	}

	guess(n) {
		if (!this.lives) throw new Error("You have no more life");
		if (n === this.number) return true;
		this.lives--;
		return false;
	}
}

// Well of Ideas - Easy Version.

/*
Description:
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x) {
	const count = x.reduce((s, v) => s + (v == "good"), 0);
	return count ? (count > 2 ? "I smell a series!" : "Publish!") : "Fail!";
}

// Count the Monkeys!

/*
Description:
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example, if n = 10:

return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

function monkeyCount(n) {
	let result = [];
	for (let i = 1; i <= n; i++) result.push(i);
	return result;
}

// Training JS #9: loop statement --while and do..while.

/*
Description:
Training JS #9:
loop statement --while and do..while

If you want your code to do a lot of similar work, a loop statement is a good choice. For example, if we need to calculate the cumulative value from 1 to 10, we can write code like this:

function sum1_10(){
  return 1+2+3+4+5+6+7+8+9+10;
}
Wow~~,looks very cool! But if we need to calculate the cumulative value from 1 to 100, the code becomes:

function sum1_100(){
  return 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25
  +26+27+28+29+30+31+32+33+34+35+36+37+38+39+40+41+42+43+44+45+46+47+48+49+50
  +51+52+53+54+55+56+57+58+59+60+61+62+63+64+65+66+67+68+69+70+71+72+73+74+75
  +76+77+78+79+80+81+82+83+84+85+86+87+88+89+90+91+92+93+94+95+96+97+98+99+100;
}
Do you feel a bit tired? We can use a loop statement do it:

function sum1_100(){
  var sum=0,num=1;    //Initialize two variables sum and num
  while (num<=100){   //Determine the expression in brackets, while true,
                      //run the code block one time, while false, break the loop
    sum=sum+num;      //Each time num will be added to the current value of sum
                      //It can be simplified as:  sum+=num
    num=num+1;        //Each time the value of num increases by 1
                      //It can be simplified as:  num++
  }
  return sum;         //return the final cumulative value
}
The do..while is a variant of while. The example above can be written like this:

function sum1_100(){
  var sum=0,num=1;
  do{
    sum+=num;
    num++;
  }while (num<=100)
  return sum;
}
The difference is, while judges the condition before perform code execution, do..while judges the condition after code run one time.

Finally, it is worth mentioning: Do not forget to change the value of the variable (for conditional expressions), otherwise it will turn into an infinite loop.

Ok, lesson is over. Let us do some task with while.

#Task
Coding in function ```padIt```, function accept 2  parameters:

1.```str```,  it's a string representing the string to pad, we need pad some ```"*"``` at leftside or rightside of ```str```

2.```n```, it's a number, how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/

const padIt = (str, n) => {
	let result = str;
	let i = 0;

	while (i < n) {
		if (i % 2 === 0) {
			result = `*${result}`;
		} else {
			result = `${result}*`;
		}

		i += 1;
	}

	return result;
};

// Training JS #14: Methods of Number object--toString() and toLocaleString().

/*
Description:
Training JS #14:
Methods of Number object--toString() and toLocaleString()

This time we learn about two useful methods of Number objects: toString() and toLocaleString(). the basic usage of the two methods is to convert a number into a string. look at this:

var num=111;
var a=num.toString(),
    b=num.toLocaleString(),
    c=num+""
console.log([a,b,c])   //put them to an array, we can see the quotes
//output: [ '111', '111', '111' ]
We can see, if you just want to translate a number into a string representation, in the general case the results obtained in these ways is the same. I love to use the last one, cause I'm lazy ;-)

But these two methods have other uses as well.

When used toLocaleString() converted a number to a string. the results obtained are in the order of the local numeric format(I don't have this experience. it is always the same as toString() in my here).

And toString() of Number object has a more special usage: According to the base output different strings.

NumberObject.toString(radix)
radix is optional parameter. if ignored it, the output will be the default decimal. If not, like this:

var num=111;
var a=num.toString(2),
    b=num.toString(8),
    c=num.toString(16),
console.log([a,b,c])
//output: [ '1101111', '157', '6f' ]
They are converted to binary, octal and hexadecimal.

Ok, lesson is over. let's us do some task with Number .toString().

#Task
Coding in function ```colorOf```. function accept 3 parameter:```r``` ```g``` ```b```. It means value of color red green and blue. the value range is 0-255.

Use ```toString(16)``` Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

```
colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"

```

That's all of your work. My work is print your color code on your screen.
*/

function colorOf(r, g, b) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
	if (r.length < 2) {
		r = "0" + r;
	}
	if (g.length < 2) {
		g = "0" + g;
	}

	if (b.length < 2) {
		b = "0" + b;
	}

	return "#" + r + g + b;
}

// SpeedCode #2 - Array Madness.

/*
Description:
SpeedCode #2 - Array Madness
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!
*/

function arrayMadness(a, b) {
	return (
		[...a].reduce((x, y) => x + y ** 2, 0) >
		[...b].reduce((x, y) => x + y ** 3, 0)
	);
}

// Pole Vault Starting Marks.

/*
Description:
For a pole vaulter, it is very important to begin the approach run at the best possible starting mark. This is affected by numerous factors and requires fine-tuning in practice. But there is a guideline that will help a beginning vaulter start at approximately the right location for the so-called "three-step approach," based on the vaulter's body height.

This guideline was taught to me in feet and inches, but due to the international nature of Codewars, I am creating this kata to use metric units instead.

You are given the following two guidelines to begin with: (1) A vaulter with a height of 1.52 meters should start at 9.45 meters on the runway. (2) A vaulter with a height of 1.83 meters should start at 10.67 meters on the runway.

You will receive a vaulter's height in meters (which will always lie in a range between a minimum of 1.22 meters and a maximum of 2.13 meters). Your job is to return the best starting mark in meters, rounded to two decimal places.

Hint: Based on the two guidelines given above, you will want to account for the change in starting mark per change in body height. This involves a linear relationship.
*/

function startingMark(bodyHeight) {
	const m = (10.67 - 9.45) / (1.83 - 1.52);
	return Math.round((m * bodyHeight + 10.67 - m * 1.83) * 100) / 100;
}

// Lario and Muigi Pipe Problem.

/*
Description:
#Issue Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

#Task Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

#Example:

Input: 1,3,5,6,7,8

Output: 1,2,3,4,5,6,7,8
*/

function pipeFix(numbers) {
	let q = Math.max.apply(null, numbers);
	let result = [];
	for (let i = Math.min.apply(null, numbers); i <= q; i++) result.push(i);
	return result;
}

// Pirates!! Are the Cannons ready!??

/*
Description:
Ahoy Matey!

Welcome to the seven seas.

You are the captain of a pirate ship.

You are in battle against the royal navy.

You have cannons at the ready.... or are they?

Your task is to check if the gunners are loaded and ready, if they are: Fire!

If they aren't ready: Shiver me timbers!

Your gunners for each test case are 4 or less.

When you check if they are ready their answers are in a dictionary and will either be: aye or nay

Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

Also, check out the new Pirates!! Kata: https://www.codewars.com/kata/57e2d5f473aa6a476b0000fe
*/

const cannonsReady = (gunners) => {
	return Object.values(gunners).every((response) => response === "aye")
		? "Fire!"
		: "Shiver me timbers!";
};

// Count of positives / sum of negatives.

/*
Description:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(A) {
	if (!A || !A.length) return [];

	let pos = A.filter((x) => x > 0),
		neg = A.filter((x) => x <= 0);

	return [pos.length, Math.floor(neg.reduce((s, v) => s + v, 0))];
}

// Training JS #10: loop statement --for.

/*
Description:
Training JS #10:
loop statement --for

for loop is one of the most frequently used loop statements in JS. It works like while loop. In lesson 9, we wrote a while loop:

function sum1_100(){
  var sum=0,num=1
  while (num<=100){
    sum+=num;
    num++;
  }
  return sum;
}
We can rewrite it by using for loop, like this:

function sum1_100(){
  for (var sum=0,num=1;num<=100;num++){
    sum+=num;
  }
  return sum;
}
As you see, there are three parts in the brackets, separated by ";". The first part is the initialization variable, this part will run before the loop starts. The second part is the conditional expressions, check the expression before the start of each time loops, when the value of the expression is false, loop will be terminated. The third part is the statement about increasing and decreasing variables, they will run after the code block.

For the example above, the running order of the code is:

                              <--- back to part 2
                  -------------------------------------------
                  |                 true                    |
var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
                                |
                           false|
                       loop terminated
When you need to traverse an array, you can use the for loop. look this example:

function displayElements(array){
  for (var i=0;i<array.length;i++){
    console.log(array[i]);
  }
}
This function will display every element of array on your screen.

Ok, lesson is over, let's us do some task with for.

#Task
Coding in function ```pickIt```, function accept 1 parameter:```arr```, it's a number array, we need traverse ```arr``` by using ```for``` loop, if element is odd number, push it to array ```odd```, if it's a even number, push it to array ```even```.

I've defined two array ```odd``` and ```even``` in the function, and also wrote the return statement. ```your work is write a for loop.```

If you forgot how to push an element to array, please refer to [lesson 4](http://www.codewars.com/kata/571effabb625ed9b0600107a).
*/

function pickIt(arr) {
	let odd = [],
		even = [];
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] % 2 == 0) {
			even.push(arr[i]);
		} else {
			odd.push(arr[i]);
		}
	}
	return [odd, even];
}

// Remove exclamation marks.

/*
Description:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
	return s.replace(/!/g, "");
}

// My head is at the wrong end!

/*
Description:
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!
*/

function fixTheMeerkat(arr) {
	return arr.reverse();
}

// Arguments to Binary addition.

/*
Description:
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it
*/

function arr2bin(arr) {
	return arr
		.reduce(
			(total, value) =>
				typeof value === "number" ? total + value : total,
			0
		)
		.toString(2);
}

// Coding 3min : Jumping Dutch act.

/*
Description:
Coding 3min : Jumping Dutch act

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task:
Mr. despair wants to jump off Dutch act, So he came to the top of a building.

Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

Input: floor, The height of the building (floor)

Output: a string, The voice of despair(When jumping Dutch act)

Example:
sc(2) should return "Aa~ Pa! Aa!"

It means:

Mr. despair jumped from the 2 floor, the voice is "Aa~"
He fell on the ground, the voice is "Pa!"
He did not die immediately, and the final voice was "Aa!"
sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

if floor<=1, Mr. despair is safe, return ""

The final advice
Just play in this kata, Don't experiment in real life ;-)
*/

function sc(floor) {
	if (floor <= 1) return "";

	return "Aa~ ".repeat(floor - 1) + "Pa!" + (floor <= 6 ? " Aa!" : "");
}

// Count the number of cubes with paint on.

/*
Description:
Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

The number of times that the cube is cut in each dimension --> the argument 'cuts'.

To solve the puzzle you must create a function that returns an integer representing the total number of small cubes with at least one red side.

Examples:
countSquares(2) --> 26
countSquares(4) --> 98
*/

const countSquares = function (cuts) {
	return cuts ? 6 * Math.pow(cuts, 2) + 2 : 1;
};

// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision().

/*
Description:
Training JS #15:
Methods of Number object--toFixed(), toExponential() and toPrecision()

This time we learn about three useful methods of Number objects: toFixed(), toExponential() and toPrecision(). their purpose is to convert numbers into strings and the difference between them and toString() is:

1. NumberObject.toFixed(n)
toFixed() accepts 1 parameter n, returns a string representation of NumberObject. It does not use the exponential notation. after the decimal point has fixed n digit. If necessary, the number will be rounded or use "0" to make it reach the specified length. If number is greater than le+21, the method only calls NumberObject.toString() and returns a string that is represented by an exponential notation.

2. NumberObject.toExponential(n)
toExponential() accepts 1 parameter n, returns NumberObject string representation, using the exponential count method. that is, there is one digit before the decimal point and n digits after the decimal point. The decimal part of the number is rounded. when necessary, with 0 to make up the specified length.

3. NumberObject.toPrecision(n)
toPrecision(n) accepts 1 parameter n, returns a string representation of NumberObject, contains n valid numbers. If num is large enough To include all the integer part of the NumberObject, then the returned string will use point counting method. otherwise using the exponential counting method.

Simple introduction is abstract, not easy to understand. Here we use examples to explain the difference between them:

//example 1
var num=111;
var a=num.toFixed(),
    b=num.toExponential(),
    c=num.toPrecision()
console.log([a,b,c])   //put them to an array, we can see the quotes
//output: [ '111', '1.11e+2', '111' ]
We can see, if the parameter n is omitted, a and c return a string with the number of original state; b is returned a string using the exponential counting method, the string contains the decimal maximum possible.

//example 2
var num=111.11;
var a=num.toFixed(1),
    b=num.toExponential(1),
    c=num.toPrecision(1)
console.log([a,b,c])
//output: [ '111.1', '1.1e+2', '1e+2' ]
We can see, a returns a string with 1 decimal places, using fixed point counting method; b returns a string with 1 integer and 1 decimal places, using the exponential count method; c also uses the exponential count method, but returns a string with 1 integer.

//example 3
var num=111.11;
var a=num.toFixed(6),
    b=num.toExponential(6),
    c=num.toPrecision(6)
console.log([a,b,c])
//output: [ '111.110000', '1.111100e+2', '111.110' ]
We can see, a returns a string with 6 decimal places(make up with "0"), using fixed point counting method; b returns a string with 1 integer and 6 decimal places(make up with "0"), using the exponential count method; c returns a string with 3 integer and 3 decimal places(make up with "0"), returns the integer and decimal numbers in the string to a total of 6 digits.

In a word, parameter n of toFixed() and toExponential() are used for digital fractional parts; parameter n of toPrecision() is used for the entire number. We can choose to use them according to different needs.

Sometimes, it's not our ultimate goal to use these methods to convert the number into a string. We need to use the value after the change. What should we do?

We need to learn two (or three) very useful global methods:parseInt() and parseFloat(). They can help you get the string back into the number. see the example learn to use them:

//example 4
var num=111.1234;
var s=num.toFixed(2)   //s=="111.12"
var a=parseInt(s),
    b=parseFloat(s),
    c= +s
console.log([a,b,c])
//output: [ 111, 111.12, 111.12 ]
We can see, use parseInt(s) can convert s to an integer; use parseFloat(s) can convert s to a decimal; The '+' is a simplified form of the parseFloat()(when it is used in front of a string).

Ok, lesson is over. let's us do some task.

#Task
Coding in function ```howManySmaller```, function accept 2 parameter:```arr``` and ```n```. ```arr``` is a decimal array. ```n``` is a decimal.

The first mission: let all elements in the array keep two decimal places(No need to convert number n).

The second mission: Traversal arr, count the number of the element which smaller than n and return it.

for example:

```
howManySmaller([1.234,1.235,1.228],1.24) should return 2
howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
```
*/

function howManySmaller(arr, n) {
	return arr.filter((x) => x.toFixed(2) < n).length;
}

// Smallest unused ID.

/*
Description:
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

const nextId = (ids) => {
	const used = new Set(ids);

	for (let i = 0; i <= ids.length; i++) {
		if (!used.has(i)) return i;
	}
};

// Stringy Strings.

/*
Description:
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

function stringy(size) {
	let str = "";
	for (let i = 1; i <= size; i++) str += i % 2;
	return str;
}

// Generate range of integers.

/*
Description:
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
, which takes three arguments and generates a range of integers from min to max, with given step. The first is minimum value, second is maximum of range and the third is step.

Note
min < max
step > 0
*/

function generateRange(min, max, step) {
	let result = [];
	for (let i = min; i <= max; i += step) result.push(i);
	return result;
}

// get ascii value of character.

/*
Description:
get ascii value of character

write a function getASCII which inputs a character and returns the corresponding ascii value for that character. Example : getASCII('A') => 65

for ASCII table, you can refer to http://www.asciitable.com/
*/

const getASCII = (c) => c.charCodeAt(0);

// Power.

/*
Description:
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: Math.pow and some others Math functions are disabled on final tests.
*/

function numberToPower(number, power) {
	let result = 1;
	for (let i = 1; i <= power; i++) {
		result *= number;
	}
	return result;
}

// Convert number to reversed array of digits.

/*
Description:
Convert number to reversed array of digits
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
	return (n + "").split("").map(Number).reverse();
}

// Add Length.

/*
Description:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

function addLength(str) {
	return str.split(" ").map((word) => `${word} ${word.length}`);
}

// Job Matching #1.

/*
Description:
Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

Let's give this a try. We'll create a function match which takes a candidate and a job, which will either return a boolean indicating whether the job is a valid match for the candidate.

A candidate will have a minimum salary, so it will look like this:

let candidate = {
  minSalary: 120000
}
A job will have a maximum salary, so it will look like this:

let job = {
  maxSalary: 140000
}
If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.
*/

function match({ minSalary }, { maxSalary }) {
	if (!minSalary || !maxSalary) throw new Error("");
	return minSalary * 0.9 <= maxSalary;
}

// Name Shuffler.

/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/

function nameShuffler(str) {
	return str.split(" ").reverse().join(" ");
}

// Enumerable Magic #1 - True for All?

/*
Description:
Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.

Here's a (Ruby) resource if you get stuck: http://www.rubycuts.com/enum-all
*/

function all(arr, fun) {
	return arr.every(fun);
}

// Find numbers which are divisible by given number.

/*
Description:
Write a function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is array of numbers and the second is divisor.

Example
divisibleBy([1,2,3,4,5,6], 2) == [2,4,6]
divisibleBy([1,2,3,4,5,6], 2) == [2,4,6]
*/

function divisibleBy(numbers, divisor) {
	return [...numbers].filter((num) => num % divisor === 0);
}

// Wilson primes.

/*
Description:
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

const amIWilson = (p) => [5, 13, 563].indexOf(p) > -1;

// Are arrow functions odd?

/*
Description:
Time to test your basic knowledge in functions! Return the odds from a list:

odds([1,2,3,4,5]) #=> [1,3,5]
*/

function odds(values) {
	// arrow it
	return values.filter((x) => x % 2 != 0);
}

// A Needle in the Haystack.

/*
Description:
    Can you find the needle in the haystack?

    Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

    "found the needle at position " plus the index it found the needle, so:

Python, Ruby & Elixir

find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
JavaScript & TypeScript

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
Java

findNeedle(new Object[] {"hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"})
should return

"found the needle at position 5"
*/

function findNeedle(haystack) {
	return "found the needle at position " + haystack.indexOf("needle");
}

// Decibel Scale.

/*
Description:
The following formula is called the Decibel Scale:

Decibel Scale Formula

The Decibel Scale is used to determine the loudness of a sound, measured in dB:

β is the result we want, defined in dB;
We multiply the result of the logarithmic operation by 10, otherwise it'll be called "Bel Scale";
We provide I, the intensity of the sound wave we need to find the loudness of, which is, for the purposes of this Kata, measured in 2D space and, hence, in Watts per square meter;
Finally, we divide the intensity by the threshold of human hearing, also measured in Watts per square meter. This is the softest possible sound a human ear can hear;
Since the threshold of human hearing involves an extremely small, long number, we need to utilize a logarithmic operation that will provide us the result in a convenient way.
Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.

Results are automatically rounded to the nearest integer by the test cases.
*/

function dBScale(intensity) {
	return 10 * Math.log10(intensity / Math.pow(10, -12));
}

// Safen User Input Part I - htmlspecialchars.

/*
Description:
Safen User Input Part I - htmlspecialchars
You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

Mission
Your mission is to implement a function htmlspecialchars() that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
Good luck :D

Extension
If you are an experienced Javascript programmer, try shortening your code as much as possible and optimise it to minimise run time. Experienced programmers should be able to complete this exercise in one line of code.
*/

function htmlspecialchars(formData) {
	return formData
		.replace(/&/g, "&amp;")
		.replace(/"/g, "&quot;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}

// Is integer safe to use?

/*
Description:
Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false
*/

function SafeInteger(n) {
	return Number.isSafeInteger(n);
}

// Template Strings.

/*
Description:
Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word
' are '
Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings
*/

const TempleStrings = function (obj, feature) {
	return `${obj} are ${feature}`;
};

// Training JS #16: Methods of String object--slice(), substring() and substr().

/*
Description:
Training JS #16:
Methods of String object--slice(), substring() and substr()

From this lesson, we begin to learn about String objects.

First of all, we have a look at the attributes of String: length. Use StringObject.length to get the length of a string, like this:

var str="dsfsdwesdfsadfwerfsdfsdfsdfsdfsdf";
console.log(str.length)  //output: 33
Secondly, a string can be like an array. each character in a string has an index. We can use the index to access this character. like this:

var str="codewars";
for (var i=0;i<str.length;i++) console.log(str[i])
//output:
c
o
d
e
w
a
r
s
String Object has a lot of methods, many of these methods are used for web page text style and color modification. These methods are rarely used in programming and some of they are deprecated now. So we will omit the learning of these methods. These methods are:

anchor()    Create HTML anchor.
big()       Display a string in a large font.
blink()     Display flashing string.
bold()      Use bold display string.
fixed()     Using a typewriter text display string.
fontcolor() Displays a string using the specified color.
fontsize()  Displays a string using the specified size.
italics()   Use italics string.
link()      Display a string as a link.
small()     Use small size to display string.
strike()    Use the delete line to display the string.
sub()       Display the string as a subscript.
sup()       Display the string as a superscript.
This time we learn three methods that used to obtain the substring of the string:slice() substring() and substr(). Their usage:

StringObject.slice(startindex,endindex)
StringObject.substring(startindex,endindex)
StringObject.substr(startindex,length)
Here we use some examples to illustrate their usage and difference:

var str="Hello World!";
console.log(str.slice(6))
console.log(str.substring(6))
console.log(str.substr(6))
//output:
World!
World!
World!
We can see, the first parameter startindex can not be omitted, it represents the beginning of the interception of the string. Second parameter can be omitted, the three method will intercept the string to the end of the string. Look at the following example:

var str="Hello World!";
console.log(str.slice(0,5))
console.log(str.substring(0,5))
console.log(str.substr(0,5))
//output:
Hello
Hello
Hello
We can see, When the startindex is 0, the results obtained by the three methods are the same. But in fact, their operations are different. slice() and substring() intercepted characters from index0 to index5 (not including index5). substr operation is to start from the index0, the interception of a substring of length 5. Look at the following example:

var str="Hello beautiful World!";
console.log(str.slice(6,16))
console.log(str.substring(6,16))
console.log(str.substr(6,9))
//output:
beautiful
beautiful
beautiful
We can see, In order to intercept the same string "beautiful", they use different parameters. Looks like substring and slice usage is similar, what is the difference between them? Look at the following example:

var str="Hello beautiful World!";
console.log(str.slice(16,21))
console.log(str.substring(16,21))
console.log(str.slice(16,-1))
//output:
World
World
World
From this example we can see that the parameters of the slice() can be a negative number. Negative meaning is starting from the right. -1 is first position from the right(at the end of that string).

In a word, for silce() and substring(), we usually choose to use slice(), because it is more flexible and simple. We can choose to use them according to different needs.

Ok, lesson is over. let's us do some task.

#Task
Coding in function ```cutIt```, function accept 1 parameter:```arr```. ```arr``` is a string array.

The first mission: Traversing ```arr```, find the shortest string length.

The second mission: Traversing ```arr``` again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:

```
cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
```
*/

const cutIt = (arr) => {
	const minLength = Math.min(...arr.map((str) => str.length));
	return arr.map((str) => str.slice(0, minLength));
};

// noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence).

/*
Description:
1 < 2 < 3 === true, right? but can

3 < 2 < 1 === true, too??

Here's your task: write a function greaterThanLessThan with three arguments (a,b,c) that returns a boolean (true or false), such that

a = 1
b = 2
c = 3
returns true, as does

a = 3
b = 2
c = 1
Note: arguments do not necessarily have to be in strict ascending or descending order, as indicated by the example test cases.

Check out the included test cases - not all arguments are going to return true! It's up to you to figure out which ones do and which ones don't.

Hint: This challenge is a LOT easier than it might seem at first. Don't focus too much on building functions - just pay attention to precedence.

Best of luck!

Need some pointers? Brush up on your operator precedence here and you'll figure it out:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Don't forget your primitives either:
https://developer.mozilla.org/en-US/docs/Glossary/Primitive
*/

function greaterThanLessThan(a, b, c) {
	return a < b < c;
}

// Classy Classes.

/*
Description:
Classy Classes
Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
Task
Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return
johns age is 34
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	get info() {
		return `${this.name}s age is ${this.age}`;
	}
}

// Implement Array.prototype.filter().

/*
Description:
What we want to implement is a filter function, like Array.filter(), also similar to the _.filter() in underscore.js and lodash.js.

The usage is quite simple, like:

[1,2,3,4].filter((num)=>{ return num > 3})
should output [4]
*/

Array.prototype.filter = function (func) {
	const newArray = [];

	for (let i = 0; i < this.length; i++) {
		if (func(this[i])) newArray.push(this[i]);
	}

	return newArray;
};

// Remove the time.

/*
Description:
You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".
*/

function shortenToDate(longDate) {
	return longDate.split(",")[0];
}

// Localize The Barycenter of a Triangle.

/*
Description:
source: imgur.com

The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. The three medians of a triangle intersect at the same point, called the barycenter or the centroid. Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).

You know that the coordinates of the barycenter are given by the following formulas.

source: imgur.com

For additional information about this important point of a triangle see at: (https://en.wikipedia.org/wiki/Centroid)

Let's see some cases:

barTriang([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]

barTriang([4, 2], [12, 2], [6, 10]) ------> [7.3333, 4.6667]
The given points form a real or a degenerate triangle but in each case the above formulas can be used.

Enjoy it and happy coding!!
*/

function barTriang([p1, p2], [p3, p4], [p5, p6]) {
	return [+((p1 + p5 + p3) / 3).toFixed(4), +((p2 + p4 + p6) / 3).toFixed(4)];
}

// Take an Arrow to the knee, Functionally.

/*
Description:
Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a
C# => Tools.FromCharCode(97) // a

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

const ArrowFunc = function (arr) {
	return arr.map((a) => String.fromCharCode(a)).join(""); //Complete this function
};

// To square(root) or not to square(root).

/*
Description:
#To square(root) or not to square(root)

Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

[4,3,9,7,2,1] -> [2,9,3,49,4,1]
The input array will always contain only positive numbers and will never be empty or null.

The input array should not be modified!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

const isSquareRootInteger = (num) => Number.isInteger(Math.sqrt(num));

const squareOrSquareRoot = (array) =>
	array.map((num) => (isSquareRootInteger(num) ? Math.sqrt(num) : num ** 2));

// Lexical this.

/*
Description:
Lexical this
Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
Output
Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

const Person = function () {
	const person = {
		_name: "Leroy",
		_friends: [],
		fillFriends(f) {
			this._friends.push(...f);
		},
	};
	return person;
};

// Fix the Bugs (Syntax) - My First Kata.

/*
Description:
Fix the Bugs (Syntax) - My First Kata
Overview
Hello, this is my first Kata so forgive me if it is of poor quality.

In this Kata you should fix/create a program that returns the following values:

false/False if either a or b (or both) are not numbers
a % b plus b % a if both arguments are numbers
You may assume the following:

If a and b are both numbers, neither of a or b will be 0.
Language-Specific Instructions
Javascript and PHP
In this Kata you should try to fix all the syntax errors found in the code.

Once you think all the bugs are fixed run the code to see if it works. A correct solution should return the values specified in the overview.

Extension: Once you have fixed all the syntax errors present in the code (basic requirement), you may attempt to optimise the code or try a different approach by coding it from scratch.
*/

function myFirstKata(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		return false;
	} else {
		return (a % b) + (b % a);
	}
}

// Sum Arrays.

/*
Description:
Sum Array
Write a method sum (sum_array in python, SumArray in C#) that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

Examples
numbers = [1, 5.2, 4, 0, -1]
puts sum(numbers)
9.2
Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.

Disclaimer
This is for beginners so we want to test basic loops and math operations. Advanced users may find this extremely easy and can easily write this in one line.
*/

function sum(numbers) {
	return numbers.reduce((a, b) => a + b, 0);
}

// Get number from string.

/*
Description:
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

####javascript

getNumberFromString(s)
####ruby

get_number_from_string(s)
####CSharp

GetNumberFromString(string s)
*/

function getNumberFromString(s) {
	return Number(s.match(/\d/g).join(""));
}

// String Templates - Bug Fixing #5.

/*
Description:
String Templates - Bug Fixing #5
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
*/

function buildString(...template) {
	return `I like ${template.join(", ")}!`;
}

// Find the Remainder.

/*
Description:
Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
*/

function remainder(a, b) {
	return a > b ? a % b : b % a;
}

// Alan Partridge II - Apple Turnover.

/*
Description:


As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

Lynn: Alan, there’s that teacher chap.
Alan: Michael, if he hits me, will you hit him first?
Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
Alan: Yeah, chicken stock.
Phil: Hello Alan.
Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
Lynn: What do you mean?
Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

X will be either a number or a string. Both are valid.
*/

function apple(x) {
	if (Number(x) * Number(x) > 1000) return "It's hotter than the sun!!";
	return "Help yourself to a honeycomb Yorkie for the glovebox.";
}

// Dollars and Cents.

/*
Description:
The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
Good luck! Your team knows they can count on you!
*/

function formatMoney(amount) {
	return `$${amount.toFixed(2)}`;
}

// Short Long Short.

/*
Description:
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).

For example:

solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"
*/

function solution(a, b) {
	return a.length < b.length ? a + b + a : b + a + b;
}

// Miles per gallon to kilometers per liter.

/*
Description:
Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
*/

function converter(mpg) {
	return +(mpg * 0.3540060435382138).toFixed(2);
}

// Enumerable Magic - Does My List Include This?

/*
Description:
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/

function include(arr, item) {
	return arr.includes(item);
}

// Sum of differences in array.

/*
Description:
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([1, 2, 10] Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0.
*/

function sumOfDifferences(arr) {
	return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// Enumerable Magic #25 - Take the First N Elements.

/*
Description:
Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

function take(arr, n) {
	return arr.slice(0, n);
}

// Hello Happy Codevarrior!

/*
Description:
VVhat ?!?

None of zese codevarriors seemz to remember hiz ovvn name !

Kould you help ?

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..
*/

class Warrior {
	constructor(newName) {
		this.wName = newName;
	}

	name(newName) {
		if (newName) {
			this.wName = newName;
		}
		return this.wName;
	}
}

Warrior.prototype.toString = function () {
	return `Hi! my name's ${this.wName}`;
};

// Color Ghost.

/*
Description:
Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

class Ghost {
	constructor() {
		this.colors = ["white", "yellow", "purple", "red"];
	}

	get color() {
		const randomPosition = Math.trunc(Math.random() * this.colors.length);
		return this.colors[randomPosition];
	}
}

// Invalid Login - Bug Fixing #11.

/*
Description:
Invalid Login - Bug Fixing #11
Oh NO! Timmy has moved divisions... but now he's in the field of security. Timmy being the top coder he is has allowed some bad code through, you must help Timmy and filter out any injected code!

Task
Your task is simple, search the password string for any injected code (Injected code is anything that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in!

Preloaded
You will be given a preloaded class called Database with a method login this takes two parameters username and password. This is a generic login function which will check the database for the user it will return either 'Successfully Logged in!' if it passes the test or 'Wrong username or password!' if either the password is wrong or username does not exist.

Usage
var database = new Database();
database.login('Timmy', 'password');
*/

function validate(username, password) {
	if (password.includes("||") || password.includes("//"))
		return "Wrong username or password!";
	const database = new Database();
	return database.login(username, password);
}

// Enumerable Magic #4 - True for None?

/*
Description:
Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
*/

function none(arr, fun) {
	return !arr.some(fun);
}

// Swap Values.

/*
Description:
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/

function swapValues(arr) {
	return arr.reverse();
}

// How many lightsabers do you own?

/*
Description:
Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

No starting help here -- you'll need to know how to write a function that accepts a parameter and returns a value based on that parameter.

howManyLightsabersDoYouOwn("anyone else") \\ should === 0
howManyLightsabersDoYouOwn("Zach") \\ should === 18
*/

function howManyLightsabersDoYouOwn(name) {
	return name == "Zach" ? 18 : 0;
}

// Welcome to the City.

/*
Description:
Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space betweeen each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/

function sayHello(name, city, state) {
	return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

// Sleigh Authentication.

/*
Description:
Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

Examples:

var sleigh = new Sleigh();
sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)
*/

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
	return name === "Santa Claus" && password === "Ho Ho Ho!";
};

// Switch/Case - Bug Fixing #6.

/*
Description:
Switch/Case - Bug Fixing #6
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
*/

function evalObject(value) {
	switch (value.operation) {
		case "+":
			return value.a + value.b;
		case "-":
			return value.a - value.b;
		case "/":
			return value.a / value.b;
		case "*":
			return value.a * value.b;
		case "%":
			return value.a % value.b;
		case "^":
			return Math.pow(value.a, value.b);
	}
}

// Be Concise II - I Need Squares.

/*
Description:
Be Concise II - I Need Squares
You are given a program squaresOnly that accepts an array of natural numbers up to and including
100
(and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.

Refactor the solution to use as few characters as possible. There is a maximum character limit of 127. Here are a few hints:

There are a lot of handy built-in Array methods in Javascript that you may have never heard of even after completing a basic course in Javascript (e.g. those provided by Codecademy) - well, at least I haven't heard of until quite recently. You may also want to research any new built-in methods offered by ES6, the newest specification of Javascript at the time of writing.
Don't you think the array parameter is a bit wordy? ;)
Good luck! :D
*/

function squaresOnly(array) {
	return array.filter((num) => Number.isInteger(Math.sqrt(num)));
}

// Collatz Conjecture (3n+1).

/*
Description:
The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1
#Task

Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

#Examples

hotpo(1) returns 0
(1 is already 1)

hotpo(5) returns 5
5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(6) returns 8
6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

hotpo(23) returns 15
23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
#References

Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture
*/

const hotpo = (n, acc = 0) =>
	n <= 1 ? acc : hotpo(n % 2 === 0 ? n / 2 : 3 * n + 1, acc + 1);

// Training JS #34: methods of Math---pow() sqrt() and cbrt().

/*
Description:
Training JS #34:
methods of Math---pow() sqrt() and cbrt()

In this lesson we learn three methods of Math: pow() sqrt() and cbrt(). Their usage is very simple: sqrt() returns the square root of a number; cbrt() returns the cube root of a number; pow() returns the base to the exponent power.

Their definitions and detailed information:

Math.pow()
Math.sqrt()
Math.cbrt()
Here we use some examples to understand their usage:

var arr1=[1,4,9];
var sqroot=arr1.map(Math.sqrt);
console.log(sqroot);            //output: [1,2,3]

var arr2=[1,8,27];
var cbroot=arr2.map(Math.cbrt);
console.log(cbroot);            //output: [1,2,3]

var arr3=[1,2,3];
var pow2=arr3.map(x=>Math.pow(x,2));
var pow3=arr3.map(x=>Math.pow(x,3));
console.log(pow2);                  //output: [1,4,9]
console.log(pow3);                  //output: [1,8,27]
pow() can use a simplified form: ** operatorcan. See example:

var n=2
console.log(Math.pow(n,2));      //output: 4
console.log(n*n);                //output: 4
console.log(n**2);               //output: 4

console.log(Math.pow(n,3));      //output: 8
console.log(n*n*n);              //output: 8
console.log(n**3);               //output: 8
The second parameters of the pow() can be used as a fractional or decimal fraction, thus getting the same results as sqrt() and cbrt(). See example:

var n=64;
console.log(Math.sqrt(n));     //output: 8
console.log(Math.pow(n,0.5));  //output: 8
console.log(Math.pow(n,1/2));  //output: 8

console.log(Math.cbrt(n));                      //output: 3.9999999999999996
console.log(Math.pow(n,0.333333333333333333));  //output: 3.9999999999999996
console.log(Math.pow(n,1/3));                   //output: 3.9999999999999996
Look at the example above, what's the problem? Yes, the cube root of 64 should be 4, but we have not seen the 4, but see 3.9999999999999996. Due to the numerical precision of JS, the error will be produced in the calculation. This is a problem that can't be avoided. We should pay attention to this problem in use, look at the following example:

function isCube(m,n){
  return Math.cbrt(m)==n;
}
console.log(isCube(27,3))               //output: true
console.log(isCube(64,4))               //output: false
console.log(isCube(125,5))               //output: false
This function is used to verify whether n is the cube root of m. It is obvious that the result is wrong. We should verify like this:

function isCube(m,n){
  return m==n**3;
  //or: return m==n*n*n
}
console.log(isCube(27,3))               //output: true
console.log(isCube(64,4))               //output: true
console.log(isCube(125,5))              //output: true
This method can also be used to verify the number of squares. The following three methods are used to verify that the square root of a number is an integer:

function intRoot1(n){
  return Number.isInteger(Math.sqrt(n));
}
function intRoot2(n){
  return Math.sqrt(n)%1==0;
}
function intRoot3(n){
  var x=Math.round(Math.sqrt(n));
  return x*x==n;
}

console.log(intRoot1(16))               //output: true
console.log(intRoot2(16))               //output: true
console.log(intRoot3(16))               //output: true
The third method is the longest, but it is the most stable one.

Ok, lesson is over. let's us do some task.

#Task
Coding in function ```cutCube```. function accept 2 parameter: ```volume``` and ```n```. ```volume``` is the volume of a cube. If we cut the cube into ```n``` block. please determine whether the length of the cube is an integer. return true or false.

For exmaple:

volume=27, it can be divided into 27 blocks, each small cube side length is 1
```
cutCube(27,27) should return true
```
volume=512, it can be divided into 8 blocks, each small cube side length is 4
```
cutCube(512,8) should return true
```
volume=512, it can be divided into 64 blocks, each small cube side length is 2
```
cutCube(512,64) should return true
```
If the side length of small cube is not a integer, should return false.
```
cutCube(256,8) should return false
cutCube(27,3) should return false
cutCube(123,456) should return false
```
If it can't be divided evenly into ```n``` small cubes, should return false too.
```
cutCube(50000,50) should return false
cutCube(256,4) should return false
```
The two examples above seems to meet our requirements, but please note: a cube is unable to evenly divided into 50 pieces or 4 pieces. Only cubic numbers(such as 8,27,64,125,216...) can be used to divide the cube evenly.

*/

const isIntegerCube = (n) => Number.isInteger(Math.cbrt(n));

const cutCube = (volume, n) => isIntegerCube(n) && isIntegerCube(volume / n);

// Training JS #18: Methods of String object--concat() split() and its good friend join().

/*
Description:
Training JS #18:
Methods of String object--concat() split() and its good friend join()

This time we learn two methods to split or merge string:split() and concat(). also learn a good friend of the split() method: join(). It is an Array method. Their usage:

stringObject.split(separator,howmany)
stringObject.concat(string1,string2,...,stringx)
arrayObject.join(separator)
split() can divided a string into several parts by a specified separator. The result is an array of strings. The split string does not include the separator itself. One of its classic uses is to divide a sentence into an array of words:

var str="My name is John";
var words=str.split(" ");
console.log(words);
//output:
[ 'My', 'name', 'is', 'John' ]
In the example above, we use the space as the separator, divide a sentence into 4 words. If we specify the second parameters, it will be like this:

var str="My name is John";
var words1=str.split(" ",3);
console.log("words1:",words1);
var words2=str.split(" ",5);
console.log("words2:",words2);

//output:
words1:[ 'My', 'name', 'is' ]
words2:[ 'My', 'name', 'is', 'John' ]
When we specify the number of fewer than 4, the result will be a specified number of strings; if the number of the partition is too many, the results will only be the same as the default results.

If we use the empty string as the separator, we'll get an array of strings containing each character:

var str="My name is John";
var words=str.split("");
console.log(words);

//output:
[ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ]
Split can use regular expressions to split the string. But because we have not learned the use of regular expressions, so we do not have to learn this usage.

concat() can merge many strings into a string like this:

var str="My".concat("name","is","John");
console.log(str);

//output:
MynameisJohn
In fact, we rarely see the actual use of concat(), because we have a more simple way. that is using the + operator:

var str="My"+"name"+"is"+"John";
console.log(str);

//output:
MynameisJohn
But even using the + operator, the four words are not the perfect combination of a sentence, because there is no space separator. What should we do? Using join() is the best choice.

join() is the reverse operation of the split() method. We can see a lot of code in the actual use:

var str="My name is John";
var words=str.split(" ");
console.log("use split():",words);
var s=words.join(" ");
console.log("use join():",s);
console.log("use split() and join():",str.split(" ").join(" "))
//output:
use split():[ 'My', 'name', 'is', 'John' ]
use join():My name is John
use split() and join():My name is John
Ok, lesson is over. let's us do some task.

Task
Coding in function splitAndMerge, function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator.

First we need to divide the sentence into words(Use separator space); and then divide each word into characters(Use separator empty string); and then merge each characters with the specified sp; at last merge all the words(Use separator space) and return it.

for example:

splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
splitAndMerge("My name is John","-") should return "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!",".") should return "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"
*/

function splitAndMerge(str, sp) {
	return str
		.split(" ")
		.map((word) => word.split("").join(sp))
		.join(" ");
}

// Semi-Optional.

/*
Description:
We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new Javascript Object setting the 'value' key on the new Object to the passed-in value.

So, for example, if we execute the following code:

var wrappedObj = wrap("MyWrappedString");
 // wrappedObject should be  {"value":"MyWrappedString"}
We would then expect the following statement to be true:

wrappedObj.value === "MyWrappedString"
Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.
*/

function wrap(value) {
	return { value };
}

// Do something "n.times" (Simplifying "for" loops).

/*
Description:
Do something "n.times" (Simplifying "for" loops)
Overview
In computer programming, we have a very basic but key principle called the DRY principle. DRY stands for "Don't Repeat Yourself" which basically means that if you have multiple identical (or very similar) blocks of code you should probably simplify it. This is very important because it usually makes the code more readable and understandable to fellow developers and because it always improves performance.

For example, if we wanted to print "Hello World" to the console 100 times, we could write something like this:

// UGH!  Disgusting!
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
However, the problem is, the code is barely readable and looks very ugly. How many times exactly is the string "Hello World" printed to the console? Maybe it is only printed 99 times? Maybe 1000? Also, if there is an error in the statement/code (console.log), the same bug will have to be fixed 100 times and I doubt anyone would enjoy doing that.

Luckily, in just about every modern high-level programming language, there exists a for loop that makes the code much more readable and DRY:

// Much better :D
for (var i = 0; i < 100; i++) {
  console.log("Hello World");
}
By executing the same action 100 times by using a single for loop instead of copying and pasting the same code 100 times, the code becomes much more readable and easy to debug. For example, if I misspelt "Hello World" I only need to fix it in one place to eliminate the bug as opposed to fixing it in every console.log statement.

Task
However, I myself find the for loop very complex and unreadable. Think about it - would you know what the for loop does if you've never learned computer programming? For example, if you've never coded before, would you have any idea what this thing in the for loop: i = 0; i < number; i++ means?

Therefore, I would like you to define a method callable on integers, Number.prototype.times, that effectively replaces the for loop. It should work like this:

// Prints "Hello World" to the console 100 times
// Isn't this much more readable?  At least a non-programmer
// knows that something is being executed 100 times!
(100).times(_ => {
  console.log("Hello World");
});
Sometimes, we also want to loop through an array. For example, if we have an array example = [1,2,3,4], we could use our newly defined method to loop over the array like this:

example.length.times(_ => {
  // Code to be executed
});
However, here lies the problem - since the function does not accept any arguments, how can we use this method to loop over every element in the array? Therefore, your Number.prototype.times method should supply the iteration variable i to the anonymous function being executed to support this feature of looping through every element in an array, like such:

example.length.times(i => {
  console.log(example[i]);
});
/* Prints the following to the console:
1
2
3
4
*/

/*The iteration variable supplied to the anonymous function could also be used like this:

(100).times(i => {
    console.log(i);
});
/* Prints all integers from 0 (inclusive) to 100 (exclusive) */
/*Task Summary
In case you got lost, here's precisely what you have to do: define a method Number.prototype.times that accepts a function f as an argument and executes it as many times as the integer it is called on (e.g. (100).times would execute something 100 times). The iteration variable i should be supplied to the anonymous function being executed in order to support looping through array elements.

FUNDAMENTALS
*/

Number.prototype.times = function (f) {
	for (let i = 0; i < this; i++) f(i);
};

// Sentence Smash.

/*
Description:
Sentence Smash
Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
var words = ['hello', 'world', 'this', 'is', 'great'];
smash(words); // returns "hello world this is great"
Assumptions
You can assume that you are only given words.
You cannot assume the size of the array.
You can assume that you will always get an array.
What We're Testing
We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.

Disclaimer
This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line.
*/

// Smash Words

function smash(words) {
	"use strict";
	return words.join(" ");
}

// Basic subclasses - Adam and Eve.

/*
Description:
According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.
*/

class God {
	/**
	 * @returns Human[]
	 */
	static create() {
		return [new Man(), new Woman()];
	}
}

class Human {}

class Man extends Human {}

class Woman extends Human {}

// Regular Ball Super Ball.

/*
Description:
Regular Ball Super Ball
Create a class Ball.

Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

class Ball {
	constructor(ballType = "regular") {
		this.ballType = ballType;
	}
}

// Reverse List Order.

/*
Description:
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples
reverseList([1,2,3,4]) == [4,3,2,1]
reverseList([3,1,5,4]) == [4,5,1,3]
*/

function reverseList(list) {
	return list.reverse();
}

// What's up next?

/*
Description:
Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"
*/

const nextItem = (xs, item) => {
	let found = false;
	let finalValue;

	for (const i of xs) {
		if (found) {
			finalValue = i;
			break;
		}

		if (i === item) found = true;
	}

	return finalValue;
};

// A Strange Trip to the Market.

/*
Description:
You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "How much do people normally tip for something like this?" The artist looks up. "Its always gonna be about tree fiddy."

It was then that you realize the musician was a 400 foot tall beast from the paleolithic era. The Loch Ness Monster almost tricked you!

There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.
*/

function isLockNessMonster(s) {
	return /tree fiddy| three fifty|3.50/.test(s);
}

// Regexp Basics - is it a digit?

/*
Description:
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

String.prototype.digit = function () {
	return /^\d$/g.test(this);
};

// Regex count lowercase letters.

/*
Description:
Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/

function lowercaseCount(str) {
	return (str.match(/[a-z]/g) || []).length;
}

// Simple validation of a username with regex.

/*
Description:
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/

function validateUsr(username) {
	return /^([a-z0-9_]){4,16}$/.test(username);
}

// Validate code with simple regex.

/*
Description:
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.
*/

function validateCode(code) {
	return /^[1-3]/g.test(code);
}

// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?

/*
Description:
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it series #1:
Are they opposite?

#Task
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters, or it's a empty string

#Some examples:
isOpposite("ab","AB") should return true;
isOpposite("aB","Ab") should return true;
isOpposite("aBcd","AbCD") should return true;
isOpposite("AB","Ab") should return false;
isOpposite("","") should return false;
*/

const isOpposite = (s1, s2) => {
	if (s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;

	for (let i = 0; i < s1.length; i++) {
		if (s1.charAt(i) === s2.charAt(i)) return false;
	}

	return true;
};

// What is between?

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//
// For example:
//
// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
	let res = [a];
	while (a < b) {
		a += 1;
		res.push(a);
	}
	return res;
}

// Pythagorean Triple.

// DESCRIPTION:
// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.
//
// A Pythagorean Triple consists of arranging 3 integers, such that:
//
// a2 + b2 = c2
//
// Examples
// [5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
//
// [3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
//
// [13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132
//
// [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2
//
// Return Values
// For Python: return True or False
// For JavaScript: return true or false
// Other languages: return 1 or 0 or refer to Sample Tests.

function isPythagoreanTriple(integers) {
	let [a, b, c] = integers.sort((a, b) => a - b);
	return a ** 2 + b ** 2 == c ** 2;
}

// ASCII Total.

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
//
// Examples:
//
//     uniTotal('a') == 97;
// uniTotal('aaa') == 291;

const uniTotal = (string) =>
	[...string].reduce(
		(result, currentElement) => result + currentElement.charCodeAt(),
		0
	);

// Find variable which breaks strict comparison!

// In JavaScript, there is a special case where strict comparison of the same variable returns false! Try to find out what must be done to get such result!
//
// var x = something;
// x === x // returns false!
// Write a function which will return value for which strict comparison will give false!

function findStrangeValue() {
	return NaN;
}

// Return Two Highest Values in List.

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.
//
// The result should also be ordered from highest to lowest.
//
//     Examples:
//
// [4, 10, 10, 9]  =>  [10, 9]
//     [1, 1, 1]  =>  [1]
//     []  =>  []

twoHighest = (arr) => [...new Set(arr.sort((a, b) => b - a))].slice(0, 2);

// Configure package json for a node application.

// Node applications require a file named package.json on the root of the project.
//
//     You can create this file manually or have the command npm init to assist you in this process.
//
//     The fields name and version are mandatory. But there a lot of other fields that you can include:
//
//     for a documentation on all fields see https://docs.npmjs.com/files/package.json
//
//     name: must be lowercase and url friendly
// version: must include major, minor and patch version
// description: can contain a description of your project
// main: the entry point of your application (when running node without args)
// scripts: a set of commands that can be executed with npm run <cmd>
// keywords: an array of strings containing keywords that describe your application
// bugs: an object with the url and/or email to contact about bugs
// license: a valid SPDX license or UNLICENSED (proprietary) or SEE LICENSE IN <filename>
// author: the name, email and url in a single string or an object with these three properties
// contributors: an array of items that follow the same rules as author
// repository: an object with type (e.g. git) and url (e.g. git url)
// private: true|false; if true the repository field can be omitted without any warnings
// preferGlobal: true|false; if your application is preferred to be installed globally
// engines: object listing engines and versions used by your application
// os: array of strings with supported OS
// cpu: array of strings with supported CPU
// dependencies: run-time dependencies of your application, things that will run in production
// devDependencies: compile-time dependencies of your application, things that should not be in production
// The dependencies is an object with the name of modules as keys and the values are the versions. For example to require babel in your application you would have these entries:
//
// {
//     "babel-core": "^6.0.0",
//     "babel-polyfill": "^6.0.0",
//     "babel-preset-es2015": "^6.0.0",
//     "babel-preset-stage-0": "^6.0.0"
// }
// Your task
// Create a package.json configuration and assign it to the configuration constant so it can be tested.
//
//     To pass the kata you need only the least that a real package file would require.
//
//     Notes
// the kata version validation doesn't handle all cases and isn't 100% accurate, so don't try to be too fancy, stick to with the simple
// to simplify the license validation this kata only allows the following
// ISC
// MIT
// UNLICENSED
// SEE LICENSE IN filename

const configuration = {
	name: "your-pack-name",
	description: "",
	version: "1.0.0",
	devDependencies: {
		"coffee-script": "~1.6.3",
	},
};

// Enumerable Magic #20 - Cascading Subsets.

// DESCRIPTION:
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
//
// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]
//
// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
//
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(array, n) {
	return array
		.map((x, y) => array.slice(y, y + n))
		.filter((x) => x.length == n);
}

// Push a hash/an object into array.

// DESCRIPTION:
// You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

items = [{ a: "b", c: "d" }];

// "this" is a problem.

// We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.
//
// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available
//
// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }
//
// var n = new NameMe('John', 'Doe');
// n.firstName //Expected: John
// n.lastName //Expected: Doe
// n.name //Expected: John Doe

function NameMe(first, last) {
	this.firstName = first;
	this.lastName = last;
	this.name = first + " " + last;
}

// OOP: Object Oriented Piracy.

// DESCRIPTION:
// Ahoy matey!
//
// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!
//
// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?
//
// You begin with writing a generic Ship class / struct:
//
// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:
//
// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);
// Task
// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.
//
// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!
//
// Add the method
//
// isWorthIt
// to decide if the ship is worthy to loot. For example:
//
// titanic.isWorthIt() // return false
// Good luck and may you find GOOOLD!

function Ship(draft, crew) {
	this.draft = draft;
	this.crew = crew;
	this.isWorthIt = function () {
		return this.draft - this.crew * 1.5 > 20;
	};
}

// Alternate capitalization.

// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
// The input will be a lowercase string with no spaces.
//
// Good luck!
//
// If you like this Kata, please try:
//
// Indexed capitalization
//
// Even-odd disparity

function capitalize(s) {
	return [
		s
			.split("")
			.map((v, i) => (i % 2 == 0 ? v.toUpperCase() : v.toLowerCase()))
			.join(""),
		s
			.split("")
			.map((v, i) => (i % 2 !== 0 ? v.toUpperCase() : v.toLowerCase()))
			.join(""),
	];
}

// Scan the Skies.

/*
Description:
Jaimito just graduated high school and wants to use his newfound freedom to travel the world before attending college, assuming debt, and being coerced to work for The Man. Having grown up in the same city his entire life, he wants to go as far away as possible, while remaining in budget. Help Jaimito plan his trip by providing him with the information he needs.

You will be given an array of objects. Each object will contain a destination, the distance to that destination, and the price of a ticket to that destination. Your job will be to return an array of destinations sorted by distance (in descending order) first and price (in ascending order) second.

Example:

Given the following array of objects:

[ {'dest': 'ATL', 'dist': 1300, 'price': 200} ,
{'dest': 'PEK', 'dist': 7000, 'price': 700} ,
{'dest': 'DXB', 'dist': 9000, 'price': 900} ,
{'dest': 'LAX', 'dist': 1300, 'price': 150} ]

You should return ['DXB', 'PEK', 'LAX', 'ATL']

Note:

'dist' and 'price' will always be integers, and 'dest' will always be a three-lettered string.
*/

function scanningSkies(arr) {
	return arr
		.slice()
		.sort((a, b) => b.dist - a.dist || a.price - b.price)
		.map((v) => v.dest);
}

// Absent vowel.

/*
Description:
Your job is to figure out the index of which vowel is missing from a given string.

A has an index of 0,
E has an index of 1,

I has an index of 2,

O has an index of 3,

U has an index of 4.

Example: "John Doe hs 7 red pples under his bsket" => "0";

Example: "Bb Smith sent us six neatly arranged range bicycles" => "3";

There is no need for string validation and every sentence given will contain all vowles but one. (Also, you won't need to worry about capitals)
*/

function absentVowel(x) {
	if (!x.match(/a/)) return 0;
	if (!x.match(/e/)) return 1;
	if (!x.match(/i/)) return 2;
	if (!x.match(/o/)) return 3;
	if (!x.match(/u/)) return 4;
}

// Alphabet symmetry.

/*
Description:
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example, solve(["abode","ABc","xyzD"]) = [4,3,1]. See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!

If you like this Kata, please try:

Last digit symmetry

Alternate capitalization
*/

function solve(arr) {
	const alphabeth = "abcdefghijklmnopqrstuvwxyz";
	return arr.map(
		(x) =>
			x
				.toLowerCase()
				.split("")
				.filter((y, i) => i == alphabeth.indexOf(y)).length
	);
}

// All Inclusive?

// DESCRIPTION:
// Input:
//
// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
//
// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
//
// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense
//
// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true
// Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations

function containAllRots(str, arr) {
	for (let i = 0; i < str.length; i++) {
		if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
			return false;
		}
	}
	return true;
}

// 8 towers.

/*
Description:
Marcus was spending his last summer day playing chess with his friend Rose.

Surprisingly, they had a lot of pieces (we suspect Marcus is a part-time thief, but we will leave that aside), and Marcus wondered in how many different positions could 8 towers (rooks) be in the board, without threatening themselves.

Rose (who was smarter) was wondering if there was any relation between the size of the board, and the number of positions.

So, you should help!

Write a function that, given N (positive-only integer) the size of the board , returns the number of different combinations in which these towers can be.

Example:

towerCombination(2) returns 2, because only the following possibilities can be achieved.

| x 0 |
| 0 x |

| 0 x |
| x 0 |
towerCombination(3) returns 6, because only the following possibilities can be achieved.

| x 0 0 |
| 0 x 0 |
| 0 0 x |

| x 0 0 |
| 0 0 x |
| 0 x 0 |

| 0 x 0 |
| x 0 0 |
| 0 0 x |

| 0 x 0 |
| 0 0 x |
| x 0 0 |

| 0 0 x |
| x 0 0 |
| 0 x 0 |

| 0 0 x |
| 0 x 0 |
| x 0 0 |
*/

function towerCombination(n) {
	return n === 1 ? 1 : n * towerCombination(n - 1);
}

// Arithmetic List!

// In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
// You will be given three parameters :
//
// first the first term in the sequence
// c the constant that you are going to ADD ( since it is an arithmetic sequence...)
// l the number of terms that should be returned
// Useful link: Sequence
//
// Be sure to check out my Arithmetic sequence Kata first ;)
// Don't forget about the indexing pitfall ;)

const seqlist = function (first, c, l) {
	return Array.from({ length: l }, (value, index) => first + c * index);
};

// Basic Calculator.

// DESCRIPTION:
// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).
//
// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null

function calculate(num1, operation, num2) {
	const operations = ["+", "-", "*", "/"];

	if (!operations.includes(operation)) return null;
	if (operation === "/" && num2 === 0) return null;
	if (eval(`${num1}${operation}${num2}`) == -0) return 0;
	return eval(`${num1}${operation}${num2}`);
}

// Arithmetic progression.

// DESCRIPTION:
// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!
//
// The result should be a string of numbers, separated by comma and space.
//
// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

function arithmeticSequenceElements(a, r, n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		{
			arr.push(a + r * i);
		}
	}
	return arr.join(", ");
}

// Bouncing Ball.

// DESCRIPTION:
// You drop a ball from a given height. After each bounce, the ball returns to some fixed proportion of its previous height. If the ball bounces to height 1 or less, we consider it to have stopped bouncing. Return the number of bounces it takes for the ball to stop moving.
//
// bouncingBall(initialHeight, bouncingProportion)
//
// boucingBall(4, 0.5)
// After first bounce, ball bounces to height 2
// After second bounce, ball bounces to height 1
// Therefore answer is 2 bounces
//
// boucingBall(30, 0.3)
// After first bounce, ball bounces to height 9
// After second bounce, ball bounces to height 2.7
// After third bounce, ball bounces to height 0.81
// Therefore answer is 3 bounces
//
// Initial height is an integer in range [2,1000]
//
// Bouncing Proportion is a decimal in range [0, 1)

function bouncingBall(initial, proportion, n = 0) {
	if (initial <= 1) return n;
	initial *= proportion;
	n += 1;
	return bouncingBall(initial, proportion, n);
}

// Boiled Eggs.

// DESCRIPTION:
// You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?
//
// Your Task
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
//
// Rules
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
// Example (Input --> Output)
// 0 --> 0
// 5 --> 5
// 10 --> 10

function cookingTime(eggs) {
	return 5 * Math.ceil(eggs / 8);
}

// Linked Lists - Append.

// /*
// Description:
// Linked Lists - Append
//
// Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.
//
// var listA = 1 -> 2 -> 3 -> null
// var listB = 4 -> 5 -> 6 -> null
// append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.
//
// The push() and buildOneTwoThree() (build_one_two_three() in PHP and ruby) functions need not be redefined. The Node class is also predefined for you in PHP.
//
// /* PHP Only */
// class Node {
//   public $data, $next;
//   public function __construct($data, $next = NULL) {
//     $this->data = $data;
//     $this->next = $next;
//   }
// }
// */

function Node(data) {
	this.data = data;
	this.next = null;
}

function append(a, b) {
	if (!a) return b;
	a.next = append(a.next, b);
	return a;
}

// Build a square.

// DESCRIPTION:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
//
// Example
// n = 3, so I expect a 3x3 square back just like below as a string:
//
// +++
// +++
// +++

function generateShape(int) {
	return Array(int).fill("+".repeat(int)).join("\n");
}

// Average Scores.

// DESCRIPTION:
// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
//
// The array will never be empty.

function average(scores) {
	return Math.round(
		scores.reduce((first, next) => first + next, 0) / scores.length
	);
}

// Calculate Julie's Age.

/*
Description:
Julie is x years older than her brother, and she is also y times as old as him.

Given x and y calculate Julie's age using the function age(x, y).

For example:

Age(6, 3) // returns 9
Note also that x can be negative, and y can be a decimal.

Age(-15, 0.25) // returns 5
That is, Julie is 15 years younger and 0.25 times the age of her brother.

Do not concern yourself with the imperfections inherent in dividing by floating point numbers, as your answer will be rounded. Also, for the sake of simplicity, Julie is never the same age as her brother.
*/

function age(x, y) {
	return (x * y) / (y - 1);
}

// Candy problem.

// Description
// "It's the end of trick-or-treating and we have a list/array representing how much candy each child in our group has made out with. We don't want the kids to start arguing, and using our parental intuition we know trouble is brewing as many of the children in the group have received different amounts of candy from each home.
//
// So we want each child to have the same amount of candies, only we can't exactly take any candy away from the kids, that would be even worse. Instead we decide to give each child extra candy until they all have the same amount.
//
// Task
// Your job is to find out how much candy each child has, and give them each additional candy until they too have as much as the child(ren) with the most candy. You also want to keep a total of how much candy you've handed out because reasons."
//
// Your job is to give all the kids the same amount of candies as the kid with the most candies and then return the total number candies that have been given out. If there are no kids, or only one, return -1.
//
// In the first case (look below) the most candies are given to second kid (i.e second place in list/array), 8. Because of that we will give the first kid 3 so he can have 8 and the third kid 2 and the fourth kid 4, so all kids will have 8 candies.So we end up handing out 3 + 2 + 4 = 9.
//
// candies ([5,8,6,4]) // return 9
//
// candies ([1,2,4,6]) // return 11
//
// candies ([]) // return -1
//
// candies ([1,6]) // return 5

function candies(kids) {
	if (kids.length <= 1) return -1;
	const maxCandies = Math.max(...kids);

	return kids.reduce((total, kid) => total + maxCandies - kid, 0);
}

// Cats in hats.

/*
Description:
The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

The Cat In The Hat is 2,000,000 cat units tall.

Each cat is 2.5 times bigger than the cat underneath their hat.

Find the total height of the cats if they are standing on top of one another.

Counting starts from the Cat In The Hat

n = the number of cats

fix to 3 decimal places.
*/

function height(n) {
	return ((2000000 * (1 - Math.pow(0.4, n + 1))) / (1 - 0.4)).toFixed(3);
}

// Chords.

/*
Description:
In Western music, a major chord (major third) starts at a root note and adds the note 4 semitones and 7 semitones above it.

A minor chord (minor third) starts at a root note and adds the note 3 semitones and 7 semitones above it.

Given a root note root, please return an array of the major chord and the minor chord for that root.

The notes are C, C#, D, D#, E, F, F#, G, G#, A, A#, B –– you are given this as a constant

For a music theory kata from a different point of view (figuring out whether a given set of notes is a major chord or minor chord or neither), try this kata from aniametz.
*/

const notes = [
	"C",
	"C#",
	"D",
	"D#",
	"E",
	"F",
	"F#",
	"G",
	"G#",
	"A",
	"A#",
	"B",
	"C",
	"C#",
	"D",
	"D#",
	"E",
	"F",
	"F#",
	"G",
	"G#",
	"A",
	"A#",
	"B",
];

function chords(root) {
	const note = notes.indexOf(root);
	const first = notes[note];
	const second = notes[note + 4];
	const third = notes[note + 7];
	const fourth = notes[note + 3];
	return [
		[first, second, third],
		[first, fourth, third],
	];
}

// Chinese Zodiac.

/*
Description:
The Chinese zodiac is a repeating cycle of 12 years, with each year being represented by an animal and its reputed attributes. The lunar calendar is divided into cycles of 60 years each, and each year has a combination of an animal and an element. There are 12 animals and 5 elements; the animals change each year, and the elements change every 2 years. The current cycle was initiated in the year of 1984 which was the year of the Wood Rat.

Since the current calendar is Gregorian, I will only be using years from the epoch 1924. For simplicity I am counting the year as a whole year and not from January/February to the end of the year.

##Task

Given a year, return the element and animal that year represents ("Element Animal"). For example I'm born in 1998 so I'm an "Earth Tiger".

animals (or $animals in Ruby) is a preloaded array containing the animals in order:

['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']

elements (or $elements in Ruby) is a preloaded array containing the elements in order:

['Wood', 'Fire', 'Earth', 'Metal', 'Water']

Tell me your zodiac sign and element in the comments. Happy coding :)
*/

function chineseZodiac(year) {
	const animals = [
		"Rat",
		"Ox",
		"Tiger",
		"Rabbit",
		"Dragon",
		"Snake",
		"Horse",
		"Goat",
		"Monkey",
		"Rooster",
		"Dog",
		"Pig",
	];
	const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
	const baseYear = 1924;
	const givenYear = year - baseYear;
	const element = elements[Math.floor(givenYear / 2) % 5];
	const animal = animals[givenYear % 12];
	return element + " " + animal;
}

// Recycle!

/*
Description:
You are having a BBQ, after the BBQ you are left with the rubbish. You have 3 recycling boxes:

Red: Plastics, Green: Glass, Blue: Card.

You will need to sort the rubbish according to the material and return the number of items in each box in the form of an array i.e [2,3,4] where 2 is the number of plastic items, 3 is the number of glass items and 4 is the number of card items. assume:

Plastics > 0, Glass < 0, Card = 0
*/

function recycleMe(recycle) {
	let Plastics = 0,
		Glass = 0,
		Card = 0;
	recycle.map((v) => (v === 0 ? Card++ : v < 0 ? Glass++ : Plastics++));
	return [Plastics, Glass, Card];
}

// Sequence to 1.

/*
Description:
Get the number n to return the sequence from n to 1. The number n can be negative and also large number. (See the range as the following)

Example :
n=5  >> [5,4,3,2,1]
n=-1 >> [-1,0,1]

Range :
Python     -9999999 < n < 9999999
Javascript -9999 < n < 9999
c++        -9999 < n < 9999
Crystal    -9999 < n < 9999
Ruby       -9999 < n < 9999
*/

function seqToOne(n) {
	const arr = [];
	if (n > 1) {
		for (let i = n; i >= 1; i--) {
			arr.push(i);
		}
	}
	if (n < 2) {
		for (let i = n; i <= 1; i++) {
			arr.push(i);
		}
	}
	return arr;
}

// Scrolling Text.

/*
Description:
Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
Good luck!
*/

function scrollingText(text) {
	text = text.toUpperCase();

	return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}

// Ranking position.

/*
Description:
In some ranking people collects points. The challenge is sort by points and calulate position for every person. But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).

For example: Input structure:

[
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 130,
  },
  {
    name: "Mary",
    points: 120,
  },
  {
    name: "Kate",
    points: 120,
  },
]
Output should be:

[
  {
    name: "Bob",
    points: 130,
    position: 1,
  },
  {
    name: "Kate",
    points: 120,
    position: 2,
  },
  {
    name: "Mary",
    points: 120,
    position: 2,
  },
  {
    name: "John",
    points: 100,
    position: 4,
  },
]
*/

function ranking(people) {
	return people
		.sort((a, b) =>
			a.points === b.points
				? a.name.localeCompare(b.name)
				: b.points - a.points
		)
		.map((x) => {
			x.position = people.findIndex((y) => y.points === x.points) + 1;
			return x;
		});
}

// Unique Pairs.

// DESCRIPTION:
// Mrs. Frizzle is beginning to plan lessons for her science class next semester, and wants to encourage friendship amongst her students. To accomplish her goal, Mrs. Frizzle will ensure each student has a chance to partner with every other student in the class in a series of science projects.
//
// Mrs. Frizzle does not know who will be in her class next semester, but she does know she will have n students total in her class.
//
// Specifications
// Create the function projectPartners with the parameter n representing the number of students in Mrs. Frizzle's class. The function should return the total number of unique pairs she can make with n students.
//
// projectPartners(2)
//   --> returns 1
//
// projectPartners(4)
//   --> returns 6
// Remarks
// your solution should not contain any arrays or objects that are used similar to an array. Note that Haskell will use rather large numbers, such as 10^40, so any list-based solution will autmatically fail the test.
//
// your function will only recieve a single number that is greater than or equal to 2 -- you do not need to worry about input validation.

function projectPartners(n) {
	return (n * (n - 1)) / 2;
}

// Shift Left.

/*
You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

For Example:

By applying a move to the string "where", the result is the string "here".
By applying a move to the string "a", the result is an empty string "".
Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

Notes
Both strings consist of lowercase latin letters.
If the string is already empty, you cannot perform any more delete operations.
*/

function shiftLeft(s, t) {
	let i = s.length,
		j = t.length;
	while (i >= 0 && j >= 0 && s[i] == t[j]) i--, j--;
	return i + 1 + (j + 1);
}

// Find the capitals.

// DESCRIPTION:
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
//
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

const capitals = function (word) {
	let a = word.split("");
	let arr = [];
	for (let i = 0; i < word.length; i++) {
		if (a[i] === a[i].toUpperCase()) {
			arr.push(i);
		}
	}
	return arr;
};

// Simple elevator.

// DESCRIPTION:
// There is a house with 4 levels. In that house there is an elevator. You can program this elevator to go up or down, depending on what button the user touches inside the elevator.
//
// Valid levels must be only these numbers: 0,1,2,3
//
// Valid buttons must be only these strings: '0','1','2','3'
//
// Possible return values are these numbers: -3,-2,-1,0,1,2,3
//
// If the elevator is on the ground floor(0th level) and the user touches button '2' the elevator must go 2 levels up, so our function must return 2.
//
// If the elevator is on the 3rd level and the user touches button '0' the elevator must go 3 levels down, so our function must return -3.
//
// If the elevator is on the 2nd level, and the user touches button '2' the elevator must remain on the same level, so we return 0.
//
// We cannot endanger the lives of our passengers, so if we get erronous inputs, our elevator must remain on the same level. So for example:
//
// goto(2,'4') must return 0, because there is no button '4' in the elevator.
// goto(4,'0') must return 0, because there is no level 4.
// goto(3,undefined) must return 0.
// goto(undefined,'2') must return 0.
// goto([],'2') must return 0 because the type of the input level is array instead of a number.
// goto(3,{}) must return 0 because the type of the input button is object instead of a string.

function goto(level, button) {
	console.log(level);
	return typeof button !== "string" ||
		button < 0 ||
		button > 3 ||
		typeof level !== "number" ||
		level < 0 ||
		level > 3 ||
		level == 1.5
		? 0
		: parseFloat(button) - level;
}

// Say hello!

// DESCRIPTION:
// Say hello!
//
// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.
//
// Example:
//
// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null

function greet(name) {
	if (name == null || name.length == 0) return null;
	return `hello ${name}!`;
}

// The Hidden Word.

/*
Description:
Maya writes weekly articles to a well known magazine, but she is missing one word each time she is about to send the article to the editor. The article is not complete without this word. Maya has a friend, Dan, and he is very good with words, but he doesn't like to just give them away. He texts Maya a number and she needs to find out the hidden word. The words can contain only the letter: "a", "b", "d", "e", "i", "l", "m", "n", "o", and "t".

Luckily, Maya has the key:

"a" - 6 "b" - 1 "d" - 7 "e" - 4 "i" - 3 "l" - 2 "m" - 9 "n" - 8 "o" - 0 "t" - 5

You can help Maya by writing a function that will take a number between 100 and 999999 and return a string with the word.

The input is always a number, contains only the numbers in the key. The output should be always a string with one word, all lowercase.

Maya won't forget to thank you at the end of her article :)
*/

function hiddenWord(num) {
	const obj = {
		0: "o",
		1: "b",
		2: "l",
		3: "i",
		4: "e",
		5: "t",
		6: "a",
		7: "d",
		8: "n",
		9: "m",
	};
	return String(num)
		.split("")
		.map((v) => (v = obj[v]))
		.join("");
}

// Only one.

/*
Description:
Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

  onlyOne() --> false
  onlyOne(true, false, false) --> true
  onlyOne(true, false, false, true) --> false
  onlyOne(false, false, false, false) --> false
*/

const onlyOne = (...args) => args.filter(Boolean).length === 1;

// Shortest Word.

// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
	return Math.min(...s.split(" ").map((s) => s.length));
}

// Building blocks.

// DESCRIPTION:
// Write a class Block that creates a block (Duh..)
//
// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
//
// Define these methods:
//
// `getWidth()` return the width of the `Block`
//
// `getLength()` return the length of the `Block`
//
// `getHeight()` return the height of the `Block`
//
// `getVolume()` return the volume of the `Block`
//
// `getSurfaceArea()` return the surface area of the `Block`
// Examples
//     let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
//     b.getWidth() // -> 2
//
//     b.getLength() // -> 4
//
//     b.getHeight() // -> 6
//
//     b.getVolume() // -> 48
//
//     b.getSurfaceArea() // -> 88
// Note: no error checking is needed
//
// Any feedback would be much appreciated

class Block {
	constructor(data) {
		[this.w, this.l, this.h] = data;
	}

	getWidth() {
		return this.w;
	}

	getLength() {
		return this.l;
	}

	getHeight() {
		return this.h;
	}

	getVolume() {
		let { l, w, h } = this;
		return w * l * h;
	}

	getSurfaceArea() {
		let { l, w, h } = this;
		return 2 * (l * w + l * h + w * h);
	}
}

// Spacify.

/*
Description:
Modify the spacify function so that it returns the given string with spaces between each letter. In this exercise, you can assume that only strings will be passed to your function.

spacify('hello world') // h e l l o  w o r l d
*/

function spacify(str) {
	return str.split("").join(" ");
}

// Get the lost toString back.

/*
Description:
There are some functions whose toString methods have been modified.

function foo() {}
foo.toString = function() {
  return 'blablabla';
};
Write a function _originalToString which takes a function as the argument, and returns a string which is as same as the argument's original toString's.

Note: You should not change the argument.

For example, the following statement returns function foo() {} instead of blablabla:

_originalToString(foo); // function foo() {}
*/

const _originalToString = function (func) {
	return Function.toString.apply(func);
};

// Rigged Dice.

/*
Description:
Create a rigged dice function that 22% of the time returns the number 6. The rest of the time it returns the integers 1,2,3,4,5 uniformly.

About the test case

There will only be one test case which calls the throw_rigged function 100k times and checks that 6 is returned in the range of 21700-22300 (inclusive) times. The test does not check that 1-5 is returned uniformly or randomly, but it does check that your function returns integers in the range 1-6 (inclusive).

The test works roughly 98% of the time, so you might want to run it twice if you are confident your solution is correct.

In JS version, test for:

return value should between 1-6;
return value should be randomly;
run your code 100000 times should produce 21700-22300 numbers 6
Good Luck!
*/

function throwRigged() {
	const random = Math.random();
	if (random < 0.22) return 6;
	return Math.floor(Math.random() * (6 - 1)) + 1;
}

// Reverse words.

// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
	return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// Scrabble Score.

/*
Description:
Write a program that, given a word, computes the scrabble score for that word.

Letter Values
You'll need these:

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
There will be preloaded a $dict with all this values in your kata in form of a hash $dict["E"] => 1.

Examples
scrabbleScore('cabbage') // => 14
"cabbage" should be scored as worth 14 points:

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

3 + 2*1 + 2*3 + 2 + 1
= 3 + 2 + 6 + 3
= 5 + 9
= 14
Empty string should return 0. The string can contain whitespaces, you should calculate the scrablle score only of the letters in that string.

scrabbleScore('') // => 0
scrabbleScore('ca bba g  e') // => 14
*/

function scrabbleScore(str) {
	return str
		.replace(/[^a-z]/gi, "")
		.split("")
		.reduce((a, b) => a + $dict[b.toUpperCase()] * 1, 0);
}

// Row Weights.

/*
Description:
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
1- rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

2- rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

3- rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/

rowWeights = (arr) => arr.reduce((a, b, i) => ((a[i % 2] += b), a), [0, 0]);

// Rock Off!

/*
Alice and Bob have participated to a Rock Off with their bands. A jury of true metalheads rates the two challenges, awarding points to the bands on a scale from 1 to 50 for three categories: Song Heaviness, Originality, and Members' outfits.

For each one of these 3 categories they are going to be awarded one point, should they get a better judgement from the jury. No point is awarded in case of an equal vote.

You are going to receive two arrays, containing first the score of Alice's band and then those of Bob's. Your task is to find their total score by comparing them in a single line.

Example:

Alice's band plays a Nirvana inspired grunge and has been rated 20 for Heaviness, 32 for Originality and only 18 for Outfits. Bob listens to Slayer and has gotten a good 48 for Heaviness, 25 for Originality and a rather honest 40 for Outfits.

The total score should be followed by a colon : and by one of the following quotes: if Alice's band wins: Alice made "Kurt" proud! if Bob's band wins: Bob made "Jeff" proud! if they end up with a draw: that looks like a "draw"! Rock on!

The solution to the example above should therefore appear like '1, 2: Bob made "Jeff" proud!'.

*/

function solve(a, b) {
	const [x, y] = a.reduce(
		(p, a, i) => (a == b[i] ? p : (++p[a > b[i] ? 0 : 1], p)),
		[0, 0]
	);
	const m =
		x == y
			? 'that looks like a "draw"! Rock on!'
			: x > y
			? 'Alice made "Kurt" proud!'
			: 'Bob made "Jeff" proud!';
	return `${x}, ${y}: ${m}`;
}

// Ski Jump.

/*
Description:
You are a skier (marked below by the 'X'). You have made it to the Olympics! Well done.

___X_
*****\
******\
*******\
********\
*********\.____/
Your job in this kata is to calculate the maximum speed you will achieve during your downhill run. The speed is dictated by the height of the mountain. Each element of the array is a layer of the mountain as indicated by the diagram above (and further below). So for this example the mountain has a value of 5 (5 rows of stars). Speed is mountain height * 1.5.

The jump length is calculated by (mountain height * speed * 9) / 10. Jump length should be to two dp.

You must return the length of the resulting jump as a string in the following format:

Jump < 10 = 'X metres: He's crap!'
Jump > 10 && < 25 = 'X metres: He's ok!'
Jump > 10 && < 50 = 'X metres: He's flying!'
Jump > 50 = 'X metres: Gold!!'

In this case the right answer would be '33.75 metres: He\'s flying!'

Sadly it takes a lot of time to make arrays look like mountains, so the tests won’t all look so nice. To give an example, the above mountain would look as follows in most cases:

[*****, ******, *******, ********, *********]
Not as much fun, eh?
*/

function skiJump(mountain) {
	const height = mountain.length;
	const speed = height * 1.5;
	const length = ((height * speed * 9) / 10).toFixed(2);
	if (length < 10) return `${length} metres: He's crap!`;
	if (length < 25) return `${length} metres: He's ok!`;
	if (length < 50) return `${length} metres: He's flying!`;
	return `${length} metres: Gold!!`;
}

// Sorted Union.

/*
Description:
Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Courtesy of FreeCodeCamp, a great place to learn web-dev; plus, its founder Quincy Larson is pretty cool and amicable. I made the original one slightly more tricky ;)
*/

function uniteUnique(...arrays) {
	const flatArray = [].concat(...arrays);
	return [...new Set(flatArray)];
}

// Slamming Lockers.

/*
Description:
Johnny is a boy who likes to open and close lockers. He loves it so much that one day, when school was out, he snuck in just to play with the lockers.

Each locker can either be open or closed. If a locker is closed when Johnny gets to it, he opens it, and vice versa.

The lockers are numbered sequentially, starting at 1.

Starting at the first locker, Johnny runs down the row, opening each locker.

Then he runs all the way back to the beginning and runs down the row again, this time skipping to every other locker. (2,4,6, etc)

Then he runs all the way back and runs through again, this time skipping two lockers for every locker he opens or closes. (3,6,9, etc)

He continues this until he has finished running past the last locker (i.e. when the number of lockers he skips is greater than the number of lockers he has).

The equation could be stated as follows:

Johnny runs down the row of lockers n times, starting at the first locker each run and skipping i lockers as he runs, where n is the number of lockers there are in total and i is the current run.

The goal of this kata is to determine which lockers are open at the end of Johnny's running.

The program accepts an integer giving the total number of lockers, and should output an array filled with the locker numbers of those which are open at the end of his run.
*/

function lockerRun(lockers) {
	let arr = [];
	for (let i = 1; i * i <= lockers; i++) arr.push(i * i);
	return arr;
}

// Printer Errors.

// DESCRIPTION:
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.
//
// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
//
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

// Power of two.

// DESCRIPTION:
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
//
// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
//
// You may assume the input is always valid.
//
// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

function isPowerOfTwo(n) {
	return Number.isInteger(Math.log2(n));
}

// Powers of 3.

// DESCRIPTION:
// Given a positive integer N, return the largest integer k such that 3^k < N.
//
// For example,
//
// largest_power(3) == 0
// largest_power(4) == 1
// You may assume that the input to your function is always a positive integer.

function largestPower(n) {
	let res = 0;
	while (3 ** res < n) res++;
	return res - 1;
}

// Powers of i.

/*
Description:
i is the imaginary unit, it is defined by i² = -1, therefore it is a solution to x²+1=0.

Your Task
is to write a function pofi that returns i to the power of a given non-negative integer in its simplest form as a string (answer may contain i).
*/

function pofi(n) {
	return ["1", "i", "-1", "-i"][n % 4];
}

// Product Array (Array Series #5).

/*
Description:
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Notes
Array/list size is at least 2 .

Array/list's numbers Will be only Postives

Repeatition of numbers in the array/list could occur.

Input >> Output Examples
1- productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 12 is the product of all array's elements except the first element

The second element 20 is the product of all array's elements except the second element .

2- productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1

The second element 2 is the product of all array's elements except the second element 5

The Third element 5 is the product of all array's elements except the Third element 2.

3- productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
Explanation:
The first element 180 is the product of all array's elements except the first element 10

The second element 600 is the product of all array's elements except the second element 3

The Third element 360 is the product of all array's elements except the third element 5

The Fourth element 300 is the product of all array's elements except the fourth element 6

Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2
*/

function productArray(numbers) {
	return numbers.map((x) => numbers.reduce((a, b) => a * b) / x);
}

// Product Of Maximums Of Array (Array Series #2).

/*
Description:
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repeatition of numbers in the array/list could occur.

Input >> Output Examples
1- maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
2- maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 2 whose gives product of maxima is 8 * 9 * 10 = 720 .
3- maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
Explanation:
Since the size (k) equal 5 , then the subsequence of size 2 whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600 .
4- maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is -4 * -1 = 4 .
5- maxProduct ({10, 3, -1, -27} , 3)  return (-30)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 2 whose gives product of maxima is 10 * 3 * -1 = -30 .
*/

function maxProduct(numbers, size) {
	return numbers
		.sort((a, b) => a - b)
		.slice(numbers.length - size)
		.reduce((a, b) => a * b, 1);
}

// Refactored Greeting.

// DESCRIPTION:
// The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)
//
// Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.
//
// Here is how the final refactored code would be used:
//
// var joe = new Person('Joe');
// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// joe.name           // should == 'Joe'

class Person {
	constructor(name) {
		this.name = name;
	}

	greet(yourName) {
		return `Hello ${yourName}, my name is ${this.name}`;
	}
}

// Remove duplicate words.

// DESCRIPTION:
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
// Example:
//
// Input:
//
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
// 'alpha beta gamma delta'

const removeDuplicateWords = (s) => [...new Set(s.split(" "))].join(" ");

// Replace every nth.

// DESCRIPTION:
// Task
// Write a method, that replaces every nth char oldValue with char newValue.
//
// Inputs
// text: the string to modify
// n: change the target letter every nth occurrencies
// old_value (or similar): the targetted character
// new_value (or similar): the character to use as replacement
// Note for untyped languages: all inputs are always valid and of their expected type.
//
// Rules
// Your method has to be case sensitive!
// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.
// Example:
// n:         2
// old_value: 'a'
// new_value: 'o'
// "Vader said: No, I am your father!"
//   1     2          3        4       -> 2nd and 4th occurence are replaced
// "Vader soid: No, I am your fother!"
// As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!

function replaceNth(text, n, oldValue, newValue) {
	let i = 0;
	return n > 0
		? text.replace(new RegExp(oldValue, "g"), (c) =>
				++i % n === 0 ? newValue : c
		  )
		: text;
}

// Remove anchor from URL.

// DESCRIPTION:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
	return url.replace(/#.*/, "");
}

// Remove the minimum.

// DESCRIPTION:
// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
//
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
//
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//
// Don't change the order of the elements that are left.
//
// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
	let indexOfMin = numbers.indexOf(Math.min(...numbers));
	return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

// Remove the noise from the string.

/*
Description:
We have a broken message machine that introduces noise to our incoming messages. We know that our messages can't be written using %$&/#·@|º\ª and white characters (like spaces or tabs). Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message.

Your mission is to write a function which removes this noise from the message.

Notice that noise can only be
%$&/#·@|º\ª
charaters, other characteres are not considered noise

For example:

removeNoise("h%e&·%$·llo w&%or&$l·$%d")
// returns hello world
*/

function removeNoise(str) {
	return str.replace(/[%$&/#·@|º\\ª]/gi, "");
}

// Run your String.

/*
Description:
1) Function should accept two arguments:

arg: any type

object with properties:

param: string type.
func: string type. This string is a body of executable function
2) Function should evaluate code of string passed as 'func' with parameter arg passed as argument and return result of execution

Example:

var arg = 4,                         // arg for "string" function call
    obj = {
      param: 'num',                  // parameter name for function in string
      func: 'return Math.sqrt(num)'  // function that need call with arg var
    };

runYourString(arg, obj)              // we expect it should return 2 which is a result of square root of 4
ps: Solution of this Kata just fun language trick.

Usage of this code in production is not recommended.
*/

function runYourString(arg, obj) {
	return new Function(obj.param, obj.func)(arg);
}

// Return the Missing Element.

// DESCRIPTION:
// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!
//
// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.
//
// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
//
// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

function getMissingElement(superImportantArray) {
	let count = 0;
	let arr = superImportantArray.sort((a, b) => a - b);
	for (let i = 0; i <= arr.length; i++) {
		if (i == arr[i]) count++;
	}
	return count;
}

// Selective fear of numbers.

/*
Description:
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm feared of depends on which day of week it is... This a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisable by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of week) and an integer (number to be tested) so it tells the doctor if I'm feared or not. (return a boolean)
*/

const AmIAfraid = function (day, num) {
	if (day == "Monday" && num === 12) return true;
	if (day == "Tuesday" && num > 95) return true;
	if (day == "Wednesday" && num === 34) return true;
	if (day == "Thursday" && num === 0) return true;
	if (day == "Friday" && num % 2 == 0) return true;
	if (day == "Saturday" && num === 56) return true;
	else if (day == "Sunday" && (num == 666 || num === -666)) return true;
	return false;
};

// Simple Fun #7: Will You?.

/*
Description:
Story&Task
Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.

Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.

A person contradicts Mary's belief if one of the following statements is true:

they are young and beautiful but not loved;
they are loved but not young or not beautiful.
Example
For young = true, beautiful = true and loved = true, the output should be false.

Young and beautiful people are loved according to Mary's belief.

For young = true, beautiful = false and loved = true, the output should be true.

Mary doesn't believe that not beautiful people can be loved.

Input/Output
[input] boolean young

[input] boolean beautiful

[input] boolean loved

[output] a boolean value

true if the person contradicts Mary's belief, false otherwise.
*/

function willYou(y, b, l) {
	if (
		(y === true && b === true && l === true) ||
		(y === false && b === false && l === false)
	)
		return false;
	if (y === false && b === true && l === false) return false;
	else if (y === true && b === false && l === false) return false;
	return true;
}

// Basic JS - Calculating averages.

// DESCRIPTION:
// Let's build a calculator that can calculate the average for an arbitrary number of arguments.
//
// The test expects you to provide a Calculator object with an average method:
//
// Calculator.average()
// The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.
//
// It expects Calculator.average(3,4,5) to return 4.

const Calculator = {
	average: function (...args) {
		return args.length == 0
			? 0
			: args.reduce((a, b) => b + a) / args.length;
	},
};

// Help the Fruit Guy.

// DESCRIPTION:
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
//
// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

function removeRotten(bag) {
	return bag ? bag.map((x) => x.toLowerCase().replace(/rotten/gi, "")) : [];
}

// Help Mr. E.

/*
Description:
Mr. E Ven only likes even length words. Please create a translator so that he doesn't have to hear those pesky odd length words. For some reason he also hates punctuation, he likes his sentences to flow.

Your translator should take in a string and output it with all odd length words having an extra letter (the last letter in the word). It should also remove all punctuation (.,?!) as well as any underscores (_).

"How did we end up here? We go?" translated becomes-> "Howw didd we endd up here We go"
*/

function evenator(str) {
	return str.replace(/[.,?!_]/gi, "").split` `.map((v) =>
		v.length % 2 !== 0 ? v + v[v.length - 1] : v
	).join` `;
}

// HTML Generator.

/*
Description:
Another rewarding day in the fast-paced world of WebDev. Man, you love your job! But as with any job, somtimes things can get a little tedious. Part of the website you're working on has a very repetitive structure, and writing all the HTML by hand is a bore. Time to automate! You want to write some functions that will generate the HTML for you.

To organize your code, make of all your functions methods of a class called HTMLGen. Tag functions should be named after the tag of the element they create. Each function will take one argument, a string, which is the inner HTML of the element to be created. The functions will return the string for the appropriate HTML element.

For example,

In JavaScript:

var g = new HTMLGen();
var paragraph = g.p('Hello, World!');
var block = g.div(paragraph);

// The following are now true
paragraph === '<p>Hello, World!</p>'
block === '<div><p>Hello, World!</p></div>'
In Python:

g = HTMLGen();
paragraph = g.p('Hello, World!')
block = g.div(paragraph)

# The following are now true
paragraph == '<p>Hello, World!</p>'
block == '<div><p>Hello, World!</p></div>'
Your HTMLGen class should have methods to create the following elements:

a
b
p
body
div
span
title
comment
Note: The comment method should wrap its argument with an HTML comment. It is the only method whose name does not match an HTML tag. So, g.comment('i am a comment') must produce <!--i am a comment-->.
*/

function HTMLGen() {
	this.div = (s) => "<div>" + s + "</div>";
	this.b = (s) => "<b>" + s + "</b>";
	this.p = (s) => "<p>" + s + "</p>";
	this.a = (s) => "<a>" + s + "</a>";
	this.body = (s) => "<body>" + s + "</body>";
	this.span = (s) => "<span>" + s + "</span>";
	this.title = (s) => "<title>" + s + "</title>";
	this.comment = (s) => "<!--" + s + "-->";
}

// Halving Sum.

/*
Description:
Given a positive integer n, calculate the following sum: n + n/2 + n/4 + n/8 + .... All divisions are integer.

Example
For n = 25, the output should be halvingSum(n) = 47.

The sum to be calculated is 25 + 12 + 6 + 3 + 1, which is 47.
*/

function halvingSum(n) {
	let score = 0;
	while (n >= 1) {
		score += n;
		n = Math.floor((n * 1) / 2);
	}
	return score;
}

// Identical Elements.

/*
Description:
Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
*/

function duplicateElements(m, n) {
	return m.some((v, i, arr) => arr.includes(n[i]));
}

// Incrementer.

/*
Description:
Given an input of an array of digits num, return the array with each digit incremented by its position in the array. For example, the first digit will be incremented by 1, the second digit by 2 etc. Make sure to start counting your positions from 1 and not 0.

incrementer([1,2,3]) => [2,4,6]
Your result can only contain single digit numbers, so if adding a digit with it's position gives you a multiple-digit number, only the last digit of the number should be returned

incrementer([4,6,9,1,3]) => [5,8,2,5,8]

  - 9 + 3 (position of 9 in array) = 12
  - Only its last digit 2 should be returned
Lastly, return [] if your array is empty! Arrays will only contain numbers so don't worry about checking that.
*/

function incrementer(num) {
	return num.map((v, i) => (v + i + 1) % 10);
}

// Indexed capitalization.

// DESCRIPTION:
// Given a string and an array of integers representing indices, capitalize all letters at the given indices.
//
// For example:
//
// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.
//
// Good luck!
//
// Be sure to also try:
//
// Alternate capitalization
//
// String array revisal

function capitalize(s, arr) {
	return s
		.split("")
		.map((val, i) => (arr.includes(i) ? val.toUpperCase() : val))
		.join("");
}

// Initialize my name.

/*
Description:
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

function initializeNames(name) {
	const arr = name.split(" ");
	for (let i = 1; i < arr.length - 1; i++) arr[i] = arr[i].charAt(0) + ".";
	return arr.join(" ");
}

// Inspiring Strings.

// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.
//
// Example:
//
// 'red white blue' //returns string value of white
//
// 'red blue gold' //returns gold

function longestWord(str) {
	return str
		.split(" ")
		.sort((a, b) => a.length - b.length)
		.slice(-1)
		.toString();
}

// Integer Difference.

/*
Description:
Write a function that accepts two arguments: an array of integers and another integer n.

Determine the number of times where two integers in the array have a difference of n.

For example:

int_diff([1, 1, 5, 6, 9, 16, 27], 4) # 3 ([1, 5], [1, 5], [5, 9])
int_diff([1, 1, 3, 3], 2) # 4 ([1, 3], [1, 3], [1, 3], [1, 3])
*/

const intDiff = (arr, n) => {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (Math.abs(arr[j] - arr[i]) === n) {
				count++;
			}
		}
	}
	return count;
};

// International Morse Code Encryption.

/*
Description:
Write a function that will encrypt a given sentence into International Morse Code, both the input and out puts will be strings.

Characters should be separated by a single space. Words should be separated by a triple space.

For example, "HELLO WORLD" should return -> ".... . .-.. .-.. --- .-- --- .-. .-.. -.."

To find out more about Morse Code follow this link: https://en.wikipedia.org/wiki/Morse_code

A preloaded object/dictionary/hash called CHAR_TO_MORSE will be provided to help convert characters to Morse Code.
*/

const encryption = (message) =>
	[...message].map((v) => CHAR_TO_MORSE[v] || v).join(" ");

// Invisible cubes.

// DESCRIPTION:
// Imagine there's a big cube consisting of
// �
// 3
// n
// 3
//   small cubes. Calculate, how many small cubes are not visible from outside.
//
// For example, if we have a cube which has 4 cubes in a row, then the function should return 8, because there are 8 cubes inside our cube (2 cubes in each dimension)
//
// For a visual representation: --> https://imgur.com/a/AN8A5DJ

function notVisibleCubes(n) {
	console.log(n);
	return n > 3 ? (n - 2) * (n - 2) * (n - 2) : n == 3 ? 1 : 0;
}

// Isograms.

// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
	return !str.match(/([a-z]).*\1/i);
}

// Is that a real phone number? (British version).

/*
Description:
Congratulations! That Special Someone has given you their phone number.

But WAIT, is it a valid number?

Your task is to write a function that verifies whether a given string contains a valid British mobile (cell) phone number or not.

If valid, return 'In with a chance'.

If invalid, or if you're given an empty string, return 'Plenty more fish in the sea'.

A number can be valid in the following ways:

Here in the UK mobile numbers begin with '07' followed by 9 other digits, e.g. '07454876120'.

Sometimes the number is preceded by the country code, the prefix '+44', which replaces the '0' in ‘07’, e.g. '+447454876120'.

And sometimes you will find numbers with dashes in-between digits or on either side, e.g. '+44--745---487-6120' or '-074-54-87-61-20-'. As you can see, dashes may be consecutive.

Good Luck Romeo/Juliette!
*/

function validateNumber(str) {
	return /^(\+44|0|-0)?7(-*[0-9]){9}$/.test(str)
		? "In with a chance"
		: "Plenty more fish in the sea";
}

// Katastrophe!

// DESCRIPTION:
// You have been employed by the Japanese government to write a function that tests whether or not a building is strong enough to withstand a simulated earthquake.
//
// A building will fall if the magnitude of the earthquake is greater than the strength of the building.
//
// An earthquake takes the form of a 2D-Array. Each element within the Outer-Array represents a shockwave, and each element within the Inner-Arrays represents a tremor. The magnitude of the earthquake is determined by the product of the values of its shockwaves. A shockwave is equal to the sum of the values of its tremors.
//
// Example earthquake --> [[5,3,7],[3,3,1],[4,1,2]] ((5+3+7) * (3+3+1) * (4+1+2)) = 735
//
// A building begins with a strength value of 1000 when first built, but this value is subject to exponential decay of 1% per year. For more info on exponential decay, follow this link - https://en.wikipedia.org/wiki/Exponential_decay
//
// Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.

function strongEnough(earthquake, age) {
	earthquake = earthquake.reduce(
		(s, v) => s * v.reduce((x, s) => x + s, 0),
		1
	);
	const strength = 1000 * Math.pow(0.99, age);
	return strength > earthquake ? "Safe!" : "Needs Reinforcement!";
}

// Keypad horror.

/*
Description:
Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n
4 5 6\n
7 8 9\n
  0\n

Solve the horror of unstandartized keypads by providing a function that converts computer input to a number as if it was typed by a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only
*/

function computerToPhone(numbers) {
	return numbers.replace(/[0-9]/g, (v) =>
		v == 0
			? 0
			: v == 7
			? 1
			: v == 8
			? 2
			: v == 9
			? 3
			: v == 1
			? 7
			: v == 2
			? 8
			: v == 3
			? 9
			: v
	);
}

// Kooka-Counter.

/*
Description:
A family of kookaburras are in my backyard.

I can't see them all, but I can hear them!

How many kookaburras are there?

Hint
The trick to counting kookaburras is to listen carefully

The males go HaHaHa...

The females go hahaha...

And they always alternate male/female

^ Kata Note : No validation is necessary; only valid input will be passed :-)
*/

let kookaCounter = function (laughing) {
	if (laughing.length === 0) return 0;
	laughing = laughing.replace(/a/gi, "");
	let count = 1;
	for (let i = 0; i < laughing.length - 1; i++) {
		if (laughing[i] !== laughing[i + 1]) {
			count++;
		}
	}
	return count;
};

// Largest Elements.

// DESCRIPTION:
// Write a program that outputs the top n elements from a list.
//
// Example:
//
// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n, xs) {
	return xs.sort((a, b) => a - b).slice(xs.length - n);
}

// Largest pair sum in array.

/*
Description:
Given an array of numbers, find the largest pair sum in the array.

For example

[10,14,2,23,19] should return 42 (i.e. sum of 23,19)

[99,2,2,23,19] should return 122 (i.e. sum of 99,23)

Input array contains minimum two elements and every element is a number.
*/

function largestPairSum(numbers) {
	return numbers
		.sort((a, b) => a - b)
		.slice(-2)
		.reduce((a, b) => a + b, 0);
}

// Leap Years.

// DESCRIPTION:
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
//
// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

function isLeapYear(year) {
	return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

// Lucky Bus Ticket.

/*
Description:
In Russia regular bus tickets usually consist of 6 digits. The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. Write a function to find out whether the ticket is lucky or not. Return true if so, otherwise return false. Consider that input is always a string. Watch examples below.

isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
isLucky('12341234') => false // Only six-digit numbers allowed :(
isLucky('12a21a') => false // Letters are not allowed :(
isLucky('100200') => false // :(
isLucky('22') => false // :(
isLucky('abcdef') => false // :(
*/

function isLucky(ticket) {
	if (ticket.length != 6 || ticket.length === 0) return false;
	return (
		ticket
			.slice(0, Math.round(ticket.length) / 2)
			.split("")
			.reduce((a, b) => a + b * 1, 0) -
			ticket
				.slice(Math.round(ticket.length) / 2)
				.split("")
				.reduce((a, b) => a + b * 1, 0) ===
		0
	);
}

// Love vs friendship.

// DESCRIPTION:
// If　a = 1, b = 2, c = 3 ... z = 26
//
// Then l + o + v + e = 54
//
// and f + r + i + e + n + d + s + h + i + p = 108
//
// So friendship is twice as strong as love :-)
//
// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
//
// The input will always be made of only lowercase letters and will never be empty.

const wordsToMarks = (s) =>
	[...s].reduce((res, c) => (res += c.charCodeAt() - 96), 0);

// Magic Sum of 3s.

/*
Description:
The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3. Write a function magic_sum which accepts an array of integers and returns the sum.

Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

If the sum cannot be calculated, 0 should be returned.
*/

function magicSum(numbers) {
	return numbers && Array.isArray(numbers)
		? numbers.reduce(
				(a, b) =>
					a +
					(b % 2 !== 0 && b.toString().split("").includes("3")
						? b
						: 0),
				0
		  )
		: 0;
}

// List of Presents.

/*
Description:
Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write the following function to help Leo out:

function howManyGifts(maxBudget, gifts)
The first parameter is Leo's budget; he second one is an array (a list in Groovy) containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _
*/

function howManyGifts(maxBudget, gifts) {
	gifts = gifts.sort((a, b) => a - b);
	let sum = 0;
	let i = 0;
	while (maxBudget >= sum) {
		sum += gifts[i];
		i++;
	}
	return i - 1;
}

// Making Copies.

// DESCRIPTION:
// Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy of it.
//
// Note that you may have troubles if you do not return an actual copy, item by item, just a pointer or an alias for an existing list or array.
//
// If not a list or array is given as a parameter in interpreted languages, the function should raise an error.
//
// Examples:
//
// t = [1, 2, 3, 4]
// tCopy = copyList(t)
// t[1] += 5
// t = [1, 7, 3, 4]
// tCopy = [1, 2, 3, 4]

function copyList(l) {
	return [...l];
}

// Match My Husband.

/*
Description:
It is 2050 and romance has long gone, relationships exist solely for practicality.

MatchMyHusband is a website that matches busy working women with perfect house husbands. You have been employed by MatchMyHusband to write a function that determines who matches!!

The rules are... a match occurs providing the husband's "usefulness" rating is greater than or equal to the woman's "needs".

The husband's "usefulness" is the SUM of his cooking, cleaning and childcare abilities and takes the form of an array .

usefulness example --> [15, 26, 19]   (15 + 26 + 19) = 60

Every woman that signs up, begins with a "needs" rating of 100. However, it's realised that the longer women wait for their husbands, the more disatisfied they become with our service. They also become less picky, therefore their needs are subject to exponential decay of 15% per month. https://en.wikipedia.org/wiki/Exponential_decay

Given the number of months since sign up, write a function that returns "Match!" if the husband is useful enough, or "No match!" if he's not.
*/

function match(usefulness, months) {
	const husband = usefulness.reduce((a, b) => a + b, 0);
	const wife = 100 * Math.pow(0.85, months);
	return husband >= wife ? "Match!" : "No match!";
}

// Maximum Product.

/*
Description:
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2 .

Array/list numbers could be a mixture of positives , ngatives also zeros .

Input >> Output Examples
adjacentElementsProduct([1,2,3])  ==>  return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])  ==>  return 50
Explanation:
Max product obtained from multiplying 5 * 10 = 50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou
*/

function adjacentElementsProduct(array) {
	let cache = -Infinity;
	array.map((v, i, arr) =>
		arr[i] * arr[i + 1] > cache ? (cache = arr[i] * arr[i + 1]) : cache
	);
	return cache;
}

// Most digits.

// Find the number with the most digits.
//
// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
	return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
}

// First-Class Function Factory.

/*
Description:
Write a function, factory, that takes a number as its parameter and returns another function.

The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

In the example below, 5 is the number passed into the first function. So it returns a function that takes an array and multiplies all elements in it by five.

Translations and comments (and upvotes) welcome!

Example
var fives = factory(5);       // returns a function - fives
var myArray = [1, 2, 3];
fives(myArray);               //returns [5, 10, 15];
*/

function factory(x) {
	return (array) => array.map((a) => a * x);
}

// Flatten.

// DESCRIPTION:
// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
//
// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

const flatten = (array) => [].concat(...array);

// Flatten and sort an array.

// DESCRIPTION:
// Challenge:
//
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
//
// Example:
//
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
//
// Addendum:
//
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
//
// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

("use strict");

function flattenAndSort(array) {
	return [].concat(...array).sort((a, b) => a - b);
}

// Form The Minimum.

// DESCRIPTION:
// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
//
// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications
//
// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications
//
// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
//
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// Bizarre Sorting-katas
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function minValue(values) {
	return +Array.from(new Set(values))
		.sort((a, b) => a - b)
		.join("");
}

// Fun with lists: indexOf.

/*
Description:
Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!
*/

function indexOf(head, value) {
	let count = 0;
	while (head) {
		if (head.data === value) {
			return count;
		}
		head = head.next;
		count++;
	}
	return -1;
}

// Fun with lists: lastIndexOf.

/*
Description:
Implement the method lastIndexOf (last_index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!
*/

function lastIndexOf(head, value) {
	let count = 0,
		current = head;
	let arr = [];
	while (current !== null) {
		arr.push(current.data);
		current = current.next;
		count++;
	}
	return arr.lastIndexOf(value);
}

// Fun with lists: length.

/*
Description:
Implement the method length, which accepts a linked list (head), and returns the length of the list.

For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!
*/

function length(head) {
	let count = 0;
	while (head) {
		head = head.next;
		count++;
	}
	return count;
}

// Functional Addition.

// DESCRIPTION:
// Create a function add(n)/Add(n) which returns a function that always adds n to any number
//
// Note for Java: the return type and methods have not been provided to make it a bit more challenging.
//
// var addOne = add(1);
// addOne(3); // 4
//
// var addThree = add(3);
// addThree(3); // 6

function add(n) {
	return function (m) {
		return n + m;
	};
}

// Geometric Mean I.

/*
For a variable, x, that may have different values, the geometric mean is defined as:

Suposse that you have to calculate the geometric mean for a research where the amount of values of x is rather small.

Implement the function geometric_meanI(), (geometricMeanI javascript)that receives an array with the different values of the variable and outputs the geometric mean value.

The negative values and strings will be discarded for the calculations.

Nevertheless if the amount of total invalid values is too high, the function will return 0 (Nothing in Haskell). The tolerance for invalid values of the variable will be as follows:

amount of entries      maximum invalid entries
  2 - 10                       1
  From 11 and above       10 % of total of entries
You do not have to round the results.
*/

function geometricMeanI(arr) {
	const gm = arr.filter((a) => typeof a === "number" && a >= 0);
	if (arr.length - gm.length > 1) return 0;
	return Math.pow(
		gm.reduce((a, b) => a * b),
		1 / gm.length
	);
}

// Geometric Progression Sequence.

/*
Description:
In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

Result should be separated by comma and space.

Example
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'
More info: https://en.wikipedia.org/wiki/Geometric_progression
*/

function geometricSequenceElements(a, r, n) {
	let arr = [a];
	for (let i = 0; i < n - 1; i++) {
		arr.push(arr[i] * r);
	}
	return arr.join(", ");
}

// Name Array Capping.

// DESCRIPTION:
// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.
//
// example
//
// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

function capMe(names) {
	return names.map(
		(value) =>
			value.slice(0, 1).toUpperCase() + value.toLowerCase().slice(1)
	);
}

// Name That Number!

/*
Description:
In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"
Words should be seperated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!
*/

function nameThatNumber(x) {
	let returnedValue = "";
	let tens = {
		2: "twenty",
		3: "thirty",
		4: "forty",
		5: "fifty",
		6: "sixty",
		7: "seventy",
		8: "eighty",
		9: "ninety",
	};
	let units = [
		"",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
	];
	if (x == 0) {
		returnedValue = "zero";
	}
	if (x < 20 && x > 0) {
		returnedValue = units[x];
	}
	if (x >= 20) {
		returnedValue =
			tens[Math.floor(x / 10)] + (x % 10 != 0 ? " " : "") + units[x % 10];
	}
	return returnedValue;
}

// Naughty or Nice.

/*
Description:
Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}
Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"
*/

function naughtyOrNice(data) {
	let count = 0;
	for (let month in data) {
		[data[month]].map((v) =>
			Object.values(v).map((v) => (v === "Naughty" ? count-- : count++))
		);
	}
	return count >= 0 ? "Nice!" : "Naughty!";
}

// New £5 notes collectors!.

/*
Description:
The new £5 notes have been recently released in the UK and they've certainly became a sensation! Even those of us who haven't been carrying any cash around for a while, having given in to the convenience of cards, suddenly like to have some of these in their purses and pockets. But how many of them could you get with what's left from your salary after paying all bills? The programme that you're about to write will count this for you!

Given a salary and the array of bills, calculate your disposable income for a month and return it as a number of new £5 notes you can get with that amount. If the money you've got (or do not!) doesn't allow you to get any £5 notes return 0.

£££ GOOD LUCK! £££
*/

function getNewNotes(salary, bills) {
	let sum = salary - bills.reduce((a, b) => a + b, 0);
	return sum > 0 ? Math.floor(sum / 5) : 0;
}

// Next Palindromic Number.

/*
Description:
There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

Let's see:

For Javascript
nextPal(11) == 22

nextPal(188) == 191

nextPal(191) == 202

nextPal(2541) == 2552
You will be receiving values higher than 10, all valid.

Enjoy it!!
*/

function nextPal(val) {
	let pal = 0;
	for (let i = val + 1; ; i++) {
		if (palindrom(i)) {
			pal = i;
			break;
		}
	}
	return pal;
}

function palindrom(i) {
	return i.toString() === i.toString().split("").reverse().join("");
}

// Next Prime.

/*
Description:
Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 1012

Examples
5  ==> 7
12 ==> 13
*/

function nextPrime(n) {
	let count = 0;
	for (let i = n + 1; i > 0; i++) {
		if (isPrime(i)) {
			count = i;
			break;
		}
	}
	return count;
}

function isPrime(n) {
	let rt = Math.sqrt(n);
	for (let i = 2; i <= rt; i++) {
		if (n % i === 0) return false;
	}
	return n !== 1;
}

// Next birth-day of the week finder.

/*
Description:
Can you find after how many years will a person's birthday fall on the same day of the week that he was born?

For example, Joy's birthday is on 16th October, 1990 which falls on Friday. After how many years will his birthday fall on Friday again? (That would be 11 years)

nextBirthdayOfTheWeek(new Date(1990, 10, 16)) //11
nextBirthdayOfTheWeek(new Date(2012, 5, 20))  //6
nextBirthdayOfTheWeek(new Date(1975, 2, 22))  //5
*/

let nextBirthdayOfTheWeek = function (birthday) {
	let weekday = birthday.getDay();
	let yr = birthday.getFullYear();
	yr += 1;
	let month = birthday.getMonth();
	let day = birthday.getDate();

	while (weekday !== new Date(yr, month, day).getDay()) {
		yr++;
	}
	return yr - birthday.getFullYear();
};

// Nice Array.

/*
Description:
A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

example:

[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.
*/

function isNice(arr) {
	if (arr.length === 0) return false;
	return arr.every((v) => arr.includes(v + 1) || arr.includes(v - 1));
}

// Nickname Generator.

/*
Description:
Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".

Notes:

Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified
*/

function nicknameGenerator(name) {
	if (name.length < 4) return "Error: Name too short";
	if (name[2].match(/[aeuio]/)) return name.slice(0, 4);
	return name.slice(0, 3);
}

// Ninja vs Samurai: Strike.

// DESCRIPTION:
// Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:
//
// var ninja = new Warrior('Ninja');
// var samurai = new Warrior('Samurai');
//
// samurai.strike(ninja, 3);
// // ninja.health should == 70
// Can you figure out what is wrong?

class Warrior {
	constructor(name) {
		this.name = name;
		this.health = 100;
	}

	strike(enemy, swings) {
		enemy.health = Math.max(0, enemy.health - swings * 10);
	}
}

// Closest to Zero.

/*
Description:
Simply find the closest value to zero from the list. Notice that there are negatives in the list.

List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

Examples:

[2, 4, -1, -3]  => -1
[5, 2, -2]      => None
[5, 2, 2]       => 2
[13, 0, -6]     => 0
*/

function closest(arr) {
	return arr
		.sort((a, b) => Math.abs(a) - Math.abs(b))
		.includes(arr[0] * -1) && arr[0] !== 0
		? null
		: arr[0];
}

// Coding 3min : A*B=C.

/*
Description:
Coding 3min : A*B=C

This is the simple version of Fastest Code series. If you need some challenges, please try the Performance version

Task:
Give you a number array numbers and a number c.

Find out a pair of numbers(we called them number a and number b) from the array numbers, let a*b=c, result format is an array [a,b]

The array numbers is a sorted array, value range: -100...100

The result will be the first pair of numbers, for example,findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]
*/

// function findAB(numbers,c){
//     for (let i=0;i<numbers.length;i++){
//      for (let j=1+i;j<numbers.length;j++){
//       if (numbers[i]*numbers[j]===c) return [numbers[i],numbers[j]]
//      }
//    }
//   return null
// }

// Coding 3min : toLoverCase().

/*
Description:
Coding 3min : toLoverCase()

Task
Yes, your eyes are no problem, this is toLoverCase (), not toLowerCase (), we want to make the world full of love.

What do we need to do?
You need to add a prototype function to the String, the name is toLoverCase. Function can convert the letters in the string, converted to "L", "O", "V", "E", if not the letter, don't change it.

How to convert? see this example:
"love!".toLoverCase()="EVOL!"
    "l" is 11th(start with 0) in lower case letters
    abcdefghijklmnopqrstuvwxyz
            |
    0...      11----------------->11th letter
    We use this number mod 4------> 11 % 4 = 3

    the 3rd(also start with 0) letter of "LOVE" is "E"
    LOVE
    |
    3--------->3rd letter

    so convert "l" to "E".

    and so on..

    "o" convert to "V", "v" convert to "O", "e" convert to "L"

    last "!" remain unchanged, because it's not a letter.
*/

// String.prototype.toLoverCase=function(){
//     return this.toLowerCase().replace(/[a-z]/g, v => 'LOVE'[(v.charCodeAt(0) - 97) % 4]).toUpperCase();
// }

return arr.sort((a, b) => Math.abs(a) - Math.abs(b)).includes(arr[0] * -1) &&
	arr[0] !== 0
	? null
	: arr[0];

// ToLeetSpeak.

/* DESCRIPTION:
Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

For example:

toLeetSpeak("LEET") returns "1337"
In this kata we use a simple LeetSpeak dialect. Use this alphabet:

{
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
} */

// const toLeetSpeak = (s) => s.replace(/[ABCEGHILOSTZ]/g, (c) => D[c]);

// const D = {
// 	A: "@",
// 	B: "8",
// 	C: "(",
// 	E: "3",
// 	G: "6",
// 	H: "#",
// 	I: "!",
// 	L: "1",
// 	O: "0",
// 	S: "$",
// 	T: "7",
// 	Z: "2",
// };

// Trigrams.

/*
Description:
Trigrams are a special case of the n-gram, where n is 3. One trigram is a continious sequence of 3 chars in phrase. Wikipedia

return all trigrams for the given phrase
replace spaces with _
return an empty string for phrases shorter than 3
Example:

trigrams('the quick red') == the he_ e_q _qu qui uic ick ck_ k_r _re red
*/

function trigrams(phrase) {
	const arr = [];
	for (let i = 0; i < phrase.length - 2; i++) {
		arr.push(phrase.slice(i, i + 3));
	}
	return arr.map((v) => v.replace(/\s/g, "_")).join(" ");
}

// True Min.

function min(a, b) {
	a === null && (a = 0);
	b === null && (b = 0);
	if (isNaN(a) || isNaN(b)) {
		return NaN;
	}
	return a < b ? a : b;
}

// Two to One.

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// UVB-76 Message Validator.

function validate(message) {
	return /^MDZHB\s\d{2}\s\d{3}\s[A-Z]+\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/.test(
		message
	);
}

// Two Oldest Ages.

const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2);

// Two fighters, one winner.

function declareWinner(fighter1, fighter2, firstAttacker) {
	const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
	const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
	return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker;
}

// Ultimate Array Reverser.

const ultimateReverse = (s) => {
	let str = s.join("").split("").reverse();
	let arr = [];
	for (let i = 0; i < s.length; i++) {
		arr.push(str.splice(0, s[i].length).join(""));
	}
	return arr;
};

// Triple Shiftian Numbers.

function tripleShiftian(base, n) {
	for (let i = 2; i < n; i++) {
		base.push(4 * base[i] - 5 * base[i - 1] + 3 * base[i - 2]);
	}
	return base[n];
}

// Unflatten a list (Easy).

function unflatten(flatArray) {
	let res = [];
	while (flatArray.length > 0) {
		res.push(
			flatArray[0] < 3
				? flatArray.shift()
				: flatArray.splice(0, flatArray[0])
		);
	}
	return res;
}

// Unique Sum.

function uniqueSum(lst) {
	return lst.length ? [...new Set(lst)].reduce((a, b) => a + b, 0) : null;
}

// Unique string characters.

function solve(a, b) {
	let str1 = a
		.split("")
		.filter((v) => !b.split("").includes(v))
		.join("");
	let str2 = b
		.split("")
		.filter((v) => !a.split("").includes(v))
		.join("");
	return str1 + str2;
}

// Vampire Numbers.

const vampire_test = function (a, b) {
	return (
		("" + a + b).split("").sort().join() ==
		(a * b + "").split("").sort().join()
	);
};

const toLeetSpeak = (s) => s.replace(/[ABCEGHILOSTZ]/g, (c) => D[c]);

const D = {
	A: "@",
	B: "8",
	C: "(",
	E: "3",
	G: "6",
	H: "#",
	I: "!",
	L: "1",
	O: "0",
	S: "$",
	T: "7",
	Z: "2",
};

// All Star Code Challenge #1.

// function sumPPG(playerOne, playerTwo) {
// 	return playerOne.ppg + playerTwo.ppg;
// }

// All Star Code Challenge #13.

// const translate = function (word) {
// 	if (word.length == 1) return word;
// 	if (word.length >= 2) {
// 		if (/[aeiou]/.test(word.slice(0, 1))) return word + "ay";
// 		return word.slice(1) + word.slice(0, 1) + "ay";
// 	}
// 	return "";
// };

// All Star Code Challenge #16.

// function noRepeat(str) {
// 	for (var i of str) if (str.split(i).length == 2) return i;
// }

// 99 bottles of beer.

// const sing = function () {
// 	// The most evil kata so far :)
// 	let lyrics = [];
// 	for (var i = 99; i >= 3; i--) {
// 		lyrics.push(
// 			i + " bottles of beer on the wall, " + i + " bottles of beer."
// 		);
// 		lyrics.push(
// 			"Take one down and pass it around, " +
// 				(i - 1) +
// 				" bottles of beer on the wall."
// 		);
// 	}
// 	return lyrics.concat([
// 		"2 bottles of beer on the wall, 2 bottles of beer.",
// 		"Take one down and pass it around, 1 bottle of beer on the wall.",
// 		"1 bottle of beer on the wall, 1 bottle of beer.",
// 		"Take one down and pass it around, no more bottles of beer on the wall.",
// 		"No more bottles of beer on the wall, no more bottles of beer.",
// 		"Go to the store and buy some more, 99 bottles of beer on the wall.",
// 	]);
// };

// 254 shades of grey.

// function shadesOfGrey(n) {
// 	const shades = [];

// 	for (let i = 1; i <= Math.min(n, 254); i++) {
// 		const grey = ("0" + i.toString(16)).slice(-2);
// 		shades.push("#" + grey + grey + grey);
// 	}

// 	return shades;
// }

// 7 kyu Count all the sheep on farm in the heights of New Zealand.

// function lostSheep(friday, saturday, total) {
// 	return (
// 		total -
// 		friday.reduce((acc, next) => acc + next, 0) -
// 		saturday.reduce((acc, next) => acc + next, 0)
// 	);
// }

// 80's Kids #1: How Many Licks Does it Take?

// const totalLicks = (env) => {
// 	var licks = 252;
// 	let challenge;

// 	for (const effect in env) {
// 		if (env[effect] > 0 && (!challenge || env[effect] > env[challenge])) {
// 			challenge = effect;
// 		}
// 		licks += env[effect];
// 	}
// 	return (
// 		`It took ${licks} licks to get to the tootsie roll center of a tootsie pop.` +
// 		(challenge ? ` The toughest challenge was ${challenge}.` : "")
// 	);
// };

// Waiting room.

// function lastChair(N) {
// 	return N - 1;
// }

// We Have Liftoff.

// function liftoff(ins) {
// 	return `${ins.sort((a, b) => b - a).join(" ")} liftoff!`;
// }

// Weight of its Contents.

// function contentWeight(bottleWeight, scale) {
// 	var s = parseInt(scale);
// 	return /larger/.test(scale)
// 		? (bottleWeight * s) / (s + 1)
// 		: bottleWeight / (s + 1);
// }

// Weird words.

// function nextLetter(str) {
// 	let arr_en = [
// 		"a",
// 		"b",
// 		"c",
// 		"d",
// 		"e",
// 		"f",
// 		"g",
// 		"h",
// 		"i",
// 		"j",
// 		"k",
// 		"l",
// 		"m",
// 		"n",
// 		"o",
// 		"p",
// 		"q",
// 		"r",
// 		"s",
// 		"t",
// 		"u",
// 		"v",
// 		"w",
// 		"x",
// 		"y",
// 		"z",
// 	];
// 	let arr_EN = [
// 		"A",
// 		"B",
// 		"C",
// 		"D",
// 		"E",
// 		"F",
// 		"G",
// 		"H",
// 		"I",
// 		"J",
// 		"K",
// 		"L",
// 		"M",
// 		"N",
// 		"O",
// 		"P",
// 		"Q",
// 		"R",
// 		"S",
// 		"T",
// 		"U",
// 		"V",
// 		"W",
// 		"X",
// 		"Y",
// 		"Z",
// 	];
// 	return str.replace(/[a-z]/gi, (v) => {
// 		if (v === v.toLowerCase()) {
// 			const index = arr_en.indexOf(v);
// 			return (v = arr_en[(index + 1) % 26]);
// 		}
// 		if (v === v.toUpperCase()) {
// 			const index = arr_EN.indexOf(v);
// 			return (v = arr_EN[(index + 1) % 26]);
// 		}
// 	});
// }

// Well of Ideas - Harder Version.

// function well(x) {
// 	let count = 0;
// 	x.map((v) =>
// 		v.map((v) => (String(v).toLowerCase() === "good" ? (count += 1) : 1))
// 	);
// 	return count < 1 ? "Fail!" : count > 2 ? "I smell a series!" : "Publish!";
// }

// What dominates your array?

// function dominator(arr) {
// 	const obj = {};
// 	arr.map((v) => (obj[v] = obj[v] ? obj[v] + 1 : 1));
// 	const keys = Object.keys(obj);
// 	const value = Object.values(obj);
// 	if (Math.max(...value) < arr.length / 2) return -1;
// 	return value.indexOf(Math.max(...value)) === 0
// 		? -1
// 		: keys[value.indexOf(Math.max(...value))] * 1;
// }

// What is my name score? #1

// function nameScore(name) {
// 	let nameList = name.replace(/\s+/gi, "").toUpperCase().split("");
// 	let score = 0,
// 		result = {};
// 	for (let x in alpha) {
// 		for (let i = 0; i < nameList.length; i++) {
// 			if (x.indexOf(nameList[i]) !== -1) {
// 				score += alpha[x];
// 			}
// 		}
// 	}

// 	result[name] = score;
// 	return result;
// }

// What's my golf score?

// function golfScoreCalculator(parList, scoreList) {
// 	const par = parList.split("").reduce((a, b) => a + b * 1, 0);
// 	const score = scoreList.split("").reduce((a, b) => a + b * 1, 0);
// 	return score - par;
// }

// Where's Wally.

// function wheresWally(string) {
// 	return (" " + string).search(/ Wally\b/);
// }
