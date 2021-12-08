import React from 'react';
import SpeaksTheNightbird from './pics/SpeaksTheNightbird.jpeg'
import Skyward from './pics/Skyward.jpeg'
import ChildrenOfTime from './pics/ChildrenOfTime.jpeg'


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
            {wantToReadObj.map(book => {
                return (
                    <div>
                        <div>
                            {book.title}
                        </div>
                        <div>
                            {book.author}
                        </div>
                        <div>
                            <img src={book.imageSrc} alt={book.title} />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default WantToRead;