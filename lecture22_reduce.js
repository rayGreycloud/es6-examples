//From Stephen Grider's ES6 Javascript course on udemy.com
// Lecture 22 Complicated use of reduce helper

// Write a function that takes a string of parens and
// returns true if they are balanced (opening+closing)
// and false if not
// Account for edge case ")()"

function balancedParens(string) {
  // reverse boolean since 0 is false
  // split string into array of characters
  // previous is running total
  return !string.split("").reduce(function(previous, char) {
    // account for edge case
    // unmatched closing parens causes previous to be negative
		if ( previous < 0 ) { return previous; }
    // if opening parens, add 1
    if ( char === "(" ) { return ++previous; }
    // if closing parens, substract 1
    if ( char === ")" ) { return --previous; }
    // previous will zero out if all parens matched
    return previous;
  }, 0);

}

balancedParens("(((())))");
balancedParens("(()()()())");
balancedParens("()(");
