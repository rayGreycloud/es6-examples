//From Stephen Grider's ES6 Javascript course on udemy.com
// Lecture 66 AJAX requests with Fetch

url = "https://jsonplaceholder.typicode.com/posts/";
// Have to call .json because response object doesn't contain data
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));

// Stephen recommends using Axios or other library due to fetch limitations
