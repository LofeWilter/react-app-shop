import { connect } from 'react-redux';
import Menu from './Menu';
import { SetMenu } from './reducers/MenuReducer';


const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = {
    SetMenu: SetMenu
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;
