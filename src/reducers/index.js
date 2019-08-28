import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import authedUser from './authedUser'
import logged from './logged'
import { loadingBarReducer } from 'react-redux-loading'

/**
* @description Combine all reducers to create the store
*/
export default combineReducers({
	questions,
  	users,
  	authedUser,
  	loadingBar: loadingBarReducer,
  	logged
})