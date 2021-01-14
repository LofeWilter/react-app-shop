import { commerce } from "../lib/commerce";

const SET_PRODUCTS = 'SET_PRODUCTS';


let initialState = {
    products: []
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS': {
            return {
                ...state, products: action.data
            }
        }
        default: return state
    }
}

export const GetProducts = (data) => {
    return {
        type: SET_PRODUCTS,
        data: data
    }
}

export const FetchProducts = () => {
    return function (dispatch) {
        commerce.products.list().then(response => {
            dispatch(GetProducts(response.data))
        })
    }
}

export const FetchCategory = (category) => {
    return dispatch => {
        commerce.products.list({
            category_slug: category,
        }).then(response => {
            dispatch(GetProducts(response.data))
        })
    }
}


export default ProductsReducer;