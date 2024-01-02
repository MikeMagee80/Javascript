
// // // OBJECTS

// let person = {
//     name: 'Mike',
//     age: 45
// };

// // // Dot Notation
// person.name = 'John';

// console.log(person);

// // ---------------

// // // Bracket Notation

// person['name'] = 'Mary';

// console.log(person.name);

// ----------------------------

// ARRAYS

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = '1';
// console.log(selectedColors);

// ------------------------------

// FUNCTIONS

// function greet() {
//     console.log('Hello World');
// }

// greet();

// -------

// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('John', 'Smith');
// greet('Mary');

// Calculating a value

// function square(number) {
//     return number * number;
// }


// console.log(square(2));

// --------------------------------------------

// Combining two arrays 
// let numbers = [1, 2, 3];
// let numbers2 = [4, 5, 6];

// let numbersCombined = numbers.concat(numbers2);

// console.log(numbersCombined2);

// ----------------------------------------------------

// Operators

// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// increment (++)
// console.log(++x);
// console.log(++y);

// --------------------------------------------------------

// Assignment Operators

// let x = 10;

// x = x + 5;
// x += 5;  //same thing as above, adding 5 to x and saving the new sum as x
// console.log(x); // returns 15

// --------------------------------------------------------------

// Comparison Operators

// let x = 1;

// Relational
// console.log(x > 0); // True
// console.log(x >= 1); // True
// console.log(x < 1); // False
// console.log(x <= 1); // True

// // Equality
// console.log(x === 1); // True  Strict equality "===" (Type + Value)
// console.log(x !== 1); // False

// console.log(1 == 1); // True Loose equality "==" (Value)
// console.log('1' == 1); // True (different Type, same Value)
// console.log(true == 1); // True 

// =======================

//Ternary Operator

// If a customer has more than 100 points, they are a 'gold' customer, otherwise, they are a 'silver' customer.

// let points = 90;
// let type = points > 100 ? 'gold' : 'silver'; // condition -> True or False

// console.log(type);

//==================================

//Logical Operators

// Logical AND (&&)
// Returns TRUE is both operands are TRUE
// console.log(true && true); // True
// console.log(false && true); // False

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan); //True

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan); // True


// NOT (!)
// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// let applicationRefused = !eligibleForLoan;
// console.log('Eligible', eligibleForLoan); // Eligible false

// console.log('Application Refused', applicationRefused); // Application Refused true

//==============================================

