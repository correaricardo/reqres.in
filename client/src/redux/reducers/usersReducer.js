import {FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR} from '../actions/index';

const initialState = {
    pending: false,
    users: [],
    total_pages: null,
    current_page: null,
    error: null
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_USERS_PENDING: 
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                users: action.users,
                total_pages: action.total_pages,
                current_page: action.current_page
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        default: 
            return state;
    }
    
}

export default usersReducer