import React, { useEffect } from "react";
import "./BuildPage.css";
import { useState } from "react";
import Ev9 from './assets/ev9-GT.png'
import Forte from './assets/forte.png'
import Seltos from './assets/seltos.png'
import Sportage from './assets/sportage.png'
import Sorento from './assets/sorento.png'
import Carnival from './assets/carnival.png'
import Niro from './assets/niro-ev.png';
import Telluride from './assets/Telluride.png'
import Stinger from './assets/stinger-side.png';
import { FaChevronRight } from "react-icons/fa";
import { StepNavbar } from "./StepNavbar";
import { Link, useNavigate } from "react-router-dom";
import  Footer from "./Footer";
export default function BuildPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [step, setStep] = useState("one");
  console.log(step);
  const navigate = useNavigate();

  const handleBuildButtonClick = (cars) => {
    console.log("Button clicked")
    console.log(cars)
    navigate("/BuildPage/BuildCar", { state: cars});
  };
  
  // In BuildCar component
  useEffect(() => {
    const storedStep = localStorage.getItem("step");
    if (storedStep) {
      setStep(storedStep);
      localStorage.removeItem("step"); 
    }
  }, []);


  useEffect(() => {
    console.log("Updated step:", step);
  }, []);

    const carsInfo = [
      {
        id: 1,
        imageSrc: {Ev9}.Ev9,
        modelYear: 2024,
        name: 'EV9',
        price: 63183,
        color: [
          {
            name: 'snow white pearl',
          }
        ]
      },
      {
        id: 2,
        imageSrc: {Forte}.Forte,
        modelYear: 2024,
        name: 'Forte',
        price: 23483,
        color: [
          {
            name: 'gravity grey',
            carImage: '',
            sample: '',
          },
          {
            name: 'hyper blue',
            carImage: '',
            sample: '',
          },
          {
            name: 'snow white pearl',
            carImage: '',
            sample: '',
          },
          {
            name: 'steel grey',
            carImage: '',
            sample: '',
          }
        ]
      },
      {
        id: 3,
        imageSrc: {Seltos}.Seltos,
        modelYear: 2024,
        name: 'Seltos',
        price: 27835,
        color: [
          {
            name: 'snow white pearl',
            carImage: "",
            sample: ""
          },
          {
            name: 'fusion black',
            imageSrc: '',
            colorSample: '',
          },
          {
            name: 'steel grey',
            imageSrc: '',
            colorSample: '',
          },
          {
            name: 'gravity grey',
            imageSrc: '',
            colorSample: '',
          },
          {
            name: 'neptune blue',
            imageSrc: '',
            colorSample: '',
          },
          {
            name: 'lunar orange',
            imageSrc: '',
            colorSample: '',
          },
          {
            name: 'valais green',
            imageSrc: '',
            colorSample: '',
          },
          {
            name: 'dark ocean blue',
            imageSrc: '',
            colorSample: '',
          },
          {
            name: 'pluton blue',
            imageSrc: '',
            colorSample: '',
          }
        ]
      },
      {
        id: 4,
        imageSrc: {Sportage}.Sportage,
        modelYear: 2024,
        name: 'Sportage',
        price: 32683,
        color: [
          {
            name: 'dawning red',
            carImage: '',
            sample: '',
          },
          {
            name: 'fusion black',
            carImage: '',
            sample: '',
          },
          {
            name: 'gravity grey',
            carImage: '',
            sample: '',
          },
          {
            name: 'snow white pearl',
            carImage: '',
            sample: '',
          },
          {
            name: 'steel grey',
            carImage: '',
            sample: '',
          },
          {
            name: 'vesta blue',
            carImage: '',
            sample: '',
          }
        ]
      },
      {
        id: 5,
        imageSrc: {Sorento}.Sorento,
        modelYear: 2023,
        name: 'Sorento',
        price: 39483,
        color: [
          {
            name: 'fusion black',
            carImage: '',
            sample: '',
          }, 
          {
            name: 'snow white pearl',
            carImage: '',
            sample: '',
          },
          {
            name: 'gravity grey',
            carImage: '',
            sample: '',
          },
        ]
      },
      {
        id: 6,
        imageSrc: {Carnival}.Carnival,
        modelYear: 2024,
        name: 'Carnival',
        price: 39183,
        color: [
          {
            name: 'fusion black',
            carImage: '',
            sample:''
          },
          {
            name: 'snow white pearl',
            carImage: '',
            sample: ''
          },
          {
            name: 'thunder grey',
            carImage: '',
            sample: ''
          },
        ]
      },
      {
        id: 7,
        imageSrc: {Niro}.Niro,
        modelYear: 2024,
        name: 'Niro Ev',
        price: 48483,
        color: [
          {
            name: 'snow white pearl',
            carImage: '',
            sample: ''
          },
          {
            name: 'fusion black',
            carImage: '',
            sample: '',
          },
          {
            name: 'steel grey',
            carImage: '',
            sample: '',
          },
          {
            name: 'runway red',
            carImage: '',
            sample: '',
          },
          {
            name: 'interstellar grey',
            carImage: '',
            sample: '',
          },
          {
            name: 'mineral blue',
            carImage: '',
            sample: '',
          },
          {
            name: 'cityscape green',
            carImage: '',
            sample: '',
          }
        ]
      },
      {
        id: 8,
        imageSrc: {Telluride}.Telluride,
        modelYear: 2024,
        name: 'Telluride',
        price: 53083,
        color: [
          {
            name: 'snow white pearl',
            carImage: '',
            sample: '',
          },
          {
            name: 'fusion black',
            carImage: '',
            sample: ''
          },
          {
            name: 'gravity grey',
            carImage: '',
            sample: '',
          },
          {
            name: 'dark moss',
            carImage: '',
            sample: '',
          },
        ]
      }
    ];

  return (
    <>
    <p style={{color: "white", background: "black", textAlign: "center"}}>This is just for a testing. Not all functionalities are developed. Please click on Build</p>
      <StepNavbar step={step}/>     
      
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
         >
          <img src={cars.imageSrc} style={{width:'200px', height: '100px', objectFit:'cover'}}/>
          <p>{cars.modelYear}</p>
          <p>{cars.name}</p>
          <p>Starting at ${cars.price}</p>
          <div className="btn-container">
          <button onClick= {() => handleBuildButtonClick(cars)} className="build-btn" >Build</button><FaChevronRight />
          </div>
        </div>
      ))}
      </div>
      </div>
        <Footer/>
      
    </>
  );
}
