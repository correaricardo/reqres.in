// General imports
import React from 'react'
// Components
import Welcome from './Welcome'
import UserListContainer from '../containers/UserListContainer'

const Exercises = ({data}) => (

	<React.Fragment>
		<Welcome/>
		<UserListContainer/>
	</React.Fragment>

)

export default Exercises