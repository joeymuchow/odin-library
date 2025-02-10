const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayLibrary() {
    const bookShelf = document.querySelector(".book-shelf");
    // Clear bookShelf
    bookShelf.replaceChildren();

    for (const book of myLibrary) {
        const bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", "book");
        
        const bookTitle = document.createElement("h3");
        bookTitle.textContent = book.title;
        
        const bookAuthor = document.createElement("h4");
        bookAuthor.textContent = book.author;
        
        const bookPages = document.createElement("p");
        bookPages.textContent = book.pages + " pages";
        
        const bookRead = document.createElement("p");
        const yesNo = book.read ? "Yes" : "No";
        bookRead.textContent = "Read? " + yesNo;

        bookContainer.append(bookTitle, bookAuthor, bookPages, bookRead);
        bookShelf.append(bookContainer);
    }
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "300", false);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);
addBookToLibrary("Test", "Test Author", "1000", true);

displayLibrary();