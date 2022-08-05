'use strict';

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
    return (Math.ceil(year / 100));
}


// Капитализация (изменение первого символа в слове на Заглавный)

function capitalizeWord(word) {

    let result = String(word);
    return `${result[0].toUpperCase()}${result.slice(1)}`;

}

console.log(capitalizeWord('andrey'));


// Beginner Series #2 Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
    let secPerMin = 60;
    let secPerHour = 3600;
    return ((s + (m * secPerMin) + (h * secPerHour)) * 1000);
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
    return Number(n.toString().replace(/0+$/, ''));
}


// Mr.Freeze

//Object.freeze(MrFreeze);


// Comparison with the Equality Operator

function testEqual(val) {
    if (val === 12) { // Change this line
        return 'Equal';
    }
    return 'Not Equal';
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
    x = x.split(' ').join('');
    return x;
}

console.log(noSpace);


// If you can't sleep, just count sheep!! Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = function (num) {
    let murmur = '';
    for (let i = 0; i < num; i++) {
        murmur += i + 1 + ' sheep...';
    }
    return murmur;
};

console.log(countSheep);


// The Feast of Many Beasts All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake. Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast. Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}

console.log(feast);

// Transportation on vacation After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you. You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers. Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total. Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;
}

console.log(rentalCarCost(7));


// Basic Mathematical Operations Your task is to create a function that does four basic mathematical operations. The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else if (operation === '*') {
        return value1 * value2;
    } else if (operation === '/') {
        return value1 / value2;
    }
}

console.log(basicOp('*', 7, 7));


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
    return (a + b);
}

function divide(a, b) {
    return (a / b);
}

function multiply(a, b) {
    return (a * b);
}

function mod(a, b) {
    return a % b;
}

function exponent(a, b) {
    return a ** b;
}

function subt(a, b) {
    return (a - b);
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

console.log(convertToInteger('10011'));


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
        return 'Sunday';
    } else if (num === 2) {
        return 'Monday';
    } else if (num === 3) {
        return 'Tuesday';
    } else if (num === 4) {
        return 'Wednesday';
    } else if (num === 5) {
        return 'Thursday';
    } else if (num === 6) {
        return 'Friday';
    } else if (num === 7) {
        return 'Saturday';
    } else {
        return 'Wrong, please enter a number between 1 and 7';
    }
}


// Opposites Attract. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0);
}


// Man in the west. A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him. So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

function checkTheBucket(bucket) {
    return bucket.includes('gold');
}


// 5 without numbers !! Write a function that always returns 5. Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

function unusualFive() {
    const five = 'Write';
    return five.length;
}


// Ensure question. Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

function ensureQuestion(s) {
    if (s[s.length - 1] !== '?') {
        return `${s}?`;
    } else {
        return s;
    }
}

console.log(ensureQuestion('Разве нет'));
console.log(ensureQuestion('Почему?'));


// Difference of Volumes of Cuboids. In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

function findDifference([a, b, c], [d, e, f]) {
    let volumeA = a * b * c;
    let volumeB = d * e * f;
    return Math.abs(volumeA - volumeB);
}


// Grasshopper - Object syntax debug. While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.

const rooms = {
    first: {
        description: 'This is the first room', items: {
            chair: 'The old chair looks comfortable', lamp: 'This lamp looks ancient',
        },
    }, second: {
        description: 'This is the second room', items: {
            couch: 'This couch looks like it would hurt your back', table: 'On the table there is an unopened bottle of water',
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
        return 'One';
    } else if (number === 2) {
        return 'Two';
    } else if (number === 3) {
        return 'Three';
    } else if (number === 4) {
        return 'Four';
    } else if (number === 5) {
        return 'Five';
    } else if (number === 6) {
        return 'Six';
    } else if (number === 7) {
        return 'Seven';
    } else if (number === 8) {
        return 'Eight';
    } else if (number === 9) {
        return 'Nine';
    } else if (number === 0) {
        return 'Zero';
    }
}


// N-th Power. You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

function index(array, n) {
    return array[n] ** n || -1;
}


// Rock Paper Scissors!. Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
    if (p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock' || p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won!';
    } else if (p1 === 'scissors' && p2 === 'rock' || p1 === 'rock' && p2 === 'paper' || p1 === 'paper' && p2 === 'scissors') {
        return 'Player 2 won!';
    } else {
        return 'Draw!';
    }
};


// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
    if (bool === true) {
        return 'Yes';
    } else {
        return 'No';
    }
}


// Make a simple function called greet that returns the most-famous "hello world!"

function greet1() {
    return 'hello world!';
}


// Even or Odd. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
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

console.log(stringToNumber('50'));
console.log(typeof (stringToNumber('50')));


// Exclamation marks series #1: Remove an exclamation mark from the end of string. Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove(string) {

    let lastSign = string[string.length - 1];

    if (lastSign === '!') {
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

const v1 = 50, v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250;

function equal1() {
    const a = v1;
    const b = v1;
    return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
    const a = v3;   //set number value to a
    const b = v1;   //set number value to b
    return a - b;
}

function equal3() {
    const a = v1;   //set number value to a
    const b = v5;   //set number value to b
    return a * b;
}

function equal4() {
    const a = v4;   //set number value to a
    const b = v5;   //set number value to b
    return a / b;
}

function equal5() {
    const a = v6;   //set number value to a
    const b = v3;   //set number value to b
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
    const str = 'Hello World!';
    console.log(str);
}


// Training JS #3: Basic data types--String.

const a1 = 'A', a2 = 'a', b1 = 'B', b2 = 'b', c1 = 'C', c2 = 'c', d1 = 'D', d2 = 'd', e1 = 'E', e2 = 'e', n1 = 'N', n2 = 'n';

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
    return 'no';
}

function answer2() {
    //the answer should be "yes" or "no"
    return 'no';
}

function answer3() {
    //the answer should be "yes" or "no"
    return 'yes';
}


// Calculate BMI. Write function bmi that calculates body mass index (bmi = weight / height2).

function bmi(weight, height) {

    const bmi = weight / (height ** 2);

    if (bmi <= 18.5) {
        return 'Underweight';
    } else if (bmi <= 25.0) {
        return 'Normal';
    } else if (bmi <= 30.0) {
        return 'Overweight';
    } else {
        return 'Obese';
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

    const Age = Math.abs((y - x));

    if (y > x && Age === 1) {
        return `You are ${Age} year old.`;
    } else if (y < x && Age === 1) {
        return 'You will be born in 1 year.';
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

    const dogs = ['Hardly any', 'More than a handful!', 'Woah that\'s a lot of dogs!', '101 DALMATIANS!!!'];

    return number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2];
}

console.log(howManyDalmatians(101));


//Use Multiple Conditional (Ternary) Operators.

function checkSign(num) {

    return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}

console.log(checkSign(-10));


//Reversed Strings. Complete the solution so that it reverses the string passed into it.

function solution(str) {
    return str.split('').reverse().join('');
}

console.log(solution);


// Return Negative. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    return Math.abs(num) * (-1);
}


// Convert boolean values to strings 'Yes' or 'No'. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord2(bool) {
    return (bool === true ? 'Yes' : 'No');
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
    if (name.charAt(0) === 'R' || name.charAt(0) === 'r') {
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

console.log(sayHello('Ivan'));


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
    if (name === 'Johnny') {
        return 'Hello, my love!';
    } else {
        return 'Hello, ' + name + '!';
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
        return 'drink whisky';
    } else if (old >= 18 && old < 21) {
        return 'drink beer';
    } else if (old >= 14 && old < 18) {
        return 'drink coke';
    } else {
        return 'drink toddy';
    }
}


// Return to Sanity. This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
    let results = {sanity: 'Hello'};
    return results;
}


// Fix your code before the garden dies! You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

function rainAmount(mm) {
    if (mm < 40) {
        return `You need to give your plant ${40 - mm}mm of water`;
    } else {
        return 'Your plant has had more than enough water for today!';
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
    const max = {name: 'Max Headroom'};
    return max;
}

function getMax2() {
    const max = {name: 'Max Headroom'};
    return max;
}


// Unexpected parsing. Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.
//
// But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

function getStatus(isBusy) {

    const msg = isBusy ? 'busy' : 'available';

    return {status: msg};
}


//Volume of a Cuboid.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}


//5 without numbers !!. Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

function unusualFive1() {
    let solution = 'women';
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
    let x = 'You\'re a(n) ';
//   (age <= 12) ? return `${x}kid` : (age >= 13 && age <= 17) ? return `${x}teenager` : (age >= 18 && age <= 64) ?
//     return `${x}adult` : return `${x}elderly`;
    return (age < 13) ? `${x}kid` : (age < 18) ? `${x}teenager` : (age < 65) ? `${x}adult` : `${x}elderly`;
}


// Или вот так, будет покороче

function describeAge1(age) {
    let x = 'You\'re a(n) ';
    return (age < 13) ? `${x}kid` : (age < 18) ? `${x}teenager` : (age < 65) ? `${x}adult` : `${x}elderly`;
}


// Или вот так, будет ЕЩЁ покороче

function describeAge2(a) {
    return `You're a(n) ${a < 13 ? 'kid' : a < 18 ? 'teenager' : a < 65 ? 'adult' : 'elderly'}`;
}


//Shifty Closures. Why doesn't greet_abe() actually greet Abe?

const name1 = 'Abe';

const greetAbe = function () {
    return 'Hello, ' + name1 + '!';
};

const name2 = 'Ben';

const greetBen = function () {
    return 'Hello, ' + name2 + '!';
};


// Be Concise IV - Index of an element in an array. Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

function find(a, e) {
    return a.indexOf(e) >= 0 ? a.indexOf(e) : 'Not found';
}


// Geometry Basics: Circle Circumference in 2D. Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a
// number. Write a function calculating circumference of a Circle. Tests round answers to 6 decimal places.

function circleCircumference(circle) {
    const l = 2 * Math.PI * circle.radius;
    return l;
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

    if (card.includes('♣')) {
        return 'clubs';
    }

    if (card.includes('♦')) {
        return 'diamonds';
    }

    if (card.includes('♥')) {
        return 'hearts';
    }

    if (card.includes('♠')) {
        return 'spades';
    }
}


// Beginner - Reduce but Grow. Given a non-empty array of integers, return the result of multiplying the values together in order.
const grow = x => x.reduce((a, b) => a * b);


// Beginner Series #4 Cockroach. The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per
// second, rounded down to the integer (= floored). Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
    return Math.floor(s * 27.7778);
}
