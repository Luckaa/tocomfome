import React from 'react';
import Slider, { Settings } from 'react-slick';
import './sliderCard.scss';

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
        <div className="slide-item">colocar aqui o card</div>
      </div>
      <div>
        <div className="slide-item">2</div>
      </div>
      <div>
        <div className="slide-item">3</div>
      </div>
      <div>
        <div className="slide-item">4</div>
      </div>
      <div>
        <div className="slide-item">5</div>
      </div>
      <div>
        <div className="slide-item">6</div>
      </div>
    </Slider>
  );
};

export default SliderCard;
