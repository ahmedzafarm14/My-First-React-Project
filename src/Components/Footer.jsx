import React from 'react'
import "./Footer.css"
import IpsumLogo from '../Images/IpsumLogo.svg'
import insta from '../Images/insta.png'
import Facebook from '../Images/Facebook.png'
import pinterest from '../Images/pinterest.png'
import youtube from '../Images/youtube.png'
import twitter from '../Images/twitter.png'
import moneygram from '../Images/moneygram.png'
import paypal from '../Images/paypal.png'
import card from '../Images/card.png'
import visa from '../Images/visa.png'

export default function Footer() {
  return (
    <div  className='footer'>
        <img src={IpsumLogo} alt='img.png' className='Ipsumimg'></img>
        <div className='mainFoot'>
          <div className='items'>
            <h3>Contact Us</h3>
            <p>The Patchio</p>
            <p>Call: + 1 270 775 0015</p>
            <p>Mail: designsthepatchio.com</p>
            <p>Address: 200 Stonefield Drive</p>
            <p>Waterbusy CT 06705</p>
            <div className='subimg'>
              <img src={insta} alt='img.png'></img>
              <img src={Facebook} alt='img.png'></img>
              <img src={pinterest} alt='img.png'></img>
              <img src={youtube} alt='img.png'></img>
              <img src={twitter} alt='img.png'></img>
            </div>
          </div>
          <div className='items'>
            <h3>Custom Patches</h3>
            <p>Embroidered Patches</p>
            <p>PVC Patches</p>
            <p>Chenille Patches</p>
            <p>Leather Patches</p>
            <p>Woven Patches</p>
            <p>Pvc Keychains</p>
            <p>Custom Hats</p>
            <p>Metal Coins</p>
          </div>
          <div className='items'>
            <h3>Apparel</h3>
            <p>Custom T-shirts</p>
            <p>Hats</p>
            <p>Beanies</p>
            <p>Masks</p>
            <h3>Feature Products</h3>
            <p>PVC Key chains</p>
            <p>Uniform Patches</p>
            <p>Police Patches</p>
          </div>
          <div className='items'>
            <h3>Custmor Care</h3>
            <p>Create My Account</p>
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
            <p>Contact Us</p>
            <p>FAQ</p>
            <div className='subimg'>
            <img src={visa} alt='img.png'></img>
              <img src={paypal} alt='img.png'></img>
              <img src={moneygram} alt='img.png'></img>
              <img src={card} alt='img.png'></img>
            </div>
          </div>
        </div>
        <hr></hr>
        <p className='items' style={{textAlign:"center"}}>@ 2022 <span style={{color:"#74BDE0"}}>The Patchio.</span> All Right Reserved</p>
    </div>
  )
}
