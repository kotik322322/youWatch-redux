import {
    TOGGLE_FAVORITE
} from "../actions/favoriteActions"

export const addToFavorite = (product) => (dispatch) => {

    const favorite = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : []

    const productExist = favorite.filter(item => item._id === product._id)
    
    if (productExist.length === 0) {
        const productToAdd = {
            ...product,
            isFavorite : true
        }
        favorite.push(productToAdd)
        localStorage.setItem("favorite", JSON.stringify(favorite))
    } else {
       const newFavorite = favorite.filter(item => item._id !== product._id)
       localStorage.setItem("favorite", JSON.stringify(newFavorite))
    }


    dispatch({
        type: TOGGLE_FAVORITE,
        payload: favorite
    })
}