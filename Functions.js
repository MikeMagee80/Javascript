
// Function declarations vs. expressions


// Function declaration
// function walk() {
//     console.log('walk');
// }
// walk();

// // Named/Anonymous Function expression
// let run = function() {    // function walk() for named
//     console.log('run');
// };
// let move = run;
// run();
// move();

//======================================

// Hoisting

// walk();

// function walk() {
//     console.log('walk');
// }

// // JavaScript executes code by moving all function DECLARATIONS to the top, in a process called Hoisting.

// // Named/Anonymous Function expression
// run();

// let run = function() {    // function walk() for named
//     console.log('run');
// };

// =========================================

// Arguments

// function sum(a, b) {
//     return a + b; // 1 + undefined = NaN
// }

// function sum(a, b) {
//     console.log(arguments);
//     return a + b; // 1 + undefined = NaN
// }

// function sum() {
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(1, 2)); // output = 3
// console.log(sum(1, 2, 3, 4, 5));  // output = 3, as only a,b are used.
//                                   // output = 15, with arguments


// ================================================

// The Rest Operator ...  (looks like Spread Operator in arrays)

// function sum(...args) {
//     return args.reduce((a,b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5, 10)); 


// function sum(discount, ...prices) {
//     const total = prices.reduce((a,b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));


// ====================================================

// Default Parameters

// function interest(principle, rate, years) {
//     rate = rate || 3.5; // gives rate a default value of 3.5
//     years = years || 5;

//     return principle * rate / 100 * years;
// }

// Cleaner version
// function interest(principle, rate = 3.5, years = 5) {
//     return principle * rate / 100 * years;
// }


// console.log(interest(10000, 3.5, 5));
// console.log(interest(10000));

// if you give one parameter a default value, you should give all the other parameters a default as well.

// ===========================================

// Getters and Setters

// const person = {
//     firstName: 'Mike',
//     lastName: 'Smith',
//     fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     }
// };

// console.log(person.firstName + ' ' + person.lastName);
// console.log(`${person.firstName} ${person.lastName}`); // Template Literal
// console.log(person.fullName());

// getters => access properties
// setters => change or mutate them

// const person = {
//     firstName: 'Mike',
//     lastName: 'Smith',
//     get fullName() {  // Getter
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value){
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };


// // console.log(person.fullName);
// console.log(person);

// ==========================================


// This, ref: the OBJECT that is executing the current function

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// video.play();


// =============================================


// Exercise   Sum of Arguments

// console.log(sum(1, 2, 3, 4));

// function sum(...items) {
//     return items.reduce((a, b) => a + b);
// }

// console.log(sum([1, 2, 3, 4]));  // arguments passed in array

// function sum(...items) {
//     if (items.length === 1 && Array.isArray(items[0]))
//         items = [...items[0]];

//     return items.reduce((a, b) => a + b);
// }

// ==================================================

// Exercise Area of Circle

// circle.radius = 2;
// console.log(circle.area);

// const circle = {
//     radius: 1,
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area);

// ==============================================