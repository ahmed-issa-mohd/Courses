import { combineReducers } from 'redux'

import postReducers from './ahmedpostReducer'

export default combineReducers({
    posts: postReducers
})