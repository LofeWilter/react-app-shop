import React from 'react';

const Product = ({ item, toCart }) => {
    return (
        <div className='product-item'>
            <img src={item.media.source} alt="" />
            <div className='item-info'>
                <span className="item-info-name">{item.name}</span>
                <span className="item-info-price">{item.price.formatted_with_code}</span>
            </div>
            <button className="item-to-cart" id={item.id} onClick={() => toCart(item.id, 1)}>В корзину</button>
        </div>
    )
}

export default Product