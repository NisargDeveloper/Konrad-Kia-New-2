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
import VestaBlue from "./assets/2024 Sportage/color-sample/vesta-blue.jpg";
import DawningRed from "./assets/2024 Sportage/color-sample/dawning-red.jpg";
import FusionBlackSample from './assets/2024 Seltos/color-sample/Fusion Black.jpg';
import GravityGreySample from './assets/2024 Seltos/color-sample/gravity-grey.jpg';
import SnowWhitePearlSample from './assets/2024 Seltos/color-sample/snow-white-pearl.jpg';
import NeptuneBlueSample from './assets/2024 Seltos/color-sample/neptune-blue.jpg';
import SteelGreySample from './assets/2024 Seltos/color-sample/steel-grey.jpg';
import LunarOrangeSample from './assets/2024 Seltos/color-sample/lunar-orange.jpg';
import ValaisGreenSample from './assets/2024 Seltos/color-sample/Valais-Green.jpg';
import DarkOceanSample from './assets/2024 Seltos/color-sample/ocean-dark-blue.jpg';
import PlutonBlueSample from './assets/2024 Seltos/color-sample/Pluton-Blue.jpg';

import PlutonBlue from './assets/2024 Seltos/colors/Pluton-Blue.jpg';
import DarkOceanBlue from './assets/2024 Seltos/colors/Dark-Ocean-Blue.jpg';
import GravityGrey from './assets/2024 Seltos/colors/Gravity-Grey.jpg';
import LunarOrange from './assets/2024 Seltos/colors/Lunar-Orange.jpg';
import NeptuneBlue from './assets/2024 Seltos/colors/Neptune-Blue.jpg';
import SnowWhitePearl from './assets/2024 Seltos/colors/Snow-White-Pearl.jpg';
import SteelGrey from './assets/2024 Seltos/colors/Steel-Grey.jpg';
import ValaisGreen from './assets/2024 Seltos/colors/Valais-Green.jpg';

// Forte

import gravityGreyForte from './assets/2024 forte/colors/gravity-grey.jpg';
import hyperBlueForte from './assets/2024 forte/colors/hyper-blue.jpg';
import snowWhiteForte from './assets/2024 forte/colors/snow-white-pearl.jpg';
import steelGreyForte from './assets/2024 forte/colors/steel-grey.jpg';

// Sportage Imports
import dawningRedSportage from './assets/2024 Sportage/colors/dawning-red.jpg';
import fusionBlackSportage from './assets/2024 Sportage/colors/fusion-black.jpg';
import glacialWhitePearlSportage from './assets/2024 Sportage/colors/glacial-white-pearl.jpg';
import gravityGreySportage from './assets/2024 Sportage/colors/gravity-grey.jpg';
import steellGreySportage from './assets/2024 Sportage/colors/steel-grey.jpg';
import vestaBlueSportage from './assets/2024 Sportage/colors/vesta-blue.jpg';
import HyperBlue from './assets/2024 forte/color-sample/hyper-blue.jpg';

// Sorento

import ebonyBlackSorento from './assets/2024 Sorento/colors/Ebony-Black.jpg';
import glacialWhitePearl from './assets/2024 Sorento/colors/Glacial-White-Pearl.jpg';
import gravityGreySorento from './assets/2024 Sorento/colors/Gravity-Grey.jpg';

// Carnival

import auroraBlackCarnival from './assets/2024 Carnival/colors/Aurora-Black.jpg';
import snowWhitePealCarnival from './assets/2024 Carnival/colors/Snow-White-Pearl.jpg';
import thunderGreyCarnival from './assets/2024 Carnival/colors/Thunder-Grey.jpg';
import thunderGrey from './assets/2024 Carnival/color-sample/Thunder-Grey.jpg'

// Niro Ev

import auroraBlackPearlNiro from './assets/2024 Niro Ev/colors/aurora-black-pearl.jpg';
import cityscapeNiro from './assets/2024 Niro Ev/colors/cityscape-green.jpg';
import interstellarGreyNiro from './assets/2024 Niro Ev/colors/interstellar-grey.jpg';
import mineralBlueNiro from './assets/2024 Niro Ev/colors/mineral-blue.jpg';
import runwayRedNiro from './assets/2024 Niro Ev/colors/runway-red.jpg';
import snowWhitePearlNiro from './assets/2024 Niro Ev/colors/snow-white-pearl.jpg';
import steelGreyNiro from './assets/2024 Niro Ev/colors/steel-grey.jpg';

// Niro Sample

import cityScapeGreenNiroSample from './assets/2024 Niro Ev/color-sample/cityscape-green.jpg';
import interstellarGreyNiroSample from './assets/2024 Niro Ev/color-sample/interstellar-grey.jpg';
import mineralBlueNiroSample from './assets/2024 Niro Ev/color-sample/mineral-blue.jpg';
import runwayRedNiroSample from './assets/2024 Niro Ev/color-sample/runway-red.jpg';

// Telluride

import darkMossTelluride from './assets/2024 Telluride/colors/Dark-Moss.jpg';
import ebonyBlackTelluride from './assets/2024 Telluride/colors/Ebony-Black.jpg';
import glacialWhitePearlTelluride from './assets/2024 Telluride/colors/Glacial-White-Pearl.jpg';
import gravityGreyTelluride from './assets/2024 Telluride/colors/Gravity-Grey.jpg';
import darkMossTellurideSample from './assets/2024 Telluride/color-sample/Dark-Moss.jpg';




import './BuildPage.css'
import  Footer  from "./Footer";
export const BuildPageSpecific = () => {
  const location = useLocation();
  const isBuildCar = location.pathname.includes("/BuildCar");
  const [imageSource, setImageSource] = useState('');
  const cars = location.state;
  const [selectedOption, setSelectedOption] = useState("snow white pearl");
  const [carName, setCarName] = useState('');
  const [carsColorLength, setCarsColorLength] = useState('0');
  const navigate = useNavigate();
  console.log(cars)
  console.log("This is the car state"+ cars.color);
  console.log("The selected Name is " + selectedOption);
  useEffect(() => {
    if(cars.name === 'Forte') {
      setImageSource(ForteInterior);
      setCarName(cars.name);
      console.log(cars.color.gravityGrey);
    } else if(cars.name === 'Seltos'){
      setImageSource(SeltosInterior);
      setCarsColorLength(cars.color.length);
      setCarName(cars.name);

    }
     else if(cars.name === 'Sportage') {
      setImageSource(SportageTwo);
      setCarName(cars.name);

    } else if(cars.name === 'Sorento') {
      setImageSource(SorentoTwo);
      setCarName(cars.name);

    } else if(cars.name === 'Carnival') {
      setImageSource(CarnivalTwo);
      setCarName(cars.name);

    }else if(cars.name === 'Niro Ev') {
      setImageSource(NiroEvTwo);
      setCarName(cars.name);

    }else if(cars.name === 'Telluride') {
      setImageSource(TellurideTwo);
      setCarName(cars.name);

    }else if(cars.name === 'Stinger') {
      setImageSource(StingerTwo);
      setCarName(cars.name);

    }else if(cars.name === 'EV9') {
      setImageSource(EV9Exterior);
      setCarName(cars.name);

    }
  }, [cars])



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
    {selectedOption === "pluton blue" && carName === "Seltos" && <img src={PlutonBlue}/>}
    {selectedOption === "dark ocean blue" && carName === "Seltos" && <img src={DarkOceanBlue}/>}
    {selectedOption === "gravity grey" && carName === "Seltos"&& <img src={GravityGrey} />}
    {selectedOption === "lunar orange" && carName === "Seltos"&& <img src={LunarOrange} />}
    {selectedOption === "neptune blue" && carName === "Seltos"&& <img src={NeptuneBlue} />}
    {selectedOption === "snow white pearl" && carName === "Seltos"&& <img src={SnowWhitePearl} />}
    {selectedOption === "steel grey" && carName === "Seltos"&& <img src={SteelGrey} />}
    {selectedOption === "valais green" && carName === "Seltos"&& <img src={ValaisGreen} />}
    {selectedOption === "fusion black" && carName === "Seltos"&& <img src={FusionBlack} />}

    {/* Forte colors */}

    {selectedOption === "gravity grey" && carName === "Forte"&& <img src={gravityGreyForte} />}
    {selectedOption === "hyper blue" && carName === "Forte"&& <img src={hyperBlueForte} />}
    {selectedOption === "snow white pearl" && carName === "Forte"&& <img src={snowWhiteForte} />}
    {selectedOption === "steel grey" && carName === "Forte"&& <img src={steelGreyForte} />}

    {/* Sportage colors */}

    {selectedOption === "dawning red" && carName === "Sportage"&& <img src={dawningRedSportage} />}
    {selectedOption === "fusion black" && carName === "Sportage"&& <img src={fusionBlackSportage} />}
    {selectedOption === "snow white pearl" && carName === "Sportage"&& <img src={glacialWhitePearlSportage} />}
    {selectedOption === "gravity grey" && carName === "Sportage"&& <img src={gravityGreySportage} />}
    {selectedOption === "steel grey" && carName === "Sportage"&& <img src={steellGreySportage} />}
    {selectedOption === "vesta blue" && carName === "Sportage"&& <img src={vestaBlueSportage} />}

    {/* Sorento  */}

    {selectedOption === "fusion black" && carName === "Sorento"&& <img src={ebonyBlackSorento} />}
    {selectedOption === "snow white pearl" && carName === "Sorento"&& <img src={glacialWhitePearl} />}
    {selectedOption === "gravity grey" && carName === "Sorento"&& <img src={gravityGreySorento} />}

    {/* Carnival */}


    {selectedOption === "fusion black" && carName === "Carnival"&& <img src={auroraBlackCarnival} />}
    {selectedOption === "snow white pearl" && carName === "Carnival"&& <img src={snowWhitePealCarnival} />}
    {selectedOption === "thunder grey" && carName === "Carnival"&& <img src={thunderGreyCarnival} />}

    {/* Niro Ev */}

    {selectedOption === "fusion black" && carName === "Niro Ev"&& <img src={auroraBlackPearlNiro} />}
    {selectedOption === "cityscape green" && carName === "Niro Ev"&& <img src={cityscapeNiro} />}
    {selectedOption === "interstellar grey" && carName === "Niro Ev"&& <img src={interstellarGreyNiro} />}
    {selectedOption === "mineral blue" && carName === "Niro Ev"&& <img src={mineralBlueNiro} />}
    {selectedOption === "runway red" && carName === "Niro Ev"&& <img src={runwayRedNiro} />}
    {selectedOption === "snow white pearl" && carName === "Niro Ev"&& <img src={snowWhitePearlNiro} />}
    {selectedOption === "steel grey" && carName === "Niro Ev"&& <img src={steelGreyNiro} />}

{/* Telluride */}

    {selectedOption === "snow white pearl" && carName === "Telluride"&& <img src={glacialWhitePearlTelluride} />}
    {selectedOption === "gravity grey" && carName === "Telluride"&& <img src={gravityGreyTelluride} />}
    {selectedOption === "fusion black" && carName === "Telluride"&& <img src={ebonyBlackTelluride} />}
    {selectedOption === "dark moss" && carName === "Telluride"&& <img src={darkMossTelluride} />}

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
        {selectedOption === 'aurora' && <img src={AuroraInterior} alt='Aurora Interior' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'fusion black' && <img src={FusionBlackSample} alt='Fusion Black' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'gravity grey' && <img src={GravityGreySample} alt='gravity grey' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'snow white pearl' && <img src={SnowWhitePearlSample} alt='snow white pearl' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'neptune blue' && <img src={NeptuneBlueSample} alt='neptune blue' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'steel grey' && <img src={SteelGreySample} alt='steel grey' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'lunar orange' && <img src={LunarOrangeSample} alt='lunar orange' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'valais green' && <img src={ValaisGreenSample} alt='valais green' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'dark ocean blue' && <img src={DarkOceanSample} alt='dark ocean blue' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'pluton blue' && <img src={PlutonBlueSample} alt='pluton blue' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'dawning red' && <img src={DawningRed} alt='dawning red' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'vesta blue' && <img src={VestaBlue} alt='Vesta Blue' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'hyper blue' && <img src={HyperBlue} alt='hyper blue' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'thunder grey' && <img src={thunderGrey} alt='thunder grey' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'cityscape green' && <img src={cityScapeGreenNiroSample} alt='cityscape green' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'interstellar grey' && <img src={interstellarGreyNiroSample} alt='interstellar grey' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'mineral blue' && <img src={mineralBlueNiroSample} alt='mineral blue' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
    {selectedOption === "fusion black" && carName === "Niro Ev"&& <img src={auroraBlackPearlNiro} />}
        {selectedOption === 'runway red' && <img src={runwayRedNiroSample} alt='runway red' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        {selectedOption === 'dark moss' && <img src={darkMossTellurideSample} alt='dark moss' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginTop: '15px'}}/>}
        
        {selectedOption === 'panthera' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Panthera Metal</p>}
        {selectedOption === 'steel grey' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Steel Grey</p>}
        {selectedOption === 'gravity grey' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Gravity Grey</p>}
        {selectedOption === "fusion black" && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Fusion Black</p>}
        {selectedOption === "snow white pearl" && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Snow White Pearl</p>}
        {selectedOption === "neptune blue" && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Neptune Blue</p>}
        {selectedOption === "lunar orange" && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Lunar Orange</p>}
        {selectedOption === "valais green" && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Valais Green</p>}
        {selectedOption === "dark ocean blue" && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Dark Ocean Blue</p>}
        {selectedOption === "pluton blue" && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Pluton Blue</p>}
        {selectedOption === 'vesta blue' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Vesta Blue</p>}
        {selectedOption === 'dawning red' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Dawning Red</p>}
        {selectedOption === 'hyper blue' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Hyper Blue</p>}
        {selectedOption === 'thunder grey' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Thunder Grey</p>}
        {selectedOption === 'cityscape green' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Cityscape Green</p>}
        {selectedOption === 'interstellar grey' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Interstellar Grey</p>}
        {selectedOption === 'mineral blue' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Mineral Blue</p>}
        {selectedOption === 'runway red' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Runway Red</p>}
        {selectedOption === 'dark moss' && <p style={{fontSize: '30px', marginTop: '10px', marginLeft: '20px'}}>Dark Moss</p>}
        <div className='colorSelection'>
        {cars.color.map((color, index) => (
            <button className = {color.name} key={index} onClick={ () => setSelectedOption(color.name)}></button>
          ))}
        
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
