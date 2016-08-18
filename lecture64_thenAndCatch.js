//From Stephen Grider's ES6 Javascript course on udemy.com
// Lecture 64 Then & Catch

// basic promise
let promise = new Promise((resolve, reject) => {
  resolve();
//  reject();
});

//
promise.then(() => {
  console.log('first callback for success.'); // will not run if promise rejected
}).then(() => {
  console.log('second callback for success');
});
