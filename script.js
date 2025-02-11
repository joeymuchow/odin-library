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
    console.log(e);
    const id = Number(e.target.dataset.id);
    myLibrary.splice(id, 1);
    displayLibrary();
}

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

    for (let i = 0; i < myLibrary.length; i++) {
        const bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", "book");
        
        const bookTitle = document.createElement("h3");
        bookTitle.textContent = myLibrary[i].title;
        
        const bookAuthor = document.createElement("h4");
        bookAuthor.textContent = myLibrary[i].author;
        
        const bookPages = document.createElement("p");
        bookPages.textContent = myLibrary[i].pages + " pages";
        
        const bookRead = document.createElement("p");
        const yesNo = myLibrary[i].read ? "Yes" : "No";
        bookRead.textContent = "Read? " + yesNo;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove book";
        removeBtn.setAttribute("class", "remove-book");
        removeBtn.setAttribute("data-id", i);
        removeBtn.addEventListener("click", removeBook);

        bookContainer.append(bookTitle, bookAuthor, bookPages, bookRead, removeBtn);
        bookShelf.append(bookContainer);
    }
}