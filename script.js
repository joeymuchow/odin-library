const myLibrary = [];

const modal = document.querySelector(".new-book-modal");
const form = document.querySelector(".new-book-form");
document.querySelector(".new-book").addEventListener("click", newBook);
document.querySelector(".close-modal").addEventListener("click", closeModal);
form.addEventListener("submit", submitForm);

function newBook() {
    modal.showModal();
}

function closeModal(e) {
    e.preventDefault();
    modal.close();
    form.reset();
}

function submitForm(e) {
    e.preventDefault();
    if (form.reportValidity()) {
        addBookToLibrary(
            this.elements.title.value,
            this.elements.author.value,
            this.elements.pages.value,
            this.elements.read.value === "yes",
        );
        displayLibrary();
        form.reset();
        modal.close();
    }
}

function removeBook(e) {
    const id = Number(e.target.dataset.id);
    myLibrary.splice(id, 1);
    displayLibrary();
}

function updateReadStatus(e) {
    const id = Number(e.target.dataset.id);
    myLibrary[id].changeReadStatus();
    displayLibrary();
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return `${this.title} by ${this.author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
    }
}

Book.prototype.changeReadStatus = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayLibrary() {
    const bookShelf = document.querySelector(".book-shelf");
    // Clear bookShelf
    bookShelf.replaceChildren();

    for (let i = 0; i < myLibrary.length; i++) {
        const bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", "book");
        
        const bookTitle = document.createElement("h2");
        bookTitle.textContent = myLibrary[i].title;
        
        const bookAuthor = document.createElement("h3");
        bookAuthor.textContent = myLibrary[i].author;
        
        const bookPages = document.createElement("p");
        bookPages.textContent = myLibrary[i].pages + " pages";
        
        const bookReadContainer = document.createElement("div");
        bookReadContainer.setAttribute("class", "book-read-container");

        const bookRead = document.createElement("p");
        const yesNo = myLibrary[i].read ? "Yes" : "No";
        bookRead.textContent = "Read? " + yesNo;

        const btnContainer = document.createElement("div");
        const changeReadStatus = document.createElement("button");
        changeReadStatus.textContent = "Update";
        changeReadStatus.setAttribute("class", "change-read-status");
        changeReadStatus.setAttribute("data-id", i);
        changeReadStatus.addEventListener("click", updateReadStatus);
        btnContainer.append(changeReadStatus);

        bookReadContainer.append(bookRead, btnContainer);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove book";
        removeBtn.setAttribute("class", "remove-book");
        removeBtn.setAttribute("data-id", i);
        removeBtn.addEventListener("click", removeBook);

        bookContainer.append(bookTitle, bookAuthor, bookPages, bookReadContainer, removeBtn);
        bookShelf.append(bookContainer);
    }
}