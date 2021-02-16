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
  const { onClick, className, style } = props;
  return (
    <div className={className} style={{ ...style }}>
      <NavigateNextIcon fontSize="large" onClick={onClick} />
    </div>
  );
};

const PrevArrow: React.FC = (props: any) => {
  const { onClick, className, style } = props;
  return (
    <div className={className} style={{ ...style }}>
      <NavigateBeforeIcon fontSize="large" onClick={onClick} />
    </div>
  );
};

const SliderCard: React.FC<Props> = ({ categories }) => {
  const settings: Settings = {
    focusOnSelect: false,
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1272,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 958,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 808,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 572,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {categories.length > 0 && (
        <Slider {...settings} className="slider-category">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="slide-item">
                <CardCategory name={category.name} imgUrl={category.imgUrl} />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default SliderCard;
