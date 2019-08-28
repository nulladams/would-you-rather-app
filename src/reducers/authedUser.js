import { SET_AUTHED_USER } from '../actions/authedUser'

/**
* @description Reducer for actions related to the authenticated user state
*/
export default function authedUser (state = null, action) {
	switch(action.type) {
      case SET_AUTHED_USER: 
        return action.id
      default :
        return state
    }
}