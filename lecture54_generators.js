//From Stephen Grider's ES6 Javascript course on udemy.com
// Lecture 54 Generator example

// object
const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

// generator that allows for iteration over select events
function *TeamIterator(team) {
  // first value that will be provided to for of loop
  yield team.lead;
  // second
  yield team.manager;
  // third
  yield team.engineer;
}
// initialize result array
const names = [];

// iterate over each yield value from generator

for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

console.log(names);
