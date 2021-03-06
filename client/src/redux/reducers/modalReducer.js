import {HIDE_MODAL, SHOW_MODAL} from '../actions/index';

const initialState = {
    modalProps: {}
}
  
const modalReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                type: action.type
            }
        case HIDE_MODAL:
            return initialState
        default:
            return state
    }

}

export default modalReducer
