import React from 'react';
import { useEffect, useState } from 'react';

function BookSearch(props) {
    const searchOptions = {
        key: process.env.REACT_APP_BOOK_KEY,
        limit: 25,
        rating: 'G',
        api: `https://https://www.googleapis.com/books/v1/volumes?q=`,
        endpoint: '/search'
      };
    // const [totItems, setTotItems] = useState(String(Math.floor(Math.random() * 40)))
    const [totItems, setTotItems] = useState(0)
    const [books, setBooks] = useState()
    const randBookResults = document.querySelector("#randBookResults")
    let maxResults = `1`;
    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:sci+fi&startIndex=${totItems}&maxResults=${maxResults}&key=`
    
    const fetchBook = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBooks(data.items[0])
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
            console.log(`second .then ${totItems}`)
        })
        .catch(err => console.log("something went wrong...", err))
    }
    // useEffect(() => {
    //     fetchBook();
    // }, [])
    console.log(totItems)
    return (
        <div>
            <div>
                <img id="randBookResults" src={books.volumeInfo.imageLinks.thumbnail} alt=""/>
                <div id="no-image"></div>
            </div>  
            <div>
                <button onClick={fetchBook}>Random Book!</button>
            </div> 
            <p id="title"></p>
        </div>  
            
        
    );
}

export default BookSearch;