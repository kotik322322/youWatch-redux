import axios from "axios"
import {
    GET_PRODUCT_LIST,
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL
} from "../actions/productActions"

export const listProduct = () => async (dispatch) => {
    try {

        const { data } = await axios.get("http://localhost:9000/watches")
        console.log(data);
        dispatch({
            type: GET_PRODUCT_LIST,
            payload: data
        })
    } catch (error) {

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
            loading: false,
            payload: {
                description: data.description,
                imageUrl: data.imageUrl,
                name: data.name,
                price: data.price,
                productColors: data.productColors,
                size: data.size,
                warranty: data.warranty
            }
        })
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
