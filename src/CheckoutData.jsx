import React from 'react'

function CheckoutData() {
    return (
        <>
            <h1 className='checkout-header'>Оформление заказа</h1>
            <h5 className='h5'>Ваши контактные данные</h5>
            <form className="contact-form">
                <label className="contact-form-item">Фамилия<input type="text" className="contact-form-input input-surname" /></label>
                <label className="contact-form-item">Имя<input type="text" className="contact-form-input input-name" /></label>
                <label className="contact-form-item">Телефон<input type="phone" className="contact-form-input input-phone" /></label>
                <label className="contact-form-item">Город<input type="text" className="contact-form-input input-city" /></label>
            </form>
        </>
    )
}

export default CheckoutData
