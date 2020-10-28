//import {createStore} from 'redux';

const redux = require('redux');
const createStore = redux.createStore;

//initState(immutable)
const initData = {
    count: 10,
    msg: "Hello Redux"
}


//reducer
const reducer = (currentState=initData, action) => {
    //return the updated state
    if(action.type === "INC_CTR" ){
        return {
            ...currentState,
            count: currentState.count + 1
        }
    }
    if(action.type === "DECR_CTR" ){
        return {
            ...currentState,
            count: currentState.count - 1
        }
    }

    return currentState;
}

//store
const store = createStore(reducer);
console.log("State: ", store.getState());

//subscribe
store.subscribe(() => {
    console.log("In subecribe: ", store.getState());
})



//dispatch actions

store.dispatch({type: "INC_CTR"});
//console.log("State: ", store.getState());

store.dispatch({type: "DECR_CTR"});

store.dispatch({type: "UP_CTR_BY", value: 2});
//console.log("State: ", store.getState());

