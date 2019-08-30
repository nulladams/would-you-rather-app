import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogout } from '../actions/shared'

/**
* @description Component that shows the log status and give the user the option to logout the app
* @constructor
*/
class LogBar extends Component {
    handleLogout = () => {
        this.props.dispatch(handleLogout())
    }
    render() {
        const { user } = this.props
        return(
            <div className='logbar'>
                <span>Hello, {user.name}</span>
                <Link to='/login' onClick={this.handleClick}>Logout</Link>
            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }){
    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(LogBar)