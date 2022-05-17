let myLibrary = [];

function Book(title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function removeBook(book) {
    const index = findBook(book)
    myLibrary.splice(index, 1);
    displayBooks();


}

function findBook(book) {
    const isBook = (element) => element.Title == book;
    const index = myLibrary.findIndex(isBook);
    return index;
}

function retrieveData() {

    // Retrieve form data 
    const Title = document.querySelector("#Title").value;
    const Author = document.querySelector("#Author").value;
    const Pages = document.querySelector("#Pages").value;
    if (form.read.checked) {
        const Read = true;
    } else {
        const Read = false;
    }

    if (Title=="" || Author=="" || Pages=="") return;

    addBookToLibrary(Title, Author, Pages, Read);

    const inputs = document.querySelectorAll('#Title, #Author, #Pages, #Read');

    inputs.forEach(input => {
        input.value = '';
    })


}

function displayBooks() {
    // Clear Shelf
    removeCards();
    shelf = document.querySelector("#shelf")

    // Create and append cards for each book in myLibrary
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card", "w-25", "m-1", "p-3");
        shelf.appendChild(card);
        
        for(let key in myLibrary) {
            if (key == "Read") {
                const read = document.createElement("p")
                if (myLibrary[key]) {
                    read.textContent = "Read";
                } else {
                    read.textContent = "Not Read";
                }
                card.appendChild(read);
                break;
            }
            const para = document.createElement("p")
            para.textContent = `${key}: ${myLibrary[key]}`
            card.appendChild(para);
        }
        const remove = document.createElement("button");
        remove.classList.add("btn", "btn-outline-danger");
        remove.id = myLibrary.Title;
        remove.type = "button";
        remove.textContent = "Remove";
        remove.addEventListener("click", function() {
            removeBook(this.id);
        });
        card.appendChild(remove);
    })
}

function removeCards() {
    let cards = document.getElementsByClassName("card");

    while(cards[0]) {
        cards[0].parentNode.removeChild(cards[0]);
    }
}


const submitButton = document.querySelector("#submit")
submitButton.addEventListener("click", retrieveData);

// Book.prototype.info = function() {
//     return `${title} by ${author}, ${pages} pages, ${read}`;
// }

// addBookToLibrary("The Hobbit", "Tolkien", 250, "read");
// addBookToLibrary("A Game of Thrones", "George R.R. Martin", 1000, "read");
// addBookToLibrary("Project Hail Mary", "Andy Weir", 300, "read");
// addBookToLibrary("Cibola Burn", "James S.A. Corey", 400, "not yet read")
// addBookToLibrary("The Hobbit", "Tolkien", 250, "read");
// addBookToLibrary("A Game of Thrones", "George R.R. Martin", 1000, "read");
addBookToLibrary("Project Hail Mary", "Andy Weir", 300, true);
addBookToLibrary("Cibola Burn", "James S.A. Corey", 400, false)
addBookToLibrary("The Hobbit", "Tolkien", 250, true);
// addBookToLibrary("A Game of Thrones", "George R.R. Martin", 1000, "read");
// addBookToLibrary("Project Hail Mary", "Andy Weir", 300, "read");
// addBookToLibrary("Cibola Burn", "James S.A. Corey", 400, "not yet read")








displayBooks();




