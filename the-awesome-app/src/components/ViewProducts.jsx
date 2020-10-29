import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withBorder from './withBorder';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';

function ViewProducts({ history, addToCart, accessToken, refreshToken, setAuthenticated }) {

    const [products, setProducts] = useState([]);
    const [decoded, setDecoded] = useState(null);

    useEffect(async () => {

        setDecoded(jwt_decode(accessToken));

        const url = "http://localhost:9000/products";
        try {

            const headers = { "AUTHORIZATION": `Bearer ${accessToken}` }
            const resp = await axios.get(url, { headers });
            setProducts(resp.data);

        } catch (error) {

            alert("Refreshing");
            const refreshUrl = "http://localhost:9000/refreshToken";
            const resp = await axios.post(refreshUrl, {token: refreshToken});
            const renewedAccessToken = resp.data.accessToken;
            setAuthenticated({accessToken: renewedAccessToken, refreshToken: refreshToken});


            const headers = { "AUTHORIZATION": `Bearer ${renewedAccessToken}` }
            const resp1 = await axios.get(url, { headers });
            setProducts(resp1.data);
        }


    }, [])

    function updateCart(product) {

        addToCart({ product: product, quantity: 1 });
    }

    return (
        <div>
            <h4>View Products</h4>
            {decoded !== null ? <h5>Welcome: {decoded.name}</h5> : null}

            {/* {products} */}
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

const mapStateToProps = (state) => {
    return {
        accessToken: state.auth.accessToken,
        refreshToken: state.auth.refreshToken
    }
}

const mapDispatchToProp = (dispatch) => {

    return {
        addToCart: (cartItem) => { dispatch({ type: "ADD_TO_CART", payload: cartItem }) },
        setAuthenticated: (obj)=> {dispatch({type:"SET_AUTH", data: obj})}
    }

}

export default connect(mapStateToProps, mapDispatchToProp)(withBorder(ViewProducts));

//const hoc = connect();
//export default hoc(ViewProducts);