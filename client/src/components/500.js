// General imports
import React from 'react'
// Styles
import '../components/styles/Errors.css'
// Images
import FatalErrorImg from '../images/500.png'

const FatalError = () => (
    <div className="text-center">
        <h1 className="error-txt">Error: 500 Unexpected Error</h1>    
        <img src={FatalErrorImg} alt="500 Unexpected Error" className="error-img" />
    </div>
)

export default FatalError