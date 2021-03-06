import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productsDetailsReducer, productsListReducer } from "./Reducers/ProductReducers"
import { cartReducer } from "./Reducers/CartReducers"


const reducer = combineReducers({
    productList: productsListReducer,
    productDetails: productsDetailsReducer,
    cart: cartReducer
})

const cartItemsFromLocalStorage = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : []

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage
    }
}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store

