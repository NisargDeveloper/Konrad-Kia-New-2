import "./App.css";
import React, { useState, useEffect} from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import BuildPage from "./BuildPage";
import { BuildPageSpecific } from "./BuildPageSpecific";
import { SummaryPage } from "./SummaryPage";
import { BookTestDrive } from "./BookTestDrive";
import { BookingConfirmation } from "./BookingConfirmation";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      
      {isMobile ? (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: '100', height: '100vh',
        marginTop: '0px',
        textAlign: "center"
        }}>
          <h1>Mobile Version is not developed yet. Check in Desktop</h1>
        </div>
      ) : (
      <Routes>
        <Header />
        <Route path="/BuildPage" element={<BuildPage />} />
        <Route path="/" element={<Main />} />
        <Route path="/BuildPage/BuildCar" element={<BuildPageSpecific />} />
        <Route path="/Summary" element={<SummaryPage/>}/>
        <Route path="/book-test-drive" element={<BookTestDrive/>}/>
        <Route path="/BookingConfirmed" element={<BookingConfirmation/>}/>
      </Routes>
      )}
    </Router>
  );
}

export default App;
