// Arrays

// const numbers = [3, 4]; // as a const, numbers cannot be reassigned.
// // numbers = []; // would throw "assignment to constant variable" error.
// // constant does not stop modification of array

// // End
// numbers.push(5, 6);


// // Beginning
// numbers.unshift(1, 2)

// // Middle
// numbers.splice(2, 0, 'a', 'b');
// console.log(numbers); 

// =============================================

// Finding elements in an array

// const numbers = [1, 2, 3, 1, 4];

// // console.log(numbers.indexOf('a'));  // returns -1, since 'a' is not present

// // console.log(numbers.indexOf(1)); // returns 0, since 1 is at the 0 index

// // console.log(numbers.lastIndexOf(1)); // returns 3, since 1 is (finally) at the 3 index

// console.log(numbers.indexOf(1) !== -1); // returns true

// console.log(numbers.includes(1)); // returns true if given element is in array

// ================================================

// Finding reference types

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// const course = courses.find(function(course) {
//     return course.name === 'a';
// });

// console.log(course);

// ===================================================

// Arrow Functions

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// const course = courses.find(course => course.name === 'a');

// console.log(course);

// ======================================================