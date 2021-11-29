import React, { useState } from 'react';
import MusingsComments from './MusingsComments';

function Musings() {
    const initialState = [{
        input: '',
    }
    ];

    const [musings, setMusings] = useState(initialState)

    function handleChange(event) {
        // ...musings and not push check homework
        setMusings({...musings, input: event.target.value})
        // setMusings(event.target.value)
        // document.querySelector("#musingsId").innerText = musings
        // console.log(musings)
    }

    function handleSubmit(event) {
        event.preventDefault();
        // setMusings({...musings, [event.input]: event.target.value})
        // setMusings({value: event.target.value})
        
        console.log(musings)
    }


    return (
        <div>
            Welcome to the Musings section! Have something you liked about an author or a book? Jot it down! Something you dislike? Let the world know your thoughts!
            <form id="musings-form" onSubmit={handleSubmit}>
                {/* <label>Musings... */}
                    <input id="musings-input" type="text" onChange={handleChange} />
                {/* </label>  */}
                <button>Submit</button>    
            </form>
            {/* {musings.map((muse) => {
               return (
                   <p>{musings[0].input}</p>
               )
            })} */}
                
                <p id="musingsId">{musings.input}</p>
                
        </div>
    );
}

export default Musings;