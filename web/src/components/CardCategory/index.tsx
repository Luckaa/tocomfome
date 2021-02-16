import Paper from '@material-ui/core/Paper';
import React from 'react';
import notFoundImage from '../../assets/images/not-found.png';
import './cardCategory.scss';

type Props = {
  name: string;
  imgUrl?: string;
};

const CardCategory: React.FC<Props> = (props) => {
  const { name, imgUrl } = props;

  return (
    <Paper className="card-full">
      <div className="card-category-container">
        <div className="category-img">
          <img src={imgUrl ?? notFoundImage} alt="logo" />
        </div>
        <div className="category-info">
          <span className="restaurant-name">{name ?? 'Nao informado'}</span>
        </div>
      </div>
    </Paper>
  );
};

export default CardCategory;
