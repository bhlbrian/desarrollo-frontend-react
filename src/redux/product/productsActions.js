import { SET_NAME_PRODUCT } from "./productsTypes";

export const seProduct = (product) => {
    return {
        type: SET_NAME_PRODUCT,
        payload: product
    }
}