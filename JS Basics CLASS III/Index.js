console.log("kya Haal Chaal");

// let lastName = 'Singh'; //In Primitive
// let firstName = new String('Gaurav'); //In Object

// let message = 'Gaurav is my name';
// let words = message.split(' ');
// console.log(words); 

//Template Literal
//Use BackTick
// let message = `Hello Gaurav Singh
// Thanks for the Opportunity
// Regards,
// Gaurav ${lastName}`;
// console.log(message);

//Print Current Date and Time 
// let date = new Date();
// console.log(date);

//Array
// let numbers = [1,4,5,9];
// console.log(numbers);
//Insertion Element in Array
//end -> push
//middle -> splice
//beginning -> unshift

//Searching in Array
// console.log(numbers);
// console.log(numbers.indexOf(4));
//we want to check if a number exist in an array
// console.log(numbers.includes(4));
// console.log(numbers.indexOf(4,1));

//Object Array with using find Method
// let courses = [
//     {no:1, naam:'Gaurav'},
//     {no:2, naam:'Exes'}
// ];
// let course = courses.find(function(course){
//     return course.naam ==='Exes';
// });
// console.log(course);

//Object Array with using Arrow function
// let courses = [
//     {no:1, naam:'Gaurav'},
//     {no:2, naam:'Exes'}
// ];
// let course = courses.find(course => course.naam === 'Gaurav');
// console.log(course);

//Removing Element in Array
// let numbers = [1,2,3,4,5,6];
//end
// numbers.pop();
//beginning
// numbers.shift();
//middle
// numbers.splice(2,1);
// console.log(numbers);

//Emptying an Array
//let number = [1,3,5,7,9];
//numbers = [];
//number.length=0;
//number.splice(0,number.length);
//console.log(number);

//Combining Elements
// let first = [1,2,3];
// let second = [4,5,6];
// let combined = first.concat(second);
// console.log(combined);

//Slicing Elements
let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice();
// let sliced = marks.slice(2);
// let sliced = marks.slice(2,6);
// console.log(sliced);

//Combining Using Spread Operator(...)
// let first = [1,2,3];
// let second = [4,5,6];
// let combined =[...first,'a', true, ...second, 'b',true];
// console.log(combined);

//Copy Using Spread operator
// let another = [...combined];

//Iterating an Array
let arr = [10,20,30,40,50];
// for(let value of arr) {
//     console.log(value);
// }
//Iterating using arrow Function
// arr.forEach(number=> console.log(number));

//Joining Arrays
// let numbers = [10,20,30,40,50];
// const joined = numbers.join('.');
// console.log(joined);

//Spliting Joined Arrays
// let message = 'This is my first message';
// let parts = message.split(' ');
// console.log(parts);

//Joined using Join Function
// let joined = parts.join('_');
// console.log(joined);

//Sorting Of Array
let numbers = [10,100,30,490,50];
numbers.sort();

console.log(numbers);


