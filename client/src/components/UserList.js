// General imports
import React from 'react'
// Assets
import emptyAvatar from '../images/emptyAvatar.png'
// Containers
import ModalContainer from '../containers/ModalContainer'
// Styles
import './styles/UserList.css'

const UserList = ({users, onClick}) => {

	const items = [];

	users.forEach((user) => {
		items.push(
		<tr key={user.id}>
			<td className="text-center align-middle"><img src={user.avatar || emptyAvatar} className="userlist-avatar" alt="avatar"/></td>
			<td className="text-center align-middle"><a onClick={(e) => onClick(e, {...user})} href="#">{`${user.first_name} ${user.last_name}`}</a></td>
		</tr>);
	});

	return (
		<React.Fragment>	
			<ModalContainer/>
			<div className="users-table">
				<table className="table table-striped">
  					<thead>
  					  	<tr>
  					    	<th scope="col" className="text-center">Avatar</th>
  					    	<th scope="col" className="text-center">Name</th>
  					  	</tr>
  					</thead>
 	 				<tbody>
						{items}
  					</tbody>
				</table>
			</div>
		</React.Fragment>
	)

}

export default UserList
