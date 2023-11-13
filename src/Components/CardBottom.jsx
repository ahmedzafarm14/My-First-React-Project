import React from 'react'
import './CardBottom.css'
const CardBottom= (props) => {
    const {data} = props
    return (
        <div className='cardMain' style={{ backgroundImage: `url(${data.Im})`}}>
            <div className='subCard'>
                <h1>{data.h1}</h1>
                <p>{data.p}</p>
                <h3>{data.h3} &rarr;</h3>
            </div>
        </div>
  )
}
export default CardBottom
