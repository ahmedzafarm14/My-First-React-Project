import React from 'react';
import './Cards.css';
import award from '../Images/award.png';
import delivery from '../Images/delivery.png'
import painting from '../Images/painting.png'
import fruit from '../Images/fruit.png'

const Cards = ({ ID }) => {
  switch (ID) {
    case 1:
      return (
        <div className='card'>
          <div className='cardEllipse'>
            <img src={award} alt='img.png' />
          </div>
          <div className='cardContent'>
            <h2>Top Quality</h2>
            <p>Make stuff actually buy, create beautiful, retail-ready custom products with the same QC standards as leading fashion brands</p>
          </div>
        </div>
      );
    case 2:
      return (
        <div className='card'>
          <div className='cardEllipse'>
            <img src={painting} alt='img.png' />
          </div>
          <div className='cardContent'>
            <h2>Unlimited Customization</h2>
            <p>Let your imagination run wild. We create every product from scratch so you can customize every last detail.</p>
          </div>
        </div>
      );
    case 3:
      return (
        <div className='card3'>
          <div className='cardEllipse3'>
            <img src={fruit} alt='img.png' />
          </div>
          <div className='cardContent3'>
            <h2>Low minimums</h2>
            <p>No more sticker shock. Get small-batch custom manufacturing with low upfront costs and eye-widening profit margins.</p>
          </div>
        </div>
      );
    case 4:
      return (
        <div className='card'>
          <div className='cardEllipse'>
            <img src={delivery} alt='img.png' />
          </div>
          <div className='cardContent'>
            <h2>Quick Turnaround</h2>
            <p>No timeline is too tight for our rapid small- batch supply chain - let us know when you’ll need products and we’ll make it happen!</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Cards;
