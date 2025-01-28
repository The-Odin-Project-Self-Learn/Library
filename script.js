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

function displayBooks() {
    const libraryContainer = document.querySelector('.library'); 

    const bookRow = document.createElement('div');
    bookRow.classList.add('library-row'); 

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
    libraryContainer.appendChild(bookRow); 

    //add an event listener to each remove button. When clicked, the button belonging to a particular book-card is sent to removeBook().
    const buttons = document.querySelectorAll('.remove-button');
    buttons.forEach((button) => addEventListener('click', (event) => removeBook(event.target)));
}

//given the remove button of a particular book-card that was clicked, remove the corresponding book
function removeBook(removeButton) {
    //access the specific book-card corresponding to this particular remove button
    const bookCard = removeButton.parentElement;

    //access the row to which this book-card is appended
    const row = bookCard.parentElement;

    //remove this book-card from this row
    row.removeChild(bookCard);

    //iterate through the array of books and remove the particular book from the array once its ID is matched
    const title = bookCard.querySelector('h1');
    myLibrary.forEach((book) => {
        if (book.title === title) { //if this book's title matches this bookCards' associated book title
            const index = myLibrary.indexOf(book); //retrieve its index position in the array
            myLibrary.splice(index, 1); //remove from array
        }
    });
}


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
addBookToLibrary("Mockingjay", "Suzanne Collins");
addBookToLibrary("The Maze Runner", "James Dashner");
addBookToLibrary("The Scorch Trials", "James Dashner");

displayBooks();
