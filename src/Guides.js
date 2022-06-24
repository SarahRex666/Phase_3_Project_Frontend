import React, { useState, useEffect } from 'react';
import GuidesContainer from './GuidesContainer';

function Guides() {

    const [guides, setGuides] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/guides', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
          .then(resp => resp.json())
          .then(data => setGuides(data))
      }, [])

    return (
     <div className="guidespage">
     <div className="header">
     <img className='headerphoto' src="https://i.imgur.com/svOER58.jpg"/>
    <div className="headertext">Guides</div>
    </div>
    <div className='guide'>
        <GuidesContainer guides={guides} />
    </div>
    </div>
    )
}

export default Guides;
