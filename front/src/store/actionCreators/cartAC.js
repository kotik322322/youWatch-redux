import axios from "axios"
import {
    ADD_TO_CART,
    DELETE_FROM_CART
} from "../actions/cartActions"

export const addToCart = product => async (dispatch) => {
    //if cart already exists in local storage, use it, otherwise set to empty array
    const cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []
    //check if duplicates
    const duplicates = cart.filter(cartItem = > cartItem._id === product._id)
    //if no duplicates, proceed
    if (duplicates.length === 0) {
        //prep product data
        const productToAdd = {
            ...product, 
            count : 1,

        }
        //add product data to cart
        cart.push(productToAdd)
        //add cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart))
        //add cart to redux

    }
}