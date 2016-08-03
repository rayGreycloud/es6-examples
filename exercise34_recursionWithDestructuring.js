//From Stephen Grider's ES6 Javascript course on udemy.com
// Coding Exercise 34: Recursion with Destructuring

//This one is probably the hardest exercise in the entire course!
// Use array destructuring, recursion, and the rest/spread operators to
// create a function 'double' that will return a new array with all values
// inside of it multiplied by two.  Do not use any array helpers!
// double([1,2,3]) should output [2,4,6]

const numbers = [1, 2, 3];

// one solution
function double(arrayOfNumbers) {
    const [number, ...rest] = arrayOfNumbers;

    if (rest.length) {
        return [number * 2, ...double(rest)];
    } else {
        return [number * 2];
    }
}
console.log(double(numbers)) // expect [2,4,6]

// my first solution
const numbers = [1, 2, 3, 4, 5];

function doubled(array) {
    const [number, ...rest] = array;

   if (array.length === 0) {
      return number * 2;
    } else {
  		return [number * 2, ...doubled(rest)];
    }
}
console.log(doubled(numbers)); // expect [2,4,6,8,10]

// my second solution
const numbers = [1, 2, 3, 4, 5];

function doubled(array) {
    const [number, ...rest] = array;

   if (number === undefined) {
      return number * 2;
    } else {
  		return [number * 2, ...doubled(rest)];
    }
}
console.log(doubled(numbers)); // expect [2,4,6,8,10]
