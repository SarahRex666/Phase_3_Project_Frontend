import React, { useState } from "react";

function NewReviewForm({ handleNewReview }) {
    const [formState, setFormState] = useState({
        username: '',
        review: '',
    })

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
        })
            .then((r) => r.json())
            .then((newReview) => handleNewReview(newReview));
    }

    return (

        <form className="new-review-form" 
        onSubmit={handleSubmit}>
            <input type="text" id="username" placeholder="Name" value={formState.title} onChange={handleChange} />
            <textarea type="text" id="review" placeholder="Give us your feedback!" rows={10} value={formState.entry} onChange={handleChange} />
            <input type="submit" id="submit" value="Submit" />

        </form>
    )
  
}

export default NewReviewForm;