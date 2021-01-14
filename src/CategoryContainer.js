import Category from './Category';
import { connect } from 'react-redux';
import { AddToCart } from './reducers/CartReducer';
import { FetchCategory, FetchProducts } from './reducers/ProductsReducer';


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    AddToCart: AddToCart,
    FetchProducts: FetchProducts,
    FetchCategory: FetchCategory
}

const CategoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category);

export default CategoryContainer;