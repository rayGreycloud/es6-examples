//From Stephen Grider's ES6 Javascript course on udemy.com
// Coding Exercise 2: Processing Values

// The array below contains an array of objects, each of which is a
// representation of an image.
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

// Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.
var areas = [];

images.forEach(function(image) {
  areas.push(image.height*image.width);
  });
