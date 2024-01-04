
// IF ELSE

//Hour
// If hour is between 6am and 12pm: Good morning.
// If between 12pm and 6pm: Good afternoon.
// Otherwise: Good evening!

// if (condition) {
//     statement 
// }
// else if (anotherCondition) {
//     statement
// }
// else if (yetAnotherCondition) {
//     statement
// }
// else {
//     statement
// }

// Example:

// let hour = 18;

// if (hour >= 6 && hour < 12) {
//     console.log('Good Morning!');
// }
// else if (hour >= 12 && hour < 18) {
//     console.log('Good Afternoon!');
// }
// else {
//     console.log('Good Evening!');
// }

// ------------------------------------------


// Switch...case

// let role = 'moderator';

// switch (role) {
//     case 'guest': 
//         console.log('Guest User');
//         break;
    
//     case 'moderator':
//         console.log('Moderator User');
//         break;
    
//     default:
//         console.log('Unknown User');
// }

// ===============================================

// FOR Loops

// for (let i = 0; i < 5; i++) {
//     console.log('Hello World');
// }  // repeats "hello world" 5 times

// for (let i = 0; i < 5; i++) {
//     console.log('Hello World', i); // i is logged as a running tally
// }

// for (let i = 0; i < 5; i++) {
//    if (i % 2 != 0) console.log(i); // returns 1, 3 the odd numbers
// }


// ==================================================

// WHILE Loops


// let i = 0;
// while (i <= 5) {
//     if ( i % 2 != 0) console.log(i);
//     i++;
// }  // Returns 1, 3, 5 (the odd numbers in i)

// ===================================================

// DO....while

// let i = 0;
// do {
//     if ( i % 2 != 0) console.log(i);
//     i++;
// } while (i <= 5);  // Do-While loops are always executed at least once

//=========================================

// For...in

// const person = {
//     name: 'Mike',
//     age: 30
// };

// for (let key in person)
//     console.log(key, person[key]);

// // dot notation
// person.name

// // bracket notation
// person['name']  bracket notation when we don't know the details

// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
//     console.log(index, colors[index]);

//==============================================

//Break and continue

// let i = 0;
// while (i <= 10) {
//     // if (i === 5) break
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++;
// }


//===============================

//Exercise: Write a function that takes two numbers and returns the maximum of the two.

// let numberTest0 = maxNumber(3, 3);
// console.log(numberTest0);

// let numberTest1 = maxNumber(1, 2);
// console.log(numberTest1);

// let numberTest2 = maxNumber(5, 8);
// console.log(numberTest2);

// function maxNumber (number1, number2) {
//     // if (number1 > number2) return number1;
//     // return number2;

//     return (number1 > number2) ? number1 : number2; //cleaner version

// }

// =====================================

// Exercise: Landscape = width > height

// let testCase = isLandscape(24, 12);
// console.log(testCase);

// let testCase2 = isLandscape(11, 34);
// console.log(testCase2);

// function isLandscape(width, height) {
//     // if (width > height) return true;
//     // return false;

//     return (width > height);
// }

// ============================================

// Exercise: Fizzbuzz


// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz!
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//         return 'Not a number';
//    //   return NaN;

//     if ((input % 3 === 0) && (input % 5 === 0)) // has to go first, or even qualifying inputs will return Fizz, due to order of operations
//         return 'FizzBuzz!';    
    
//     if (input % 3 === 0) 
//         return 'Fizz';
    
//     if (input % 5 === 0) 
//         return 'Buzz';
    

    
//     else return input;
// }

// ============================

// Exercise
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3) The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
// 12 points -> suspended

// checkSpeed(160);
// checkSpeed(80);
// checkSpeed(70);
// checkSpeed(75);
// checkSpeed(73);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;
    
//     if (speed < speedLimit + kmPerPoint)
//         console.log('Ok');
//     else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint); 
//         if (points >= 12)
//             console.log('License suspended');
//         else
//             console.log('Points', points);
//     }    
// }

// =============================================

// Exercise
// count numbers from 0 to limit, defining them as odd or even

// showNumbers(10);

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 !== 0) {
//             console.log(i, 'Odd');
//         }
//         else console.log(i, 'Even');
//     }
// }

// =============================================

// Exercise
// Count truthy in array

// const array = [1, 2, 0, 0, NaN];

// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array)
//         if (value)
//             count++;
//         return count;

// }

//===================================================

// Exercise
// 

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key]);
//     }

    // console.log(movie.title, movie.releaseYear, movie.rating, movie.director);
// }


//  =================================================

// Exercise
// Sum of multiples of 3 and 5

// console.log(sum(10));

// function sum(limit) {
//     let sum = 0;

//     for (let i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)  // if i is divisible by 3 or 5
//             sum += i;  // then add i to the sum

//     return sum;
// }

// ================================================

// Exercise 
// Calculate grade

// const array = [80, 80, 50];

// // Average = 70

// // 0-59: F
// // 60-69: D
// // 70-79: C
// // 80-89: B
// // 90-100: A

// console.log(calculateGrade(array));

// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
    
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A'

// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array)
//         sum += value;

//     return sum / array.length;
// }

// ======================================