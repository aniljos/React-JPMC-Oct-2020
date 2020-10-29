import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


function ProtectedRoute(props) {

    const { isAuth, component, path } = props;

    if (isAuth) {
        return <Route path={path} component={component} />
    }
    else {
        return (
            <Route path={path}>
                <Redirect to="/login" />
            </Route>
        )
    }
}


const mapStatetoProps = (state) => {

    return {
        isAuth: state.auth.isAuthenticated
    }
}

export default connect(mapStatetoProps)(ProtectedRoute);