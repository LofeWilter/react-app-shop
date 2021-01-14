import React from 'react';
import './CartItem.css';
import Trash from './assets/trashCan.png';

function CartItem({ item, ChangeItemsInCart, RemoveFromCart }) {
    return (
        <div className="cart-item">
            <div className='justify'>
                <div className="cart-item-header">
                    <img src={item.media.source} className="cart-img" alt=""/>
                    <span className="cart-item-name">{item.product_name}</span>
                </div>
                <div className="trash" onClick={() => RemoveFromCart(item.id)}>
                    <img src={Trash} alt=""/>
                </div>
            </div>
            <div className="cart-management">
                <div className="manage-total">
                    <button className="manage-button minus" onClick={() => ChangeItemsInCart(item.id, item.quantity - 1)}>-</button>
                    <span className="item-total">{item.quantity}</span>
                    <button className="manage-button plus" onClick={() => ChangeItemsInCart(item.id, item.quantity + 1)}>+</button>
                </div>
                <span className="total-price-item">{item.line_total.formatted_with_symbol}</span>
            </div>
        </div>
    )
}

export default CartItem
