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
import Welcome from '../components/Welcome';
import UserList from '../components/UserList';
import Pagination from '../components/Pagination'

class UserListContainer extends React.Component {

    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.changePage = this.changePage.bind(this);
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

    changePage(event, pageNumber) {
        const {fetchUsers} = this.props;
        fetchUsers(url, pageNumber);
    }

    componentDidMount() {
        const {fetchUsers} = this.props;
        fetchUsers(url, 1);
    }

    render() {

        const {users, total_pages, current_page, error, pending} = this.props; 
        console.log(this.props)

        if(pending)
            return <Loading />

        if(error)
			return <FatalError />
        
        return (
            <React.Fragment>
		        <Welcome/>
                <Pagination
                    total_pages={total_pages}
                    current_page={current_page}
                    changePage={this.changePage}
                />
                <UserList
                    users={users}     
                    onClick={this.openModal}
                />
            </React.Fragment>
        )

    }

}

const mapStateToProps = state => ({
    error: state.users.error,
    users: state.users.users,
    pending: state.users.pending,
    total_pages: state.users.total_pages,
    current_page: state.users.current_page    
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