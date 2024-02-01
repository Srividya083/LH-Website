import React from 'react';
import Slider from "react-slick";
//import {Col} from "reactstrap"
import "./serviceCard";
//import gym from ./assets/
//import swimming from ./assets/
//import tableTennis from ./assets/

const =[
  {
    imgUrl: gym,
    title :Gymnassium,
    description: "WORKOUT, DONT CRY",
  },
  {
    imgUrl: gym,
    title :"Gymnassium",
    description: "WORKOUT, DONT CRY",
  },
]
const ServiceList = ({servicesData}) => {

  //Settings for the Slider
  const settings ={
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <nextArrow/>,
    prevArrow: <prevArrow/>,
  };

  return (
    <Slider{...settings}>
    {servicesData.map((item, index) => (
      <div key={index}>
        <serviceCard item={item} />
      </div>
    ))}
  </Slider>
);
};

export default ServiceList;

  