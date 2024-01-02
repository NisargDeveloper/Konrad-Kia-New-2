import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { StepNavbar } from './StepNavbar'
import { useLocation } from 'react-router-dom'
import EV9Exterior from './assets/EV9 Exterior.jpg'
import './BuildPage.css'
export const BuildPageSpecific = () => {
  // const [dataFromChild, setDataFromChild] = useState('');
  const location = useLocation();
  const isBuildCar = location.pathname.includes("/BuildCar");

  const receiveDataFromChild = (data) => {
    console.log(data);
    // setDataFromChild(data);
  };

  return (
    <>
    <StepNavbar sendDataToParent={receiveDataFromChild}/>
    <div className='build-container'>
    <div className='img-container'>
    <img src={EV9Exterior} alt='Internet Picture' style={{}}/>
    </div>
    <div className='kia-div' style={{marginTop: '40px'}}>
      <h1 style={{paddingLeft: '25px', fontSize: '40px'}}>2024 Forte</h1>
      <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '25px', marginTop: '15px'}}><span style={{border: '1px solid black', borderRadius: '50%', fontSize: '30px', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px', fontWeight: '300'}}>1</span>Choose your Trim</h3>

      <div>
        <div className='trip-container'>
          <button>
            <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', padding: '27px'}}>
              <label for="baseTrim" style={{display: 'flex'}}>
              <input id='baseTrim' type='radio' className='input-trip'/>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
              <p>Base Trim</p>
              <p>$65.87/Weekly</p>
              </div>
              </label>
              <ul className='listOfSpecification'>
                <li>215 hp / 258 lb-ft Rear Wheel Drive</li>
                <li>7-passenger seating</li>
                <li>Battery Heating System</li>
                <li>Fast Charge (400/800V)</li>
                <li>Highway Driving Assist 2 (HDA2)</li>
                <li>19” alloy wheels with aerodynamic covers</li>
              </ul>
            </div>
          </button>
          <button>
            <div style={{display: 'flex', justifyContent: 'space-around' , padding: '50px'}}>
              <p>Upgrade your ride</p>
              <p>$4.79/Weekly</p>
            </div>
          </button>
          <button>
            <div style={{display: 'flex', justifyContent: 'space-around' , padding: '50px'}}>
              <p>Upgrade your ride</p>
              <p>$11.10/Weekly</p>
            </div>
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
