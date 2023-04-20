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


// Classic Hello World. You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and
// don't return anything.

class Solution {
    static main() {
        console.log('Hello World!');
    }
}


// Thinkful - Logic Drills: Traffic light. You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
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
    return Math.ceil(info[1] * 3 / {'PT92': 17, 'M4A1': 30, 'M16A2': 30, 'PSG1': 5}[info[0]]);
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
    return numPill === 1 ? 0 : ((numPill - 2) * width) + ((100 * dist) * (numPill - 1));
}


// Multiple of index. Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

const multipleOfIndex = array => array.filter((element, index) => element % index === 0);


// Invert values. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    return array.map(each => {
        return each * -1;
    });
}


// Who ate the cookie ?

function cookie(x) {
    const t = typeof x;
    const who = t === 'string' ? 'Zach' : t === 'number' ? 'Monica' : 'the dog';
    return `Who ate the last cookie? It was ${who}!`;
}


// Reversed Words. Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}


// Enumerable Magic #2 - True for Any? Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

function any(arr, fun) {
    return arr.some(fun);
}


// DNA to RNA Conversion. Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
    let str = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            str += 'U';
        } else {
            str += dna[i];
        }
    }
    return str;
}


// 8kyu interpreters: HQ9+.

function HQ9(code) {
    if (code === 'H') {
        return 'Hello World!';
    }

    if (code === 'Q') {
        return code;
    }

    if (code === '9') {
        return '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
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
    return mpg ? Number((ppg / mpg * 48).toFixed(1)) : 0;
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
        kg: 1, g: 1e-3, mg: 1e-6, μg: 1e-9, lb: .453592, m: 1, cm: 1e-2, mm: 1e-3, μm: 1e-6, ft: .3048
    };
    return G * m1 * conversion[um1] * m2 * conversion[um2] / (d * conversion[ud]) ** 2;
}


// Count Odd Numbers below n. Given a number n, return the number of positive odd numbers below n, EASY!
//
// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

const oddCount = n => Math.floor(n / 2);


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
    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? 'Alive!' : 'Shark Bait!';
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

const snoopy = new Dog('Beagle');

Dog.prototype.bark = function () {
    return 'Woof';
};

const scoobydoo = new Dog('Great Dane');


// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence. Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//
// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABC-DE") === "!BCD!"

function replace(s) {
    return s.replace(/[aeoiu]/ig, '!');
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
    return (Math.floor(hol / normPrice / discount * 100));
}


// Beginner - Lost Without a Map. Given an array of integers, return a new array with each value doubled.
//
// For example:
//
// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
    return x.map(n => n * 2);
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
    for (let i = 0; i < n; i++) s = s.replace('!', '');
    return s;
}


// Parse float. Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

function parseF(s) {
    return (Number.isNaN(parseFloat(s)) ? null : parseFloat(s));
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

remove = s => `${s.replace(/!+/g, '')}!`;


// Reversing Words in a String. You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
//
// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
//
// Example (Input --> Output)
//
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

function reverse(string) {
    return string.split(' ').reverse().join(' ');
}


// Calculate average. Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.

function findAverage(array) {
    return array.reduce((result, current) => result + current, 0) / array.length;
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
    return string.split(' ');
}


// For Twins: 2. Math operations.
// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:
//
// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.
// All inputs are integers. Assume no irregularities to the cuboid brick. You may assume the bottle is shaped like a cylinder. The brick cannot fit inside the rim. The ice brick placed into the bottle is the largest possible cuboid that could actually fit inside the inner volume.

const iceBrickVolume = (radius, bottleLength, rimLength) => 2 * radius * radius * (bottleLength - rimLength);


// Filter out the geese. Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

function gooseFilter(birds) {
    const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
    return birds.filter(b => !geese.includes(b));
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
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
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
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
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

const phrases = ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly',];

const howMuchILoveYou = n => phrases[n % 6];


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
    return name === owner ? 'Hello boss' : 'Hello guest';
}


// Fake Binary.
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
// Note: input will never be an empty string

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
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

const isValid = formula => {
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
    return a.map(charCode => /[aeiou]/.test(String.fromCharCode(charCode)) ? String.fromCharCode(charCode) : charCode);
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
        return 'At match ' + teamA + ' - ' + teamB + ', ' + teamA + ' won!';
    } else if (scores[0] < scores[1]) {
        return 'At match ' + teamA + ' - ' + teamB + ', ' + teamB + ' won!';
    } else if (scores[0] === scores[1]) {
        return 'At match ' + teamA + ' - ' + teamB + ', teams played draw.';
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
    if (n >= m) return 'INVALID';

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
    return Math.floor(today.getTime() - last.getTime()) / 86400000 > cycleLength;
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
    AND: (a, b) => a && b, OR: (a, b) => a || b, XOR: (a, b) => a !== b,
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
    return n.toString().match(/1/g).length % 2 ? 'It\'s Odious!' : 'It\'s Evil!';
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

    let [left, right] = n.toString().split('.').map(x => x.length), dx = left - right, fn = dx < 0 ? Math.ceil : dx > 0 ? Math.floor : Math.round;

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
    if (o === 88) return 'Leo finally won the oscar! Leo is happy';
    if (o < 88 && o !== 86) return 'When will you give Leo an Oscar?';
    if (o === 86) return 'Not even for Wolf of wallstreet?!';
    if (o >= 88) return 'Leo got one already!';
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

const yearDays = year =>
    `${year} has ${
        (!(year % 100) && year % 400) || year % 4 ? '365' : '366'
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

const elevator = (left, right, call) => Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';


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
    return s.sort()[0].split('').join('***');
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
    return s.replace(/\d/g, '');
}


// Heads and Legs.

const isNatural = animal => animal >= 0 && Number.isInteger(animal);
const animals = (heads, legs) => {
    const cows = legs / 2 - heads;
    const chickens = heads - cows;

    return isNatural(chickens) && isNatural(cows)
        ? [chickens, cows]
        : 'No solutions';
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
    return one.split('').reduce((a, s, c) => `${a}${one[c]}${two[c]}${three[c]}`, '');
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

const bloodAlcoholContent = ({ounces, abv}, weight, sex, time) =>
    Number(
        (
            ounces * abv * 5.14 / weight * (sex === 'male' ? 0.73 : 0.66) -
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
    return s
        .reduce((arr, day) => arr.concat(...day), [])
        .reduce((total, stairs) => total + stairs, 0) * 20;
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
    if (lastPlayer === 'black' && win === false) return 'white';
    if (lastPlayer === 'white' && win === true) return 'white';
    return 'black';
}


// Improving Math.round(x).

Math.roundTo = function (number, precision) {
    return +(number).toFixed(precision);
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
    return this.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('');
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


const firstLetter = str => str[0].toUpperCase();

const isValidName = name => /[a-z]/gi.test(name);

const aliasGen = (fName, sName) =>
    isValidName(fName[0]) && isValidName(sName[0])
        ? `${firstName[firstLetter(fName)]} ${surname[firstLetter(sName)]}`
        : 'Your name must start with a letter from A - Z.';


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
    return (blueStart - bluePulled) / ((redStart - redPulled) + (blueStart - bluePulled));
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
    return array.join('\n');
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
        case 'conor mcgregor':
            return 'I\'d like to take this chance to apologize.. To absolutely NOBODY!';
        case 'george saint pierre':
            return 'I am not impressed by your performance.';
        default :
            'Who are you?';
    }
};


// Remove First and Last Character Part Two.

/*
Description:
This is a spin off of my first Kata, you are given a list of characters as a comma separated string. Write a function to return a string containing all except the first and last characters, separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string to be empty, return null value.
Arrays are joined by adding a single space between each consecutive array element.
*/

function array(arr) {
    return arr.split(',').slice(1, -1).join(' ') || null;
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
    [rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(action =>
        action()
    );


// Find the Difference in Age between Oldest and Youngest Family Members.

/*
Description:
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
*/

function differenceInAges(ages) {
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
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
        case 'jabroni':
            return 'Patron Tequila';
        case 'school counselor':
            return 'Anything with Alcohol';
        case 'programmer':
            return 'Hipster Craft Beer';
        case 'bike gang member':
            return 'Moonshine';
        case 'politician':
            return 'Your tax dollars';
        case 'rapper':
            return 'Cristal';
        default:
            return 'Beer';
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
        case 'terrible':
            return 0;
        case 'poor':
            return Math.ceil(amount * 0.05);
        case 'good':
            return Math.ceil(amount * 0.1);
        case 'great':
            return Math.ceil(amount * 0.15);
        case 'excellent':
            return Math.ceil(amount * 0.2);
        default:
            return 'Rating not recognised';
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
    rollDice(),
        move(),
        combat(),
        getCoins(),
        buyHealth(),
        printStatus();
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
    return nums.reduce((a, b) => (a + b), 0) / nums.length;
};


// Correct the mistakes of the character recognition software.

/*
Description:
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

correct = s => s.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');
