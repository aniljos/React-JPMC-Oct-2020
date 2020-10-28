import React from 'react';
import { Link, Route } from 'react-router-dom';
import ViewCart from './ViewCart';
import ViewProducts from './ViewProducts';


function Shopping({history, match, location}) {

    console.log(match);
    const name = "Anil"; const loc = "Mumbai";

    console.log("The name is " + name + " and location is " + loc);
    console.log(`The name is ${name} and the location is ${loc}`);

    return (
        <div>
            <h4>Shopping</h4>

            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active" to={`${match.url}/products`}>Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to={`${match.url}/cart`}>Cart</Link>
                </li>
            </ul>
            <div>
                <Route path={`${match.url}/products`} component={ViewProducts}/>   
                <Route path={`${match.url}/cart`} component={ViewCart}/>
            </div>
        </div>
    )
}

export default Shopping;