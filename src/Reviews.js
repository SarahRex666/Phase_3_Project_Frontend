import React, { useEffect, useState } from 'react';
import NewReviewForm from "./NewReviewForm";
import ReviewsContainer from "./ReviewsContainer"

function Reviews() {
    const [reviews, setReviews] = useState([])
    const [isForm, setIsForm] = useState(false)

  useEffect(() => {
    fetch('http://localhost:9292/reviews', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => setReviews(data))
  }, [])
  console.log(reviews)

  function handleNewReview(newReview) {
    setReviews([...reviews, newReview]);
  }
    

return <div>
    <h3>Reviews</h3>
    
        <div className="sidebar">
      <ReviewsContainer reviews={reviews} />
      <button onClick={() => setIsForm(!isForm)}>Show/Hide Review Form</button>
        {isForm ? <NewReviewForm handleNewReview={handleNewReview} reviews={reviews} /> : null}
      </div>
</div>
}

export default Reviews;