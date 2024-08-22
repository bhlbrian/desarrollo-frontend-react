import { combineReducers } from 'redux'
import defaultReducer from './default/defaultRedux'
import productReducer from './product/productsRedux'
import formReducer from './form/formRedux'

const rootReducer = combineReducers({
    default: defaultReducer,
    product: productReducer,
    form: formReducer
})

export default rootReducer