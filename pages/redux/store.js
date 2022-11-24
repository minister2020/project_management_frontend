import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer, userRegisterReducer } from './reducers/userReducers';


const reducer = combineReducers({
    userRegister:userRegisterReducer,
    userLogin:loginReducer,
   
});

const userInfoFromStorage = localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')):null;

const middleware = [thunk];

const initialState = {
    userLogin:{ userInfo:userInfoFromStorage },
};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;