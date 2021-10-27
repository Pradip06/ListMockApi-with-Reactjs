import React from 'react';
import {Redirect , Route} from 'react-router-dom'
// protected Route 

const Protected =({ component: Cmp, ...rest }) =>(
    <Route
        {...rest}
    render={(props) =>
        localStorage.getItem('login') ? (
            <Cmp {...props} />
        ) :
            <Redirect
                // to={{ pathname: "/login", state: { from: props.location } }}
                to="/login_list"
            />
        }
    />
    
)

export default Protected;