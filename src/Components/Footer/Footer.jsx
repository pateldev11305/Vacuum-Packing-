import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <p>Our vacuum packing services offer efficient space-saving solutions for clothes, blankets, and more. Protect your items from moisture and damage while maintaining freshness, ensuring convenience for travel, storage, and organization.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.searchf_icon} alt="" />
                    <img src={assets.phone_icon} alt="" />

                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/images">Gallery</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li> <Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>
                    GET IN TOUCH
                </h2>
                <ul>
                    <li>+919924869300</li>
                </ul>
            </div>
        </div>
      <hr/>
      <p className='footer-copyright'>
        Copyright 2025 vishwa vacuum packing - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
