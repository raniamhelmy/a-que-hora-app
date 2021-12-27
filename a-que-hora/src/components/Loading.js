import React from 'react'
import './Loading.css' 
function Loading() {
    return (
        <div className='loading-container'>
          <div className='loading-container-wrap'>
             <svg viewBox="0 0 300 300" width="100" height="100">
                <circle cx='150' cy='150' r='150' fill='#9E9E9E' />
                <circle cx='150' cy='150' r='140' fill='#E3F2FD' />
                <line className="c1" x1="150" y1="150" x2="150" y2="20" style={{stroke:"#9E9E9E"}}/>
                <line className="c2" x1="150" y1="150" x2="150" y2="50" style={{stroke:"#9E9E9E"}}/>
              </svg> 
            <h3 className='loading-title'>Detecting Your Location</h3>
            <p className='loading-desc'>Your current location will be displayed on the App &#38; used for calculating real time Clock</p>
          </div>
        </div>
    )
}

export default Loading
