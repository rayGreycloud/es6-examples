//From Stephen Grider's ES6 Javascript course on udemy.com
// Lecture 57 Generator delegation
// Refactor Lectures 55-56 using symbol iterator

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

// object
const engineeringTeam = {
  testingTeam, // omitting value pair per ES6
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

// generator iterator for engineeringTeam
function* TeamIterator(team) {
  // values yielded to for-of loop
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  yield* testingTeam;
}

// initialize result array
const names = [];
// iterate over each yield value from generator
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

console.log(names);
