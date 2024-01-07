
// Objects group related variables

// Object-oriented Programming (OOP)

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw')
//     }
// };

// circle.draw(); // Calling the .draw Method of the circle Object

// //========================================


// Factory Functions

// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// const circle1 = createCircle(1);
// console.log(circle1.draw);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2.draw);
// console.log(circle2);

//=====================================================

// // Constructor Functions
// // Uses Pascal notation: OneTwoThree

// function Circle(radius) {
//     this.radius = radius;    // this is a reference to an object that is executing this piece of code
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);  // new creates empty javascript object, sets "this" to point to empty object, returns the object from the function


//=========================================================

// Objects, once created, are dynamic, and new values can be added or deleted

// const circle = {   // const just means we cannot reassign the 'circle' variable
//     radius: 1
// };

// circle.color = 'yellow';

// console.log(circle); // { radius: 1, color: 'yellow' }

// circle.draw = function() {}
// console.log(circle); // { radius: 1, color: 'yellow', draw: [Function (anonymous)] }

// delete circle.draw;
// console.log(circle); // { radius: 1, color: 'yellow' }


// =============================================================

// Constructor Property

// "variable".constructor returns constructor function used to create object




// ===========================================

// Functions are Objects

// ===========================================

//  Value vs. Reference Types

// Value: Number, String, Boolean, Symbol, undef, null
// Reference: Object, Function, Array

// Primitives are copied by their value, Objects are copied by their reference

// let obj = { value: 10 };

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj);

// ===========================================

// Enumerating properties of an Object

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for (let key in circle)
//    // console.log(key); // radius draw
//     console.log(key, circle[key]); // radius 1 draw [Function: draw]

// for (let key of circle)
//     console.log(key);  // error: circle is not iterable

// for (let key of Object.keys(circle))  // returns an array, which is iterable
//     console.log(key);  // radius draw

// for (let entry of Object.entries(circle))  // similar method
      // returns each entry in the object as an array


// ==========================================================

// Cloning an Object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// const another = {};

// for (let key in circle)
//     another[key] = circle[key];

// // another['radius'] = circle['radius'];

// console.log(another);  // { radius: 1, draw: [Function: draw] }

// const another = Object.assign({
//     color: 'yellow'
// }, circle);  // "modern" method



// console.log(another); // { color: 'yellow', radius: 1, draw: [Function: draw] }

// const another = { ...circle }; // simplest way to clone

// ========================================================

// Math Object

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Math.PI

// Math.abs(x)

// Math.floor()

// Math.random()

// ==========================================================

// String Object

// const another = new String('hi);  // This is an Object

// see mozilla.org documentation for useful methods

// \n adds new line in mid-string

// ==========================================================

// Template Literals

// ``

// const another = `this is my
// first message`;

// console.log(another);  //this is my
//                        //first message

// const name = 'John';
// const message = 
// `Hi ${name},

// Thanks for the email!

// Regards, 
// Mike`;

// console.log(message);

// ===========================================================

// Date  

// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(2017);

// =================================================================

// Exercise