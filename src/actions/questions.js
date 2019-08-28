export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

/**
* @description Actions to manage questions data stored in the redux store
*/
export function receiveQuestions (questions) {
	return {
    	type: RECEIVE_QUESTIONS,
      	questions
    }
}