import React, { useState, useEffect } from 'react';
import ToursContainer from './ToursContainer';

function Tours() {

    const [tours, setTours] = useState([])
    const [isForm, setIsForm] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/tours', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
          .then(resp => resp.json())
          .then(data => setTours(data))
      }, [])

    return <div>
    <div className="header">
        <img className='headerphoto' src="https://i.imgur.com/hPgsRfY.jpg"/>
        <div className="headertext">Tours</div>
    </div>
    <div className="tour">
        <ToursContainer tours={tours} />
    </div>
        <div className="cartdiv">
        <form className="checkoutcart">
            <label>Book Tour</label>
        </form>
      </div>
    </div>
}

export default Tours;