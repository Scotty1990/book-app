import React from 'react';
import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import NoImg from './pics/NoImg.jpeg'
import DropdownSubjects from './DropdownSubjects';
// import { Route } from 'react-router-dom';
// import './App.css'

function RandBookSearch() {
    const [totItems, setTotItems] = useState(String(Math.floor(Math.random() * 40)))
    
    const searchOptions = {
        key: process.env.REACT_APP_BOOK_KEY,
        limit: 25,
        rating: 'G',
        api: `https://www.googleapis.com/books/v1/volumes?q=subject:science+fiction&startIndex=${totItems}`,
        endpoint: '/search',
      };
    
    // const [totItems, setTotItems] = useState(0)
    // const [searchString, setSearchString] = useState('')
    const [bookName, setBookName] = useState()
    const [bookImage, setBookImage] = useState()
    const [bookDescription, setBookDescription] = useState()
    const randBookResults = document.querySelector("#randBookResults")
    let maxResults = `1`;
    const url = `${searchOptions.api}&key=`
    // const urlEndpoint = `subject:sci+fi&startIndex=${totItems}&maxResults=${maxResults}&key=  `
    const fetchBook = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{
                console.log("this is working")
                setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)
            }catch{
                console.log("catch is working")
                randBookResults.src = {NoImg}
                // setBookImage({NoImg})
            }
            setTotItems(String((Math.floor(Math.random() * parseInt(data.totalItems)))))
        })
        .catch(err => {
            console.log("something went wrong...", err)
            // window.location.reload()
        })
    }
    
    // window.onload = fetchBook(); {
    //     let reloading = sessionStorage.getItem("reloading")
    //     if (reloading) {
    //         sessionStorage.removeItem("reloading")
    //         fetchBook()
    //     }
    // }

    // function reloadPage() {
    //     sessionStorage.setItem("reloading", "true")
    //     document.location.reload()
    // }
    
    return (
        <div id="container">
            <DropdownSubjects />
            <div>
                <button id="randButton" onClick={fetchBook}>Random Book!</button>
            </div> 
            <div id="img-space">
                <img id="randBookResults" src={bookImage} alt='' />
                <div id="no-image">{bookName}</div>
            </div>  
            
            <p id="title">{bookDescription}</p>
            {/* <SearchForm /> */}
        </div>  
            
        
    );
}

export default RandBookSearch;