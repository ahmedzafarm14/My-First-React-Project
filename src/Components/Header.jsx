import React from 'react'
import IpsumLogo from "../Images/IpsumLogo.svg"
import FaceBook from "../Images/Facebook.png"
import Insta from "../Images/insta.png"
import Button from './Button'
const Header = () => {
  return (
      <div className='Header'>
        <div className='logo'>
        <img src={IpsumLogo} alt='Ipsum Logo'></img>
        </div>
        <nav className='Navigation'>
            <ul className='Lists'>
              <li>Home</li>
              <li>Products</li>
              <li>Our Company</li>
              <li>Blog</li>
              <li>Contat Us</li>
              <li>FAQ</li>
            </ul>
        </nav>
        <div className='Social'>
            <img src={FaceBook} alt='FaceBook.png'></img>
            <img src={Insta} alt='Insta.png'></img>
        </div>
          <div className='headerButton'>
            <Button ID={'Get Quote'}/>
            <Button ID={'LogIn'}/>
          </div>
      </div>
      
      )
}

export default Header