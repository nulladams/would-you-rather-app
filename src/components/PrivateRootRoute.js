import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

/**
* @description Component that makes the root route private for only logged users, setting unaswered polls pages as default.
*/
const PrivateRootRoute = ({ logged, component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        return logged === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: { pathname: '/polls/questions/unanswered' } }
            }} />
    }} />
)

function mapStateToProps({ logged }, { component, ...rest }){
    return {
        logged,
        component,
        ...rest
    }
}

export default connect(mapStateToProps)(PrivateRootRoute)