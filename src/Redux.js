import thunk from 'redux-thunk';
import CartReducer from './reducers/CartReducer';
import DiscountsReducer from './reducers/DiscountsReducer';
import HeaderReducer from './reducers/HeaderReducer';
import MenuReducer from './reducers/MenuReducer';
import ProductsReducer from './reducers/ProductsReducer';
import SliderReducer from './reducers/SliderReducer';
const { combineReducers, createStore, applyMiddleware } = require('redux');


let reducers = combineReducers({
    products: ProductsReducer,
    cart: CartReducer,
    header: HeaderReducer,
    menu: MenuReducer,
    slider: SliderReducer,
    discounts: DiscountsReducer
});


let store = createStore(reducers, applyMiddleware(thunk));

export default store;