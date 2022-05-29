import {
    GET_PRODUCT_LIST_REQUEST,
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_FAIL,

    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL
} from "../actions/productActions"


export const productListReducer = (state = { products: [], loading : false}, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST_REQUEST: {
            return {
                loading : true
            }
        }
        case GET_PRODUCT_LIST_SUCCESS: {
            return {
                products: action.payload.data,
                message : action.payload.message,
                loading : false
            }
        }
        case GET_PRODUCT_LIST_FAIL : {
            return {
                loading: false,
                error: action.payload
            }
        }



        default:
            return state;
    }
}

export const productDetailsReducer = (state = { product: {}, loading: true }, action) => {
    switch (action.type) {
        case GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true, ...state
            }

        case GET_PRODUCT_DETAILS_SUCCESS:
            return {
                product: action.payload,
                loading: false
            }
        case GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }


        default:
            return state;
    }
}