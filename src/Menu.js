import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';


const Menu = ({ SetMenu, state }) => {

    return (
        <div className={state.menu.menuToggler ? 'mobile-menu active' : 'mobile-menu'}>
            <ul className="mobile-navbar">
                {state.header.categories.data ? state.header.categories.data.map(item => {
                    return (
                        <li key={item.id} className='li'>
                            <NavLink to={`/products/${item.name}`} className="mob-nav-item" onClick={() => SetMenu(false)}>
                                {item.name}
                            </NavLink>
                        </li>
                    )
                }) : null}
            </ul>
            <button onClick={() => SetMenu(false)} className='close-menu'>X</button>
        </div>
    )
}

export default Menu;