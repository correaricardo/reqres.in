// General imports
import React from 'react'
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import url from '../config.js'
// My redux
import fetchUsersAction from '../redux/fetch/index';
import { showModal, hideModal } from '../redux/actions/index'
// Components
import Loading from '../components/Loading';
import FatalError from '../components/500';
import UserList from '../components/UserList';

class UserListContainer extends React.Component {

    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    closeModal(event) {
        this.props.hideModal();
    }
    
    openModal(event, data) {
        this.props.showModal({
            user: data,
            open: true,
            closeModal: this.closeModal
        })
    }

    componentDidMount() {
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
            users={users.users}                    
            onClick={this.openModal}
        />

    }

}

const mapStateToProps = state => ({
    error: state.error,
    users: state.users,
    pending: state.pending
})

const mapDispatchToProps = dispatch => ({
    fetchUsers: bindActionCreators(fetchUsersAction, dispatch),
    hideModal: () => dispatch(hideModal()),
    showModal: (modalProps) => {
      dispatch(showModal(modalProps))
    }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListContainer);