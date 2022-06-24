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

  function handleRemoveReview(id) {
    const newReviews = reviews.filter((review) => review.id !== id);
    setReviews(newReviews);
  }
    

return (
  <div className="reviewpage">
    <div className="header">
    <img className='headerphoto' src="https://i.imgur.com/03Hv3hR.jpg"/>
    <div className="headertext">Reviews</div>
    </div>
        <div className="sidebar">
      <button onClick={() => setIsForm(!isForm)}>Show/Hide Review Form</button>
        {isForm ? <NewReviewForm handleNewReview={handleNewReview} reviews={reviews} /> : null}
      </div>
      <ReviewsContainer 
      reviews={reviews}
      onRemoveReview={handleRemoveReview} 
      />
</div>
)
}

export default Reviews;