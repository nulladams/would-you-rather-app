import { RECEIVE_QUESTIONS } from '../actions/questions'
import { ADD_QUESTION_ANSWER, REMOVE_QUESTION_ANSWER, ADD_QUESTION } from '../actions/shared'

/**
* @description Reducer for actions related to the questions state
*/
export default function questions (state = {}, action) {
	switch(action.type) {
      case RECEIVE_QUESTIONS :
        return {
        	...state,
          	...action.questions
        }
      case ADD_QUESTION : 
        const { question } = action
        
        return {
            ...state,
            [question.id]: question
        }
      case ADD_QUESTION_ANSWER :
       	const { qid, authedUser, answer} = action
        
        return {
        	...state,
          	[qid]: {
            	...state[qid], 
          		[answer]: {
          			...state[qid][answer],
                    votes: state[qid][answer].votes.concat([authedUser])  
        		}
            }
        }
      case REMOVE_QUESTION_ANSWER :
        return {
        	...state,
          	[action.qid]: {
            	...state[action.qid], 
          		[action.answer]: {
          			...state[action.qid][action.answer],
                    votes: state[action.qid][action.answer].votes.filter(user => user !== action.authedUser)
        		}
            }
        }
        
      default :
        return state
    }
}