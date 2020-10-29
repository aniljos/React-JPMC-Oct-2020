import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {AuthReducer} from './authReducer';
import {CartReducer} from './cartReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(
//                     combineReducers({auth: AuthReducer, cart: CartReducer}),
//                     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
        combineReducers({auth: AuthReducer, cart: CartReducer}),
        composeEnhancers(
        applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);