import React from 'react'
import logo from "./logoWhite.svg";
import "./BuildPage.css";
export const Footer = () => {
  return (
    <footer className="footer-container">
            <img src={logo} alt="Logo White" style={{cursor: 'pointer'}}/>
            <nav className="navigation-container">
              <ul className="navigation-one">
                <li><a>Build and Price</a></li>
                <li><a>Book a Test Drive</a></li>
                <li><a>Find a Dealer</a></li>
                <li><a>Special Offers</a></li>
              </ul>
            <div className="navigation-two-container">
              <ul className="navigation-two">
              <p>Popular Vehicles</p>
                <li><a>Forte</a></li>
                <li><a>Stinger</a></li>
                <li><a>Seltos</a></li>
                <li><a>Niro Ev</a></li>
                <li><a>Sportage</a></li>
                <li><a>Sorento</a></li>
                <li><a>Carnival</a></li>
              </ul>

              <ul className="navigation-two">
              <p>Shopping tools</p>
                <li><a>Build and Price</a></li>
                <li><a>Book a Test Drive</a></li>
                <li><a>Request a Quote</a></li>
                <li><a>Certified Pre-Owned</a></li>
                <li><a>Kia Finance</a></li>
                <li><a>Fleet</a></li>
                <li><a>Kia Connect</a></li>
              </ul> 
               <ul className="navigation-two">
              <p>Owners</p>
                <li><a>Owner's Portal</a></li>
                <li><a>Owner's Overview</a></li>
                <li><a>Owner Resource</a></li>
                <li><a>Accessories</a></li>
                <li><a>Warranty & Recalls</a></li>
                <li><a>Roadside Assistance</a></li>
                <li><a>Maintenance Service</a></li>
                <li><a>Connectivity Support</a></li>
              </ul>
              <ul className="navigation-two">
              <p>About Kia</p>
                <li><a>Our Company</a></li>
                <li><a>Future of Kia</a></li>
                <li><a>News</a></li>
                <li><a>Careers</a></li>
                <li><a>Corporate Social Responsibility</a></li>
                <li><a>Events</a></li>
                <li><a>AODA</a></li>
                <li><a>Contact Kia</a></li>
                <li><a>Sustainability</a></li>
              </ul>
              </div>
            </nav>

            <div className="rights-container">
              <p>©Kia. All rights reserved</p>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
              <p>First Responder Guide</p>
            </div>
      </footer>
  )
}
