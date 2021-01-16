import React, { useEffect } from 'react';
import leftA from './assets/left.png';
import rightA from './assets/right.png';
import loading from './assets/stillLoading.png';
import './HomePage.css';

const Products = React.lazy(() => import('./Products'))


function HomePage({ products, AddToCart, FetchProducts, slider, PrevSlide, NextSlide, AutoSlider, ChangeAuto }) {

    useEffect(() => {
        if (!products.allLoaded && Object.keys(products.loadedCategories).length !== 3) {
            FetchProducts()
        }
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
            {<img src={loading} alt =''/> && products.stillLoading}
            <React.Suspense fallback={<img src={loading} />}>
                <Products
                    products={products.products}
                    AddToCart={AddToCart}
                />
            </React.Suspense>
        </div>
    )
}

export default HomePage
