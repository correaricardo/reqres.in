// General imports
import React from 'react'
// Components
import Card from './Card'

const UserList = ({users}) => (
    <React.Fragment>
	{
		users.map((user) => {
			return (
				<Card 
					key={user.id}
					{...user}
				/>
			)
		})
	}
	</React.Fragment>

)

export default UserList