import React from 'react';
import { useEffect, useState } from 'react';
import NoImg from './pics/NoImg.jpeg'
import DropdownSubjects from './DropdownSubjects';

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
            setBookName(data.items[0].volumeInfo.title)
            console.log(data.items[0].volumeInfo.description)
            console.log(data.items[0].volumeInfo.imageLinks.thumbnail)
            console.log(data.items[0].volumeInfo.authors)
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
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }

    const fetchBookScienceFiction = () => {
        setTotItems(String(Math.floor(Math.random() * 200)))
        fetch(`${searchOptions.api}genre:science+fiction&startIndex=${totItems}&key=`)
        .then(res => res.json())
        .then(data => {
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
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
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
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
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }


    const fetchBookPoetry = () => {
        setTotItems(String(Math.floor(Math.random() * 200)))
        fetch(`${searchOptions.api}subject:poetry&startIndex=${totItems}&key=`)
        .then(res => res.json())
        .then(data => {
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }


    const fetchBookMath = () => {
        setTotItems(String(Math.floor(Math.random() * 18)))
        fetch(`${searchOptions.api}subject:math&startIndex=${totItems}&key=`)
        .then(res => res.json())
        .then(data => {
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }


    const fetchBookHumor = () => {
        setTotItems(String(Math.floor(Math.random() * 200)))
        fetch(`${searchOptions.api}subject:humor&startIndex=${totItems}&key=`)
        .then(res => res.json())
        .then(data => {
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }


    const fetchBookHorror = () => {
        setTotItems(String(Math.floor(Math.random() * 200)))
        fetch(`${searchOptions.api}subject:horror&startIndex=${totItems}&key=`)
        .then(res => res.json())
        .then(data => {
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }

    const fetchBookMystery = () => {
        setTotItems(String(Math.floor(Math.random() * 200)))
        fetch(`${searchOptions.api}subject:mystery&startIndex=${totItems}&key=`)
        .then(res => res.json())
        .then(data => {
            setBookName(data.items[0].volumeInfo.title)
            setBookDescription(data.items[0].volumeInfo.description)
            try{setBookImage(data.items[0].volumeInfo.imageLinks.thumbnail)}
            catch{setBookImage(NoImg)}
        })
        .catch(err => {
            console.log("something went wrong...", err)
        })
    }
    
    return (
        <div id="dropdownMenuContainer">
            <div id="dropdownMenu">
                <DropdownSubjects 
                    fetchBookFiction={fetchBookFiction}
                    fetchBookFantasy={fetchBookFantasy}
                    fetchBookScienceFiction={fetchBookScienceFiction}
                    fetchBookHistoricalFiction={fetchBookHistoricalFiction}
                    fetchBookMilitaryFiction={fetchBookMilitaryFiction}
                    fetchBookScience={fetchBookScience}
                    fetchBookPoetry={fetchBookPoetry}
                    fetchBookMath={fetchBookMath}
                    fetchBookHumor={fetchBookHumor}
                    fetchBookHorror={fetchBookHorror}
                    fetchBookMystery={fetchBookMystery}
                />
            </div>
            <div id="img-space">
                {/* Object.keys().includes didn't work here */}
                <img id="randBookResults" src={bookImage} alt={bookName} />
                <div id="bookName"><h1>{bookName}</h1></div>
            </div>  
            <p className="bookDescription">{bookDescription}</p>
        </div>  
            
        
    );
}

export default RandBookSearch;