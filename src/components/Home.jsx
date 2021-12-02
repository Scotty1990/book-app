import React, { useEffect, useState } from 'react';
import SearchResults from './SearchResults'

function Home() {
    const [readBooks, setReadBooks] = useState([])
    const [searchString, setSearchString] = useState([])
    const [startIndex, setStartIndex] = useState(0)
    const [books, setBooks] = useState([])
    
    const searchOptions = {
      key: process.env.REACT_APP_BOOK_KEY,
      limit: 25,
      // rating: 'G',
      api: `https://www.googleapis.com/books/v1/volumes?q=`,
      // endpoint: '/search',
    };
  
    // useEffect(() => {
    //   getBooks(searchString);
    // }, []);

    // const url = `${searchOptions.api}${searchString}&startIndex=${totItems}&key=`

    const getBooks = (searchString) => {
      const url = `${searchOptions.api}${searchString}&startIndex=${startIndex}&maxResults=20&key=`
      console.log(url)
      fetch(url)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setBooks(data.items)
          console.log((data.items[0].volumeInfo.averageRating))
      })
      .catch(err => console.log("something went wrong...", err))
  }
      
  function handleChange(event) {
    setSearchString(event.target.value)
    // had to add this so I could search for titles with spaces in the name
    if (searchString.includes(" "))
      setSearchString(searchString.replace(" ", "+"))
  } 

  function handleSubmit(event) {
    event.preventDefault()
    setStartIndex(0)
    getBooks(searchString)
  }

  function addBookToLog(addedBook) {
    setReadBooks(readBooks => [...readBooks, addedBook])
    console.log(readBooks)
  }
 
  function nextResults() {
    setStartIndex(startIndex + 20)
    console.log(startIndex)
    getBooks(searchString)
  }

  function previousResults() {
    setStartIndex(startIndex - 20)
    getBooks(searchString)
  }

    return (
        <div>
            {/* <p>{readBooks}</p> */}
            <div className="search-bar">
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Search"
                  type="text"
                  onChange={handleChange}
                />
                <button type="submit">Search</button>
              </form>
            </div>
            {/* Putting the container class outside the map made it work better */}
            <div className="container">
              {books.map(book => ( 
                <SearchResults 
                  book={book}
                  addBookToLog={addBookToLog} 
                />    
              ))}
            </div>
            <button onClick={previousResults} visibility={(startIndex === 0) ? "hidden" : "block"}>Previous</button>
            <button onClick={nextResults}>Next</button>
        </div>
    );
}

export default Home;