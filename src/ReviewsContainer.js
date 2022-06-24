import React from 'react';
import ReviewCard from './ReviewCard'

function ReviewsContainer( {reviews }){
    return (
        <div className="reviews-container">
            {reviews.map((writereview) => (
                <div key={writereview.id}>
                    <ReviewCard writereview={writereview} />
                </div>
            ))}
        </div>
    )

}

export default ReviewsContainer;