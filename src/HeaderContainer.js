import { connect } from 'react-redux';
import Header from './Header';
import { FetchCategories } from './reducers/HeaderReducer';
import { ToggleCart } from './reducers/CartReducer';
import { SetMenu } from './reducers/MenuReducer';


const mapStateToProps = (state) => {
    return {
        header: state.header,
        state: state
    }
}

const mapDispatchToProps = {
    FetchCategories: FetchCategories,
    ToggleCart: ToggleCart,
    SetMenu: SetMenu
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
