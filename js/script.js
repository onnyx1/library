let library = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  changeRead() {
    if (this.read === "Yes") {
      this.read = "No";
    } else {
      this.read = "Yes";
    }
    console.log("here");
    const row = document.querySelector(".row2");
    row.innerHTML = "";
    displayBooks();
  }
}

function addBookToLibrary() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");

  if (!document.getElementById("read").checked) {
    document.getElementById("read").value = "No";
  } else {
    document.getElementById("read").value = "Yes";
  }

  let x = new Book(title.value, author.value, pages.value, document.getElementById("read").value);
  library.push(x);
  backgroundDim.setAttribute("style", "display: none !important");
  const row = document.querySelector(".row2");
  row.innerHTML = "";
  displayBooks();
}

function displayBooks() {
  const row = document.querySelector(".row2");
  let i = 0;

  for (let book of library) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    title.textContent = "Title: " + book.title;
    author.textContent = "Author: " + book.author;
    pages.textContent = "Number of Pages: " + book.pages;
    read.textContent = "Read Status: " + book.read;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.style.backgroundColor = "rgb(255,156,156)";
    remove.setAttribute("data-index", i);
    i++;

    remove.addEventListener("click", () => {
      library.splice(remove.getAttribute("data-index"), 1);
      row.innerHTML = "";
      displayBooks();
    });

    const readButton = document.createElement("button");
    readButton.textContent = "Change Read Status";
    readButton.addEventListener("click", () => {
      let book = library[remove.getAttribute("data-index")];
      console.log(book);
      book.changeRead();
    });

    readButton.style.marginTop = "2rem";

    card.appendChild(readButton);

    card.appendChild(remove);

    row.appendChild(card);
  }
}

const button = document.querySelector(".add");
const backgroundDim = document.querySelector(".background-dim");

button.addEventListener("click", () => {
  if (getComputedStyle(backgroundDim).display === "none") {
    backgroundDim.setAttribute("style", "display: flex !important");
  }
});

window.addEventListener("click", (e) => {
  if (e.target === backgroundDim) {
    backgroundDim.setAttribute("style", "display: none !important");
  }
});
