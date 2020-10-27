import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';

function AppHeader() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/counter">Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/search">Search</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

}


export default AppHeader;