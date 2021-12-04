import React from 'react';
import { useEffect, useState } from 'react';
import NoImg from './pics/NoImg.jpeg'
import DropdownSubjects from './DropdownSubjects';
// import { Route } from 'react-router-dom';
// import './App.css'

function RandBookSearch() {
    const searchOptions = {
        key: process.env.REACT_APP_BOOK_KEY,
        api: `https://www.googleapis.com/books/v1/volumes?q=`,
      };
    
    const [totItems, setTotItems]               = useState(String(Math.floor(Math.random() * 200)))
    const [bookName, setBookName]               = useState()
    const [bookImage, setBookImage]             = useState()
    const [bookDescription, setBookDescription] = useState()
    
    const fetchBookFiction = () => {
        setTotItems(String(Math.floor(Math.random() * 200)))
        fetch(`${searchOptions.api}subject:fiction&startIndex=${totItems}&key=`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }
    
    useEffect(() => {
      fetchBookFiction();
    }, []);

    const fetchBookScience = () => {
        setTotItems(String(Math.floor(Math.random() * 200)))
        fetch(`${searchOptions.api}subject:science&startIndex=${totItems}&key=`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }

    const fetchBookFantasy = () => {
        setTotItems(String(Math.floor(Math.random() * 200)))
        fetch(`${searchOptions.api}subject:fantasy&startIndex=${totItems}&key=`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
            setTotItems(String((Math.floor(Math.random() * parseInt(data.totalItems)))))
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }

    const fetchBookHistoricalFiction = () => {
        setTotItems(String(Math.floor(Math.random() * 43)))
        fetch(`${searchOptions.api}subject:historical+fiction&startIndex=${totItems}&key=`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
            setTotItems(String((Math.floor(Math.random() * parseInt(data.totalItems)))))
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }

    const fetchBookMilitaryFiction = () => {
        setTotItems(String(Math.floor(Math.random() * 50)))
        fetch(`${searchOptions.api}subject:military+fiction&startIndex=${totItems}&key=`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
            setTotItems(String((Math.floor(Math.random() * parseInt(data.totalItems)))))
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }
    
    return (
        <div id="container">
            <DropdownSubjects 
                fetchBookScience={fetchBookScience}
                fetchBookFantasy={fetchBookFantasy}
                fetchBookHistoricalFiction={fetchBookHistoricalFiction}
                fetchBookMilitaryFiction={fetchBookMilitaryFiction}
                fetchBookFiction={fetchBookFiction}
            />
            <div id="img-space">
                {/* Use Object.keys().includes here too */}
                <img id="randBookResults" src={bookImage} alt={bookName} />
                <div id="bookName"><h1>{bookName}</h1></div>
            </div>  
            
            <p id="title">{bookDescription}</p>
            {/* <SearchForm /> */}
        </div>  
            
        
    );
}

export default RandBookSearch;