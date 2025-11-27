const bookDialog = document.querySelector("dialog");
const openBtn = document.getElementById("modal-btn-open");
const closeBtn = document.getElementById("close-btn");
const modalForm = document.getElementById("modal-form");
const submitBtn = document.getElementById("submit");

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
    this.ID = crypto.randomUUID();
}
const myLibrary = [];

function addBookToLibrary() {}

function getFormData(event) {
    const userData = new FormData(event.target);
    const bookData = {};
    userData.forEach((value, key) => (bookData[key] = value));
    event.preventDefault();
    bookDialog.close();
    console.log(myLibrary);
}
modalForm.addEventListener("submit", getFormData);
