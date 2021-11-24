import React from 'react';
import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';

function BookSearch(props) {
    const [totItems, setTotItems] = useState(String(Math.floor(Math.random() * 40)))
    const searchOptions = {
        key: process.env.REACT_APP_BOOK_KEY,
        limit: 25,
        rating: 'G',
        api: `https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&startIndex=${totItems}`,
        endpoint: '/search',
      };
    
    // const [totItems, setTotItems] = useState(0)
    const [books, setBooks] = useState()
    const [bookImage, setBookImage] = useState()
    const randBookResults = document.querySelector("#randBookResults")
    let maxResults = `1`;
    const url = `${searchOptions.api}&key=`
    // const urlEndpoint = `subject:sci+fi&startIndex=${totItems}&maxResults=${maxResults}&key=  `
    const fetchBook = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBooks(data.items[0].volumeInfo.title)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{console.log("I tried")}
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
    // useEffect(() => {
    //     fetchBook();
    // }, [])
    console.log(books)
    return (
        <div>
            <div>
                {/* <img id="randBookResults" src={bookImage}/> */}
                <div id="no-image">{books}</div>
            </div>  
            <div>
                <button onClick={fetchBook}>Random Book!</button>
            </div> 
            <p id="title"></p>
            <SearchForm />
        </div>  
            
        
    );
}

export default BookSearch;