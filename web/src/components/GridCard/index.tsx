import React from 'react';
import CardRestaurant from '../../components/CardRestaurant/index';
import './gridCard.scss';

export type Restaurant = {
  name: string;
  imgUrl?: string;
  avaliation?: number;
  category: string;
  distance?: number;
};

type Props = {
  restaurants: Restaurant[];
};

const GridCard: React.FC<Props> = ({ restaurants }) => {
  return (
    <div className="grid-category">
      {restaurants.map((restaurant, index) => (
        <CardRestaurant
          key={index}
          name={restaurant.name}
          category={restaurant.category}
          avaliation={restaurant.avaliation}
          distance={restaurant.distance}
          imgUrl={restaurant.imgUrl}
        />
      ))}
    </div>
  );
};
export default GridCard;
