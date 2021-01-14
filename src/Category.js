import React, { useEffect } from 'react';
import Product from './Product.js'
import './Products.css';
import { withRouter } from 'react-router-dom';

const Category = (props) => {

    useEffect(() => {
        props.FetchCategory(props.match.params.item) 
    }, [props.match.params.item])

    return (
        <div className="products">
            { props.products.products.map(item => {
                if (item.categories[0].name === props.match.params.item) {
                    return (
                        <Product item={item} key={item.id} toCart={props.AddToCart} />
                    )
                }
            })}
        </div>
    )
}

export default withRouter(Category);