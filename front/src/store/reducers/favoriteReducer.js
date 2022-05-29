import {
    TOGGLE_FAVORITE
} from "../actions/favoriteActions"

const INITIAL_STATE = {
    favorite : []
}
if(localStorage.getItem('favorite')) {
    INITIAL_STATE.favorite = JSON.parse(localStorage.getItem('favorite'))
} else {
    INITIAL_STATE.favorite = []
}

export const favoriteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE: {
            return {
                favorite : [...action.payload]
            }
        }
    
        default:
            return state
    }
}