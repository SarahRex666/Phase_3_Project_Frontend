import React from 'react';

function GuideCard({ guide }) {

    const { name, photo_url, bio } = guide;

    return (
        <div className='guide'>
            <h4> {name}</h4>
            <img className="gimg"src={photo_url}></img>
            <h5>{bio}</h5>
        </div>
    )
}

export default GuideCard;