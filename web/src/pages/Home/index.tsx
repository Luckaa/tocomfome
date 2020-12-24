import React from 'react';
import Header from '../../components/Header/index';
import SliderCard from '../../components/SliderCard';
import './home.scss';

const Home: React.FC = () => {

  return (
    <div className="home-container">
      <Header />
      Page home
      <SliderCard />
      
    </div>
  );
};

export default Home;
