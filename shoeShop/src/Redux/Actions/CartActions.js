import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../Constants/CartConstans';

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: { 
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty
        }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// REMOVE PRODUCT FROM CART
export const removefromcart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}