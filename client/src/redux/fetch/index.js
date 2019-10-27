import {fetchUsersPending, fetchUsersSuccess, fetchUsersError} from '../actions/index';

function fetchUsers(url, pageNumber) {
    
    url = url + pageNumber;
    
    let config = {
    method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    
    // Se gestiona la petición hacia la api y se realiza un dispatch hasta la acción
    return function(dispatch) {
        dispatch(fetchUsersPending());
        fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchUsersSuccess(res));
        })
        .catch(error => {
            dispatch(fetchUsersError(error));
        })
    }

}

export default fetchUsers;
