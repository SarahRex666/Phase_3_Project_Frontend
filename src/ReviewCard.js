import React from 'react'

function Review( { writereview }) {
    const { username, review } = writereview;
    return (
         <div className='review'>
                <h3>{username}</h3>
                <p>{review}</p>
            </div>
        )
}

export default Review;