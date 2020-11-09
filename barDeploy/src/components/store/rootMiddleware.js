import { applyMiddleware } from 'redux'
import { usersMiddleware } from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension';


export const devTools = composeWithDevTools(applyMiddleware(usersMiddleware))