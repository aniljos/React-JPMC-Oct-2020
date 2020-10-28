import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withBorder from './withBorder';
import {connect} from 'react-redux';

function ViewProducts({history, addToCart}){

    const [products, setProducts] = useState([]);

    useEffect(async () => {

            const url = "http://localhost:9000/products";
            const resp = await axios.get(url);
            console.log(resp.data);
            setProducts(resp.data);

    }, [])

    function updateCart(product){

        addToCart({product: product, quantity: 1});
    }

    return (
        <div>
            <h4>View Products</h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button 
                                        className="btn btn-primary"
                                        onClick={() => updateCart(item)}>Add to Cart</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div>
                <button onClick={history.goBack}>Back</button>
                &nbsp;
                <button onClick={() => history.push("/shopping/cart")}>View Cart</button>
            </div>
            
            
        </div>
    )
}

const mapDispatchToProp = (dispatch) => {

    return {
        addToCart: (cartItem) => {dispatch({type:"ADD_TO_CART", payload: cartItem})}
    }

}

export default connect(null, mapDispatchToProp)(withBorder(ViewProducts));

//const hoc = connect();
//export default hoc(ViewProducts);