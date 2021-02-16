import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';
import React from 'react';
import notFoundImage from '../../assets/images/not-found.png';
import './cardRestaurant.scss';

type Props = {
  name: string;
  imgUrl?: string;
  avaliation?: number;
  category: string;
  distance?: number;
};

const CardRestaurant: React.FC<Props> = (props) => {
  const { name, imgUrl, avaliation, category, distance } = props;

  return (
    <Paper className="card-full">
      <div className="card-restaurant-container">
        <div className="restaurant-img">
          <img src={imgUrl ?? notFoundImage} alt="logo" />
        </div>
        <div className="restaurant-info">
          <span className="restaurant-name">{name ?? 'Nao informado'}</span>
          <div className="basic-info">
            <StarIcon className="star" />
            <span className="restaurant-avaliation">{avaliation ?? 0}</span>
            <span className="separator"></span>
            <span className="restaurant-categorie">{category ?? 'Nao informado'}</span>
            <span className="separator"></span>
            <span className="restaurant-distance">{distance ?? 0} KM</span>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CardRestaurant;
