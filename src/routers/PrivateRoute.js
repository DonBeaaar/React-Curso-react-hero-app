import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (

        localStorage.setItem('lastPath',rest.location.pathname),
        <Route
            {...rest}
            component={(props) => (
                //Verificamos si está autenticado
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}

        />
    )

}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

