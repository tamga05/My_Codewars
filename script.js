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
    return `${result[0].toUpperCase()}${result.slice(1)}`;

}

console.log(capitalizeWord('andrey'));


// Beginner Series #2 Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
    let secPerMin = 60;
    let secPerHour = 3600;
    let ms;
    return (ms = (s + (m * secPerMin) + (h * secPerHour)) * 1000);
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
};


// Remove String Spaces Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    x = x.split(" ").join("");
    return x;
}


// If you can't sleep, just count sheep!! Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
    let murmur = "";
    for (let i = 0; i < num; i++) {
        murmur += i + 1 + " sheep...";
    }
    return murmur;
};


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


// Функция принимает Двоичное число в ввиде строки и возвращает Десятичное число

function convertToInteger(str) {
    const stringInNumber = parseInt(str, 2);

    return stringInNumber;
}

console.log(convertToInteger("10011"));


// Функция складывает два числа и возвращает их сумму в Двоичном исчислении в виде Строки

function addBinary(a, b) {
    let sum = a + b;

    return sum.toString(2);
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

var humanYearsCatYearsDogYears = function (humanYears) {
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
    if (num == 1) {
        return "Sunday";
    } else if (num == 2) {
        return "Monday";
    } else if (num == 3) {
        return "Tuesday";
    } else if (num == 4) {
        return "Wednesday";
    } else if (num == 5) {
        return "Thursday";
    } else if (num == 6) {
        return "Friday";
    } else if (num == 7) {
        return "Saturday";
    } else {
        return "Wrong, please enter a number between 1 and 7";
    }
}


// Opposites Attract. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
    if (
        (flower1 % 2 == 0 && flower2 % 2 != 0) ||
        (flower1 % 2 != 0 && flower2 % 2 == 0)
    ) {
        return true;
    } else {
        return false;
    }
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
    if (s[s.length - 1] != "?") {
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


// Generate user links. Your task is to create userlinks for the url, you will be given a username and must return a valid link.

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
    if (number % 2 == 0) {
        return number * 8;
    } else {
        return number * 9;
    }
}


// Switch it Up!. When provided with a number between 0-9, return it in words. Input :: 1 Output :: "One".

function switchItUp(number) {
    if (number == 1) {
        return "One";
    } else if (number == 2) {
        return "Two";
    } else if (number == 3) {
        return "Three";
    } else if (number == 4) {
        return "Four";
    } else if (number == 5) {
        return "Five";
    } else if (number == 6) {
        return "Six";
    } else if (number == 7) {
        return "Seven";
    } else if (number == 8) {
        return "Eight";
    } else if (number == 9) {
        return "Nine";
    } else if (number == 0) {
        return "Zero";
    }
}


// N-th Power. You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

function index(array, n) {
    return array[n] ** n || -1;
}


// Rock Paper Scissors!. Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
    if (p1 == 'rock' && p2 == 'scissors' || p1 == 'paper' && p2 == 'rock' || p1 == 'scissors' && p2 == 'paper') {
        return 'Player 1 won!';
    } else if (p1 == 'scissors' && p2 == 'rock' || p1 == 'rock' && p2 == 'paper' || p1 == 'paper' && p2 == 'scissors') {
        return 'Player 2 won!';
    } else {
        return 'Draw!';
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

function greet() {
    return "hello world!";
}


// Even or Odd. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 == 0) {
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

console.log(stringToNumber('50'));
console.log(typeof(stringToNumber('50')));
