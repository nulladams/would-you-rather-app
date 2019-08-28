import { SET_LOGGED } from '../actions/logged'

/**
* @description Reducer for actions related to the user log state
*/
export default function logged (state = null, action) {
	switch(action.type) {
      case SET_LOGGED :
        return action.logged
      default :
        return state
    }
}