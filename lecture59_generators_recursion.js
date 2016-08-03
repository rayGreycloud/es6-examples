//From Stephen Grider's ES6 Javascript course on udemy.com
// Lecture 59-60 Generators with Recursion

class Comment {
  // create data tree
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
// class method to iterate over tree
  *[Symbol.iterator]() {
    // top level
    yield this.content;
    // iterate thru children
    for (let child of this.children) {
      // and children's children
      yield* child;
    }
  }
}

// data for tree
const children [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', []),
];
const tree = new Comment('Great post', children);

// initialize result array
const values = [];
// loop calls iterator
for (let value of tree) {
  // values for tree and children pushed onto results array 
  values.push(value);
}
console.log(values);
