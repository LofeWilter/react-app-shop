import React from 'react'

function ActiveDiscountItem({ discount, DeleteDiscount }) {
    return (
        <div className="discount--item">
            <span>-{discount.valueInCash} UAH</span>
            <button className="discount-button" onClick={() => DeleteDiscount(discount.id)}>X</button>
        </div>
    )
}

export default ActiveDiscountItem
