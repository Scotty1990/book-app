import React from 'react';
import SpeaksTheNightbird from './pics/SpeaksTheNightbird.jpeg'
import Skyward from './pics/Skyward.jpeg'
import ChildrenOfTime from './pics/ChildrenOfTime.jpeg'
import Likes from './Likes'
import { DataContext } from './DataContext';
import BooksIveRead from './BooksIveRead';

function WantToRead() {
    const wTRid = [0,1,2]
    const wantToReadObj = [{
        title: 'Speaks the Nightbird',
        author: 'Robert McCammon',
        imageSrc: SpeaksTheNightbird,
    },
    {
        title: 'Skyward',
        author: 'Brandon Sanderson',
        imageSrc: Skyward,
    },
    {
        title: 'Children of Time',
        author: 'Adrian Tchaikovsky',
        imageSrc: ChildrenOfTime,
    }]
    return (
        <div>
            <DataContext.Consumer>
                {( {willRead} ) => {
                    return (
                        <div>
                            <h3 id="wTRHeader">Want to Read</h3>
                            <div id="wantToRead">
                                {willRead.map(book => {
                                    return (
                                        <div key={book.id}>
                                            <div className="wTRTitle">
                                                {book.volumeInfo.title}
                                            </div>
                                            <div className="wTRAuthor">
                                                {book.volumeInfo.authors}
                                            </div>
                                            <div className="wTRImg">
                                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                            </div>
                                            <p>Rate this Book:</p>
                                            <Likes />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }}
            </DataContext.Consumer>
        </div>
        //  <div>
        //     <p id="bIRText">Books I've Read:</p>
        //     <div id="bIRDiv">
        //         {wantToReadObj.map((book, i) => {
        //             return (
        //                 <div className="booksIveRead" key={wTRid[i]}>
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

export default WantToRead;