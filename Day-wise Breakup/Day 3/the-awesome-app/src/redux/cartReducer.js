

const initState = {
    
    cart: []
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
    return currentState;
}