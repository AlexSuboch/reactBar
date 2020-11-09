import { createStore } from 'redux'
import { dataReducer } from './reducer'
import { devTools } from './rootMiddleware'

export const store = createStore(dataReducer, devTools);