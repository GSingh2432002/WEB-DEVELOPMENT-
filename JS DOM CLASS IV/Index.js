// setTimeout(function()
// {
//     console.log('Third');
// },3000)

// function sync()
// {
//     console.log('first');
// }
// sync();

// console.log('second');

// let meraPromise1 = new Promise(function(resolve, reject)
// {
//     setTimeout(function()
//     {
//         console.log('I am Inside Promise1');
//     },5000);
//     //resolve(24032002);
//     reject(new Error('Bhaisaab Error Aye Hai'))
// });

// meraPromise1.then((value) =>{ console.log(value)}, (error) => {console.log("Received an Error")});

// let meraPromise2 = new Promise(function(resolve, reject)
// {
//     setTimeout(function()
//     {
//         console.log('I am Inside Promise2');
//     },3000);
//     //resolve(24032002);
//     // reject(new Error('Bhaisaab Error Aye Hai'))
// });

// console.log('Pehla');


// let waadaa1 = new Promise(function(resolve, reject)
// {
//     setTimeout(()=>
//     {
//         console.log('setimeout1 started');
//     }, 2000);
//     resolve(true);
// }) 

// let output = waadaa1.then(()=>
// {
//     let waadaa2 = new Promise(function(resolve, reject)
//     {
//         setTimeout(()=>
//         {
//             console.log('setimeout2 started');
//         },3000);
//         resolve("waadaa 2 resolved");
//     }) 
//     return waadaa2;
// })
// output.then((value)=> console.log(value));

// async function abcd()
// {
//     return 7;
// }


// async function utility() {
// let westbengalMausam = new Promise((resolve, reject)=>
// {
//     setTimeout(()=>
//     {
//         resolve("WestBengal mein bhot thandi hai");
//     },5000);
// });

// let biharMausam = new Promise((resolve, reject)=>
// {
//     setTimeout(()=>
//     {
//         resolve("Bihar is hot");
//     },6000);
// });

// let wbM = await westbengalMausam;
// let bM = await biharMausam;

// return [wbM, bM];

// }

// async function utility()
// {
// let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// let output = await content.json();
// console.log(output);
// }
// utility();

// async function helper()
// {
// let options = {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Gaurav Singh',
//     body: 'UEMK',
//     userId: 2002,
//     weight: 88,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// };

// let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
// let response = content.json();
// return response;
// }

// async function utility()
// {
//     let ans = await helper();
//     console.log(ans);
// }
// utility();

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;
  }
 let a = init();
 a();