import React, { useEffect } from 'react';
import './CheckoutPage.css';
import CartItem from './CartItem';
import CheckoutData from './CheckoutData';
import EmptyCart from './EmptyCart';
import DiscountsFormContainer from './DiscountsFormContainer';
import ActiveDiscountItem from './ActiveDiscountItem';


function CheckoutPage({ cart, ChangeItemsInCart, RemoveFromCart, FetchCart, discounts, DeleteDiscount, SetFinalPrice }) {

    useEffect(() => {
        FetchCart();
    }, [])

    useEffect(() => {
        if (cart.cart.subtotal) {
            SetFinalPrice(cart.cart)
        };
    }, [cart.cart, discounts.discounts])

    return (
        <div >
            {cart.cart.line_items ?
                <div className="checkoutPage">
                    <div className='checkout-data'>
                        <CheckoutData />
                        <div className='checkout-cart'>
                            <h2>Заказ</h2>
                            {cart.cart.line_items.length > 0 ? cart.cart.line_items.map(item => {
                                return (
                                    <CartItem item={item} key={item.id} ChangeItemsInCart={ChangeItemsInCart} RemoveFromCart={RemoveFromCart} />
                                )
                            }) : <EmptyCart />}
                        </div>
                    </div>
                    <div className='approve-purchase'>
                        <DiscountsFormContainer />
                        <div className="checkout-total">
                            <h4>Итого</h4>
                            <div className="row-checkout-total">
                                <span>Товара на сумму</span>
                                <span>{cart.cart.subtotal.formatted_with_symbol}</span>
                            </div>
                            <div className="row-checkout-total">
                                <span>Стоимость Доставки</span>
                                <span className='text-align-right'>По тарифам перевозчика</span>
                            </div>
                            <div className="row-checkout-total">
                                <span>К оплате</span>
                                <span>{cart.cart.subtotal.raw}</span>
                            </div>
                            <div className={discounts.isAnyDiscountApplied > 0 ? "row-checkout-total checkout-total-column" : 'noshowPromo'}>
                                Со скидкой
                                {discounts.discounts.map(item => {
                                if (item.active) {
                                    return <ActiveDiscountItem
                                        discount={item}
                                        key={item.id}
                                        DeleteDiscount={DeleteDiscount}
                                    />
                                }
                            })}
                                <div className="row-checkout-total">
                                    <span>Итого</span>
                                    <span>{discounts.finalPrice}</span>
                                </div>
                            </div>
                        </div>
                        <div className="margin0auto">
                            <button className='checkout-confirm'>Заказ Подтверждаю</button>
                        </div>
                    </div>
                </div> : null}
        </div>
    )
}

export default CheckoutPage;
