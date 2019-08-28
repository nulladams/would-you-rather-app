import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

/**
* @description Apply middlewares to the redux store
*/
export default applyMiddleware(
	thunk,
  	logger
)