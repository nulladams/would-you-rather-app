import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import LogBar from './LogBar'


class App extends Component {
  componentDidMount() {
  	this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <LoadingBar />
          <div className='navbar'>
            <Nav />
            {this.props.logged === true && (
              <LogBar />
            )}
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({ authedUser, logged }) {
	return {
    	loading: authedUser === null,
      logged
    }
}

export default connect(mapStateToProps)(App)
