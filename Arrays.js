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

// Remove elements from array

// const numbers = [1, 2, 3, 4];

// End
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// Beginning

// const first = numbers.shift();
// console.log(numbers);
// console.log(first);

// Middle

// numbers.splice(2, 1);
// console.log(numbers);


// ========================================

// Emptying an array

// let numbers = [1, 2, 3, 4];
// let another = numbers;

// // Solution 1
// // numbers.length = 0;

// // Solution 2
// // numbers.splice(0, numbers.length);

// // Solution 3
// while (numbers.length > 0)
//     numbers.pop();

// console.log(numbers);
// console.log(another);

// ==========================================

// Combining and slicing arrays

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);

// const slice = combined.slice(2, 4);


// console.log(slice);


// ============================================

// Spread Operator


// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// const combined = [...first, ...second];
// // const combined = [...first, 'a', ...second, 'b'];
// console.log(combined);

// // const copy = combined.slice();
// const copy = [...combined];
// console.log(copy);


// ============================

// Iterating an Array

// const numbers = [1, 2, 3];

// for (let number of numbers)
//     console.log(number);

// // numbers.forEach(function(number){
// //     console.log(number);
// // });    

// numbers.forEach(number => console.log(number));


// ==========================

// Joining Arrays

// const numbers = [1, 2, 3];

// const joined = numbers.join(',');

// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);

// // 1,2,3
// // [ 'This', 'is', 'my', 'first', 'message' ]
// // This-is-my-first-message

// ====================================================

// Sorting Arrays

// const numbers = [2, 3, 1];

// numbers.sort();
// console.log(numbers); // [ 1, 2, 3 ]

// numbers.reverse();
// console.log(numbers); // [ 3, 2, 1 ]

// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'javaScript' },
// ];

// courses.sort(function(a, b) {
//     // a < b => -1
//     // a > b => 1
//     // a === b => 0

//     const nameA = a.name.toUpperCase();  // will handle case sensativity
//     const nameB = b.name.toUpperCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });

// console.log(courses); // [ { id: 2, name: 'JavaScript' }, { id: 1, name: 'Node.js' } ]

// // [ { id: 2, name: 'javaScript' }, { id: 1, name: 'Node.js' } ]

// ========================================

// Testing elements of array

// const numbers = [1, 2, 3];
// const numbers = [1, -1, 2, 3];

// every()


// const allPositive = numbers.every(function(value) {
//     return value >= 0;
// });

// console.log(allPositive); // true


// const atLeastOnePositive = numbers.some(function(value) {
//     return value >= 0;
// });

// console.log(atLeastOnePositive); // true

// ===================================================

// Filtering an array

// const numbers = [1, -1, 2, 3];

// // const filtered = numbers.filter(function(value){
// //     return value >= 0;
// // });

// const filtered = numbers.filter(n => n >= 0);

// console.log(filtered); // [ 1, 2, 3 ]

// ===================================================

// Mapping an Array

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

// const items = filtered.map(n => '<li>' + n + '</li>');

// const html = items.join();
// const html = items.join('');
// const html = '<ul>' + items.join('') + '</ul>';

// console.log(items);  // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

// console.log(html);   // <li>1</li>,<li>2</li>,<li>3</li>
//                      // <li>1</li><li>2</li><li>3</li>
//                      // <ul><li>1</li><li>2</li><li>3</li></ul>

// const items = filtered.map(n => {
//     const obj = {value: n };
//     return obj;
// });

// const items = filtered.map(n => {   // better way
//     return {value: n };
// });

// const items = filtered.map(n => {value: n }); // arrow function
// // returns  [ undefined, undefined, undefined ]
    
// const items = filtered.map(n => ({value: n })); // added parenthesis

// console.log(items); // [ { value: 1 }, { value: 2 }, { value: 3 } ]


// ==========================================================


