import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import BuildPage from "./BuildPage";
import { BuildPageSpecific } from "./BuildPageSpecific";
import { SummaryPage } from "./SummaryPage";
import { BookTestDrive } from "./BookTestDrive";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/BuildPage" element={<BuildPage />} />
        <Route path="/" element={<Main />} />
        <Route path="/BuildPage/BuildCar" element={<BuildPageSpecific />} />
        <Route path="/Summary" element={<SummaryPage/>}/>
        <Route path="/book-test-drive" element={<BookTestDrive/>}/>
      </Routes>
    </Router>
  );
}

export default App;
