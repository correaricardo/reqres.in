// General imports
import React from 'react'
// Styles
import './styles/Errors.css'
// Images
import NotFoundImg from '../images/404.png'

const NotFound = () => (
    <div className="text-center">
        <h1 className="error-txt">Error: 404 Page Not Found</h1>    
        <img src={NotFoundImg} alt="404 NotFound" className="error-img" />
    </div>
)

export default NotFound