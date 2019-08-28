import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setLogged } from './logged'

export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'
export const REMOVE_QUESTION_ANSWER = 'REMOVE_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

/**
* @description Actions to manage data related to more then one type of data stored in redux
*/
export function handleInitialData () {
	return (dispatch) => {
      	dispatch(showLoading())
    	return getInitialData()
          .then(({ users, questions }) => {
          	dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
			dispatch(setLogged(false))
          	dispatch(hideLoading())
        }) 
    }
}

function addQuestion (question) {
	return {
    	type: ADD_QUESTION,
      	question
    }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
	return (dispatch, getState) => {
    	const { authedUser } = getState()
        
        dispatch(showLoading())
      	return saveQuestion({
        	author: authedUser,
          	optionOneText,
          	optionTwoText
        })
      	  .then((question) => dispatch(addQuestion(question)))
      	  .then(() => dispatch(hideLoading()))
    }
}

function addQuestionAnswer ({ authedUser, qid, answer }) {
	return ({
    	type: ADD_QUESTION_ANSWER,
      	authedUser,
      	qid,
      	answer
    })
}
/**
function removeQuestionAnswer({ authedUser, qid, answer }) {
	return ({
    	type: REMOVE_QUESTION_ANSWER,
      	authedUser,
      	qid,
      	answer
    })
}
*/

export function handleAddQuestionAnswer ({ qid, answer, authedUser }) {
	return (dispatch) => {
      	dispatch(addQuestionAnswer({ authedUser, qid, answer }))
      	dispatch(showLoading())
        return saveQuestionAnswer({
        	authedUser,
          	qid,
          	answer
        })
      	.then(() => dispatch(hideLoading()))
    }
}

export function handleLogin (user) {
	return (dispatch) => {
    	dispatch(setAuthedUser(user))
      	dispatch(setLogged(true))
    }
}

export function handleLogout () {
	return (dispatch) => {
    	dispatch(setAuthedUser(null))
      	dispatch(setLogged(false))
    }
}