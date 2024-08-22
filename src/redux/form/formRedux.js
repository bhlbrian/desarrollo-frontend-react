import { SET_FORM } from './formTypes'

const initialState = {
    formData: {
        userName: '',
        password: '',
    }
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload
                }
            }
        default:
            return state
    }
}

export default formReducer