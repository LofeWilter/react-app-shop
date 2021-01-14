import React, { useEffect } from 'react';
import './CartModal.css';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { NavLink } from 'react-router-dom';


function CartModal({ ToggleCart, cart, ChangeItemsInCart, RemoveFromCart, FetchCart }) {

    const closeModaltest = (e) => {
        if (e.target.className === 'nonopacity') { 
            ToggleCart(!cart.cartToggler)
        }
    }

    useEffect(() => {
        FetchCart()
    }, [])

    return (
        cart.cart.line_items ?
            <div className={cart.cartToggler ? "cart-modal block" : 'cart-modal'} onClick={(e) => closeModaltest(e)}>
                <div className='opacity'></div>
                <div className="nonopacity">
                    <div className="modal__item modal-cart">
                        <div className='modal-header'>
                            <span className='vertical-center-text'>Корзина</span>
                            <button onClick={() => ToggleCart(!cart.cartToggler)} className="close-modal-auth">X</button>
                        </div>
                        <div className="cart-content">
                            {cart.cart.line_items.length > 0 ? cart.cart.line_items.map(item => {
                                return (
                                    <CartItem item={item} key={item.id} ChangeItemsInCart={ChangeItemsInCart} RemoveFromCart={RemoveFromCart} />
                                )
                            }) : <EmptyCart />}
                        </div>
                        <div className="cart-subtotal">
                            <span onClick={() => ToggleCart(!cart.cartToggler)} className="cart-continue">Прoдолжить покупки</span>
                            <label className="checkout">
                                <span>
                                    {cart.cart.subtotal.formatted_with_symbol}
                                </span>
                                <NavLink
                                    to='/checkout'
                                    className={cart.cart.line_items.length > 0 ? 'kekw' : 'none'}
                                    onClick={() => ToggleCart(!cart.cartToggler)}>
                                    <button className="checkout-btn">Оформить заказ</button>
                                </NavLink>
                            </label>
                        </div>
                    </div>
                </div>
            </div >
            : null)
}

export default CartModal;

