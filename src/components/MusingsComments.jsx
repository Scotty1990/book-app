import React, { useState } from 'react';
import Musings from './Musings';

function MusingsComments(props) {
//     const initialState = [{
//         input: 'ssss',
//     },
//     {
//         input: 'aaaa'
//     }
//    ];

//     const [musings, setMusings] = useState(initialState)

    
        // musings.map(muse => {

        
        return ( 
            <p>
                {props.muse}
                 
            </p> 
        );
    // })   
}

export default MusingsComments;