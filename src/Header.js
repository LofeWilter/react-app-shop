import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import cartImage from './assets/32C.png';
import logo from './assets/logo.png';
import burger1 from './assets/burger2.png';
import './Header.css';



const Header = ({ SetMenu, ToggleCart, FetchCategories, state }) => {

    useEffect(() => {
        FetchCategories()
    }, [])

    return (
        <header className="header">
            <img src={burger1} className="burger" onClick={() => SetMenu(!state.menu.menuToggler)} />
            <NavLink to='' className="logo"><img src={logo} alt="logo" /></NavLink>
            <ul className="navbar">
                {state.header.categories.data ? state.header.categories.data.map(item => {   
                    return (
                        <NavLink to={`/products/${item.name}`} key={item.id} className="navbar-item">
                            <li>{item.name}</li>
                        </NavLink>
                    )
                }): null}
            </ul>
            <div className="userData">
                <div className="cart">
                    <img src={cartImage} alt="cart" onClick={() => ToggleCart(true)} />
                    <span className="total-items">{state.cart.cart.total_items ? state.cart.cart.total_items : 0}</span>
                </div>
            </div>
        </header>
    )
}

export default Header;