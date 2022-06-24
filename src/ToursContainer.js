import React from 'react';
import TourCard from './TourCard'

function ToursContainer({ tours }) {
    return (
        <div className="tours-container">
            {tours.map((tour) => (
                <div key={tour.id}>
                    <TourCard tour={tour} />
                </div>
            ))}
        </div>
    )
}

export default ToursContainer;