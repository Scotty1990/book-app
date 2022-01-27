import React, { useEffect, useState, useContext } from 'react';
import { DataContext } from './DataContext';
import SearchResults from './SearchResults'

function Home(props) {
    // changed it to "willRead" because I was having issues with .map. Google said name might be a problem
    const { readBooks, setReadBooks, willRead, setWillRead} = useContext(DataContext)
    const [searchString, setSearchString] = useState([])
    const [startIndex, setStartIndex] = useState(0)
    const [books, setBooks] = useState([])
    const [searchParams, setSearchParams] = useState({search: '', index: 0})
    
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
  }

  function addReadBookToLog(addReadBook) {
    setReadBooks(readBooks => [...readBooks, addReadBook])
    console.log(readBooks)
  }

  function addWantToReadLog(addWantToRead) {
    setWillRead(willRead => [...willRead, addWantToRead])
  }
 
  function nextResults() {
    setStartIndex(index => index + 20)
    setSearchParams((state) => ({...state, search: searchString, index: startIndex + 20}))
  }

  function previousResults() {
    setStartIndex(index => index - 20)
    setSearchParams((state) => ({...state, search: searchString, index: startIndex - 20}))
  }

    return (
        <div id="homeDiv">
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
                addReadBookToLog={addReadBookToLog}
                addWantToReadLog={addWantToReadLog} 
              />    
            ))}
          </div>
          <button className="prevNextButtons" onClick={previousResults} display={(startIndex === 0) ? "hidden" : "block"}>Previous</button>
          <button className="prevNextButtons" onClick={nextResults}>Next</button>
        </div>
    );
}

export default Home;