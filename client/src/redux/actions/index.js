// MODAL
export const HIDE_MODAL = 'HIDE_MODAL'
export const SHOW_MODAL = 'SHOW_MODAL'
// USERS
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

// MODAL

export const showModal = modalProps => dispatch => {
    dispatch({
        type: SHOW_MODAL,
        modalProps
    });
}
  
export const hideModal = () => dispatch => {
    dispatch({
        type: HIDE_MODAL
    });
}

// USERS

export const fetchUsersPending = () => {
    return {
        type: FETCH_USERS_PENDING
    }
}

export const fetchUsersSuccess = data => {
    return {
        type: FETCH_USERS_SUCCESS,
        total_pages: data.total_pages,
        current_page: data.page,
        users: data.data
    }
}

export const fetchUsersError = error => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}


