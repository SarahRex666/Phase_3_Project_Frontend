import React from 'react';
import NavBar from './NavBar'

function Home(){

    return(
        <div id='Home' style={{
            backgroundImage: `url('https://i.imgur.com/eq21CQR.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
          }}>

            <div className='page-title'>
              <div class='typetext'>
              SOJOURN
              </div>
              </div>
          </div>

    )
}

export default Home;