import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productsDetailsReducer, productsListReducer } from "./Reducers/ProductReducers"

const reducer = combineReducers({
    productList: productsListReducer,
    productDetails: productsDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store

