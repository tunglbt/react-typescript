import {actionTypes} from 'src/core/reduxs/User/userActions';

const initialState = {
    users: [],
    isFetching: false,
    error: null
}

const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.FETCH_USER_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case actionTypes.FETCH_USER_SUCCESS:
            return {
                users: payload,
                isFetching: false,
                error: null,
            }
        case actionTypes.FETCH_USER_FAILURE:
            return {
                users: [],
                isFetching: false,
                error: payload,
            }
        default:
            return state;
    }
}

export default userReducer;