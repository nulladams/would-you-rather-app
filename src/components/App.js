import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import LogBar from './LogBar'
import PrivateRootRoute from './PrivateRootRoute'
import PrivateRoute from './PrivateRoute'
import PollsPage from './PollsPage'
import LoginPage from './LoginPage'
import PollVotePage from './PollVotePage'
import PollResultsPage from './PollResultsPage'
import NewQuestionPage from './NewQuestionPage'
import LeaderBoardPage from './LeaderBoardPage'
import NotFoundPage from './NotFoundPage'


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
          <div>
            <Switch>
              <PrivateRootRoute path='/' exact component={PollsPage} />
              <PrivateRoute path='/polls' component={PollsPage} />
              <PrivateRoute path='/question/:id' exact component={PollVotePage} />
              <PrivateRoute path='/question/:id/results' exact component={PollResultsPage} />
              <Route path='/login' exact component={LoginPage} />
              <PrivateRoute path='/add' exact component={NewQuestionPage} />
              <PrivateRoute path='/leaderboard' exact component={LeaderBoardPage} />
              <Route path='/pagenotfound' exact component={NotFoundPage} />
              <Route component={NotFoundPage} />
            </Switch>
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
