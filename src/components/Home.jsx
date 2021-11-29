import React from 'react';
import SearchForm from './SearchForm';
import { useState } from 'react';

function Home(props) {
    const [searchString, setSearchString] = useState('')
    const [books, setBooks] = useState()
    const [bookImage, setBookImage] = useState()
    const [totItems, setTotItems] = useState(String(Math.floor(Math.random() * 40)))
  
    const searchOptions = {
      key: process.env.REACT_APP_BOOK_KEY,
      limit: 25,
      // rating: 'G',
      api: `https://www.googleapis.com/books/v1/volumes?q=`,
      // endpoint: '/search',
    };
  
    const url = `${searchOptions.api}${searchString}&startIndex=${totItems}&key=`
  
    const getBooks = () => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setBooks(data.items[0].volumeInfo.title)
          try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
          catch{setBookImage('')}
          // try {
          //     randBookResults.src = data.items[0].volumeInfo.imageLinks.thumbnail
          //     console.log("try is working")
          // }
          // catch {
          //     randBookResults.src = '/Users/scottmacleod/Desktop/GA/sandbox/projects/book-app/book-app/src/components/pics/no-image.jpg';
          //     console.log("catch is working")
          //     // document.querySelector("#no-image").innerText = "No image found"
          // }
          
          // console.log((data.items[0].volumeInfo.averageRating))
          setTotItems(String((Math.floor(Math.random() * parseInt(data.totalItems)))))
      })
      .catch(err => console.log("something went wrong...", err))
  }
  
      
  function handleChange(event) {
    setSearchString(event.target.value)
  } 

  function handleSubmit(event) {
    event.preventDefault()
    getBooks()
  }

    return (
        <div>
            Inside Home
            <SearchForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString} 
        />
        </div>
    );
}

export default Home;