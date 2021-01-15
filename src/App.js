import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePageContainer from './HomePageContainer';
import CheckoutPageContainer from './CheckoutPageContainer';
import CartContainer from './CartContainer';
import HeaderContainer from './HeaderContainer';
import MenuContainer from './MenuContainer';
import CategoryContainer from './CategoryContainer';

function App() {
  return (
    <BrowserRouter basename='/react-app/'>
      <div className="container">
        <CartContainer />
        <MenuContainer />
        <HeaderContainer />
        <Route exact path='/' render={() => <HomePageContainer />} />
        <Route path='/products/:item' render={() => <CategoryContainer />} />
        <Route path='/checkout' render={() => <CheckoutPageContainer />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
