import { combineReducers } from 'redux'
import defaultReducer from './default/defaultRedux'

const rootReducer = combineReducers({
    default: defaultReducer
})

export default rootReducer