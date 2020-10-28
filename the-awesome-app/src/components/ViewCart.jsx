import React from 'react';
import withBorder from './withBorder';
import {connect} from 'react-redux';

function ViewCart(props){
    return (
        <div>
            <h4>View Cart</h4>
            <p>User Logged In : {props.isAuth ? "Yes" : "No"}</p>

            <div>
                {props.cartItems.length === 0 ? <p>No Items in cart</p>: null}
            </div>
            <div>
                {props.cartItems.map((item, index) => {
                    return (
                        <div>
                            <p>Name: {item.product.name}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// map the redux state to the component props(subscribes internally)
const mapStateToProps = (reduxState) => {
    return{
        cartItems: reduxState.cart.cart,
        isAuth : reduxState.auth.isAuthenticated
    }
}
//connect(mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps)(withBorder(ViewCart));