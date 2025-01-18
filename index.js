let fetchedData = null; // Declare a global variable


function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  //the below fetch makes a web request to the API
  return fetch("https://anapioficeandfire.com/api/books")
  .then((response) => response.json()) //convert the response to JSON
  .then((data) => {
    console.log(data);
    fetchedData = data; //storing the data in the global variable
    renderBooks(data); //Pass the JSON data to the renderBooks function
  })
  .catch((error) => {
    console.error("Error fetching books:", error);//Handle errors
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
