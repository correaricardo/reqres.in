// General imports
import React from 'react'
// Components
import Card from './Card'
import ModalContainer from '../containers/ModalContainer'

const UserList = ({users, onClick}) => (

    <React.Fragment>
		{
			users.map((user) => {
				return (
					<Card
						key={user.id}
						{...user}
						onClick={onClick}
					/>
				)
			})
		}
		<ModalContainer/>
	</React.Fragment>

)

export default UserList
