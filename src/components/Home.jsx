import React, { useEffect, useState, useContext } from 'react';
// import React, { useEffect, useState } from 'react';
import { DataContext } from './DataContext';
import SearchResults from './SearchResults'
import BooksIveRead from './BooksIveRead';

function Home() {
    // const data = useContext(DataContext)
    const { readBooks, setReadBooks } = useContext(DataContext)
    // const [readBooks, setReadBooks] = useState([])
    const [authors, setAuthors] = useState([])
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
  } 

  function handleSubmit(event) {
    event.preventDefault()
    setStartIndex(index => index * 0)
    // Had to add this so I could search for stuff with spaces in the name
    if (searchString.includes(" "))
      setSearchString(searchString.replace(" ", "+"))
    setSearchParams((state) => ({...state, search: searchString, index: startIndex * 0}))
    setLastSearch(searchString)
    console.log(lastSearch)
    setSearchString('')
  }

  function addBookToLog(addedBook) {
    setReadBooks(readBooks => [...readBooks, addedBook])
  }

 
 
  function nextResults() {
    setStartIndex(index => index + 20)
    setSearchString(lastSearch)
    // setSearchString(lastSearch[lastSearch.length - 2])
    // console.log(searchString[searchString.length - 2])
    // setSearchString(...searchString, searchString[searchString.length - 2])
    setSearchParams((state) => ({...state, search: searchString, index: startIndex + 20}))
    console.log(searchParams)
  }

  function previousResults() {
    setStartIndex(index => index - 20)
    setSearchParams((state) => ({...state, search: searchString, index: startIndex - 20}))
  }

    return (
        <div id="homeDiv">
          <div>
            {/* <BooksIveRead readBooks={readBooks}/> */}
          </div> 
          {/* <div id="read-books">
            <p>{readBooks}</p>
          </div> */}
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
                // addAuthorsToLog={addAuthorsToLog} 
              />    
            ))}
          </div>
          <button onClick={previousResults} display={(startIndex === 0) ? "hidden" : "block"}>Previous</button>
          <button onClick={nextResults}>Next</button>
        </div>
    );
}

export default Home;