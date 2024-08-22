import { SET_NAME_PRODUCT } from './productsTypes'

const initialState = {
    product: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}

export default productReducer