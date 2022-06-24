import React from 'react';
import ReviewCard from './ReviewCard'

function ReviewsContainer( {reviews, onRemoveReview }){
    return (
        <div className="reviews-container">
            {reviews.map((writereview) => (
                <div key={writereview.id}>
                    <ReviewCard 
                    writereview={writereview}
                    onRemoveReview={onRemoveReview} 
                    />
                </div>
            ))}
        </div>
    )

}

export default ReviewsContainer;