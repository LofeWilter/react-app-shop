import { connect } from 'react-redux'
import CartModal from './CartModal'
import { ChangeItemsInCart, FetchCart, RemoveFromCart, ToggleCart } from './reducers/CartReducer';


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    FetchCart: FetchCart,
    ChangeItemsInCart: ChangeItemsInCart,
    RemoveFromCart: RemoveFromCart,
    ToggleCart: ToggleCart
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(CartModal);

export default CartContainer;
