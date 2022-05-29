import {createStore, combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { productListReducer, productDetailsReducer } from "./reducers/productListReducer"
import { cartReducer } from "./reducers/cartReducer"
import {favoriteReducer} from "./reducers/favoriteReducer"

const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer,
    favoriteList : favoriteReducer
})


const initialState = {

}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store