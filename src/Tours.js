import React, { useState } from 'react';

function Tours() {

    const [isForm, setIsForm] = useState(false)

    return <div>
    <div className="header">
        <img className='headerphoto' src="https://i.imgur.com/hPgsRfY.jpg"/>
        <div className="headertext">Tours</div>
    </div>
        <div className="cartdiv">
        <form className="checkoutcart">
            <label>Book Tour</label>
        </form>
      </div>
    </div>
}

export default Tours;