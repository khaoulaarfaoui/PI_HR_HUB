import {
    ADD_EV_SUCCESS,
    ADD_EV_LOADING,
    ADD_EV_ERR,
    FETCH_EV_SUCCESS,
    FETCH_EV_LOADING,
    FETCH_EV_ERR,
    EDIT_EV_SUCCESS,
    EDIT_EV_LOADING,
    EDIT_EV_ERR,
    DELETE_EV_SUCCESS,
    DELETE_EV_LOADING,
    DELETE_EV_ERR,
} from "../../actions/event/types"

const defaultState = {
    events: [],
    error: null,
}


const eventReducer = (state = defaultState, action) =>{
    switch(action.type) {
        case FETCH_EV_SUCCESS:
            return {...state, events: action.payload};
        case ADD_EV_SUCCESS:
            return {...state, events:[...state.events, action.payload ]};
        default:
            return state;
    }
}

export default eventReducer;

