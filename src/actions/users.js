export const RECEIVE_USERS = 'RECEIVE_USERS'

/**
* @description Actions to manage users data stored in the redux store
*/
export function receiveUsers (users) {
	return {
    	type: RECEIVE_USERS,
      	users
    }
}