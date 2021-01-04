import React from 'react';
import Slider, { Settings } from 'react-slick';
import './sliderCard.scss';
import CardRestaurant from '../../components/CardRestaurant/index';


const SliderCard: React.FC = () => {
  const settings: Settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
  };

  return (
    <Slider {...settings} className="slider-category">
      <div>
        <div className="slide-item"><CardRestaurant/></div>
      </div>
      <div>
        <div className="slide-item"><CardRestaurant/></div>
      </div>
      <div>
        <div className="slide-item"><CardRestaurant/></div>
      </div>
      <div>
        <div className="slide-item"><CardRestaurant/></div>
      </div>
      <div>
        <div className="slide-item"><CardRestaurant/></div>
      </div>
      <div>
        <div className="slide-item"><CardRestaurant/></div>
      </div>
    </Slider>
  );
};

export default SliderCard;
