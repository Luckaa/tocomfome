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

const NextArrow: React.FC = (props: any) => {
  const { onClick } = props;
  return <NavigateBeforeIcon onClick={onClick} />;
};

const PrevArrow: React.FC = (props: any) => {
  const { onClick } = props;
  return <NavigateNextIcon fontSize="large" onClick={onClick} />;
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="slider-category">
      {categories.map((category, index) => (
        <div key={index}>
          <div className="slide-item">
            <CardCategory name={category.name} imgUrl={category.imgUrl} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderCard;
