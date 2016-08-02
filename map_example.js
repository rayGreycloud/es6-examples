// Coding exercise from Stephen Grider's ES6 tutorial on udemy
// Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object.
// Example:
// var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
// pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
    return array.map(function(item) {
        return item[property];
    });
}

pluck(paints, 'color');
