import React from 'react'
import './Summary.css';
import { StepNavbar } from './StepNavbar';
import EV9Exterior from './assets/EV9 Exterior.jpg'
import { toast } from "react-toastify";
import { useRef } from "react";
import copy from "copy-to-clipboard";
import { CiLink } from "react-icons/ci";
import { IconContext } from "react-icons";

export const SummaryPage = () => {

  const textRef = useRef();

  const copyToClipboard = () => {
    let copyText = textRef.current.value;
    let isCopy = copy(copyText);

    if(isCopy) {
      toast.success("Copied to Clipboard");
    }
  };

  return (
    <div>
      <StepNavbar/>
      <div className='summary-container'>
      <div className='image-background'>
      <img src={EV9Exterior} className='image'/>
      </div>
      <div className='checkout-container'>
        
            <h2>2024 EV9 Light RWD</h2>
            <p>$194.08/Weekly</p>
            <div className='summary-btn'>
            <button>Book a Test Drive</button>
            <button>Request a Quote</button>
            <button>Apply for Lease</button>
            </div>
            <h2 className='checkInventoryHeading'>Check Inventory</h2>
            <h2 className='printSummaryHeading'>Print Summary</h2>
            <div style={{marginTop: '20px'}}>
            <h2>Share with Friends and Family</h2>
            <p>Copy and Paste this link to any messaging app or email to share your 2024 EV9 Light RWD</p>
            <div style={{display: 'flex'}}>
            <input value="https://www.kia.ca/en/shopping-tools/build-and-price?currentVehicleTrimCode=E9151R&currentVehiclePkgCode=+&model=EV9&year=2024&exteriorColourCode=SWP&interiorColourCode=RBQ&paymentFrequency=WEEKLY&kilometerAllowance=KMALL16&isDeliveryAndDestination=true&loanTerm=84&leaseTerm=60&isElectric=true&gasPrice=0&gasEfficiency=0&electricityPrice=0&yearCashCustomize=5&loanCashYrRange=24000&engineType=EV&method=lease&step=3" disabled type="text" ref={textRef} className='inputField'/>
            
            <button onClick={copyToClipboard} className='copy-btn'>
            <IconContext.Provider value={{ size: '2em', style: {verticalAlign: 'middle'}, width: '20px' }}>
            <CiLink/>
            </IconContext.Provider>
          </button>
          </div>
            </div>  
      </div>
      </div>
    </div>
  )
}
