import React from 'react'
import "./service-card.css";

const serviceCard = ({item}) => {
  const {imgUrl, title, desc} = item

  return <div classname ="service_item">
    <div classname="service_img">
      <img src={imgUrl} alt =''/>

    </div>
    <h5>{title}</h5>
  </div>
}

export default serviceCard