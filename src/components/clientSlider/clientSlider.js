import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './clientSlider.css';

const ClientSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="clientImageContainer">
        <img className="client-image" src={require('../../assets/images/clients/1.png')} alt="client logo" />
      </div>
      <div className="clientImageContainer">
      <img className="client-image" src={require('../../assets/images/clients/2.png')} alt="client logo" />
      </div>
      <div className="clientImageContainer">
      <img className="client-image" src={require('../../assets/images/clients/3.png')} alt="client logo" />
      </div>
      <div className="clientImageContainer">
      <img className="client-image" src={require('../../assets/images/clients/4.png')} alt="client logo" />
      </div>
      <div className="clientImageContainer">
      <img className="client-image" src={require('../../assets/images/clients/5.png')} alt="client logo" />
      </div>
      <div className="clientImageContainer">
      <img className="client-image" src={require('../../assets/images/clients/6.png')} alt="client logo" />
      </div>
    </Slider>
  );
};

export default ClientSlider;
