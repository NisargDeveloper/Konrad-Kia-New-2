import React from "react";
import "./BuildPage.css";
import Header from "./Header";
export default function BuildPage() {
  return (
    <>
      <div className="container">
        <ul className="stepsClass">
          <li className="model">
            <a>
              <p>Step 1</p>
              <p>Select a Model</p>
            </a>
          </li>
          <li className="personalization">
            <a>
              <p>Step 2</p>
              <p>Personalization</p>
            </a>
          </li>
          <li className="summary">
            <a>
              <p>Step 3</p>
              <p>Summary</p>
            </a>
          </li>
        </ul>
      </div>
      <p className="heading">Make a model</p>
      <p className="heading">Make a model</p>
    </>
  );
}
