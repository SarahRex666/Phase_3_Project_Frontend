import React from 'react'

function Review({ 
    writereview: { tours_id, username, review, id },
    onRemoveReview,
    }) {
    function handleDeleteClick() {
        fetch(`http://localhost:9292/reviews/${id}`, {
          method: "DELETE",
        });
        onRemoveReview(id);
    }
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