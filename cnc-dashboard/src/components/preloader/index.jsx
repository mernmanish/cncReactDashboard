// import React from 'react'
import './style.css';
function Preloader() {
  return (
    <div>
        <div className="preloader">
            <div className="loader ease-linear border-4 border-t-4 border-gray-200 rounded-full h-12 w-12" />
        </div>
        {/* Your website content */}
        <div className="hidden" id="main-content">
            {/* Your main content goes here */}
        </div>
    </div>
  )
}

export default Preloader