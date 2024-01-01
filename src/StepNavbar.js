import React, { useEffect } from 'react'
import {useState} from 'react';
export const StepNavbar = ({ stepOne }) => {
  const [step, setStep] = useState(stepOne);
  console.log(step);
  
  useEffect(() => {
    // Retrieve the step from localStorage
    const storedStep = localStorage.getItem("step");
    console.log("Step in StepNavbar:", storedStep);
    setStep(storedStep);
    // Optional: Clear the stored step if needed
  }, []);

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



