//From Stephen Grider's ES6 Javascript course on udemy.com
// Lecture 63 Creating Promises

// basic promise with resolve
let promise = new Promise((resolve, reject) => {
  resolve();
});

// basic promise with reject
let promise = new Promise((resolve, reject) => {
  reject();
})
