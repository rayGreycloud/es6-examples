//From Stephen Grider's ES6 Javascript course on udemy.com
// Lecture 65 Async code

promise = new Promise((resolve, reject) => {
  // simulate long process
  setTimeout(() => {
    resolve();
  }, 3000);
});

//
promise
  // will only run if promise resolves
  .then(() => console.log('first callback for success.'))
  .then(() => console.log('second callback for success.'))
  // will only run if promise rejected
  .catch(() => console.log('uh oh, problem.'))
