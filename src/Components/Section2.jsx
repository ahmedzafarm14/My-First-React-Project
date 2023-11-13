import React from 'react'
import './Section2.css'
import black from '../Images/black.png'
import Button from './Button'

const Section2 = () => {
  return (
    <div className='content2'>
      <div className='Box'>
      </div>
      <div className='img2'>
        <img src={black} alt="img.png"></img>
      </div>
      <div className='txt2'>
        <h2>About Our Company</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <Button ID={"View More"}/>
      </div>
    </div>
  )
}

export default Section2