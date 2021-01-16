import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import HomePageContainer from './HomePageContainer';
import CheckoutPageContainer from './CheckoutPageContainer';
import CartContainer from './CartContainer';
import HeaderContainer from './HeaderContainer';
import MenuContainer from './MenuContainer';
import CategoryContainer from './CategoryContainer';

function App() {
  return (
    <Router>
      <div className="container">
        <CartContainer />
        <MenuContainer />
        <HeaderContainer />
        <Route exact path='/' render={() => <HomePageContainer />} />
        <Route path='/products/:item' render={() => <CategoryContainer />} />
        <Route path='/checkout/cart' render={() => <CheckoutPageContainer />} />
      </div>
    </Router>
  );
}

export default App;
