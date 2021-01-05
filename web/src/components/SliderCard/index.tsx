import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import CardCategory from '../CardCategory/index';
import './sliderCard.scss';

type Category = {
  name: string;
  imgUrl: string;
};

type Props = {
  categories: Category[];
};

const SliderCard: React.FC<Props> = ({ categories }) => {
  const settings: Settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    arrows: true,
    nextArrow: <NavigateNextIcon fontSize="large" />,
    prevArrow: <NavigateBeforeIcon fontSize="large" />,
  };

  return (
    <Slider {...settings} className="slider-category">
      {categories.map((category) => (
        <div>
          <div className="slide-item">
            <CardCategory name={category.name} imgUrl={category.imgUrl} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderCard;
