import React from 'react';

function TourCard({ tour }) {

    const { name, description, days, price, photo_url, tags } = tour;

    return (
        <div className='tour'>
            <h3> {name}</h3>
            <img className="timg" src={photo_url}></img>
            <h4>{description}</h4>
            <h5>{tags}</h5>
            <h5>{days}</h5>
            <h5>{price}</h5>
        </div>
    )
}

export default TourCard;