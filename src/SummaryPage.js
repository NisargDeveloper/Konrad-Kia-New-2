import React, { useState } from 'react';
import './Summary.css';
import { StepNavbar } from './StepNavbar';
import EV9Exterior from './assets/EV9 Exterior.jpg';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import copy from 'copy-to-clipboard';
import { CiLink } from 'react-icons/ci';
import { IconContext } from 'react-icons';

export const SummaryPage = () => {
  const [activeCash, setActiveCash] = useState(false);
  const [activeLease, setActiveLease] = useState(false);
  const [activeLoan, setActiveLoan] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const textRef = useRef();

  const handleClick = (paymentType) => {
    setActiveCash(paymentType === 'cash');
    setActiveLease(paymentType === 'lease');
    setActiveLoan(paymentType === 'loan');
  };

  const copyToClipboard = () => {
    let copyText = textRef.current.value;
    let isCopy = copy(copyText);

    if (isCopy) {
      toast.success('Copied to Clipboard');
    }
  };

  return (
    <div>
      <StepNavbar />
      <div className="summary-container">
        <div>
          <div className="image-background">
            <img src={EV9Exterior} className="image" />
          </div>
          <h1 style={{ marginTop: '20px', marginLeft: '50px' }}>Payment Options</h1>
          <div>
            <div className="payment-btn" style={{ display: 'flex', marginLeft: '20px' }}>
              <button onClick={() => handleClick('cash')} className={`payment-cash ${activeCash ? 'active' : ''}`}>
                Cash
              </button>
              <button onClick={() => handleClick('lease')} className={`payment-lease ${activeLease ? 'active' : ''}`}>
                Lease
              </button>
              <button onClick={() => handleClick('loan')} className={`payment-loan ${activeLoan ? 'active' : ''}`}>
                Loan
              </button>
            </div>

            <div className='summary-input'>
            <label htmlFor="downpayment">
              Downpayment<br />
              <input type="number" id="downpayment" name="downpayment" />
            </label>
            <br />
            <label htmlFor="mileage">
              Estimated yearly mileage<br />
              <select id='dropdown' className= 'summary-input-mileage' value={selectedOption} onChange={handleSelectChange}>
                <option value=''>Select...</option>
                <option value='16000'>16,000 km</option>
                <option value='20000'>20,000 km</option>
                <option value='24000'>24,000 km</option>
              </select>
            </label>
            <br />
            <label htmlFor="term">
              Term<br />
              <input type="text" id="term" name="term" />
            </label>
            <br />
            <label htmlFor="frequency">
              Payment Frequency<br />
              <input type="text" id="frequency" name="frequency" />
            </label>
            <br />
            <label htmlFor="interestRate">
              Kia Financing Interest Rate (APR)<br />
              <input type="text" id="interestRate" name="interestRate" />
            </label>
            <br />

            </div>
          </div>
        </div>
        <div className="checkout-container">
          <h2>2024 EV9 Light RWD</h2>
          <p>$194.08/Weekly</p>
          <div className="summary-btn">
            <button>Book a Test Drive</button>
            <button>Request a Quote</button>
            <button>Apply for Lease</button>
          </div>

          <h2 className="checkInventoryHeading">Check Inventory</h2>
          <h2 className="printSummaryHeading">Print Summary</h2>
          <div style={{ marginTop: '20px' }}>
            <h2>Share with Friends and Family</h2>
            <p>
              Copy and Paste this link to any messaging app or email to share your 2024 EV9 Light RWD
            </p>
            <div style={{ display: 'flex' }}>
              <input
                value="https://www.kia.ca/en/shopping-tools/build-and-price?currentVehicleTrimCode=E9151R&currentVehiclePkgCode=+&model=EV9&year=2024&exteriorColourCode=SWP&interiorColourCode=RBQ&paymentFrequency=WEEKLY&kilometerAllowance=KMALL16&isDeliveryAndDestination=true&loanTerm=84&leaseTerm=60&isElectric=true&gasPrice=0&gasEfficiency=0&electricityPrice=0&yearCashCustomize=5&loanCashYrRange=24000&engineType=EV&method=lease&step=3"
                disabled
                type="text"
                ref={textRef}
                className="inputField"
              />

              <button onClick={copyToClipboard} className="copy-btn">
                <IconContext.Provider
                  value={{ size: '2em', style: { verticalAlign: 'middle' }, width: '20px' }}
                >
                  <CiLink />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
