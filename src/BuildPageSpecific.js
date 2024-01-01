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
    </div>
    </div>
    </>
  )
}
