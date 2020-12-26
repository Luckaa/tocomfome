import React from 'react';
import Header from '../../components/Header/index';
import CardRestaurant from '../../components/CardRestaurant/index';
import './home.scss';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      <CardRestaurant/>

    </div>
  );
};

export default Home;
