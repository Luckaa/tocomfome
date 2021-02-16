import React, { useEffect, useState } from 'react';
import lanchesCategory from '../../assets/images/lanches-category.jpg';
import GridCard from '../../components/GridCard';
import Header from '../../components/Header/index';
import SliderCard from '../../components/SliderCard';
import restaurantService from '../../services/restaurant.service';
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

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      const response  = await restaurantService.findRestaurants();
      console.log(response.data);
      setRestaurants(response.data);
    };

    loadRestaurants();
  }, []);

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
