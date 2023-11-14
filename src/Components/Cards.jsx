import React from 'react';
import './Cards.css';

const Cards = ({ID}) => {
  if (ID.i===1)
  {
    return (
      <div className='card' style={{background:"#74BDE0"}}>
        <div className='cardEllipse' style={{background:"#FFC217"}}>
          <img src={ID.im} alt='img.png' style={{width:"80px",height:"80px",marginLeft:"-10px",marginTop:"-10px",transform: "rotate(45deg)"}}/>
        </div>
        <div className='cardContent'>
          <h2 style={{color:"white"}}>{ID.h2}</h2>
          <p style={{color:"white"}}>{ID.p}</p>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className='card'>
        <div className='cardEllipse'>
          <img src={ID.im} alt='img.png' />
        </div>
        <div className='cardContent'>
          <h2>{ID.h2}</h2>
          <p>{ID.p}</p>
        </div>
      </div>
    );
  }
};

export default Cards;
