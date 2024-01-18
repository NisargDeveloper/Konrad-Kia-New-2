import React, { useEffect } from 'react'
import { useState } from 'react'
import { StepNavbar } from './StepNavbar'
import { useLocation, useNavigate } from 'react-router-dom'
import EV9Exterior from './assets/EV9 Exterior.jpg'
import PantheraColor from './assets/Panthera-metal.jpg'
import AuroraBlackColor from './assets/Aurora-black-pearl.jpg'
import PantheraInterior from './assets/Panthera-metal Interior.jpg'
import SnowWhiteInterior from './assets/Snow-white-pearl Interior.jpg'
import AuroraInterior from './assets/Aurora-black-pearl Interior.jpg'
import SeatInterior from './assets/Seat Interior.jpg';
import ForteInterior from './assets/aurora-black.jpg';
import SeltosInterior from './assets/Seltos-two.jpg';
import FusionBlack from './assets/2024 Seltos/colors/Fusion-Black.jpg';
import SportageTwo from './assets/dawning-red.jpg';
import SorentoTwo from './assets/Ebony-Black.jpg';
import CarnivalTwo from './assets/Carnival.jpg';
import NiroEvTwo from './assets/Niro Ev two.jpg';
import TellurideTwo from './assets/Telluride.jpg';
import StingerTwo from './assets/Stinger.jpg';
import './BuildPage.css'
import  Footer  from "./Footer";
export const BuildPageSpecific = () => {
  const location = useLocation();
  const isBuildCar = location.pathname.includes("/BuildCar");
  const [imageSource, setImageSource] = useState('');
  const cars = location.state;
  const [selectedOption, setSelectedOption] = useState("snowWhite");
  const navigate = useNavigate();
  console.log(cars.name)

  

  useEffect(() => {
    if(cars.name === 'Forte') {
      setImageSource(ForteInterior)
    } else if(cars.name === 'Seltos' && selectedOption === "snowWhite"){
      setImageSource(SeltosInterior);
    }
    else if(cars.name === 'Seltos' && selectedOption === "fusionBlack"){
      setImageSource(FusionBlack);
    } 
    else if(cars.name === 'Seltos' && selectedOption === "snowWhite"){
      setImageSource(SeltosInterior);
    }
     else if(cars.name === 'Sportage') {
      setImageSource(SportageTwo);
    } else if(cars.name === 'Sorento') {
      setImageSource(SorentoTwo);
    } else if(cars.name === 'Carnival') {
      setImageSource(CarnivalTwo);
    }else if(cars.name === 'Niro Ev') {
      setImageSource(NiroEvTwo);
    }else if(cars.name === 'Telluride') {
      setImageSource(TellurideTwo);
    }else if(cars.name === 'Stinger') {
      setImageSource(StingerTwo);
    }else if(cars.name === 'EV9') {
      setImageSource(EV9Exterior);
    }
  }, [cars])


  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }

  const handleSummaryClick = () => {
    localStorage.setItem("step", "three");
    navigate("/Summary");
    console.log("This is a handle Summary Clicked");
  }

  const receiveDataFromChild = (data) => {
    console.log(data);
  };

  return (
    <>
    <StepNavbar sendDataToParent={receiveDataFromChild}/>
    <div className='build-container'>
    <div className='img-container'>
    {selectedOption === "panthera" && <img src={PantheraColor}/>}
    {selectedOption === "aurora" && <img src={AuroraBlackColor}/>}
    {selectedOption === "snowWhite" && <img src={imageSource} />}
    </div>
    <div className='kia-div' style={{marginTop: '40px'}}>
      <h1 style={{paddingLeft: '25px', fontSize: '40px'}}>{cars.name}</h1>
      <h1 style={{display: 'flex', alignItems: 'center',  paddingLeft: '25px', marginTop: '15px'}}><span style={{border: '1px solid black', borderRadius: '50%', fontSize: '30px', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px', fontWeight: '300'}}>1</span>Choose your Trim</h1>
      <div>
        <div className='trip-container'>
          <form style={{borderBottom: '1px solid black', paddingBottom: '20px'}}>
          <button type='button' style={{cursor: 'pointer'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', padding: '27px'}}>
              <label for="baseTrim" style={{display: 'flex'}}>
              <input id='baseTrim' type='radio' className='input-trip' name='trimType'/>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '320px', alignItems: 'center'}}>
              <p>Base Trim</p>
              <p>$65.87/Weekly</p>
              </div>
              </label>
              <h3 style={{alignSelf: 'left', width: 'max-content', marginLeft: '45px', marginTop: '5px'}}>Light RWD</h3>
              <ul className='listOfSpecification' style={{    width: 'max-content',textAlign: 'left',marginLeft: '60px', paddingTop: '15px'}}>
                <li>215 hp / 258 lb-ft Rear Wheel Drive</li>
                <li>7-passenger seating</li>
                <li>Battery Heating System</li>
                <li>Fast Charge (400/800V)</li>
                <li>Highway Driving Assist 2 (HDA2)</li>
                <li>19” alloy wheels with aerodynamic covers</li>
              </ul>
            </div>
          </button>
          <button type='button' style={{cursor: 'pointer'}}>
            <div style={{display: 'flex', justifyContent: 'space-around' , padding: '27px', flexDirection: 'column'}}>
            <label for="baseTrim2" style={{display: 'flex'}}>
            <input id='baseTrim2' type='radio' className='input-trip' name='trimType'/>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '320px', alignItems: 'center'}}>
            <p>Upgrade your ride</p>
              <p>$4.79/Weekly</p>
            </div>
              </label>
            </div>
          </button>
          <button type='button' style={{cursor: 'pointer'}}>
            <div style={{display: 'flex', justifyContent: 'space-around' , padding: '27px', flexDirection: 'column'}}>
            <label for="baseTrim" style={{display: 'flex'}}>
            <input id='baseTrim' type='radio' className='input-trip' name='trimType'/>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '320px', alignItems: 'center'}}>
              <p>Upgrade your ride</p>
              <p>$11.10/Weekly</p>
              </div>
            </label>
            </div>
          </button>
          </form>
        </div>
      </div>
      <h1 style={{display: 'flex', alignItems: 'center', paddingLeft: '25px', marginTop: '15px'}}><span style={{border: '1px solid black', borderRadius: '50%', fontSize: '30px', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px', fontWeight: '300'}}>2</span>Choose your exterior</h1>
      <div>
        {selectedOption === 'panthera' && <img src={PantheraInterior} alt='Panthera Interior' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'snowWhite' && <img src={SnowWhiteInterior} alt='SnowWhite Interior' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'aurora' && <img src={AuroraInterior} alt='Aurora Interior' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'panthera' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Panthera Metal</p>}
        {selectedOption === 'snowWhite' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Snow White Pearl</p>}
        {selectedOption === 'aurora' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Aurora Black Pearl</p>}
        <div className='colorSelection'>
          <button className='white' onClick={() => setSelectedOption("snowWhite")}></button>
          <button className='metal' onClick={() => setSelectedOption("panthera")}></button>
          <button className='black' onClick={() => setSelectedOption("aurora")}></button>
        </div>
      </div>
      <h1 style={{display: 'flex', alignItems: 'center', paddingLeft: '25px', marginTop: '15px'}}><span style={{border: '1px solid black', borderRadius: '50%', fontSize: '30px', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px', fontWeight: '300'}}>3</span>Choose your Interior</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', flexDirection: 'column', borderBottom: '1px solid black', paddingBottom: '30px'}}>
      <img src={SeatInterior} style={{margin: '0px auto'}}/>
      <p style={{alignSelf: 'flex-start', marginLeft: '30px', fontSize: '30px', marginTop: '10px', marginBottom: '10px'}}>Grey/Black Synth. Leather</p>
      <button style={{width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'black', alignSelf: 'flex-start', marginLeft: '30px'}}></button>
      </div>

      <div className='summary-btn-container'>
      <p>Total $193.38/Weekly Lease</p>
      <button onClick={handleSummaryClick}><span className='summary-btn'>Next/Summary</span></button>
      <p>This vehicle could potentially save you ﹩43.46 weekly in fuel. Learn More</p>
    </div>
    </div>
   
    </div>
    <Footer/>
    </>
  )
}
