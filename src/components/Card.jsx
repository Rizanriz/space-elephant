import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;