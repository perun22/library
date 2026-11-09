const bookDialog = document.querySelector("dialog");
const openBtn = document.getElementById("modal-btn-open");
const closeBtn = document.getElementById("close-btn");
const modalForm = document.getElementById("modal-form");
const submitBtn = document.getElementById("submit");
const list = document.querySelector("#book-list");
const template = document.querySelector("#book-card");

openBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

closeBtn.addEventListener("click", () => {
    bookDialog.close();
});

bookDialog.addEventListener("click", (e) => {
    const dialogDimensions = bookDialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        bookDialog.close();
    }
});

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
}
let myLibrary = [];

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.querySelector("#readStatus").checked;
    const userData = new Book(title, author, pages, readStatus);
    myLibrary.push(userData);
    renderBook(userData);
}

list.addEventListener("click", (e) => {
    if (!e.target.matches("[data-button-delete]")) return;

    const parent = e.target.closest(".card");
    const bookId = parent.dataset.bookId;
    parent.remove();
    myLibrary = myLibrary.filter((book) => book.id !== bookId);
});

list.addEventListener("click", (e) => {
    if (!e.target.matches("[data-button-status]")) return;

    const parent = e.target.closest(".card");
    const bookId = parent.dataset.bookId;
    const book = myLibrary.find((b) => b.id === bookId);
    console.log(book);
    const statusEl = parent.querySelector(".book-status");
    book.readStatus ? (statusEl.innerText = `Status: Unread`) : (statusEl.innerText = `Status: Read`);
    book.readStatus ? (book.readStatus = false) : (book.readStatus = true);
    console.log(statusEl);
    console.log(myLibrary);
});

modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    bookDialog.close();
    title.value = "";
    author.value = "";
    pages.value = "";
    readStatus.checked = false;
});

function renderBook(book) {
    const bookCard = template.content.cloneNode(true);
    const bookItem = bookCard.querySelector(".card");
    bookItem.dataset.bookId = book.id;
    const titleText = bookCard.querySelector("[data-book-item-title]");
    titleText.innerText = book.title;
    const authorText = bookCard.querySelector("[data-book-item-author]");
    authorText.innerText = book.author;
    const pagesText = bookCard.querySelector("[data-book-item-pages]");
    pagesText.innerText = `Pages: ${book.pages}`;
    const statusText = bookCard.querySelector("[data-book-item-status]");
    book.readStatus ? (statusText.innerText = `Status: Read`) : (statusText.innerText = `Status: Unread`);
    list.appendChild(bookCard);
}

console.log(myLibrary);
