import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from '../actions/index';

function fetchUsers(url) {            
    
    let config = {
    method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    
    return function(dispatch) {
        dispatch(fetchUsersPending());
        fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchUsersSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchUsersError(error));
        })
    }

}

export default fetchUsers;
