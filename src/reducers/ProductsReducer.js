import { commerce } from "../lib/commerce";

const SET_PRODUCTS = 'SET_PRODUCTS';
const GET_CATEGORY = 'GET_CATEGORY';


let initialState = {
    products: [],
    allLoaded: false,
    loadedCategories: {},
    stillLoading: true
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS': {
            return {
                ...state,
                products: action.data,
                allLoaded: true,
                stillLoading: false
            }
        }
        case 'GET_CATEGORY': {
            return {
                ...state,
                products: [...state.products, ...action.data],
                loadedCategories: {
                    ...state.loadedCategories,
                    [action.category]: true
                }
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

export const GetCategory = (data, category) => {
    return {
        type: GET_CATEGORY,
        data: data,
        category: category
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
            dispatch(GetCategory(response.data, category))
        })
    }
}

export default ProductsReducer;