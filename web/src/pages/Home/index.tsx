import React, { useEffect, useState } from 'react';
import GridCard from '../../components/GridCard';
import Header from '../../components/Header/index';
import SliderCard from '../../components/SliderCard';
import categoriesService from '../../services/categories.service';
import restaurantService from '../../services/restaurant.service';
import './home.scss';

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadRestaurants = async () => {
      const response = await restaurantService.findRestaurants();      
      setRestaurants(response.data);
    };

    const loadCategories = async () => {
      const response = await categoriesService.findCategories();      
      setCategories(response.data);
    };

    loadRestaurants();
    loadCategories();
  }, []);

  return (
    <div className="home-container">
      <Header />

      {
        <div className="content">
          <SliderCard categories={categories} />
        </div>
      }

      <GridCard restaurants={restaurants} />
    </div>
  );
};

export default Home;
