import { connect } from 'react-redux';
import HomePage from './HomePage';
import { FetchProducts } from './reducers/ProductsReducer';
import { AddToCart } from './reducers/CartReducer';

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart
    }
}

const mapDispatchToProps = {
    FetchProducts: FetchProducts,
    AddToCart: AddToCart,

}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer;
