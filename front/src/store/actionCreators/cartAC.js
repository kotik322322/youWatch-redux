import axios from "axios"
import {
    ADD_TO_CART,
    DELETE_FROM_CART,
    CART_PRODUCT_INCREMENT,
    CART_PRODUCT_DECREMENT
} from "../actions/cartActions"


export const addToCart = (product) => ( dispatch ) => {

    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

    const productExist = cart.filter(item => item._id === product._id)

    if(productExist.length === 0) {
        const productToAdd = {
            ...product,
            quantity : 1
        } 
        cart.push(productToAdd)

    } else {
        console.log("Такой товар уже есть в корзине");
    }

    localStorage.setItem("cart", JSON.stringify(cart))

    dispatch({
        type : ADD_TO_CART,
        payload : cart
    })
}

export const cartProductIncrement = (product) => (dispatch) => {

    const cart = JSON.parse(localStorage.getItem('cart'))
    
    const newCart = cart.map(item => {
        if(item._id === product._id) {
            return {
                ...product,
                quantity : ++product.quantity
            }
        } return item
    })
    
    localStorage.setItem("cart", JSON.stringify(newCart))

    dispatch({
        type : CART_PRODUCT_INCREMENT,
        payload : newCart
    })
}