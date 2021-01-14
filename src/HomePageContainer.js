import { connect } from 'react-redux';
import HomePage from './HomePage';
import { FetchProducts } from './reducers/ProductsReducer';
import { AddToCart } from './reducers/CartReducer';
import { AutoSlider, NextSlide, PrevSlide } from './reducers/SliderReducer';


const mapStateToProps = (state) => {
    return {
        products: state.products,
        slider: state.slider
    }
}

const mapDispatchToProps = {
    FetchProducts: FetchProducts,
    AddToCart: AddToCart,
    NextSlide: NextSlide,
    PrevSlide: PrevSlide,
    AutoSlider: AutoSlider
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer;
