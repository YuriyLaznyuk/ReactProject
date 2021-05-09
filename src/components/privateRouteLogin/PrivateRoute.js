import React from 'react';
import {Redirect, Route, useLocation} from 'react-router-dom';
import {fakeAuthentication} from "./Login";

function PrivateRoute({component: Component, ...rest}) {
    const location = useLocation();

    return (
        <Route {...rest}>
            {
                fakeAuthentication.isAuthentication === true ?

                    <Component/> :
                    <Redirect
                        to={{pathname: "/login", state: {from: location}}}/>
            }
        </Route>
    );
}

export default PrivateRoute;