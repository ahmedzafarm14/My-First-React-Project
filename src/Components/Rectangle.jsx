import React from 'react'
import './Rectangle.css'
const Rectangle = ({Data}) => {
  return (
    <div className='rectt'>
        <img src={Data.im} alt='img.png' />
        <div className='txt'>
            <h2>{Data.h2}</h2>
        </div>
    </div>
  )
}

export default Rectangle