//import { history } from "helpers/history";
import {
    ADD_TEST_SUCCESS,
    FETCH_TEST_SUCCESS,
    EDIT_TEST_SUCCESS,
    DELETE_TEST_SUCCESS,

} from "../../actions/CandidateTest/types"

const defaultState = {
    list: [],
    error: null,
}


const TestReducer = (state = defaultState, action) =>{
    switch(action.type) {
        case FETCH_TEST_SUCCESS:
            return {
                ...state,
                list: [...action.payload] };
        case ADD_TEST_SUCCESS:
            return {...state, list:[...state.tests, action.payload ]};
        case EDIT_TEST_SUCCESS:
            return {
                ...state,
                list:  state.list.map( tes => tes._id == action.payload._id ? action.payload : tes )
            }
        case DELETE_TEST_SUCCESS:
            return {
                ...state,
                list:  state.list.filter(tes => tes._id != action.payload)
            }
        default:
            return state;
    }
}

export default TestReducer;

