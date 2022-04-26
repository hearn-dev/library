// Declare empty array for library
let myLibrary = [];

// Object Constructor
function Book(Title, Author, Pages, Read=false) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;

}

// Book.prototype.info = function () {
//     if (this.read){
//         return `${title} by ${author}, ${pages} pages, already read.`
//     } else {
//         return `${title} by ${author}, ${pages} pages, not read yet.`
//     }
// }


// Function for adding book to array
function addBookToLibrary (Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    
}

function displayBooks() {
    const books = document.querySelector(".books");

    myLibrary.forEach(myLibrary => {
        let card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        for (key in myLibrary) {
            console.log(`${key} : ${myLibrary[key]}`);
            let para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}
// function displayBooks() {
//     const books = document.querySelector(".books")

//     myLibrary.forEach(myLibrary => {
//         let card = document.createElement("div");
//         card.classList.add("card");
//         books.appendChild(card);
//         for (let key in myLibrary) {
//             console.log(`${key} : ${myLibrary[key]}`)
//             const paragraph = document.createElement("p");
//             paragraph.textContent = (`${key}: ${myLibrary[key]}`);
//             card.appendChild(paragraph);
//         }
//     })
// }


const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 310, true);
const aGameOfThrones = new Book ("A Game of Thrones", "George R. R. Martin", 694, true)
myLibrary.push(aGameOfThrones);
myLibrary.push(theHobbit);
myLibrary.push(aGameOfThrones);
myLibrary.push(theHobbit);
myLibrary.push(aGameOfThrones);
myLibrary.push(theHobbit);


displayBooks();
