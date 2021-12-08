import React from 'react';
import NoImg from './pics/NoImg.jpeg'

const SearchResults = ({ book, addBookToLog, addAuthorsToLog }) => { 
    
    function onClick(event) {
        // let bookObj = {title:}
        addBookToLog(
            // book.volumeInfo.title,
            book
           
            // {title: book.volumeInfo.title,
            // author: book.volumeInfo.authors}
        )
        // addAuthorsToLog(
        //     book.volumeInfo.authors
        // )
        event.preventDefault()
    }

    return (
        <div>
        {/* Patricio showed me this */}
            <div>
                <img src={Object.keys(book.volumeInfo).includes(`imageLinks`) ? book.volumeInfo.imageLinks.thumbnail : NoImg} alt={book.volumeInfo.title}/>
            </div>
            <div id="book-title">
                {book.volumeInfo.title}
            </div>
            <div>
                {Object.keys(book.volumeInfo).includes(`averageRating`) ? `Average Rating: ${book.volumeInfo.averageRating}/5` : ''}
            </div>
            <div>
                <button className="logButton" onClick={onClick}>I've read this book</button>
            </div>
        </div>
    );
   
};

export default SearchResults;