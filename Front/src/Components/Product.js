import React from 'react';

const Product = ({ image, name, features, manufacturer }) => {
  return (
    <div style={{ width: '49%', display: 'flex', marginLeft: '25%', marginRight: '25%', marginTop: '20px', border: '2px solid #ccc', borderRadius: '17px'  }}>
      <div style={{ width: '25%', marginRight: '2rem' }}>
        <img src={image} alt={name} style={{ width: '100%', borderRadius: '17px' }} />
      </div>
      <div style={{ flex: 1 }}>
        <h2>{name}</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p>Производитель: {manufacturer}</p>
      </div>
    </div>
  );
};

export default Product;
