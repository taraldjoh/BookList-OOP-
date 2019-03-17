class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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
  }

  showAlert(message, className) {
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
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Event Listener For Add Book
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

    // Show Success
    ui.showAlert("Book Added!", "success");

    // Clear Input Fields
    ui.clearFields();
  }

  // Prevents Default Behaviour
  e.preventDefault();
});

// Event Listener for Delete
document.getElementById("book-list").addEventListener("click", function(e) {
  const ui = new UI();

  ui.deleteBook(e.target);

  // Show Alert When Deleted
  ui.showAlert("Book Removed", "success");

  // Prevents Default Behaviour
  e.preventDefault();
});
