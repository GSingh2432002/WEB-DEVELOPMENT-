console.log('namaste duniya'); 
        console.log('namaste duniya 2'); 

let a = true;
console.log(a);

// const num=12;
//num=13;

let lastName = 'Gaurav';
console.log(lastName);

lastName = 12020009001161;
console.log(lastName);

console.log(5 !== 3);
console.log(45 <= 9);

let age = 20;
let status = (age>=18) ? 'Yes Vote' : 'No Vote';
console.log(status);

//elseif Statement
let marks = 78;
if(marks >= 90) {
    console.log('A');
}    
else if(marks >= 80) {
    console.log('B');
}
else if(marks >= 70) {
    console.log('C');
}
else if(marks >= 60) {
    console.log('D');
}
else {
    console.log('E');
}

//switch case Satement
let num  = 7;
switch(num) {
    case 1:console.log('A');
    break;
    case 2:console.log('B');
    break;
    case 3:console.log('C');
    break;
    default:console.log('D');
}

//for loop Statement
for(let i=1; i<=5; i=i+1){
    console.log("Gaurav" + i);
}

//while loop Statement
let x=1;
while(x<=5){
    console.log(x);
    x++;
}

//dowhile loop Statement
let y = 1;

do {
    console.log(y);
    y++;
} while(y < 10);