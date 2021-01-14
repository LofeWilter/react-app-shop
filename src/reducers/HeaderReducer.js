import { commerce } from "../lib/commerce";
const SET_CATEGORIES = 'SET_CATEGORIES';


let initialState = {
    categories: []
}

const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES': {
            return {
                ...state, categories: action.categories
            }
        }
        default: return state
    }
}

export const GetCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        categories: categories
    }
}

export const FetchCategories = () => {
    return dispatch => {
        commerce.categories.list().then(categories => {
            dispatch(GetCategories(categories))
        })
    }
}

export default HeaderReducer;