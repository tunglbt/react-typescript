import { combineReducers } from 'redux';
import userReducer from 'src/core/reduxs/User/userReducer';

const appReducer = combineReducers({
    userReducer
});

export default appReducer;