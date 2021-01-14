import React from 'react';

function DiscountsForm({ SetForm, discounts, SetFieldValue, SetDiscount, cart }) {

    return (
        <div className='checkout-promocode'>
            <div className='promo-header'>
                <span>Промокод</span>
                <span onClick={() => SetForm(!discounts.isOpen)} className="blue-span">{discounts.isOpen ? 'Закрыть' : 'Добавить'}</span>
            </div>
            <div className={discounts.isOpen ? "promo-input input-nonone" : "promo-input"}>
                <input type="text" className="promo-input-input" value={discounts.newDiscount} onInput={(e) => SetFieldValue(e.target.value)} />
                <button className="promo-input-button" onClick={() => SetDiscount(cart)}>Применить</button>
            </div>
        </div>
    )
}

export default DiscountsForm
