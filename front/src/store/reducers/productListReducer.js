import {
    GET_PRODUCT_LIST,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL
} from "../actions/productActions"


export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return { products: action.payload }


        default:
            return state;
    }
}

export const productDetailsReducer = (state = { product: {}, loading : true}, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true, ...state
            }

        case GET_PRODUCT_DETAILS_SUCCESS:
            return {
                product: action.payload,
                loading : false
            }
        case GET_PRODUCT_DETAILS_FAIL : 
            return {
                loading : false,
                error : action.payload
            }


        default:
            return state;
    }
}