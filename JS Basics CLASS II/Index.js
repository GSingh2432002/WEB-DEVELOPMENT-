console.log('Chaliye shuru karte hai')

//Object Creation
// let rectangle = {
//     length : 1,
//     breadth : 2,

//     draw() {
//         console.log('drawing rectangle');
//     }
// };

//Camelcase ->numberOfStudents
//Pascal Notation -> first letter of every word is capital -> NumberOfStudent

//Factory Function
// function createRectangle(len , bre) {
//     let rectangle = {
//         length : len,
//         breadth : bre,
//         draw() {
//             console.log('drawing rectangle');
//         }
//     };
//     return rectangle;
// }
// let rectangleObj1 = createRectangle(5,7);

//Constructor Function
//constructor function -> prop/methods -> intialise/Define
// function Rectangle(len,bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function() {
//         console.log('drawing');
//     }
// }
//Object creation using constructor function
// let rectangleObject = new Rectangle(666,77);

//Dynamically Creation
// rectangleObject.color = 'Yellow, Pink';
// console.log(rectangleObject);
//Dynamically Deletion
// delete rectangleObject.color;
// console.log(rectangleObject);

//Primitive or Values types:-(Primitive mein ham jab deal krte hai tb uska copy bnta hai & Primitive are copied by their value.)
// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);

//Reference or Object types:-(Reference mein ham Jab object se deal krte hai tb wo same address ko point krta hai & References are copied by their address.)
// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

let rectangle = {
    length:2,
    breadth:4,
};
//for-in loop 
for(let key in rectangle ) {
//keys are reflected through key variable 
//values are reflected through rectangle[key]
console.log(key,rectangle[key]);
}
//for-of loop
for(let key of Object.entries(rectangle)) {
    console.log(key);
 }

 //to find any property exist in particular object
 if('length' in rectangle) {
    console.log('Present');
 }
else {
    console.log('Absent');
}

//Object Cloning Using #1.Iteration
// let src = {
//     a:10,
//     b:20,
//     c:30,
// };
// let dest = {};
// for(let key in src) {
//     dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

//Object Cloning Using #2.Assign 
// let src = {
//     a:10,
//     b:20,
//     c:45,
// };
// let src2 = {value:25};
// let dest = Object.assign({}, src, src2);
// console.log(dest);
// src.a++;
// console.log(dest);

//Object Cloning Using #3.Spred 
let src = {
    a:11,
    b:56,
    c:96,
};
let dest = {...src};
console.log(dest);
src.a++;
console.log(dest);



    