const myLibrary = [];

function Book(name, author) {
  this.name = name;
  this.author = author;
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

    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card'); 

        const title = document.createElement('h3');
        title.textContent = book.name;

        const author = document.createElement('p');
        author.textContent = book.author;

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookRow.appendChild(bookCard);
    });

    libraryContainer.appendChild(bookRow); //add the newly populated flex row to the library container
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


displayBooks();
