import React, { useEffect } from 'react';
import Product from './Product';
import leftA from './assets/left.png';
import rightA from './assets/right.png';
import './HomePage.css';

function HomePage({ products, AddToCart, FetchProducts, slider, PrevSlide, NextSlide, AutoSlider, ChangeAuto}) {

    useEffect(() => {
        FetchProducts()
    }, [])

    useEffect(() => {
        if (!slider.isSliderActive) {
            ChangeAuto()
            AutoSlider()
        }
    }, [])
    
    return (
        <div >
            <div className="carousel">
                {slider.content.map((item, index) => {
                    return (
                        index === slider.slideNumber ? <div key={index}>
                            {item}
                        </div> : null
                    )
                })}
                <div className="arrows">
                    <img src={leftA} alt="left arrow" className="leftA" onClick={PrevSlide} />
                    <img src={rightA} alt="right arrow" className="rightA" onClick={NextSlide} />
                </div>
            </div>
            <div className="products">
                {products.products.map(item => {
                    return (
                        <Product item={item} key={item.id} toCart={AddToCart} />
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
