import React from 'react'
import Product from './Product'

function Products({products , AddToCart}) {
    return (
        <div className="products">
            {products.map(item => {
                return (
                    <Product item={item} key={item.id} toCart={AddToCart} />
                )
            })}
        </div>
    )
}

export default Products
