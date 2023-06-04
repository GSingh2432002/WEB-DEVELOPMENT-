//console.log('Doing Great?')

//function declaration:-
// function run() {
//     console.log('running');
// }
//function call or invoke.
//Hoisting is the process of moving function declaration to the top the file and this is done automatically.
// run(); 

//function assignment
// let stand = function walk() {
//     console.log('walking');
// };

//Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// };

// stand();

// let jump = stand;
// jump();

// stand2();

let x = 1;
x = 'a';
console.log(x);

// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,4,2,7));

//It is an object not an array
// function sum(a,b) {
//     console.log(arguments);
//     return a+b;
// }

// let ans = sum(1,2,3,4,5,6,7);

// function sum() {
//     let total = 0;
//     for(let value of arguments)
//         total = total + value;
//     return total;
// }

// let ans = sum(1,4,6,78);
// console.log(ans);

//Rest Operator
// function sum(num, value, ...args) {
//     console.log(args);
// } 
// sum(1,2,3,4,5,6);

//Default Parameter
// function interest(p, r=6, y=10) {
//     return p*r*y/100;
// }
// console.log(interest(1000,8));

// let person = {
//     fName : 'Gaurav',
//     lName : 'Singh' ,
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName (value) {
//         if(typeof value !== String) {
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };
// console.log(person.fullName);
// try {
//     person.fullName = 'true';
// }
// catch (e) {
//     alert(e);
// }
// console.fullName = 'GKS';
// console.log(person.fullName);


// console.log(person);

// function fullName() {
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());

// for(var i=0; i<10; i++) {

// }
// console.log(i);

// if(true) {
//     var a = 5;
// }
// console.log(a);

// function a() {
//     const ab=5;
// }
// const ab = 5;
// function b() {
//     const ab=5;
// }

let arr = [1,2,3,4,6];
// let total = 0;

// for(let value of arr)
// total = total + value;

// console.log(total);

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Printing Total Sum:")
console.log(totalSum);