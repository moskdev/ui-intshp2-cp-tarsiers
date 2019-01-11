import React from 'react';
import JoinUs from '../JoinUs/JoinUs';
import Promotions from '../Promotions/Promotions';
import ProductContainer from '../ProductContainer/ProductContainer';
import './_homepage.scss';

const HomePage = () => (
  <div className="slider__wrapper homepage">
    <Promotions />
    <ProductContainer />
    <JoinUs />
  </div>
);

export default HomePage;
