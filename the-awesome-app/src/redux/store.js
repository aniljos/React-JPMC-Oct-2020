import {createStore, combineReducers} from 'redux';
import {AuthReducer} from './authReducer';
import {CartReducer} from './cartReducer';


export const store = createStore(
                    combineReducers({auth: AuthReducer, cart: CartReducer}),
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());