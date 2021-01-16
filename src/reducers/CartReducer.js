import { commerce } from "../lib/commerce";

const SET_CART = 'SET_CART';
const TOGGLE_CART = 'TOGGLE_CART';

let initialState = {
    cart: {},
    cartToggler: false
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART': {
            return {
                ...state, cart: action.cart
            }
        }
        case 'TOGGLE_CART': {
            if (action.toggled) {
                document.body.style['overflow-y'] = 'hidden';
                document.body.style.position = 'fixed';
            } else {
                document.body.style['overflow-y'] = "scroll";
                document.body.style.position = '';
            }
            return {
                ...state, cartToggler: action.toggled
            }
        }
        default: return state
    }
}

export const GetCart = (cart) => {
    return {
        type: SET_CART,
        cart: cart
    }
}

export const ToggleCart = (toggled) => {
    return {
        type: TOGGLE_CART,
        toggled: toggled
    }
}

export const FetchCart = () => {
    return function (dispatch) {
        commerce.cart.retrieve().then(cart => {
            dispatch(GetCart(cart))
        })
    }
}

export const ChangeItemsInCart = (itemId, newQuantity) => {
    return dispatch => {
        commerce.cart.update(itemId, { quantity: newQuantity }).then(() => {
            dispatch(FetchCart())
        });
    }
}

export const RemoveFromCart = (itemId) => {
    return dispatch => {
        commerce.cart.remove(itemId).then(() => {
            dispatch(FetchCart())
        })
    }
}

export const AddToCart = (itemId, quantity) => {
    return dispatch => {
        commerce.cart.add(itemId, quantity).then(() => {
            dispatch(FetchCart());
        })
    }
}

export default CartReducer;






