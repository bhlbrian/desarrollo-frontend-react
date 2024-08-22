import { SET_FORM } from "./formTypes";

export const setForm = (formData) => {
    return {
        type: SET_FORM,
        payload: formData
    }
}