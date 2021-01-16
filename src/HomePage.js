import React, { useEffect } from 'react';
import loading from './assets/stillLoading.png';
import './HomePage.css';
import SliderContainer from './SliderContainer';

const Products = React.lazy(() => import('./Products'))


function HomePage({ products, AddToCart, FetchProducts }) {

    useEffect(() => {
        if (!products.allLoaded && Object.keys(products.loadedCategories).length !== 3) {
            FetchProducts()
        }
    }, [])

    return (
        <div >
            <SliderContainer/>
            {<img src={loading} alt='' /> && products.stillLoading}
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
