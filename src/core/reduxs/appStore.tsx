import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import appReducer from 'src/core/reduxs/appReducer';

const appStore = createStore(
    appReducer,
    applyMiddleware(thunk)
)

export default appStore;