import React from 'react';
import GuideCard from './GuideCard'

function GuidesContainer({ guides }) {
    return (
        <div className="guides-container">
            {guides.map((guide) => (
                <div key={guide.id}>
                    <GuidesContainer guide={guide} />
                </div>
            ))}
        </div>
    )
}

export default GuidesContainer;