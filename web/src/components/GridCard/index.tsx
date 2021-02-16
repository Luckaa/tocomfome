import React from 'react';
import CardRestaurant from '../../components/CardRestaurant/index';
import './gridCard.scss';

export type Restaurant = {
  ownerName: string;
  restaurantName: string;
  email: string;
  imgUrl?: string;
  avaliation?: number;
  category: string;
  type: string;
  cnpj: string;
  distance?: number;
};

// cnpj: "16.172.262/0001-73"
// createdAt: "2021-02-16T21:39:59.885Z"
// email: "gustavo.restaurante8@gmail.com"
// ownerName: "Gustavo"
// restaurantName: "Restaurante 8"
// updatedAt: "2021-02-16T21:39:59.885Z"

type Props = {
  restaurants: Restaurant[];
};

const GridCard: React.FC<Props> = ({ restaurants }) => {
  return (
    <div className="grid-category">
      {restaurants.map((restaurant, index) => (
        <CardRestaurant
          key={index}
          name={restaurant.restaurantName}
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
