import SearchForm from './SearchForm';
import React, { useEffect, useState } from 'react';
import SearchResults from './SearchResults'

function Home(props) {
    const [searchString, setSearchString] = useState([])
    const [bookName, setBookName] = useState([])
    const [bookImage, setBookImage] = useState()
    const [totItems, setTotItems] = useState(String(Math.floor(Math.random() * 40)))
    const [books, setBooks] = useState([])
    const [key, setKey] = useState('')
    const searchOptions = {
      key: process.env.REACT_APP_BOOK_KEY,
      limit: 25,
      // rating: 'G',
      api: `https://www.googleapis.com/books/v1/volumes?q=`,
      // endpoint: '/search',
    };
  
    
  
    useEffect(() => {
      getBooks(searchString);
    }, []);

    const getBooks = (searchString) => {
      const url = `${searchOptions.api}${searchString}&startIndex=${totItems}&key=`
      fetch(url)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setBookName(data.items[0].volumeInfo.title)
          setBooks(data.items)
          console.log((data.items[0].volumeInfo.averageRating))
          setTotItems(String((Math.floor(Math.random() * parseInt(data.totalItems)))))
      })
      .catch(err => console.log("something went wrong...", err))
  }
  
      
  function handleChange(event) {
    setSearchString(event.target.value)
  } 

  function handleSubmit(event) {
    event.preventDefault()
    console.log(searchString)
    getBooks(searchString)
  }

  function addBookToLog(addedBook) {
    console.log(addedBook)
  }

    return (
        <div>
            <div className="search-bar">
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Search"
                  type="text"
                  onChange={handleChange}
                  // value={searchString} 
                />
                <button type="submit">Search</button>
              </form>
            </div>
          {books.map(book => ( 
            <SearchResults 
              book={book}
              addBookToLog={addBookToLog} 
              />    
          ))}
        </div>
    );
}

export default Home;