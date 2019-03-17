// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor

function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");

  // Create tr element
  const row = document.createElement("tr");

  // Insert Cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X<a></td>
  `;

  // Append to list
  list.appendChild(row);
};
// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create Div
  const div = document.createElement("div");
  // Add Classes
  div.className = `alert ${className}`;
  //Add Text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector(".container");

  const form = document.querySelector("#book-form");

  // Insert Alert
  container.insertBefore(div, form);

  // Timeout
  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if ((title === "") | (author === "") | (isbn === "")) {
    // Error Message
    ui.showAlert("Please Fill In All Fields", "error");
  } else {
    // Add Book to list
    ui.addBookToList(book);

    // Clear Input Fields
    ui.clearFields();
  }

  e.preventDefault();
});
document.getElementById("");
