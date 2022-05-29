import axios from "axios"
import {
    GET_PRODUCT_LIST_REQUEST,
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_LIST_FAIL,

    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL
} from "../actions/productActions"

export const listProduct = (url) => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCT_LIST_REQUEST
        })

        const { data } = await axios.get(`http://localhost:9000/watches-filter${url}`)
        const message = data.length === 0 ? "No products" : ''

        dispatch({
            type: GET_PRODUCT_LIST_SUCCESS,
            payload: {
                data,
                message
            }
        })
    } catch (error) {
        console.log(error);
        return {
            type: GET_PRODUCT_LIST_FAIL,
            payload: error
            //проверить почему не выводится ошибка
        }
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCT_DETAILS_REQUEST
        })

        const { data } = await axios.get(`http://localhost:9000/store/${id}`)

        dispatch({
            type: GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
