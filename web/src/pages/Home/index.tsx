import React from 'react';
import Header from '../../components/Header/index';
import './header.scss';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      Page home
    </div>
  );
};

export default Home;
