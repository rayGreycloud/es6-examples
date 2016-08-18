//From Stephen Grider's ES6 Javascript course on udemy.com
// Lecture 67 Shortcomings with Fetch

// Different responses depending on error type

  // Bad URL causes 404 but no error message in console
url = "https://jsonplaceholder.typicode.com/posts12345/";

fetch(url)
  .then(response => console.log(response))
  // error causes this statement not to be run
  .catch(error => console.log('Bad', error));

  // Bad URL causes ERR_NAME_NOT_RESOLVED
  // Error message thrown to console
url = "https://jsonplaceholder.typicode123.com/posts/";

fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log('Bad', error));

// Stephen recommends axios and jquery because of unexpected behavior of fetch
