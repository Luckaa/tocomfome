import Paper from "@material-ui/core/Paper";
import React from "react";
import LogoRestaurant from "../../assets/images/restaurant1.png";
import StarIcon from '@material-ui/icons/Star';
import "./cardRestaurant.scss";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const CardRestaurant = () => {
  return (
    <Paper className="card-full">
    <div className="card-restaurant-container">
      <div className="restaurant-img">
        <img
          src={LogoRestaurant}
          alt="logo"
        />
      </div>
      <div className='restaurant-info'>
        <span className="restaurant-name">Cleitão Lanches</span>
        <div>
        <StarIcon className="star"/><span className="restaurant-avaliation">4,5</span>
        <span className="restaurant-categorie">Lanches</span>
        </div>
        <span className="restaurant-distance">7,9KM</span>
      </div>
    </div>
    </Paper>

  
  );
};
export default CardRestaurant;
