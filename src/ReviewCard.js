import React from 'react'

function Review( { review }) {
    const { name, entry } = review;
    return (
         <div className='review'>
                <h3>{name}</h3>
                <p>{entry}</p>
            </div>
        )
}

export default Review;