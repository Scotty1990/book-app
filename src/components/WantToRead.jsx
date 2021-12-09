import React from 'react';
import SpeaksTheNightbird from './pics/SpeaksTheNightbird.jpeg'
import Skyward from './pics/Skyward.jpeg'
import ChildrenOfTime from './pics/ChildrenOfTime.jpeg'
import Likes from './Likes'

function WantToRead() {
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
        <div id="wantToRead">
            <h3>Want to Read</h3>
            {wantToReadObj.map(book => {
                return (
                    <div>
                        <div className="wTRTitle">
                            {book.title}
                        </div>
                        <div className="wTRAuthor">
                            {book.author}
                        </div>
                        <div>
                            <img src={book.imageSrc} alt={book.title} />
                        </div>
                        <p>Rate this Book:</p>
                        <Likes />
                    </div>
                )
            })}
        </div>
    );
}

export default WantToRead;