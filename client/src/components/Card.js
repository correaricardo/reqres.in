// General imports
import React from 'react'
// Assets
import emptyAvatar from '../images/emptyAvatar.png'
// Styles
import './styles/Card.css'

const Card = ({ email, first_name, last_name, avatar, id, onClick }) => {

    return (
		<div className="card mx-auto user-card">
    	    <div className="card-body">
    	        <div className="row center">
    	            <div className="col-6">
    	                <img src={avatar || emptyAvatar} className="float-right avatar" alt="avatar"/>
    	            </div> 
    	            <div className="col-6 user-card-data" onClick={(e) => onClick(e, {email, first_name, last_name, avatar, id})}>
    	                <h1>{`${first_name} ${last_name}`}</h1>
    	            </div>
    	        </div>
    	    </div>
    	</div>
	)

}

export default Card
