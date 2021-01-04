import React from 'react';
import Header from '../../components/Header/index';
import GridCard from '../../components/GridCard';
import SliderCard from '../../components/SliderCard';
import './home.scss';

const Home: React.FC = () => {

  return (
    <div className="home-container">
      <Header />
      <SliderCard />
      
      <GridCard/>
      
    </div>
  );
};

export default Home;
