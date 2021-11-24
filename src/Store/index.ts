import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction } from 'redux-thunk'
import { ActionType } from './actions/todos'
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store
export type StoreType = ReturnType<typeof store.getState>
export type ThunkType = ThunkAction<void, StoreType, any, ActionType>
