import React from 'react';
import './index.css';
import FormInputBook from './components/FormInputBook';
import FormSearchBook from './components/FormSearchBook';
import BooksList from './components/BookList';

const booksInit = [
  {id: 1643425539399, title: 'The Perks of Being a Wallflower', author: 'Stephen Chbosky', year: 1876, isComplete: true},
  {id: 1643425452816, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', year: 1986, isComplete: true},
  {id: 1643425425655, title: 'The Fault in Our Stars', author: 'John Green', year: 1988, isComplete: true},
  {id: 1643425336145, title: 'Animal Farm', author: 'George Orwell', year: 1967, isComplete: false},
  {id: 1643425314657, title: 'Pride and Prejudice', author: 'Jane Austen', year: 2000, isComplete: true},
  {id: 1643425295637, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1980, isComplete: false},
  {id: 1643425276682, title: 'The Hunger Games (The Hunger Games, #1)', author: 'Suzanne Collins', year: 1970, isComplete: false}
];

function App() {

  const [books, setBooks] = React.useState(booksInit)
  const booksRef = React.useRef(booksInit)

  let completedBooks = []
  let inCompletedBooks = []

  for(let book of books){
    if (!book.isComplete) {
      inCompletedBooks.unshift(book)
    } else {
      completedBooks.unshift(book)
    }
  }

  const handleDeleteBook = (event) => {
    const newBooks = booksRef.current.filter(
      book => book.id !== parseInt(event.target.id)
    )
    booksRef.current = newBooks
    setBooks(booksRef.current)
  }

  const handleMoveBook = (event) => {
    const newBooks = [...booksRef.current]
    const index = newBooks.findIndex((obj) => {
      return obj.id === parseInt(event.target.id)
    })

    const book = newBooks[index]
	  book.isComplete = !book.isComplete
    booksRef.current = newBooks
    setBooks(booksRef.current)
  }

  const handleOnSubmit = (book) => {
    const newBooks = [...booksRef.current]
    newBooks.unshift(book)
    booksRef.current = newBooks
    setBooks(booksRef.current)
  }

  const handleOnSubmitSearch = (searchQuery) => {
    let bookResults = []
    const query = searchQuery.toLowerCase()
    for(let book of booksRef.current){
      const title = book.title.toLowerCase()
      if (title.includes(query)) {
				bookResults.unshift(book)
			}
    }
    setBooks(bookResults)
  }

  return (
    <React.Fragment>
      <section className="input_section">
        <h2>Masukkan Buku Baru</h2>
        <FormInputBook onSubmit={handleOnSubmit}/>
      </section>
      
      <section className="search_section">
        <h2>Cari Buku</h2>
        <FormSearchBook onSubmitSearch={handleOnSubmitSearch}/>
      </section>

      <section className="book_shelf">
        <h2>Belum selesai dibaca</h2>
        <div id="incompleteBookshelfList" className="book_list">
          {
            inCompletedBooks.map((book) => (<BooksList onDelete={handleDeleteBook} onMove={handleMoveBook} key={book.id} book={book}/>))
          }          
        </div>
      </section>
      
      <section className="book_shelf">
        <h2>Selesai dibaca</h2>
        <div id="completeBookshelfList" className="book_list">
          {
            completedBooks.map((book) => (<BooksList onDelete={handleDeleteBook} onMove={handleMoveBook} key={book.id} book={book}/>))
          }
        </div>
      </section>

    </React.Fragment>   
  );
}

export default App;
