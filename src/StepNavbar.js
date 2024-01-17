import React, { useEffect } from 'react'
import {useState} from 'react';
import { useLocation } from 'react-router-dom';
export const StepNavbar = ({  }) => {
  const [step, setStep] = useState('');
  console.log(step);
  
  const location = useLocation();
  const stepOne = location.pathname.includes("/BuildPage");
  const stepTwo = location.pathname.includes("/BuildPage/BuildCar")
  const stepThree = location.pathname.includes("/Summary")

  useEffect(() => {
    if(stepOne && !stepTwo) {
      console.log("Inside step one");
      setStep("one");
    } else if(stepTwo) {
      console.log("Inside step two");
      setStep("two");
    } else {
      console.log("Inside step three");

      setStep("three");
    }
    }
  , []);

  
return (
    <div className="sub-container">
        <ul className="stepsClass">
          <li className={`model ${step === "one" ? "active": ""}`}>
            <a>
              <p className="step-para">Step 1</p>
              <h3>Select a Model</h3>
              <span className="triangle"></span>
            </a>
          </li>
          <li className={`personalization ${step === "two" ? "active": ""}`}>
            <a>
              <p className="step-para">Step 2</p>
              <h3>Personalization</h3>
              <span className="triangle-one"></span>
            </a>
          </li>
          <li className={`summary ${step === "three" ? "active" : ""}`}>
            <a>
              <p className="step-para">Step 3</p>
              <h3>Summary</h3>
              <span  className="triangle-two"></span>
            </a>
          </li>
        </ul>
        </div>
  )
}



