import { combineReducers } from 'redux'
import todos from './todos'
import editFormVisible from './editFormVisible'
import isFetching from './isFetching'

export default combineReducers({
    todos,
    editFormVisible,
    isFetching
})

