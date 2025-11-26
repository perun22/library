const bookDialog = document.querySelector("dialog");
const openBtn = document.getElementById("modal-btn-open");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

closeBtn.addEventListener("click", () => {
    bookDialog.close();
});

dialog.addEventListener("click", (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close();
    }
});

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.ID = crypto.randomUUID();
}
