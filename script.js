const myLibrary = [];

function Book(name, author) {
  this.name = name;
  this.author = author;
  this.id = '';
}

function addBookToLibrary(name, author) {
  // take params, create a book then store it in the array
  const newBook = new Book(name, author);
  myLibrary.push(newBook);
}




/*Book display logic*/
function displayBooks() {
    const library = document.querySelector('.library');

    let bookRow = document.querySelector('.library-row');

    //if there is no row of books yet, create a new one and add it to the library
    if (!bookRow) {
        bookRow = document.createElement('div');
        bookRow.classList.add('library-row');
        library.appendChild(bookRow); 
    }

    //clear all book-cards from the row
    bookRow.innerHTML = '';

    //add each book-card, representing each book from the array, to the row
    myLibrary.forEach((book, index) => {
        //assign each book a unique identifier
        book.id = index;

        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card'); 

        const title = document.createElement('h3');
        title.textContent = book.name;

        const author = document.createElement('p');
        author.textContent = book.author;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'remove';
        removeButton.classList.add('remove-button');

        //create the book-card and add it to the row
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(removeButton);
        bookRow.appendChild(bookCard);
    });

    //after populating rows with all books, append the row(s) to the library
    library.appendChild(bookRow); 

    //add an event listener to each remove button. When clicked, the button belonging to a particular book-card is sent to removeBook().
    const buttons = document.querySelectorAll('.remove-button');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => removeBook(event.target))
    });
}




/* Book removal logic */
//given the remove button of a particular book-card that was clicked, remove the corresponding book
function removeBook(removeButton) {
    //access the specific book-card corresponding to this particular remove button
    const bookCard = removeButton.parentElement;

    //access the row to which this book-card is appended
    const row = bookCard.parentElement;

    //remove this book-card from this row
    row.removeChild(bookCard);

    //iterate through the array of books and remove the particular book from the array once its ID is matched
    const title = bookCard.querySelector('h3').textContent;
    myLibrary.forEach((book) => {
        if (book.title === title) { //if this book's title matches this bookCards' associated book title
            const index = myLibrary.indexOf(book); //retrieve its index position in the array
            myLibrary.splice(index, 1); //remove from array
        }
    });
}




/* Form logic */
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent the form from trying to send inputted form data to server

    //access the text content of the relevant form input fields
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;

    addBookToLibrary(bookTitle, bookAuthor);

    displayBooks();

    form.reset();
});




/* Add initial set of books to library */
addBookToLibrary("The Sorcerer's Stone", "JK Rowling");
addBookToLibrary("The Chamber of Secrets", "JK Rowling");
addBookToLibrary("The Prisoner of Azkaban", "JK Rowling");
addBookToLibrary("The Goblet of Fire", "JK Rowling");
addBookToLibrary("The Order of the Phoenix", "JK Rowling");
addBookToLibrary("The Half-Blood Prince", "JK Rowling");
addBookToLibrary("The Deathly Hallows", "JK Rowling");
addBookToLibrary("The Hunger Games", "Suzanne Collins");
addBookToLibrary("Catching Fire", "Suzanne Collins");
addBookToLibrary("Mockingjay", "Suzanne Collins");
addBookToLibrary("The Maze Runner", "James Dashner");
addBookToLibrary("The Scorch Trials", "James Dashner");

displayBooks();
