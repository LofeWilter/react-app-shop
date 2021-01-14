import { connect } from 'react-redux'
import DiscountsForm from './DiscountsForm'
import { SetDiscount, SetFieldValue, SetForm } from './reducers/DiscountsReducer'


const mapStateToProps = (state) => ({
    discounts: state.discounts,
    cart: state.cart.cart
})

const mapDispatchToProps = {
    SetForm: SetForm,
    SetFieldValue: SetFieldValue,
    SetDiscount: SetDiscount
}

const DiscountsFormContainer = connect(mapStateToProps, mapDispatchToProps)(DiscountsForm);

export default DiscountsFormContainer;
