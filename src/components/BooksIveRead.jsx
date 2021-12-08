import React from 'react';
import Foundation from './pics/Foundation.jpeg'
import Hyperion from './pics/Hyperion.jpeg'
import Slaughterhouse5 from './pics/Slaughterhouse5.jpeg'
import LibraryAtMountChar from './pics/LibraryAtMountChar.jpeg'
import Mistborn from './pics/Mistborn.jpeg'
import Likes from './Likes'

function BooksIveRead({ readBooks }) {
    // const booksObj = [{
    //     title: 'Foundation',
    //     author: 'Isaac Asimov',
    //     imageSrc: Foundation,
    // },
    // {
    //     title: 'Hyperion',
    //     author: 'Dan Simmons',
    //     imageSrc: Hyperion,
    // },
    // {
    //     title: 'Slaughterhouse 5',
    //     author: 'Kurt Vonnegut',
    //     imageSrc: Slaughterhouse5,
    // },
    // {
    //     title: 'The Library at Mount Char',
    //     author: 'Scott Hawkins',
    //     imageSrc: LibraryAtMountChar,
    // },
    // {
    //     title: 'Mistborn',
    //     author: 'Brandon Sanderson',
    //     imageSrc: Mistborn,
    // },]
    
    return (
        <div>
            <div id="bIRDiv">
                Books I've Read
                {readBooks.map((book) => {
                    return (
                    <div className="booksIveRead">
                        <div className="bIRTitle">
                            {book.volumeInfo.title}
                            {/* {book.title} */}
                        </div>
                        <div className="bIRAuthor">
                            {book.volumeInfo.authors}
                        </div>
                        {/* <div>
                            <img src={book.imageSrc} alt={book.title}/>
                        </div> */}
                        <p>Rate this Book:</p>
                        <Likes />
                    </div>
                )})}
            </div>
        </div>
        // <div>
        //     <p id="bIRText">Books I've Read:</p>
        //     <div id="bIRDiv">
        //         {booksObj.map(book => {
        //             return (
        //                 <div className="booksIveRead">
        //                 <div className="bIRTitle">
        //                     {book.title}
        //                 </div>
        //                 <div className="bIRAuthor">
        //                     {book.author}
        //                 </div>
        //                 <div>
        //                     <img src={book.imageSrc} alt={book.title}/>
        //                 </div>
        //                 <p>Rate this Book:</p>
        //                 <Likes />
        //             </div>
        //         )})}
        //     </div>
        // </div>
    );
}

export default BooksIveRead;