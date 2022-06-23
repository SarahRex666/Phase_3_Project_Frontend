import React, { useState } from 'react';

function Tours() {

    const [isForm, setIsForm] = useState(false)

    return <div>
        <div>
            Tours
        </div>
      <div className="cartdiv">
        <form className="checkoutcart">
            <label>Book Tour</label>
        </form>
      </div>
    </div>
}

export default Tours;