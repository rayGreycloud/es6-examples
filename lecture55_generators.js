//From Stephen Grider's ES6 Javascript course on udemy.com
// Lecture 55-56 Generator delegation example
// Adding another team and generator iterator
// Incorporate new iterator into first
// Trigger for-of loop to iterate thru both teams

// additional team for iteration
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
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
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  // triggers for-of loop to use second generator
  yield* testingTeamGenerator;
}

// generator iterator for testingTeam
function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

// initialize result array
const names = [];
// iterate over each yield value from generator
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

console.log(names);
