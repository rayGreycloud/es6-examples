//From Stephen Grider's ES6 Javascript course on udemy.com
// Lecture 58 More on Symbol.iterator
// Continue Refactor Lecture 57 using symbol iterator

// additional team for iteration
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  // special key operator tells for-of loop how to iterate
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

// main list for iteration
const engineeringTeam = {
  testingTeam, // omitting value pair per ES6
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

// initialize result array
const names = [];
// iterate over each yield value from generator
for (let name of engineeringTeam) {
  names.push(name);
}

console.log(names);
