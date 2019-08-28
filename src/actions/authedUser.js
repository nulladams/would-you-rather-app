export const SET_AUTHED_USER = 'SET_AUTHED_USER'

/**
* @description Actions to manage authentication user information stored in the redux store
*/
export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id
  }	
}