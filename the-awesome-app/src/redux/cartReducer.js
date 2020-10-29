
const initState = {
    
    cart: [],
    categories: []
}
export const CartReducer = (currentState=initState, action) => {

    if(action.type==="ADD_TO_CART"){

        const cart = [...currentState.cart];
        cart.push(action.payload);
        return {
            ...currentState,
            cart: cart
        };
    }
    if(action.type === "UPDATE_CATS"){
        return {
            ...currentState,
            categories: action.payload
        }
    }
    return currentState;
}