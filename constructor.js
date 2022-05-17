let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
}

// Add book to array
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

// Remove book from array
function removeBook(book) {
    const index = findBook(book)
    myLibrary.splice(index, 1);
    displayBooks();


}

// Return index of book in array
function findBook(book) {
    const isBook = (element) => element.Title == book;
    const index = myLibrary.findIndex(isBook);
    return index;
}

// Toggle Read status of book
function toggleRead(book) {
    const index = findBook(book);
    myLibrary[index].Read = !myLibrary[index].Read;
    displayBooks();
}

// Collect user input from form
function retrieveData() {

    // Retrieve form data 
    const Title = document.querySelector("#Title").value;
    const Author = document.querySelector("#Author").value;
    const Pages = document.querySelector("#Pages").value;
    let Read = document.querySelector("#Read").value;
    if (Read == "Read") {
        Read = true;
    } else {
        Read = false;
    }

    if (Title=="" || Author=="" || Pages=="") return;

    // Add book from retreived form data
    addBookToLibrary(Title, Author, Pages, Read);

    // Clear form after submission
    const inputs = document.querySelectorAll('#Title, #Author, #Pages, #Read');

    inputs.forEach(input => {
        input.value = '';
    })


}

// Create cards for books in DOM
function displayBooks() {
    // Clear Shelf
    removeCards();
    shelf = document.querySelector("#shelf")

    // Create and append cards for each book in myLibrary
    myLibrary.forEach(myLibrary => {

        // Initialize Card
        const card = document.createElement("div");
        card.classList.add("card", "w-25", "m-1", "p-3");
        shelf.appendChild(card);
        
        // Add data to card from object in array
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
        // Add Read toggle button
        const readToggle = document.createElement("button");
        readToggle.classList.add("btn", "btn-outline-success", "mb-1");
        readToggle.id = myLibrary.Title;
        readToggle.type = "button";
        readToggle.textContent = "Toggle Read Status";
        readToggle.addEventListener("click", function() {
            toggleRead(this.id);
        })
        card.appendChild(readToggle);

        // Add Remove Button
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

// Remove DOM cards
function removeCards() {
    let cards = document.getElementsByClassName("card");

    while(cards[0]) {
        cards[0].parentNode.removeChild(cards[0]);
    }
}

// listener for Submitting form
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




