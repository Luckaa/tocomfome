import React from 'react';
import cleitaoLanches from '../../assets/images/cleitao.png';
import lanchesCategory from '../../assets/images/lanches-category.jpg';
import GridCard from '../../components/GridCard';
import { Restaurant } from '../../components/GridCard/index';
import Header from '../../components/Header/index';
import SliderCard from '../../components/SliderCard';
import './home.scss';

const categories = [
  {
    name: 'Lanches',
    imgUrl: lanchesCategory,
  },
  {
    name: 'Lanches',
    imgUrl: lanchesCategory,
  },
  {
    name: 'Lanches',
    imgUrl: lanchesCategory,
  },
  {
    name: 'Lanches',
    imgUrl: lanchesCategory,
  },
  {
    name: 'Lanches',
    imgUrl: lanchesCategory,
  },
  {
    name: 'Lanches',
    imgUrl: lanchesCategory,
  },
];

const restaurants: Restaurant[] = [
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
  {
    name: 'Cleytão Lanches',
    category: 'Lanches',
    avaliation: 4.5,
    distance: 50,
    imgUrl: cleitaoLanches,
  },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="content">
        <SliderCard categories={categories} />
      </div>

      <GridCard restaurants={restaurants} />
    </div>
  );
};

export default Home;
