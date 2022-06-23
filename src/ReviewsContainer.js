import React from 'react';
import ReviewCard from './ReviewCard'

function ReviewsContainer( {reviews }){
    return (
        <div className="reviews-container">
            {reviews.map((review) => (
                <div key={review.id}>
                    <ReviewCard review={review} />
                </div>
            ))}
        </div>
    )

}

export default ReviewsContainer;