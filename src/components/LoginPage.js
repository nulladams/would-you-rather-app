import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogin, handleLogout } from '../actions/shared'


/**
* @description View where the users can make the login in the app
* @constructor
*/
class LoginPage extends Component {
    state={
        user: ''
    }
    componentDidMount() {
        this.props.dispatch(handleLogout())
    }
    handleChange = (e) => {
        const user = e.target.value

        this.setState(() => ({
            user
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { history } = this.props
        const { from } = this.props.location.state || { from: { pathname: '/polls/questions/unanswered' } }

        if (from.pathname.includes('/question/')) {
            history.push('/pagenotfound')
        } else {
            const { user } = this.state
            const { dispatch } = this.props

            dispatch(handleLogin(user))

            history.push(from)
        }
    }
    render() {
        const { users } = this.props
        return (
            <div className='card-box'>
                <div className='login-title'>
                    <strong>Welcome to the "Would you Rather" app</strong>
                    <div>Please log in to continue</div>
                </div>
                <div className='login-card'>
                    <form onSubmit={this.handleSubmit} className='login-form'>
                        <select value={this.state.user} onChange={this.handleChange} className='user-selector'>
                            <option></option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>{user.name}</option>    
                            ))}
                        </select>
                        <div>
                            <button className='btn' disabled={this.state.user === ''}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }, { location }) {
    return {
        users: Object.values(users),
        location
    }
}

export default connect(mapStateToProps)(LoginPage)