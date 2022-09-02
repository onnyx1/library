
let library = [];


function Book (author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");

    if(!document.getElementById("read").checked){
        document.getElementById("read").value = "I have not read it";
    } else {
        document.getElementById("read").value = "I have read it";
    }


    const x = new Book(title.value,author.value,pages.value,document.getElementById("read").value);
    library.push(x);
    backgroundDim.setAttribute("style", "display: none !important");

  }


  






const button = document.querySelector(".add");
const backgroundDim = document.querySelector(".background-dim");

button.addEventListener("click", ()=> {

    if(getComputedStyle(backgroundDim).display ==="none"){
        backgroundDim.setAttribute("style", "display: flex !important");
    } 

})

window.addEventListener("click", (e) => {
if(e.target === backgroundDim){
    backgroundDim.setAttribute("style", "display: none !important");
}
})