

const initState = {
    
    isAuthenticated: false,
    token : null
}
export const AuthReducer = (currentState=initState, action) => {

    if(action.type === "SET_AUTH"){

        return {
            ...currentState,
            isAuthenticated: true
        }
    }
    if(action.type === "LOGOUT"){

        return {
            ...currentState,
            isAuthenticated: false
        }
    }
    return currentState;
}