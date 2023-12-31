import React, { useEffect } from "react";
import "./BuildPage.css";
import { useState } from "react";
import Ev9 from './assets/ev9-GT.png'
import Forte from './assets/forte.png'
import Seltos from './assets/seltos.png'
import Sportage from './assets/sportage.png'
import Sorento from './assets/sorento.png'
import Carnival from './assets/carnival.png'
import Niro from './assets/niro-ev.png'
import Telluride from './assets/Telluride.png'
import Stinger from './assets/stinger-side.png'
import { FaChevronRight } from "react-icons/fa";
import logo from "./logoWhite.svg";
import { StepNavbar } from "./StepNavbar";
import { Link } from "react-router-dom";
export default function BuildPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
    const carsInfo = [
      {
        id: 1,
        imageSrc: {Ev9}.Ev9,
        modelYear: 2024,
        name: 'EV9',
        price: 63183,
      },
      {
        id: 2,
        imageSrc: {Forte}.Forte,
        modelYear: 2024,
        name: 'Forte',
        price: 23483,
      },
      {
        id: 3,
        imageSrc: {Seltos}.Seltos,
        modelYear: 2024,
        name: 'Seltos',
        price: 27835,
      },
      {
        id: 4,
        imageSrc: {Sportage}.Sportage,
        modelYear: 2024,
        name: 'Sportage',
        price: 32683,
      },
      {
        id: 5,
        imageSrc: {Sorento}.Sorento,
        modelYear: 2023,
        name: 'Sorento',
        price: 39483,
      },
      {
        id: 6,
        imageSrc: {Carnival}.Carnival,
        modelYear: 2024,
        name: 'Carnival',
        price: 39183
      },
      {
        id: 7,
        imageSrc: {Niro}.Niro,
        modelYear: 2024,
        name: 'Niro Ev',
        price: 48483,
      },
      {
        id: 8,
        imageSrc: {Telluride}.Telluride,
        modelYear: 2024,
        name: 'Telluride',
        price: 53083,
      },
      {
        id: 9,
        imageSrc: {Stinger}.Stinger,
        modelYear: 2023,
        name: 'Stinger',
        price: 54683,
      },
    ];

  
  return (
    <>
      <div className="container">
        <StepNavbar/>
      </div>
     
      <div className="selection-div">
      <p className="model-para">Select a Model</p>
      <p className="find-para">Find your vehicle</p>
      </div>

      
      <div className="car-selection">
      <h1>Most Popular</h1>
      <div className='car-container'>
      {carsInfo.map((cars, index) => (
         <div
         key={index}
         className={`car-build-container ${hoveredIndex === index ? 'hovered' : ''}`}
         onMouseEnter={() => handleMouseEnter(index)}
         onMouseLeave={handleMouseLeave}
       >
          <img src={cars.imageSrc} style={{width:'200px', height: '100px', objectFit:'cover'}}/>
          <p>{cars.modelYear}</p>
          <p>{cars.name}</p>
          <p>Starting at ${cars.price}</p>
          <div className="btn-container">
            <Link to="/BuildPage/BuildCar" className="buildAndPrice"></Link>
          <button className="build-btn" >Build</button><FaChevronRight />
          </div>

        </div>
      ))}
      </div>
   
      </div>

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
    </>
  );
}
