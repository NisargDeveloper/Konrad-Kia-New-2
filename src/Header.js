import React from "react";
import "./App.css";
import logoWhite from "./logoWhite.svg";
import BuildPage from "./BuildPage";
import Main from "./Main";
import logoBlack from "./logoBlack.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isBuildPage = location.pathname.includes("/BuildPage") || location.pathname.includes('/Summary') || location.pathname.includes('/book-test-drive') || location.pathname.includes('/BookingConfirmed');

  const leftSideHeader = isBuildPage ? "leftSideHeaderBlack" : "leftSideHeader";
  const rightSideHeader = isBuildPage
    ? "rightSideHeaderBlack"
    : "rightSideHeader";
  const logo = isBuildPage ? logoBlack : logoWhite;
  return (
    <header>
      <nav className="header">
     
          <ul className={leftSideHeader}>
            <li>
              <a href="#">Vehicles</a>
            </li>
            <li>
              <a href="#">Shopping Tools</a>
            </li>
            <li>
              <a href="#">Owners</a>
            </li>
          </ul>
          <a href="/" className="logo">
            <img src={logo} alt="Logo White" />
          </a>
          <ul className={rightSideHeader}>
            <li>
              <a href="#" className="findDealer">Find a dealer</a>
            </li>
            <li>
              <Link to="/BuildPage" className="buildAndPrice">
                Build & Price
              </Link>
            </li>
          </ul>
       
      </nav>
    </header>
  );
}
