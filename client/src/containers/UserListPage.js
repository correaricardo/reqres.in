// General imports
import React from 'react'
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import url from '../config.js'
// My redux
import fetchUsersAction from '../redux/fetch/index';
import {getUsersError, getUsers, getUsersPending} from '../redux/reducers/index';
// Components
import Loading from '../components/Loading';
import FatalError from '../components/500';
import UserList from '../components/UserList';

class UserListPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {fetchUsers} = this.props;
        fetchUsers(url);
    }

    render() {

        const {users, error, pending} = this.props; 

        if(pending) 
            return <Loading />

        if(error)
			return <FatalError />

        return <UserList
            users={users}
        />

    }

}

const mapStateToProps = state => ({
    error: getUsersError(state),
    users: getUsers(state),
    pending: getUsersPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers: fetchUsersAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListPage);