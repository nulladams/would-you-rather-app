import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION_ANSWER, REMOVE_QUESTION_ANSWER, ADD_QUESTION } from '../actions/shared'

/**
* @description Reducer for actions related to users state
*/
export default function users ( state = {}, action ) {
	switch(action.type) {
    	case RECEIVE_USERS : 
        	return {
            	...state,
              	...action.users
            }
        case ADD_QUESTION :
        	return {
            	...state,
              	[action.question.author]: {
                	...state[action.question.author],
                  	questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
      	case ADD_QUESTION_ANSWER :
        	const { qid, authedUser, answer} = action
        
        	return {
              ...state,
              [authedUser]: {
                  ...state[authedUser],
                  answers: {
                      ...state[authedUser].answers,
                      [qid]: answer
                  }
              }
            }
      	case REMOVE_QUESTION_ANSWER :
        	return {
              ...state,
              [authedUser]: {
                  ...state[authedUser],
                  answers: {
                      ...Object.entries[state[authedUser].answers].filter(vote => vote[0] !== qid).map(vote => ({[vote[0]]: vote[1]}))
                  }
             }
    	  }
        
        default :
        	return state
    }
}