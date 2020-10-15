import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const PrivateRoute = ({children ,...rest}) => {
        const [loggedInUser , setLoggedInUser] = useContext(UserContext);
        const [admin, setAdmin] = useState([]);

    useEffect(() => {
        fetch('https://stormy-river-26718.herokuapp.com/getAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])
    return (
            <Route
            {...rest}
            render={({ location }) =>
            loggedInUser.email || admin.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            />
    );
};

export default PrivateRoute;