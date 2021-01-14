import { connect } from 'react-redux';
import CheckoutPage from './CheckoutPage';
import { ChangeItemsInCart, RemoveFromCart, FetchCart } from './reducers/CartReducer';
import { DeleteDiscount, SetFinalPrice } from './reducers/DiscountsReducer';



const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        discounts: state.discounts
    }   
}

const mapDispatchToProps = {
    ChangeItemsInCart: ChangeItemsInCart,
    RemoveFromCart: RemoveFromCart,
    FetchCart: FetchCart,
    DeleteDiscount: DeleteDiscount,
    SetFinalPrice: SetFinalPrice
}

const CheckoutPageContainer = connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)

export default CheckoutPageContainer;

