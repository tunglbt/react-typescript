import {callApi} from 'src/core/utils/apiCaller';
import {action} from 'src/core/utils/common';

export const actionTypes = {
    FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
}

const userActions = {
    fetchUsers: (payload = {}) => {
        return dispatch => {
            dispatch(action(actionTypes.FETCH_USER_REQUEST, payload));
            return callApi('users', 'GET')
                .then(res => dispatch(action(actionTypes.FETCH_USER_SUCCESS, res.data)))
                .catch(err => dispatch(action(actionTypes.FETCH_USER_FAILURE, err)));
        }
    },
}

export default userActions;