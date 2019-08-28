export const SET_LOGGED = 'SET_LOGGED'

/**
* @description Actions to manage users access to the app
*/
export function setLogged(logged) {
	return {
      type: SET_LOGGED,
      logged
    }
}