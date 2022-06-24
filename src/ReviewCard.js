import React from 'react'

function Review( { writereview }) {
    const { tours_id, username, review } = writereview;

    return (
         <div className='review'>
            <h3>{username}</h3>
            <p>{review}</p>
            <div>
                <button onClick={handleDeleteClick} className="emoji-button delete">
                🗑
                </button>
                </div>
            </div>
            
        )
}

export default Review;