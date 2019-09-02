import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

/**
* @description Component that makes a route private for only logged users
*/
const PrivateRoute = ({ logged, component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        return logged === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
    }}/>
)

function mapStateToProps({ logged }, { component, ...rest }) {
    return {
        logged, 
        component, 
        ...rest
    }
}

export default connect(mapStateToProps)(PrivateRoute)