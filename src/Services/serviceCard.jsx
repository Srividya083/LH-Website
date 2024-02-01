import React from 'react'
import "./service-card.css";

const serviceCard = ({item}) => {
  const {imageUrl, title, description} = item;
  return (
    <div className="service-card">
      <img src={imageUrl} alt={title} className="service-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};



export default serviceCard