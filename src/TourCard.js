import React from 'react';

function TourCard({ tour }) {

    const { name, description, days, price, photo_url, tags } = tour;

    return (
        <div className='tour'>
            <h3> {name}</h3>
            <img className="timg" src={photo_url}></img>
            <h4>{description}</h4>
            <h5>{tags[0]}, {tags[1]}, {tags[2]}</h5>
            <h5>Days: {days}</h5>
            <h5>Price: ${price}/pp</h5>
        </div>
    )
}

export default TourCard;