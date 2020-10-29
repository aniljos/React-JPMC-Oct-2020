

const initState = {
    
    isAuthenticated: false,
    accessToken : null,
    refreshToken: null
}
export const AuthReducer = (currentState=initState, action) => {

    if(action.type === "SET_AUTH"){

        return {
            ...currentState,
            isAuthenticated: true,
            accessToken: action.data.accessToken,
            refreshToken: action.data.refreshToken
        }
    }
    if(action.type === "LOGOUT"){

        return {
            ...currentState,
            isAuthenticated: false,
            accessToken: null,
            refreshToken: null
        }
    }
    return currentState;
}