import React, { useEffect, useState } from 'react';
import SearchResults from './SearchResults'

function Home() {
    const [readBooks, setReadBooks] = useState(["Books I've read: "])
    const [searchString, setSearchString] = useState([])
    const [startIndex, setStartIndex] = useState(0)
    const [books, setBooks] = useState([])
    const [searchParams, setSearchParams] = useState({search: '', index: 0})
    const [lastSearch, setLastSearch] = useState([]) 
    
    const searchOptions = {
      key: process.env.REACT_APP_BOOK_KEY,
      api: `https://www.googleapis.com/books/v1/volumes?q=`,
    };

    const getBooks = (searchString, startIndex = 0) => {
      const url = `${searchOptions.api}${searchString}&startIndex=${startIndex}&maxResults=20&key=`
      console.log(url)
      fetch(url)
      .then(res => {
        if(res.ok)
        return res.json()})
      .then(data => {
          console.log(data)
          setBooks(data.items)
      })
      .catch(err => console.log("something went wrong...", err))
  }

  useEffect(() => {
    getBooks(searchParams.search, searchParams.index)
  }, [searchParams])
      
  function handleChange(event) {
    setSearchString(event.target.value)
    // had to add this so I could search for titles with spaces in the name
    if (searchString.includes(" "))
      setSearchString(searchString.replace(" ", "+"))
  } 

  function handleSubmit(event) {
    event.preventDefault()
    setStartIndex(index => index * 0)
    setSearchParams((state) => ({...state, search: searchString, index: startIndex * 0}))
    setLastSearch(...lastSearch, searchString)
    setSearchString('')
  }

  function addBookToLog(addedBook) {
    setReadBooks(readBooks => [...readBooks, addedBook + ', ' ])
  }
 
  function nextResults() {
    setStartIndex(index => index + 20)
    setSearchParams((state) => ({...state, search: lastSearch, index: startIndex + 20}))
    console.log(lastSearch)
  }

  function previousResults() {
    setStartIndex(index => index - 20)
    setSearchParams((state) => ({...state, search: lastSearch, index: startIndex - 20}))
  }

    return (
        <div id="homeDiv">
          <div id="read-books">
            <p>{readBooks}</p>
          </div>
          <div className="search-bar">
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Search"
                type="text"
                onChange={handleChange}
                value={searchString}
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
          <button onClick={previousResults} display={(startIndex === 0) ? "hidden" : "block"}>Previous</button>
          <button onClick={nextResults}>Next</button>
        </div>
    );
}

export default Home;