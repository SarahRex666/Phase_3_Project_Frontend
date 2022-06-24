import React, { useState, useEffect } from 'react';
import ToursContainer from './ToursContainer';
import EmailForm from "./EmailForm.js";

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
    <div className="alltour">
        <ToursContainer tours={tours} />
    </div>
        <div className="cartdiv">
            <label>Book Tour</label>
      </div>
      <EmailForm />
    </div>
}

export default Tours;